export default {

  // fetchAsyncMD: async ( libUrl ) => {
  //   //https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
  //   //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  //   // var myHeaders = new Headers();
  //   // myHeaders.append("Content-Type", "text/plain");
  //   // myHeaders.append("Content-Length", content.length.toString());
  //   // myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

  //   // var miInit = { method: 'GET',
  //   //        headers: myHeaders,
  //   //        mode: 'no-cors',
  //   //        cache: 'default' };

  //   //let response = await fetch( libUrl, miInit );

  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "text/plain");
  //   var miInit = { method: 'GET',
  //         headers: myHeaders,
  //         mode: 'cors',
  //         cache: 'default' };
  //   let response = await fetch( libUrl, miInit );

  //   let data = await response;
  //   return data.text();

  // },

  sendRGB: async(opts) => {
    fetch('/color', {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(opts)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log( 'responseerror', data.html_url);
    });
  }

}
