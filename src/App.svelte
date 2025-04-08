<script>
  import shopIcon from './assets/shop.svg';
  import customeIcon from './assets/customer.png';
  import { uniform, exponential, beta } from '@stdlib/random-base';

  let revenue = 0;
  let lastCustomerPurchase = 'N/A';
  let nextCustomerArrival;
  
  let isSimulating = false;
  let isInShop = false;

  // Simulation parameters
  let customersPerHour = 10;
  let purchaseProbability = 0.7;
  let minPurchasePrice = 5;
  let maxPurchasePrice = 20;
  let simulationSpeed = 5; // Simulated minutes per real second

  let simulationClock = 0;
  let clockTimer;
  
  function startSimulation() {
    if (isSimulating) return;
    isSimulating = true;

    nextCustomerArrival = getNextArrivalTime();
    isInShop = true;

    // Start the simulation clock
    clockTimer = setInterval(() => simulationClock++, 1000/simulationSpeed);    
  }

  function purchase() {
    console.log('I was here');
    if (uniform(0, 1) < purchaseProbability) {
      let purchasePrice = (beta(20, 20) * (maxPurchasePrice - minPurchasePrice) + minPurchasePrice).toFixed(2);
      revenue += +purchasePrice;
      lastCustomerPurchase = '+$'+purchasePrice;
    } else {
      lastCustomerPurchase = 'No purchase'
    }

    // Queue next customer
    nextCustomerArrival = getNextArrivalTime();
    isInShop = false;
    setTimeout(() => isInShop = true, 0);

  }

  function getNextArrivalTime() {
    return +exponential(customersPerHour/60).toFixed(0) + 1;
  }

  function stopSimulation() {
    isSimulating = false;
    isInShop = false;
    clearInterval(clockTimer);
  }


</script>

<main>
  <div id='stonks'>
    <h4>Time passed: {simulationClock} minutes</h4>
    <h4>Next Customer: in {nextCustomerArrival} minutes</h4>
    <h4>Revenue: ${revenue.toFixed(2)}</h4>
    <h4>Last Customer: {lastCustomerPurchase}</h4>
  </div>

  <div id='shop-container'>
    <div id='icons-container'>
      <img
        id='customer-icon'
        class={isInShop ? 'in-shop' : ''}
        src={customeIcon}
        alt='Customer icon'
        style='--transition-duration: {nextCustomerArrival/simulationSpeed}s;'
        on:transitionend={purchase}
      />
      <img
        id='shop-icon'
        src={shopIcon}
        alt='Shop icon'
      />
    </div>
  </div>

  <br />
  <button on:click={startSimulation} disabled={isSimulating}>Start Simulation</button>
  <button on:click={stopSimulation} disabled={!isSimulating}>Stop Simulation</button>
  <br />
  <br />

  <section id="simulation-parameters">
    <h2>Simulation Parameters</h2>
    <div>
      <label for="customersPerHour">Customers per Hour:</label>
      <input type="number" id="customersPerHour" bind:value={customersPerHour} min="1" disabled={isSimulating} />
    </div>
    <div>
      <label for="purchaseProbability">Purchase Probability (0-1):</label>
      <input type="number" id="purchaseProbability" bind:value={purchaseProbability} min="0" max="1" step="0.01" disabled={isSimulating} />
    </div>
    <div>
      <label for="minPurchasePrice">Minimum Purchase Price:</label>
      <input type="number" id="minPurchasePrice" bind:value={minPurchasePrice} min="0" disabled={isSimulating} />
    </div>
    <div>
      <label for="maxPurchasePrice">Maximum Purchase Price:</label>
      <input type="number" id="maxPurchasePrice" bind:value={maxPurchasePrice} min="{minPurchasePrice}" disabled={isSimulating} />
    </div>
    <div>
      <label for="simulationSpeed">Simulation Speed: (minutes per real second)</label>
      <input type="number" id="simulationSpeed" bind:value={simulationSpeed} min="0.1" step="0.1" disabled={isSimulating} />
    </div>
  </section>


</main>

<style>
  * {
    /* outline: 1px solid red; */
  }
  main {
    max-width: 80vw;
  }
  #stonks {
    text-align: start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    width: 560px;
    margin: auto;
  }
  #stonks > * {
    flex: 1 1 0;
  }
  #shop-container {
    padding: 20px;
    border: 1px solid #ccc;
  }
  #icons-container {
    width: 100%;
    height: 160px;
    position: relative;
  }
  #shop-icon {
    width: 160px;
    position: absolute;
    left: 0;
  }
  #customer-icon {
    width: 80px;
    position: absolute;
    bottom: 20px;
    right: 0;
    /* z-index: 1; */
  }
  #customer-icon.in-shop {
    right: calc(100% - 140px);
    transition: right var(--transition-duration) ease-in-out;
  }
  
  #simulation-parameters {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 20px;
    width: max-content;
    margin: auto;
  }

  #simulation-parameters h2 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  #simulation-parameters div {
    margin-bottom: 8px;
    display: flex;
    align-items: start;
  }

  #simulation-parameters label {
    width: 200px;
    margin-right: 10px;
    text-align: left;
  }

  #simulation-parameters input[type="number"] {
    width: 80px;
    padding: 5px;
  }
</style>