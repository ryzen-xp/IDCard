const ABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "mgr",
				"type": "address"
			}
		],
		"name": "addManager",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "deactivateCard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "mgr",
				"type": "address"
			}
		],
		"name": "deactivateManager",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_class",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_roll",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_mobile",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_addr",
				"type": "string"
			}
		],
		"name": "newCard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ind",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cards",
		"outputs": [
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "class",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "roll",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "mobile",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addr",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "addedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ind",
				"type": "uint256"
			}
		],
		"name": "getCardDetailsByInd",
		"outputs": [
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "class",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "roll",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "mobile",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addr",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "addedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ind",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "indToCardIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "manager",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


// after   we   check  that   th

async  function  connect(){
  if(window.ethereum){
     try{
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum); 
      const accounts = await web3.eth.requestAccounts()
      document.getElementById("account").innerHTML = accounts[0];
     }
     catch{
			document.getElementById("account").innerHTML = "Plz Install MetaMask !!";
     }
  }
}
async function Contract(){
	const key ="";
	return  new web3.eth.Contract(ABI , key);
}

// Manger  Funtion 
 async function newCard(){
	const name = document.getElementById('cardName').value ;
	const clas = document.getElementById('cardClass').value ;
	const roll = document.getElementById('cardRoll').value ;
	const mobile = document.getElementById('cardMobile').value ;
	const addr = document.getElementById('cardAddre').value ;
	try {
		const  contract = await Contract();
		const  account = await web3.eth.getAccounts();
		await contract.methods.addCard(name,clas,roll,mobile,addr).send({from:account[0]});
		await contract.methods.Card();
		alart("New Card Live Now!!")

	}
	catch{
		alart("Error  occured Sorry ");
	}
 }



// ========================================================================================



function domReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
			setTimeout(fn, 1);
	} else {
			document.addEventListener("DOMContentLoaded", fn);
	}
}

domReady(function () {
	
	function onScanSuccess(decodeText, decodeResult) {
			alert("Your QR code is: " + decodeText);
	}

	let htmlscanner = new Html5QrcodeScanner(
			"my-qr-reader",
			{ fps: 10, qrbox: 250 }
	);
	htmlscanner.render(onScanSuccess);
});

function getCardDetails() {
	const index = document.getElementById('detailsIndex').value;

	document.getElementById('cardDetails').textContent = `Card details for index ${index}`;
}
