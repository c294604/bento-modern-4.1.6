/**
 * Bento Themer Service for SpreadJS
 *
 * @author Chi Gao <chi.gao@thomsonreuters.com>, Dave Collier <dave.collier@thomsonreuters.com>
 * @date 08/02/2017
 *
 * Changelog:
 *
 * 08/02/2017
 * - Bumping the support to SpreadJS version 10
 *
 * 18/09/2014:
 * - Initial build based on the Dave's jQuery demo
 *
 */

(function (angular) {

  'use strict';

  angular.module('bento.spreadjs', [])
    .factory('$bentoSpreadJS', [
      function () {
        // Built-in user colors
        var bentoTheme = new GC.Spread.Sheets.Theme('BentoTheme');

        // Set theme colors
        bentoTheme.colors().textColor1('#606060');
        bentoTheme.colors().textColor2('#A00000');
        bentoTheme.colors().background1('#E9E9E9');
        bentoTheme.colors().background2('#CCCCCC');
        bentoTheme.colors().accent1('#555555');
        bentoTheme.colors().accent2('#FF8000');
        bentoTheme.colors().accent3('#DC0A0A');
        bentoTheme.colors().accent4('#6E3AB7');
        bentoTheme.colors().accent5('#0099C4');
        bentoTheme.colors().accent6('#77A22D');
        bentoTheme.colors().hyperlink('#0072a8');
        bentoTheme.colors().followedHyperlink('#0072a8');

        // Set default body and header fonts
        bentoTheme.bodyFont('12px Arial');
        bentoTheme.headerFont('Arial');

        // Row + Column header grid lines
        var customStyle = new GC.Spread.Sheets.Style();
        customStyle.borderRight =
          customStyle.borderBottom = new GC.Spread.Sheets.LineBorder("#CCCCCC", GC.Spread.Sheets.LineStyle.thin);

        /**
         * Apply Bento Theme to the spread and all of its sheets
         * @param spread - spreadsheet jQeury object
         * @param min - (optional) starting index of the sheet that needs to be styled
         * @param max - (optional) the cap of index where the sheets that need to be styled
         */
        var applyBentoTheme = function (spread, min, max) {

          var start = min || 0;
          var end = max || spread.getSheetCount();

          // Make sure that we are using our custom theme
          //spread.useWijmoTheme = true;

          for (var i = start; i < end; i++) {
            var sheet = spread.getSheet(i);
            // set grid lines
            sheet.options.gridline = {
              color                 : "#CCCCCC",
              showVerticalGridline  : true,
              showHorizontalGridline: true
            };

            sheet.options.borderColor = "#CCCCCC";

            // applies styling
            sheet.setDefaultStyle(customStyle, GC.Spread.Sheets.SheetArea.colHeader);
            sheet.setDefaultStyle(customStyle, GC.Spread.Sheets.SheetArea.rowHeader);
            sheet.setDefaultStyle(customStyle, GC.Spread.Sheets.SheetArea.corner); // not obeyed
            sheet.setDefaultStyle(customStyle, GC.Spread.Sheets.SheetArea.viewport);
            sheet.currentTheme(bentoTheme);
          }

          spread.repaint(); // this only needs to be called once
        };

        return {
          applyBentoTheme: applyBentoTheme
        };
      }
    ]);

})(window.angular);
