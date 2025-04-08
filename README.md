# Simple Shop Simulation

This is a simple shop simulation demonstrating the usage of non-uniform random variates (using the packages from `@stdlib/random/base`) to model various real world characteristics of the interactions. It simulates customers arriving at a shop, potentially making a purchase, and then leaving. The simulation speed and customer behavior can be adjusted through the user interface.

## Inspiration

This simulation draws inspiration from the property ownership mechanics in games like Grand Theft Auto (GTA). In those games, some purchased properties (business) often generate a fixed amount of revenue over a certain period (daily). This simulation takes that idea one step ahead to explore how a probabilistic model of revenue generation would behave.

## Features

* **Simulates Customer Arrivals:** Customers arrive at the shop based on a configurable rate (customers per hour) using an exponential distribution for arrival times.
* **Purchase Probability:** Each arriving customer has a chance to make a purchase, determined by a configurable probability.
* **Random Purchase Price:** If a customer makes a purchase, the price is randomly generated within a configurable range, following a Beta distribution to simulate a more natural distribution of prices.
* **Adjustable Simulation Speed:** Control how many simulated minutes pass per real second, allowing you to speed up or slow down the simulation.
* **Real-time Updates:** The UI displays the elapsed simulation time, the time until the next customer arrives, the total revenue, and the outcome of the last customer interaction.
* **Interactive Parameters:** Users can adjust the number of customers per hour, the purchase probability, the minimum and maximum purchase prices, and the simulation speed.
* **Visual Representation:** A simple visual representation shows a customer icon moving into and out of the shop area.

## How to Run

1.  **A live preview of the project is available at https://impawstarlight.github.io/stdlib-showcase**



2.  **Alternatively, to run locally:**
    ```bash
    git clone https://github.com/impawstarlight/stdlib-showcase.git
    cd stdlib-showcase
    npm install
    npm run dev
    ```

## How the simulation works:

The simulation is about a shop (or maybe a stall), selling only a single item (yeah, very small stall). Customer arrivals, purchase decisions and purchase prices are generated randomly with appropriate distributions.

* The `Time passed` counter will show the passed minutes in the simulation based on the simulation speed.
* The `Next Customer` indicator shows the time (in simulated minutes) until the next customer arrives. This is calculated by drawing a random variate from an exponential distribution (`@stdlib/random/base/exponential`) following a rate parameter defined by the `Customer per Hour` parameter. To be precise, `lambda = Customer per Hour / 60` since we are using minutes as the unit of time so customer per minute is actually our lambda here.
* The `Revenue` will update whenever a customer makes a purchase, subject to an adjustable `Purchase Probability`. For this, an uniform random variate is drawn using `@stdlib/random/base/uniform`. The purchase price is derived from another random variate using a beta distribution (`@stdlib/random/base/beta`) to emulate a bounded normal distribution to model naturally varying prices within a certain range.
* The `Last Customer` field will display whether the last arriving customer made a purchase and, if so, the amount.

## Libraries Used

* **Vite + Svelte:** JavaScript framework for the frontend design and building the website preview.
* `@stdlib/random-base`: A library providing various random number generators and distribution functions, used here for uniform, exponential, and beta distributions.


## Notes

* The customer icon's transition duration is dynamically set based on the `nextCustomerArrival` and `simulationSpeed` to provide a visual cue related to the arrival time.
* The purchase price is generated using a Beta distribution (with `alpha=20` and `beta=20`) scaled to the defined price range. This tends to produce values clustered around the middle of the range, providing a more realistic price distribution than a purely uniform random selection.
* The next customer arrival time is determined using an exponential distribution, which is commonly used to model the time between events in a Poisson process (like customer arrivals).

Enjoy experimenting with the simulation parameters to see how they affect the shop's performance!