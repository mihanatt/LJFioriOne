sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			var currencyFormat = sap.ui.core.format.NumberFormat.getCurrencyInstance({
			    "currencyCode": false,
			    "customCurrencies": {
			        "Dollar": {
			            "isoCode": "USD",
			            "decimals": 2
			        }
			    }
			});
			return currencyFormat.format(sValue, "Dollar");
		},
		
		datePreview : function (sValue) {
			var oDateFormat = sap.ui.core.format.DateFormat.getInstance({pattern: "dd/MM/yyyy"});
			return oDateFormat.format(sValue);
		}
	};
});