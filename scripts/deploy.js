const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Virat", "Dhoni", "Warner"],       // Names
      ["https://imgur.com/gallery/VcbNn", // Images
      "https://imgur.com/gallery/JeoDwjN", 
      "https://imgur.com/gallery/rorexBZ"],
      [300, 200, 250],                    // HP values
      [100, 50, 51],     
      
      "Mitchell Starc", // Boss name
    "https://imgur.com/gallery/qEid6e7", // Boss image
    10000, // Boss hp
    50// Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  