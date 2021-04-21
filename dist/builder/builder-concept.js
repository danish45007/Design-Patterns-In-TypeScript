"use strict";
// Builder Concept Sample Code
var BuilderConcept;
(function (BuilderConcept) {
    class Product {
        constructor() {
            // The Product
            this.parts = [];
        }
    }
    class Builder {
        constructor() {
            this.product = new Product();
        }
        buildPartA() {
            this.product.parts.push('a');
            return this;
        }
        buildPartB() {
            this.product.parts.push('b');
            return this;
        }
        buildPartC() {
            this.product.parts.push('c');
            return this;
        }
        getResult() {
            return this.product;
        }
    }
    class Director {
        // The Director, building a complex representation
        static construct() {
            "Constructs and returns the final product";
            return new Builder()
                .buildPartA()
                .buildPartB()
                .buildPartC()
                .getResult();
        }
    }
    // The Client
    const PRODUCT1 = Director.construct();
    console.log(PRODUCT1.parts);
})(BuilderConcept || (BuilderConcept = {}));