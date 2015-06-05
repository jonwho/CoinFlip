/*************************** 
 * UCSD CSE 134B SP15
 * Authors: Andrew Wang
 *          Jonathan Ho
 *          Long Tran
 * DATE: May 31st, 2015
 ***************************/


var myFirebaseRef = new Firebase("https://cse134bteam3-hw5.firebaseio.com/");

// define Firebase refs to use depending on page
var fAuthRef = myFirebaseRef.child("auth");
var fProfileRef = myFirebaseRef.child("profile");
var fGoldRef = myFirebaseRef.child("gold");
var fSilverRef = myFirebaseRef.child("silver");
var fPlatinumRef = myFirebaseRef.child("platinum");

/**************************************
 * saveDataToFirebase(username, id) :
 *
 * Function used to store or update data in firebase.
 * - username - optional field that defaults to UID. Specifies custom UID
 * - id - field specifying which coin to update for updates rather than
 *        sets
 */
function saveDataToFirebase(username, id) {
    if (username == "") { // If no username specified, default to UID
        username = (new Firebase("https://cse134bteam3-hw5.firebaseio.com")).getAuth().uid;
    }

    // Retrieve input data for coin
    var metal = $("#fbm :selected").val();
    var newqty = 0;
    var type = $("#fbt").val().toString();
    var pdate = $("#fbpd").val();
    var qty = parseInt($("#fbq").val());
    var pre = parseFloat($("#fbp").val());
    var price = parseFloat($("#fbpri").val());
    var pure = parseFloat($("#fbpure").val());
    var wu = parseFloat($("#fbwu").val());
    var gu = parseFloat($("#fbgu").val());
    var oz = parseFloat($("#fboz").val());
    var tlw = parseFloat($("#fbtl").val());

    // Simple validation check
    if (type === "" || pdate === "" || qty === NaN || pre === NaN 
            || price === NaN || pure === NaN || wu === NaN || 
            gu === NaN || oz === NaN || tlw === NaN) {
        alert("Please provide valid inputs for all values before adding coin to collection!");
        return -1;
    }

    // Aggregate data
    var data = {
        type: type,
        pdate: pdate,
        qty: parseInt(qty),
        pre: pre,
        price: parseFloat(price),
        pure: parseFloat(pure),
        wu: parseFloat(wu),
        gu: parseFloat(gu),
        oz: parseFloat(oz),
        tlw: parseFloat(tlw)
    };

    if (id == "") {   // Used to create data
        myFirebaseRef.child("users").child(username).child(metal).child(type).push(data);
    } else {          // Used to update data
        myFirebaseRef.child("users").child(username)
            .child(metal).child(type).child(id).set(data);
    }

    // Return to page of respective metal
    document.location = 'wire3_' + metal.substring(0, 1) + '.html';
}

/**************************************
 * filterData(data) :
 *
 * Function used to trim the number of datapoint bound to graph
 * - data: graph dataset to trim
 */
function filterData(data) {
    while (data.length > 20) {
        for (datum in data) {
            if (datum % 2 == 0) {
                data.splice(datum, 1);
            }
        }
    }
    return data;
}

/**************************************
 * roundResults(num, factor) :
 *
 * Function used to trim the number of digits in float
 * - num: number to trim
 * - factor: number of sig figs to keep
 */
function roundResults(num, factor) {
    return Math.ceil(num * Math.pow(10, factor)) / (Math.pow(10, factor));
}

/**************************************
 * getAggregateData(startDate, endDate, scaleSilver)
 *
 * Function used to aggregate data from plat, silver, and gold
 * - startDate: start of interval to get data from
 * - endDate: end of interval to fetch data from
 * - scaleSilver: determines whether to scale silver values for comparison
 */
function getAggregateData(startDate, endDate, scaleSilver) {

    // Allow all metal data to be compiled
    $.when(getPlatinumPrices(startDate, endDate), 
            getGoldPrices(startDate, endDate), 
            getSilverPrices(startDate, endDate))
            .done(function(plat, gold, silver) {

        // Trim extraneous data
        for (datum in plat[0]['data']) {
            plat[0]['data'][datum].splice(1, 2);
            plat[0]['data'][datum].splice(2, 2);
        }
        for (datum in silver[0]["data"]) {
            silver[0]["data"][datum].splice(2, 2);
            if (scaleSilver == true) {
                silver[0]["data"][datum][1] *= 70;
            }
            silver[0]["data"][datum][1] 
                = roundResults(silver[0]["data"][datum][1], 2);
        }

        // Match data to ensure match labels. Necessary because different
        // markets have different timing
        for (date in plat[0]['data']) {
            var found = 0;
            for (dateM in gold[0]['data']) {
                if (plat[0]['data'][date][0] == gold[0]['data'][dateM][0]) {
                    found++;
                }
            }
            for (dateM in silver[0]['data']) {
                if (plat[0]['data'][date][0] == silver[0]['data'][dateM][0]) {
                    found++;
                }
            }

            if (found != 2) {
                plat[0]['data'].splice(date, 1);
            }
        }

        // Aggregate data
        gold = filterData(gold[0]['data']);
        silver = filterData(silver[0]['data']);
        plat = filterData(plat[0]['data']);
        
        // Send callback
        receiveAggregateData([gold.reverse(), 
                silver.reverse(), plat.reverse()]);
    });
}

/**************************************
 * getPlatinumPrices(startDate, endDate)
 *
 * Function used to fetch and return platinum data in a range
 * - startDate: start of interval to get data from
 * - endDate: end of interval to fetch data from
 */
function getPlatinumPrices(startDate, endDate) {
    var url = "https://www.quandl.com/api/v1/datasets/JOHNMATT/PLAT.json?auth_token=-369hf-T8GyT7eMsj2ye&trim_start=" + startDate + "&trim_end=" + endDate;
    return $.getJSON(url, function(data) {});
}

/**************************************
 * getSilverPrices(startDate, endDate)
 *
 * Function used to fetch and return silver data in a range
 * - startDate: start of interval to get data from
 * - endDate: end of interval to fetch data from
 */
function getSilverPrices(startDate, endDate) {
    var url = "https://www.quandl.com/api/v1/datasets/LBMA/SILVER.json?auth_token=-369hf-T8GyT7eMsj2ye&trim_start=" + startDate + "&trim_end=" + endDate;
    return $.getJSON(url, function(data) {});
}

/**************************************
 * getGoldPrices(startDate, endDate)
 *
 * Function used to fetch and return gold data in a range
 * - startDate: start of interval to get data from
 * - endDate: end of interval to fetch data from
 */
function getGoldPrices(startDate, endDate) {
    var url = "https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBK01_WT5511.json?auth_token=-369hf-T8GyT7eMsj2ye&trim_start=" + startDate + "&trim_end=" + endDate;
    return $.getJSON(url, function(data) {});
}

/**************************************
 * getIntradayData(ticker)
 *
 * Function used to fetch intraday data on a stock. Not currently used
 * since we are populating our servers with our own datapoints rather
 * than relying on futures data. Will be used in hw5
 * - ticker: stocks to grab from
 */
function getIntradayData(ticker) {
    var tickers = ['GCM15.CMX', 'SIN15.CMX', 'PLM15.NYM'];
    var gsp = [];

    for (tickerIter in tickers) {
        var url = "https://chartapi.finance.yahoo.com/instrument/1.0/" + tickers[tickerIter] + "/chartdata;type=quote;range=1d/json";
        $.ajax({
            url: url,
            type: "GET",
            dataType: 'jsonp',
        }).success(function(data) {
            labels = data.labels;
            closeData = [];
            for (quantum in data.series) {
                var index = data.labels.indexOf(data.series[quantum].Timestamp - (data.series[quantum].Timestamp % 100));
                if (index >= 0) {
                    closeData[data.labels[index]] 
                        = data.series[quantum].close;
                }
            }
            gsp[tickerCounter] = closeData;
            tickerCounter++;
            if (tickerCounter == tickers.length) {
                sendIntradayData(gsp);
            }
        });
    }
}

/**************************************
 * retrieveCurrentMetalsPrices(metals)
 *
 * Function uses Yahoo's YQL querying to grab real-time data on futures
 * prices of gold, silver and platinum.
 * - metals: array containing ticker symbols of metals
 */
function retrieveCurrentMetalsPrices(metals) {
    sync = {};
    counter = 0;
    var tickerCounter = 0;
    var midString = metals[0];
    for (tickerIter in metals) {
        if (tickerIter == 0) {
            continue;
        } else {
            midString = midString + '+' + metals[tickerIter];
        }
    }
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%28%22" + midString + "%22%29%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";
    $.ajax({
            url: url,
            type: "get",
            dataType: 'jsonp',
        })
        .success(function(data) {
            for (var metalResult in data.query.results.quote) {
                sync[data.query.results.quote[metalResult].Symbol] = {};
                sync[data.query.results.quote[metalResult].Symbol]['bid'] = data.query.results.quote[metalResult].Bid;
                sync[data.query.results.quote[metalResult].Symbol]['ask'] = data.query.results.quote[metalResult].Ask;
                sync[data.query.results.quote[metalResult].Symbol]['change'] = data.query.results.quote[metalResult].Change;
                sync[data.query.results.quote[metalResult].Symbol]['changePercent'] = data.query.results.quote[metalResult].ChangeinPercent;
            }
            updateLiveFields(sync);

        });
}