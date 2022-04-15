const dilithium = require("@transmute/dilithium-key-pair");

(async () => {
  console.log("testing...");
  const k = await dilithium.DilithiumKeyPair.generate();
  console.log(k);
})();
