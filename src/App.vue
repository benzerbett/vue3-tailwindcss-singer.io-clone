<template>
  <div class="flex flex-col items-center min-h-20 bg-blue-900 bg-opacity-95 w-screen">
    <div class="w-full max-w-screen-xl py-10">
      <header class="flex flex-row justify-between items-center">
        <a class="text-white text-lg font-semibold hover:underline" href="#"><img src="./assets/images/singer_logo_full_white.svg" alt="" class="logo h-6"></a>
        <nav class="nav">
          <ul class="flex flex-row align-center justify-center">
            <li class="mx-3"><a class="text-white text-lg font-semibold hover:underline" href="#">How It Works</a></li>
            <li class="mx-3"><a class="text-white text-lg font-semibold hover:underline" href="#">Taps &amp; Targets</a></li>
            <li class="mx-3"><a class="text-white text-lg font-semibold hover:underline" href="#">How to Contribute</a></li>
          </ul>
        </nav>
        <nav class="nav">
          <ul class="flex flex-row align-center justify-center">
            <li class="mx-3"><a class="text-white text-lg font-semibold hover:underline" href="#">GitHub</a></li>
            <li class="mx-3"><a class="text-white text-lg font-semibold hover:underline" href="#">Roadmap</a></li>
          </ul>
        </nav>
      </header>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

      <section class="hero mt-8 py-16">
        <div class="grid grid-cols-2">
          <div class="text-left">
            <h1 class="text-5xl text-white mb-6 leading-snug font-semibold">Simple, Composable, <br/>Open Source ETL</h1>
            <p class="text-white text-xl">Singer powers data extraction and consolidation for all of your organization’s tools.</p>
            <div class="cta mt-14">
              <button class="bg-pink-500 border-radius-0 font-semibold px-8 py-4 text-xl text-white hover:bg-pink-600">See it in action &nbsp; &#9662;</button>
              <p class="mt-4 text-md text-gray-200">Join us on <a href="#" class="underline hover:text-pink-400">Slack</a></p>
            </div>
          </div>
          <div class="text-right flex flex-row align-center justify-center">
            <img src="./assets/images/logo.png" class="block h-20" alt="" srcset="">
          </div>
        </div>
      </section>
    </div>
  </div>

  <div class="flex flex-col items-center bg-red-200z w-screen py-16">
    <div class="max-w-screen-xl">
      <div class="text-center p-4">
        <h3 class="text-3xl font-semibold">The open-source standard for writing scripts that move data.</h3>
      </div>
      <div class="w-full grid grid-cols-2">
        <div class="p-3 px-12 text-left">
          <p class="text-lg">
            Singer describes how data extraction scripts—called <b>“taps”</b> —and data loading scripts—called <b>“targets”</b> - should communicate, allowing them to be used in any combination to move data from any source to any destination. Send data between databases, web APIs, files, queues, and just about anything else you can think of. 
          </p>
        </div>
        <div class="p-3">
          <div class="flex flex-col align-center justify-center bg-gray-700 shadow-2xl text-gray-100 p-4 rounded-xl">
            <div class="text-left p-4">
              <img src="./assets/images/window-controls.svg" alt="" srcset="" class="h-4">
            </div>
            <pre class="whitespace-normal p-8">
              <code class="break-words block mb-2">› pip install target-csv tap-exchangeratesapi</code>
              <code class="break-words block mb-2">› tap-exchangeratesapi | target-csv</code>
              <code class="break-words block mb-2">    INFO Replicating the latest exchange rate data from exchangeratesapi.io</code>
              <code class="break-words block mb-2">    INFO Tap exiting normally</code>
              <code class="break-words block mb-2">› cat exchange_rate.csv</code>
              <code class="break-words block mb-2">AUD,BGN,BRL,CAD,CHF,CNY,CZK,DKK,GBP,HKD,HRK,HUF,IDR,ILS,INR,JPY,KRW,MXN,MYR,NOK,NZD,PHP,PLN,RON,RUB,SEK,SGD,THB,TRY,ZAR,EUR,USD,date</code>
              <code class="break-words block mb-2">1.3023,1.8435,3.0889,1.3109,1.0038,6.869,25.47,7.0076,0.79652,7.7614,7.0011,290.88,13317.0,3.6988,66.608,112.21,1129.4,19.694,4.4405,8.3292,1.3867,50.198,4.0632,4.2577,58.105,8.9724,1.4037,34.882,3.581,12.915,0.9426,1.0,2017-02-24T00:00:00Z</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>
