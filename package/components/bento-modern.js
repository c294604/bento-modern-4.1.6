/**
 * Bento v4.1.3
 * Built on: 2024-10-17T19:45:42
 * Copyright 2024 Thomson Reuters
 * Maintained by Chi Gao, Joe Huang, Aaron Mendez
 */
(function(angular) {
'use strict';
// Register Bento.UI
window.bento = angular
                   .module(
                       'bento.ui',
                       [
                         'ngAnimate',
                         'ngSanitize',
                         'bento.modern.ui',
                         'bento.services',
                         'bento.positioning',
                         'bento.checkbox',
                         'bento.busyloader',
                         'bento.append.to.parent',
                         'bento.carousel',
                         'bento.combobox',
                         'bento.contextualheader',
                         'bento.cookie',
                         'bento.fileselector',
                         'bento.inputblur',
                         'bento.numberinput',
                         'bento.off.canvas.menu',
                         'bento.pagination',
                         'bento.reset',
                         'bento.scrollablebar',
                         'bento.scrollabletoolbar',
                         'bento.select',
                         'bento.splittergroup',
                         'bento.tagsinput',
                         'bento.test',
                         'bento.translate',
                         'bento.table',
                         'bento.tileribbon',
                         'bento.toggle',
                         'bento.toolbar',
                         'bento.tree',
                         'bento.tree.view',
                         'bento.wizard',
                         'bento.progressbar',
                         'bento.tabs',
                         'bento.transferbox',
                         'bento.transferbox.basic',
                         'bento.transition',
                         'bento.multiselectoverlay',
                         'bento.dropdown.append.to.parent',
                         'bento.alert',
                         'bento.megamenu',
                         'bento.universeFilter',
                         'bento.uib.datepicker.addon',
                         'bento.uib.timepicker.addon',
                         'bento.sticky.footer',
                         'bento.smartbadge',
                         'bento.skiplinks',
                         'bento.prevent.overflow.scroll'
                       ])
                   .config([
                     '$logProvider',
                     function($logProvider) {
                       $logProvider.debugEnabled(false);
                     }
                   ]);

angular.module('bento.modern', ['bento.ui']);

bento.version = {
  release: '4.1.3',
  codeName: 'shuumaku'
};
})(window.angular);

angular.module('bento.modern.ui', ['../templates/alerts/bento_alert.html', '../templates/alerts/bento_alert_container.html', '../templates/carousel/bento-carousel-card-default.html', '../templates/combobox/bento-combobox-container.html', '../templates/combobox/bento-combobox-header-template.html', '../templates/combobox/bento-combobox.html', '../templates/contextual_header/bento-contextual-header.html', '../templates/file_selector/bento-file-selector.html', '../templates/multiselect_list/bento-multiselect-list.html', '../templates/multiselect_overlay/bento-multiselect-overlay.html', '../templates/pagination/bento-pagination.html', '../templates/progressbar/bento-progressbar.html', '../templates/scrollable-bar/bento-scrollable-bar.html', '../templates/scrollable-toolbar/bento-scrollable-toolbar-item.html', '../templates/scrollable-toolbar/bento-scrollable-toolbar.html', '../templates/side_nav/bento-side-nav.html', '../templates/skip_links/bento-skip-links.html', '../templates/spread/bento-spread.html', '../templates/tags_input/bento-tags-input-pill.html', '../templates/tags_input/bento-tags-input.html', '../templates/tile-ribbon/bento_tile_ribbon.html', '../templates/tile-ribbon/bento_tile_ribbon_tile.html', '../templates/toggle/bento-toggle.html', '../templates/toolbar/bento-toolbar.html', '../templates/transfer_box/bento-flexgrid-transferbox-base.html', '../templates/transfer_box/bento-flexgrid-transferbox-grid.html', '../templates/transfer_box_basic/bento-transferbox-base.html', '../templates/transfer_box_basic/bento-transferbox-grid.html', '../templates/tree-view/bento-tree-view.html', '../templates/tree/bento-tree.html', 'uib/template/accordion/accordion-group.html', '../templates/universe_filter/bento-universe-filter-dropdown.html', '../templates/universe_filter/bento-universe-filter.html']);

angular.module("../templates/alerts/bento_alert.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/alerts/bento_alert.html",
    "<div class=\"bento-alert-container bento-animate\">\n" +
    "    <div class=\"alert bento-alert\"\n" +
    "         bento-alert-index=\"{{bentoAlertMessageIndex}}\"\n" +
    "         ng-class=\"['alert-' + (bentoAlertMessage.type || 'warning'), bentoAlertMessage.closeable ? 'alert-dismissable' : null]\"\n" +
    "         role=\"alert\"\n" +
    "         tabindex=\"0\"\n" +
    "        >\n" +
    "      <button ng-show=\"bentoAlertMessage.closeable\"\n" +
    "              type=\"button\"\n" +
    "              class=\"bento-alert-close\"\n" +
    "              ng-click=\"closeBentoAlert()\"\n" +
    "              bento-test=\"button-close\"\n" +
    "              aria-label=\"{{ 'BENTO_UI_ALERT_CLOSE_BUTTON' | bentoTranslate}}\"\n" +
    "      >\n" +
    "        <span aria-hidden=\"true\"><i class=\"bento-icon-close-thick\"></i></span>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "");
}]);

angular.module("../templates/alerts/bento_alert_container.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/alerts/bento_alert_container.html",
    "<div class=\"alert-container refresh-data\"\n" +
    "     aria-label=\"{{'BENTO_UI_ALERT_DESCRIPTION' | bentoTranslate}}\"\n" +
    "     tabindex=\"-1\">\n" +
    "  <div ng-repeat=\"alert in bentoAlertObject\"\n" +
    "       bento-alert-message=\"alert\"\n" +
    "       bento-alert-message-index=\"$index\"\n" +
    "       rel=\"bento-alert-{{$index}}\"\n" +
    "       bento-test=\"alert-{{$index}}\"\n" +
    "  >\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("../templates/carousel/bento-carousel-card-default.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/carousel/bento-carousel-card-default.html",
    "<div class=\"bento-carousel-card-recent\">\n" +
    "  <i class=\"bento-icon-newtab carousel-newtab-cta\" \n" +
    "     ng-click=\"newTabClick($event)\"\n" +
    "     ng-if=\"!hideNewTabIcon\"></i>\n" +
    "  <div ng-if=\"enablePopover &&\n" +
    "   ((cardName && cardName.length>0) || (cardSecondaryName && cardSecondaryName.length>0))\"\n" +
    "       class=\"bento-carousel-card-recent-header\"\n" +
    "       uib-popover=\"{{cardSecondaryName + ' '}}\"\n" +
    "       popover-title=\"{{cardName}}\"\n" +
    "       popover-placement=\"top\"\n" +
    "       popover-trigger=\"outsideClick\"\n" +
    "       ng-click=\"onHeaderClick($event)\">\n" +
    "    <!-- Content -->\n" +
    "    <h4 ng-if=\"cardName && cardName.length>0\" class=\"label\" ng-bind=\"cardName\"></h4>\n" +
    "    <h4 ng-if=\"cardSecondaryName && cardSecondaryName.length>0\" class=\"label\" ng-bind=\"cardSecondaryName\"></h4>\n" +
    "  </div>\n" +
    "  <div ng-if=\"!enablePopover &&\n" +
    "    ((cardName && cardName.length>0) || (cardSecondaryName && cardSecondaryName.length>0))\"\n" +
    "       class=\"bento-carousel-card-recent-header\" \n" +
    "       ng-click=\"onHeaderClick($event)\">\n" +
    "    <!-- Content -->\n" +
    "    <h4 ng-if=\"cardName && cardName.length>0\" class=\"label\" ng-bind=\"cardName\"></h4>\n" +
    "    <h4 ng-if=\"cardSecondaryName && cardSecondaryName.length>0\" class=\"label\" ng-bind=\"cardSecondaryName\"></h4>\n" +
    "  </div>\n" +
    "  <div class=\"content\" ng-include=\"cardTemplateUrl\"></div>\n" +
    "  <div class=\"foot\">\n" +
    "    <div ng-if=\"date\" class=\"time\" ng-bind=\"date | bentoTranslate | bentoStringReplace: '_NUMBER_' : dDay\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "        ");
}]);

angular.module("../templates/combobox/bento-combobox-container.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/combobox/bento-combobox-container.html",
    "<div class=\"bento-combobox-container\">\n" +
    "  <ul class=\"bento-combobox-container-header\"\n" +
    "      ng-if=\"!!headers\"\n" +
    "  >\n" +
    "    <li bento-combobox-header-template=\"headerTemplate\"\n" +
    "        ng-repeat=\"header in headers track by $index\"\n" +
    "        $header=\"header\"\n" +
    "        $index=\"{{$index}}\"\n" +
    "        bento-test=\"header-{{$index}}\"\n" +
    "    >\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"bento-combobox-container-body\"\n" +
    "\n" +
    "  >\n" +
    "    <ul ng-if=\"!isTable\"\n" +
    "        class=\"bento-combobox-container-list\">\n" +
    "      <li ng-repeat=\"item in data track by $index\"\n" +
    "          class=\"bento-combobox-container-item\" tabindex=\"-1\"\n" +
    "      >\n" +
    "        <bento-combobox-row-template\n" +
    "            ng-class=\"{selected: selectedIndex == $index}\"\n" +
    "            ng-click=\"selectItem($index)\"\n" +
    "            rel=\"row-{{$index}}\"\n" +
    "            $item=\"item\"\n" +
    "            $index=\"$index\"\n" +
    "            $label-name=\"labelName\"\n" +
    "            row-template=\"rowTemplate()\"\n" +
    "            bento-test=\"item-{{$index}}\"\n" +
    "            tabindex=\"-1\"\n" +
    "        ></bento-combobox-row-template>\n" +
    "      </li>\n" +
    "\n" +
    "    </ul>\n" +
    "    <ul ng-if=\"isTable\"\n" +
    "        class=\"bento-combobox-container-list\">\n" +
    "      <li ng-repeat=\"item in data track by $index\"\n" +
    "          class=\"bento-combobox-container-item\" tabindex=\"-1\"\n" +
    "      >\n" +
    "        <bento-combobox-row-template\n" +
    "            ng-class=\"{selected: selectedIndex == $index}\"\n" +
    "            ng-click=\"selectItem($index)\"\n" +
    "            rel=\"row-{{$index}}\"\n" +
    "            $item=\"item\"\n" +
    "            $index=\"$index\"\n" +
    "            $label-name=\"labelName\"\n" +
    "            headers=\"headers\"\n" +
    "            row-template=\"rowTemplate()\"\n" +
    "            tabindex=\"-1\"\n" +
    "            bento-test=\"item-{{$index}}\"\n" +
    "        ></bento-combobox-row-template>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <bento-combobox-footer\n" +
    "      ng-if=\"$parent.footerOptions() && $parent.footerOptions().buttons\"\n" +
    "      class=\"bento-combobox-container-list\"\n" +
    "      template-url=\"{{footerTemplateUrl()}}\"\n" +
    "  ></bento-combobox-footer>\n" +
    "</div>");
}]);

angular.module("../templates/combobox/bento-combobox-header-template.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/combobox/bento-combobox-header-template.html",
    "<li class=\"bento-combobox-container-header-label\"></li>");
}]);

angular.module("../templates/combobox/bento-combobox.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/combobox/bento-combobox.html",
    "<div class=\"bento-combobox bento-select form-control\"\n" +
    "     ng-class=\"{'open': isContainerVisible, 'no-value': !inputValue}\"\n" +
    "     tabindex = '-1'\n" +
    "     role=\"combobox\"\n" +
    "    >\n" +
    "  <input class=\"form-control {{inputClasses}}\"\n" +
    "         type=\"text\"\n" +
    "         placeholder=\"{{placeholder}}\"\n" +
    "         autocomplete=\"off\"\n" +
    "         aria-autocomplete=\"none\"\n" +
    "         aria-label=\"Select Here\"\n" +
    "         ng-keyup=\"onInputKeyup($event);\"\n" +
    "         ng-keypress=\"onInputKeypress($event)\"\n" +
    "         ng-keydown=\"onInputKeyDown($event);\"\n" +
    "         ng-change=\"onInputChange($event)\"\n" +
    "         ng-show=\"searchable()\"\n" +
    "         ng-readonly=\"attrs.readonly\"\n" +
    "         ng-disabled=\"ngDisabled()\"\n" +
    "         ng-model=\"inputLabel\"\n" +
    "         bento-test=\"input\"\n" +
    "         />\n" +
    "\n" +
    "  <div class=\"input-label form-control\"\n" +
    "       ng-class=\"{'disabled': ngDisabled()}\"\n" +
    "       ng-if=\"!searchable()\"\n" +
    "       ng-keyup=\"onInputKeyup($event);\"\n" +
    "       ng-keydown=\"onInputKeyDown($event);\"\n" +
    "       ng-disabled=\"ngDisabled()\"\n" +
    "       ng-click=\"onButtonClick($event)\"\n" +
    "       tabindex=\"0\"\n" +
    "      >\n" +
    "    {{inputLabel}}\n" +
    "  </div>\n" +
    "  <div class=\"placeholder\"\n" +
    "       ng-class=\"{'disabled': ngDisabled()}\"\n" +
    "       ng-if=\"!searchable() && (!inputLabel || inputLabel.length === 0)\"\n" +
    "       ng-disabled=\"ngDisabled()\"\n" +
    "       ng-click=\"onButtonClick($event)\"\n" +
    "       >\n" +
    "    {{placeholder}}\n" +
    "  </div>\n" +
    "  <div bento-busy-loader=\"loadingData\"\n" +
    "       bento-busy-loader-size=\"small\"\n" +
    "       non-blocking=\"true\"\n" +
    "       class=\"preloader\"\n" +
    "       bento-test=\"busy-loader\"></div>\n" +
    "\n" +
    "  <div class=\"btn\"\n" +
    "       tabindex=\"-1\"\n" +
    "       ng-class=\"{'disabled':ngDisabled()}\"\n" +
    "       ng-show=\"!attrs.readonly\"\n" +
    "       ng-click=\"onButtonClick($event)\"\n" +
    "       aria-label=\"Dropdown Arrow\"\n" +
    "      >\n" +
    "    <i ng-class=\"{'bento-icon-caret-up':isContainerVisible,'bento-icon-caret-down':!isContainerVisible}\"></i>\n" +
    "  </div>\n" +
    "  <div bento-combobox-container\n" +
    "       id=\"{{uid}}\"\n" +
    "       class=\"bento-append-to-parent\"\n" +
    "       append-to-offset=\"-1\"\n" +
    "       data=\"data\"\n" +
    "       columns-width=\"columnsWidth()\"\n" +
    "       selected-index=\"selectedIndex\"\n" +
    "       headers=\"headers\"\n" +
    "       header-template=\"headerTemplate\"\n" +
    "       is-table=\"!!headers\"\n" +
    "       label-name=\"labelName\"\n" +
    "       on-item-click=\"onItemClick(index)\"\n" +
    "       controller=\"containerCtrl\"\n" +
    "       row-template=\"rowTemplate()\"\n" +
    "       on-end-of-scroll=\"onEndOfScroll()\"\n" +
    "       footer-template-url=\"footerOptions().templateUrl\"\n" +
    "      ></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/contextual_header/bento-contextual-header.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/contextual_header/bento-contextual-header.html",
    "<header class=\"bento-contextual-header-inner\">\n" +
    "  <button class=\"bch-back-button\"\n" +
    "          ng-if=\"!hideBackBtn()\"\n" +
    "          ng-click=\"onBackBtnClick()\"\n" +
    "          ng-disabled=\"backBtnDisabled()\"\n" +
    "  >\n" +
    "    <i class=\"bento-icon-arrow-left\"></i>\n" +
    "  </button>\n" +
    "\n" +
    "  <main class=\"bch-main-container\">\n" +
    "    <section ng-repeat=\"header in contextualHeaderData().headers track by $index\" class=\"bch-header\">\n" +
    "      <figure class=\"bch-header-icon\" ng-if=\"header.icon\" ng-switch=\"isImage(header.icon)\">\n" +
    "        <img ng-switch-when=\"true\" ng-src=\"{{header.icon}}\" class=\"bch-header-img\" />\n" +
    "        <i ng-switch-default ng-class=\"header.icon\"></i>\n" +
    "      </figure>\n" +
    "      <aside class=\"bch-header-title-container\">\n" +
    "        <div class=\"bch-header-title\">{{header.title}}</div>\n" +
    "        <div ng-if=\"header.subtitle!=undefined\" \n" +
    "             data-subtitle-id=\"{{$index}}\"\n" +
    "             class=\"bch-header-subtitle\"\n" +
    "             uib-tooltip=\"{{header.subtitle}}\"\n" +
    "             tooltip-placement=\"bottom\"\n" +
    "             tooltip-enable=\"isTooltipEnabled($index)\"\n" +
    "        >\n" +
    "          {{header.subtitle}}\n" +
    "        </div>\n" +
    "      </aside>\n" +
    "    </section>\n" +
    "  </main>\n" +
    "\n" +
    "  <aside class=\"bch-right-container\" ng-if=\"contextualHeaderData().button\">\n" +
    "    <button class=\"btn btn-primary btn-sm\"\n" +
    "            ng-click=\"onRightButtonClick()\"\n" +
    "            ng-disabled=\"contextualHeaderData().button.disabled\"\n" +
    "    >\n" +
    "      {{contextualHeaderData().button.text}}\n" +
    "    </button>\n" +
    "  </aside>\n" +
    "</header>\n" +
    "");
}]);

angular.module("../templates/file_selector/bento-file-selector.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/file_selector/bento-file-selector.html",
    "<div>\n" +
    "  <div  class=\"bento-file-selector\" ng-class=\"{'bento-file-selector-progress-percentage':showProgressPercentage}\">\n" +
    "    <div class=\"sr-only\" tabindex=\"0\">\n" +
    "        {{'BENTO_UI_FILE_SELECTOR_DESCRIPTION' | bentoTranslate}}\n" +
    "      </div>\n" +
    "      <span class=\"header\">{{'BENTO_UI_FILE_SELECTOR_DROP_FILED_LABEL' | bentoTranslate : dropFieldLabel}}</span><br/>\n" +
    "      <button class=\"btn btn-primary\"\n" +
    "              ng-click=\"onBrowseClick($event)\"\n" +
    "              role=\"button\"\n" +
    "              type=\"button\"\n" +
    "              bento-test=\"browse-button\"\n" +
    "              aria-label=\"{{ 'BENTO_UI_FILE_SELECTOR_BROWSE_BUTTON' | bentoTranslate }}\"\n" +
    "              ng-disabled=\"disableBrowseButton || ngDisabled()\"\n" +
    "          >\n" +
    "        <span>{{'BENTO_UI_FILE_SELECTOR_BROWSE_BUTTON_LABEL' | bentoTranslate : browseButtonLabel}}</span>\n" +
    "        <i class=\"bento-icon-chevron-right\"></i>\n" +
    "      </button>\n" +
    "      <span id=\"truncated-filename-placeholder\" class=\"bento-truncated-filename-placeholder hidden\"></span>\n" +
    "      <div class=\"filename-container\">\n" +
    "        <div class=\"sr-only bento-file-selector-post-removal-message\" tabindex=\"-1\">\n" +
    "        {{'BENTO_UI_FILE_SELECTOR_REMOVE_COMPLETE' | bentoTranslate | bentoStringReplace: '_FILE_NAME_' :fileRemoved}}\n" +
    "      </div>\n" +
    "        <div  ng-if=\"showSelected\"\n" +
    "              class=\"btn btn-default bento-file-selector-filename\"\n" +
    "              ng-repeat=\"file in ngModel track by $index\"\n" +
    "              ng-disabled=\"disabledFiles[$index] && disableFilesDuringUpload\"\n" +
    "              ng-class=\"{loading:disabledFiles[$index]}\"\n" +
    "              rel=\"file_{{$index}}\">\n" +
    "          <span\n" +
    "            tabindex=\"0\"\n" +
    "            class=\"bento-file-selector-filename-label\"\n" +
    "            aria-label=\"{{'BENTO_UI_FILE_SELECTOR_FILE_NAME' | bentoTranslate | bentoStringReplace:'_FILE_NAME_': file.displayFilename | bentoStringReplace:'_NUM_FILES_':ngModel.length | bentoStringReplace:'_FILE_NUMBER_':($index+1)}} {{showFileSize? '(' + (file.size | bentoFileSizeFilter) + ')' : ''}} {{(fileProgresses[$index] >= 0 && fileProgresses[$index] < 100)? ('BENTO_UI_FILE_SELECTOR_FILE_UPLOAD_PROGRESS' | bentoTranslate) : (fileProgresses[$index]) ? ('BENTO_UI_FILE_SELECTOR_FILE_UPLOAD_COMPLETE' | bentoTranslate) : ''}}\"\n" +
    "            >{{file.displayFilename}}{{showFileSize? ' (' + (file.size | bentoFileSizeFilter) + ')' : ''}}</span>\n" +
    "          <button ng-click=\"onRemoveClick($index)\"\n" +
    "              role=\"button\"\n" +
    "              aria-label=\"{{'BENTO_UI_FILE_SELECTOR_REMOVE_BUTTON' | bentoTranslate | bentoStringReplace:'_FILE_NAME_':file.displayFilename}}\"\n" +
    "              tabindex=\"0\"\n" +
    "              class=\"bento-icon-close-x\"\n" +
    "              ng-disabled=\"disabledFiles[$index] && disableFilesDuringUpload\"\n" +
    "              >\n" +
    "          </button>\n" +
    "          <div class=\"bento-file-selector-file-progress-bg\" ng-style=\"{width: fileProgresses[$index] + '%'}\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"bento-progressbar\">\n" +
    "        <div uib-progressbar value=\"uploadProgressPercentage\" type=\"success\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"bento-file-selector-progress-percentage-label\">{{uploadProgressPercentage}}%</div>\n" +
    "  </div>\n" +
    "  <div class=\"file-selection-error\" \n" +
    "       ng-repeat=\"file in errorFiles\">\n" +
    "    <i class=\"bento-icon-warning accept-error-message\"></i>\n" +
    "    <span class=\"accept-error-message\">\n" +
    "          The {{file.displayType}} <i>{{file.name}}</i> could not be uploaded.\n" +
    "          <span ng-if=\"accept\">\n" +
    "            Only files with the following extensions are allowed: <i>{{accept}}</i>\n" +
    "          </span>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("../templates/multiselect_list/bento-multiselect-list.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/multiselect_list/bento-multiselect-list.html",
    "<div class=\"bento-multiselect-list\">\n" +
    "  <div class=\"bento-multiselect-list-item bento-multiselect-search\">\n" +
    "    <div class=\"pills\">\n" +
    "      <ul class=\"nav nav-pills\" role=\"tablist\">\n" +
    "        <li ng-class=\"{active:!showSelected}\"><a ng-click=\"setShowSelected(false)\" role=\"tab\"\n" +
    "                                                 bento-test=\"show-all\" href>\n" +
    "          {{'BENTO_UI_MULTISELECT_OVERLAY_SHOW_ALL' | bentoTranslate:showAllText}}\n" +
    "        </a></li>\n" +
    "        <li ng-class=\"{active:showSelected}\"><a ng-click=\"setShowSelected(true)\" role=\"tab\"\n" +
    "                                                bento-test=\"show-selected\" href>\n" +
    "          {{'BENTO_UI_MULTISELECT_OVERLAY_SHOW_SELECTED' | bentoTranslate:showSelectedText}}\n" +
    "        </a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <input bento-reset\n" +
    "           type=\"text\"\n" +
    "           class=\"form-control\"\n" +
    "           ng-model=\"searchTerm\"\n" +
    "           ng-change=\"onSearchChange()\"\n" +
    "           aria-label=\"{{'BENTO_UI_MULTISELECT_OVERLAY_SEARCH_LABEL' | bentoTranslate}}\"\n" +
    "    />\n" +
    "  </div>\n" +
    "  <div class=\"bento-multiselect-list-scroll-pane\"\n" +
    "       bento-busy-loader=\"!listData()\"\n" +
    "       bento-busy-loader-size=\"small\"\n" +
    "  >\n" +
    "    <button type=\"button\"\n" +
    "            class=\"bento-multiselect-list-item\"\n" +
    "            ng-click=\"onSelectAllClick($event)\"\n" +
    "            ng-class=\"{selected:selectAll}\"\n" +
    "            ng-show=\"!showSelected && filteredItems && filteredItems.length > 0\"\n" +
    "            bento-test=\"select-all\"\n" +
    "            aria-label=\"select all\"\n" +
    "            role=\"checkbox\"\n" +
    "            aria-checked=\"{{selectAll? true : false}}\"\n" +
    "    >\n" +
    "      <i class=\"bento-multiselect-checkbox\"\n" +
    "         ng-class=\"{'bento-icon-checkmark':selectAll}\">\n" +
    "      </i>\n" +
    "      <span>({{'BENTO_UI_MULTISELECT_OVERLAY_SELECT_ALL' | bentoTranslate:selectAllText}})</span>\n" +
    "    </button>\n" +
    "    <button type=\"button\"\n" +
    "            class=\"bento-multiselect-list-item\"\n" +
    "            ng-click=\"onItemClick(item, $event)\"\n" +
    "            ng-repeat=\"item in filteredItems | multiselectShowSelected:showSelected:checkedUid track by $index\"\n" +
    "            ng-class=\"{selected:item[checkedUid]}\"\n" +
    "            title=\"{{item.name}}\"\n" +
    "            role=\"checkbox\"\n" +
    "            bento-test=\"item-{{$index}}\"\n" +
    "            aria-label=\"{{item.name}}\"\n" +
    "            aria-checked=\"{{item[checkedUid]? true : false}}\"\n" +
    "    >\n" +
    "      <i class=\"bento-multiselect-checkbox\"\n" +
    "         ng-class=\"{'bento-icon-checkmark':item[checkedUid]}\">\n" +
    "      </i>\n" +
    "      <span ng-bind-html=\"htmlEntities(item.name) | highlight:searchTerm.name\"></span>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("../templates/multiselect_overlay/bento-multiselect-overlay.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/multiselect_overlay/bento-multiselect-overlay.html",
    "<div class=\"bento-multiselect-overlay-inner\">\n" +
    "  <div bento-side-overlay side=\"{{!!side? side : 'right'}}\"\n" +
    "       on-done=\"onDoneClick()\" overlay-height=\"multiselectListMaxHeight\"\n" +
    "       done-button-text=\"{{doneButtonText}}\" tabindex=\"-1\"\n" +
    "       bento-append-to-parent=\"{{!!bentoAppendToParent ? bentoAppendToParent : ''}}\">\n" +
    "    <button bento-side-overlay-toggle class=\"btn btn-default\"\n" +
    "            uib-tooltip-html=\"tooltip\" tooltip-trigger=\"mouseover\"\n" +
    "            tooltip-append-to-body=\"true\" tooltip-enable=\"!!tooltip\"\n" +
    "            ng-disabled=\"isDisabled\" bento-test=\"button-toggle\"\n" +
    "            aria-label=\"{{selectButtonText | bentoTranslate}}\"\n" +
    "            ng-bind-html=\"selectedItemCount === 0 ?\n" +
    "            ('BENTO_UI_MULTISELECT_OVERLAY_SELECT' | bentoTranslate:selectButtonText)\n" +
    "            :\n" +
    "            ('BENTO_UI_MULTISELECT_OVERLAY_EDIT' | bentoTranslate:editButtonText)\"\n" +
    "            type=\"button\"></button>\n" +
    "    <div bento-side-overlay-content tabindex=\"-1\" aria-label=\"{{'BENTO_UI_MULTISELECT_OVERLAY_CONTENT_DESCRIPTION' | bentoTranslate}} {{\n" +
    "      selectedItemCount === 0 ?\n" +
    "      ('BENTO_UI_MULTISELECT_OVERLAY_SELECT' | bentoTranslate:selectButtonText)\n" +
    "      :\n" +
    "      ('BENTO_UI_MULTISELECT_OVERLAY_EDIT' | bentoTranslate:editButtonText)\n" +
    "      }}\">\n" +
    "      <div bento-multiselect-list list-data=\"listData()\"\n" +
    "           on-change=\"onListChange()\" selected-items=\"selectedItems\"\n" +
    "           max-allowed-height=\"multiselectListMaxHeight\"\n" +
    "           select-all-text=\"{{selectAllText}}\" show-all-text=\"{{showAllText}}\"\n" +
    "           show-selected-text=\"{{showSelectedText}}\" sort=\"sort\"\n" +
    "           sort-reverse=\"sortReverse\" class=\"fill\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <span bento-test=\"label\" ng-show=\"!hideSelectedInfo()\"\n" +
    "        class=\"bento-multiselect-overlay-label\" tabindex=\"-1\">{{\n" +
    "    selectedItemCount === 0 ?\n" +
    "    ''\n" +
    "    :\n" +
    "    (selectedItemCount === 1 ?\n" +
    "      firstItemName\n" +
    "      :\n" +
    "    selectedItemCount === listData().length ?\n" +
    "        ('BENTO_UI_MULTISELECT_OVERLAY_ALL_SELECTED_INFO' | bentoTranslate:allSelectedInfoText\n" +
    "        | bentoStringReplace:'NUMBER':ngModel.length)\n" +
    "        :\n" +
    "        ('BENTO_UI_MULTISELECT_OVERLAY_SELECTED_INFO' | bentoTranslate:selectedInfoText\n" +
    "        | bentoStringReplace:'NUMBER':selectedItemCount)\n" +
    "    ) + '&nbsp;&nbsp;&nbsp;'\n" +
    "    }}</span>\n" +
    "</div>");
}]);

angular.module("../templates/pagination/bento-pagination.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/pagination/bento-pagination.html",
    "<ul class=\"bento-pagination\" ng-class=\"{'is-narrow':VM.goIconVisible}\">\n" +
    "  <li ng-if=\"VM.boundaryLinks!==false\" class=\"paginate_button first first_button\"\n" +
    "      ng-disabled=\"currentPage <= 1||VM.maxPage <= 1\" \n" +
    "      ng-class=\"{disabled: currentPage <= 1||VM.maxPage <= 1}\"\n" +
    "      bento-test=\"first-button\"\n" +
    "  >\n" +
    "    <a href ng-click=\"goToPage(1)\" ng-keypress=\"goToPage(1)\" class=\"btn btn-default paginate_child_button\" ng-attr-aria-disabled=\"{{currentPage <= 1 || VM.maxPage <= 1 ? 'true' : 'false'}}\"\n" +
    "    ng-attr-tabindex=\"{{currentPage <= 1 || VM.maxPage <= 1 ? '-1' : '0'}}\"><span class=\"bento-icon-chevron-first-left\"></span></a>\n" +
    "  </li>\n" +
    "  <li ng-if=\"directionLinks()!==false\" class=\"paginate_button previous\"\n" +
    "      ng-disabled=\"currentPage <= 1||VM.maxPage <= 1\" \n" +
    "      ng-class=\"{first_button: !VM.boundaryLinks, disabled: currentPage <= 1||VM.maxPage <= 1}\"\n" +
    "      bento-test=\"previous-button\"\n" +
    "  >\n" +
    "    <a href ng-click=\"goToPage(currentPage-1)\" ng-keypress=\"goToPage(currentPage-1)\" class=\"btn btn-default paginate_child_button\" ng-attr-aria-disabled=\"{{currentPage <= 1 || VM.maxPage <= 1 ? 'true' : 'false'}}\"\n" +
    "    ng-attr-tabindex=\"{{currentPage <= 1 || VM.maxPage <= 1 ? '-1' : '0'}}\"><span class=\"bento-icon-chevron-left\"></span></a>\n" +
    "  </li>\n" +
    "  <li ng-if=\"directionLinks()!==false\" class=\"paginate_button next\"\n" +
    "      ng-disabled=\"currentPage === VM.maxPage||VM.maxPage <= 1\" \n" +
    "      ng-class=\"{last_button: !VM.boundaryLinks, small_margin: VM.lastButtonSmallMargin, disabled: currentPage === VM.maxPage||VM.maxPage <= 1}\"\n" +
    "      bento-test=\"next-button\"\n" +
    "  >\n" +
    "    <a href ng-click=\"goToPage(currentPage+1)\" ng-keypress=\"goToPage(currentPage+1)\" class=\"btn btn-default paginate_child_button\" ng-attr-aria-disabled=\"{{currentPage === VM.maxPage||VM.maxPage <= 1 ? 'true' : 'false'}}\"\n" +
    "    ng-attr-tabindex=\"{{currentPage === VM.maxPage||VM.maxPage <= 1 ? '-1' : '0'}}\"><span class=\"bento-icon-chevron-right\"></span></a>\n" +
    "  </li>\n" +
    "  <li ng-if=\"VM.boundaryLinks!==false\" class=\"paginate_button last last_button\"\n" +
    "      ng-disabled=\"currentPage === VM.maxPage||VM.maxPage <= 1\" \n" +
    "      ng-class=\"{disabled: currentPage === VM.maxPage||VM.maxPage <= 1,small_margin: VM.lastButtonSmallMargin}\"\n" +
    "      bento-test=\"last-button\"\n" +
    "  >\n" +
    "    <a href ng-click=\"goToPage('max')\" ng-keypress=\"goToPage('max')\" class=\"btn btn-default paginate_child_button\"ng-attr-aria-disabled=\"{{currentPage === VM.maxPage||VM.maxPage <= 1 ? 'true' : 'false'}}\"\n" +
    "    ng-attr-tabindex=\"{{currentPage === VM.maxPage||VM.maxPage <= 1 ? '-1' : '0'}}\"><span class=\"bento-icon-chevron-last-right\"></span></a>\n" +
    "  </li>\n" +
    "  <li class=\"paginate_input_wrap\" ng-if=\"VM.goBtnVisible && VM.maxPage > 1\">\n" +
    "        <span class=\"input-group paginate-input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"{{currentPage}}\" ng-model=\"VM.tgtPage\"\n" +
    "                   ng-keypress=\"keySelectPage($event, VM.tgtPage)\"\n" +
    "                   bento-test=\"page-input\"\n" +
    "                   aria-label=\"{{'BENTO_UI_TBOX_PAGINATION_GOTO_PAGE' | bentoTranslate:GotoPage}}\"\n" +
    "            >\n" +
    "            <span class=\"input-group-btn paginate_input_wrap\">\n" +
    "            <button class=\"go btn btn-default btn-sq\" ng-click=\"goToPage(VM.tgtPage)\"\n" +
    "                    bento-test=\"go-button\"  \n" +
    "            >\n" +
    "              <i class=\"bento-icon-arrow-curved-right\" ng-if=\"VM.goIconVisible\"></i>\n" +
    "              {{VM.goIconVisible ? '':'BENTO_UI_PAGINATION_GO_BUTTON' | bentoTranslate:goToText}}\n" +
    "              </button>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "  </li>\n" +
    "  <li class=\"paginate-bento-select\">\n" +
    "    <div data-bento-select>\n" +
    "      <select class=\"form-control\" ng-model=\"itemsPerPage\"\n" +
    "              ng-options=\"item.value as item.label for item in itemsArray\"\n" +
    "              bento-test=\"items-per-page-select\"\n" +
    "      >\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </li>\n" +
    "  <li class=\"paginate_info\" ng-if=\"VM.maxPage > 0\">\n" +
    "        <span class=\"ng-scope ng-binding\" bento-test=\"info-label\">{{\n" +
    "            'BENTO_UI_PAGINATION_INFO_PAGE_TEXT'\n" +
    "            | bentoTranslate:infoPageText\n" +
    "            | bentoStringReplace:'_PAGE_':currentPage\n" +
    "            | bentoStringReplace:'_PAGES_': Math.ceil(totalItems / itemsPerPage)\n" +
    "            }} </span>\n" +
    "  </li>\n" +
    "  <li class=\"paginate_info_select\" ng-if=\"VM.maxPage > 0\">\n" +
    "        <span class=\"ng-scope ng-binding\" bento-test=\"info-select-label\">{{\n" +
    "            'BENTO_UI_PAGINATION_INFO_TEXT'\n" +
    "            | bentoTranslate:infoText\n" +
    "            | bentoStringReplace:'_START_':(currentPage - 1) * itemsPerPage + 1\n" +
    "            | bentoStringReplace:'_END_':(totalItems < (itemsPerPage * currentPage)) ? totalItems : (itemsPerPage * currentPage)\n" +
    "            | bentoStringReplace:'_MAX_':totalItems\n" +
    "            }} </span>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("../templates/progressbar/bento-progressbar.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/progressbar/bento-progressbar.html",
    "<div class=\"progressbar-cell\"><uib-progressbar animate=\"animate\" value=\"dynamic\" type=\"{{barType}}\"></uib-progressbar></div>\n" +
    "<div class=\"value-cell\">{{dynamic}}%</div>\n" +
    "");
}]);

angular.module("../templates/scrollable-bar/bento-scrollable-bar.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/scrollable-bar/bento-scrollable-bar.html",
    "<button class=\"bento-scrollable-bar-side-arrow left\" type=\"button\" tabindex=\"-1\" ng-disabled=\"$ctrl._isLeftArrowDisabled\"\n" +
    "        ng-click=\"$ctrl.scrollBack()\">\n" +
    "  <i class=\"bento-icon-chevron-large-left\"></i>\n" +
    "</button>\n" +
    "<div class=\"bento-scrollable-bar-inner\" ng-transclude></div>\n" +
    "<button class=\"bento-scrollable-bar-side-arrow right\" type=\"button\" tabindex=\"-1\" ng-disabled=\"$ctrl._isRightArrowDisabled\"\n" +
    "        ng-click=\"$ctrl.scrollForward()\">\n" +
    "  <i class=\"bento-icon-chevron-large-right\"></i>\n" +
    "</button>\n" +
    "<div class=\"bento-scrollable-bar-cover left\" ng-hide=\"$ctrl._isLeftArrowDisabled\"></div>\n" +
    "<div class=\"bento-scrollable-bar-cover right\" ng-hide=\"$ctrl._isRightArrowDisabled\"></div>");
}]);

angular.module("../templates/scrollable-toolbar/bento-scrollable-toolbar-item.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/scrollable-toolbar/bento-scrollable-toolbar-item.html",
    "<div uib-dropdown ng-if=\"$ctrl.item.dropdown\" bento-dropdown-append-to-parent\n" +
    "     auto-realign=\"true\" bento-append-to-parent=\"#{{$ctrl.scrollableToolbar.id}}\"\n" +
    "     bento-busy-loader=\"$ctrl.item.isBusy\" bento-busy-loader-size=\"small\" ng-hide=\"$ctrl.item.hidden\"\n" +
    "     >\n" +
    "  <button uib-dropdown-toggle type=\"button\" class=\"dropdown-toggle\" role=\"menuitem\"\n" +
    "          ng-attr-id=\"{{$ctrl.item.id}}\" ng-class=\"$ctrl.item.className\"\n" +
    "          ng-click=\"$ctrl.item.action && $ctrl.item.action()\" ng-disabled=\"$ctrl.item.disabled\">\n" +
    "    <i ng-if=\"$ctrl.item.icon\" ng-class=\"$ctrl.item.icon\"></i>\n" +
    "    {{$ctrl.item.label}}\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu bento-scrollable-toolbar-dropdown-menu\"\n" +
    "      ng-attr-ariaLabelledby=\"{{'toggleDropdown'+$ctrl.item.label}\">\n" +
    "    <li ng-repeat=\"dropdownItem in $ctrl.item.dropdown\">\n" +
    "      <a class=\"dropdown-item\" role=\"menuitem\" ng-disabled=\"menuitem.disabled\" \n" +
    "         ng-class=\"menuItem.className\" ng-click=\"dropdownItem.action && dropdownItem.action()\"\n" +
    "         href ng-attr-id=\"{{dropdownItem.id}}\">\n" +
    "        <i ng-if=\"dropdownItem.icon\" ng-class=\"dropdownItem.icon\"></i>\n" +
    "        {{dropdownItem.label}}\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div uib-dropdown ng-if=\"$ctrl.item.megamenu\" bento-dropdown-append-to-parent\n" +
    "     auto-realign=\"true\" bento-append-to-parent=\"#{{$ctrl.scrollableToolbar.id}}\"\n" +
    "     bento-busy-loader=\"$ctrl.item.isBusy\" bento-busy-loader-size=\"small\" ng-hide=\"$ctrl.item.hidden\"\n" +
    "     >\n" +
    "  <button uib-dropdown-toggle type=\"button\" class=\"dropdown-toggle\" role=\"menuitem\"\n" +
    "          ng-attr-id=\"{{$ctrl.item.id}}\" ng-class=\"$ctrl.item.className\"\n" +
    "          ng-click=\"$ctrl.item.action && $ctrl.item.action()\" ng-disabled=\"$ctrl.item.disabled\">\n" +
    "    <i ng-if=\"$ctrl.item.icon\" ng-class=\"$ctrl.item.icon\"></i>\n" +
    "    {{$ctrl.item.label}}\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu megamenu\" ng-attr-ariaLabelledby=\"{{'toggleDropdown'+$ctrl.item.label}\">\n" +
    "    <li ng-repeat=\"column in $ctrl.item.megamenu\" class=\"column\">\n" +
    "      <h5 ng-if=\"column.label\">{{column.label}}</h5>\n" +
    "      <a role=\"\n" +
    "      menuitem\" ng-repeat=\"item in column.menu\" click=\".item.action && .item.action()\"\n" +
    "      ng-class=\"item.className\" href ng-disabled=\"item.disabled\" ng-attr-id=\"{{item.id}}\">\n" +
    "    <i ng-if=\"item.icon\" ng-class=\"item.icon\"></i>\n" +
    "    {{item.label}}\n" +
    "    </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"$ctrl.item.template\" class=\"bento-toolbar-custom-item\" ng-include  ng-hide=\"$ctrl.item.hidden\"\n" +
    "     src=\"$ctrl.item.template\" bento-busy-loader=\"$ctrl.item.isBusy\" bento-busy-loader-size=\"small\">\n" +
    "</div>\n" +
    "\n" +
    "<div bento-busy-loader=\"$ctrl.item.isBusy\" bento-busy-loader-size=\"small\" ng-hide=\"$ctrl.item.hidden\">\n" +
    "  <button ng-if=\"!$ctrl.item.dropdown && !$ctrl.item.megamenu && !$ctrl.item.template\"\n" +
    "  type=\"button\" role=\"menuitem\" ng-class=\"$ctrl.item.className\" ng-click=\"$ctrl.item.action && $ctrl.item.action()\"\n" +
    "  ng-disabled=\"$ctrl.item.disabled\" ng-attr-id=\"{{$ctrl.item.id}}\">\n" +
    "<i ng-if=\"$ctrl.item.icon\" ng-class=\"$ctrl.item.icon\"></i>\n" +
    "{{$ctrl.item.label}}\n" +
    "<span ng-if=\"$ctrl.item.smartbadge\">\n" +
    "  <span bento-smart-badge details=$ctrl.item.smartbadge></span>\n" +
    "</span>\n" +
    "</button></div>\n" +
    "");
}]);

angular.module("../templates/scrollable-toolbar/bento-scrollable-toolbar.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/scrollable-toolbar/bento-scrollable-toolbar.html",
    "<div class=\"bento-scrollable-toolbar-wrapper bento-toolbar\">\n" +
    "  <div class=\"bento-scrollable-toolbar-inner\">\n" +
    "    <div ng-transclude=\"navbarLeft\"></div>\n" +
    "    <div class=\"navbar-nav\">\n" +
    "      <bento-scrollable-bar role=\"menu\" controller=\"$ctrl.scrollableBarController\">\n" +
    "        <bento-scrollable-toolbar-item ng-repeat=\"item in $ctrl.toolbarData\" item=\"item\"></bento-scrollable-toolbar-item>\n" +
    "      </bento-scrollable-bar>\n" +
    "    </div>\n" +
    "    <div ng-transclude=\"navbarRight\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("../templates/side_nav/bento-side-nav.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/side_nav/bento-side-nav.html",
    "<div class=\"bento-side-nav\">\n" +
    "    <span ng-if=\"!nav.hideSearch\" class=\"bento-search force-desktop\">\n" +
    "    <input bento-reset\n" +
    "           class=\"form-control input-sm\"\n" +
    "           type=\"text\"\n" +
    "           placeholder=\"Search\"\n" +
    "           ng-change=\"nav.onSearchChange()\"\n" +
    "           ng-model=\"nav.search\"\n" +
    "    />\n" +
    "    </span>\n" +
    "    <div class=\"bento-side-nav-container\">\n" +
    "      <div class=\"bento-side-nav-item\"\n" +
    "           ng-repeat=\"navItem in nav._data\" ng-if=\"!navItem.hidden\"\n" +
    "           ng-class=\"{active: nav.activeLinkLabel === navItem.link}\"\n" +
    "      >\n" +
    "        <h3 ng-if=\"navItem.is_eyebrow\" class=\"bento-eyebrow-header\">{{navItem.title}}</h3>\n" +
    "        <a ng-if=\"!navItem.is_eyebrow\" ng-href=\"#/{{navItem.link}}\" ng-bind-html=\"navItem.title\"></a>\n" +
    "        <span ng-repeat=\"label in navItem.labels\" class=\"label\" ng-class=\"{'label-{{label.type}}':label.type!==undefined}\">{{label.title}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "  </div>\n" +
    "  ");
}]);

angular.module("../templates/skip_links/bento-skip-links.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/skip_links/bento-skip-links.html",
    "<div ng-repeat=\"link in $ctrl.links track by $index\">\n" +
    "  <div class=\"bui-skip-link-divider\" ng-if=\"$index > 0\"></div>\n" +
    "  <a href=\"#\" ng-click=\"$ctrl.onLinkClick($event, link)\">{{link.text}}</a>\n" +
    "</div>");
}]);

angular.module("../templates/spread/bento-spread.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/spread/bento-spread.html",
    "<div id=\"ss\" class=\"bento-spreadjs\"></div>");
}]);

angular.module("../templates/tags_input/bento-tags-input-pill.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/tags_input/bento-tags-input-pill.html",
    "<div tabindex=\"-1\"\n" +
    "     class=\"bento-tags-input-pill\"\n" +
    "     ng-class=\"getClass()\"\n" +
    "     title=\"{{label}}\"\n" +
    "    >\n" +
    "  <i class=\"bento-icon-edit\"\n" +
    "     ng-mousedown=\"onEditClick($event)\"\n" +
    "     tabindex=\"-1\"\n" +
    "     ng-if=\"!isEditing && editable && !ngReadonly\"\n" +
    "     bento-test=\"edit-icon\"\n" +
    "     ></i>\n" +
    "  <span\n" +
    "      class=\"bento-tags-input-pill-label\"\n" +
    "      ng-hide=\"isEditing\"\n" +
    "      bento-test=\"label\"\n" +
    "      >{{label}}</span>\n" +
    "  <i class=\"bento-icon-close-x\"\n" +
    "     tabindex=\"-1\"\n" +
    "     ng-click=\"onCloseClick($event)\"\n" +
    "     ng-if=\"!isEditing && !ngReadonly\"\n" +
    "     bento-test=\"close\"\n" +
    "     ></i>\n" +
    "  <input ng-model=\"editLabel\"\n" +
    "         ng-trim=\"false\"\n" +
    "         ng-keydown=\"onKeydown($event)\"\n" +
    "         ng-blur=\"onInputBlur($event)\"\n" +
    "         type=\"text\"\n" +
    "         ng-show=\"isEditing\"\n" +
    "         bento-test=\"input-edit\"\n" +
    "         tabindex=\"-1\"\n" +
    "         />\n" +
    "    <span class=\"bento-tags-input-pill-size-ref\">{{editLabel | bentoTagsInputPillFilter}}</span>\n" +
    "</div>");
}]);

angular.module("../templates/tags_input/bento-tags-input.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/tags_input/bento-tags-input.html",
    "<div class=\"bento-tags-input form-control\"\n" +
    "     ng-class=\"getClass()\"\n" +
    "     ng-keydown=\"onKeydown($event)\">\n" +
    "  <div ng-repeat=\"tag in ngModel track by $index\"\n" +
    "       tag=\"tag\"\n" +
    "       bento-tags-input-pill\n" +
    "       editable=\"editable\"\n" +
    "       index=\"$index\"\n" +
    "       is-active=\"$index === activePill\"\n" +
    "       label=\"tag[propertyName]\"\n" +
    "       length=\"ngModel.length\"\n" +
    "       ng-blur=\"onPillBlur($index)\"\n" +
    "       ng-disabled=\"ngDisabled\"\n" +
    "       ng-focus=\"onPillFocus($index)\"\n" +
    "       on-close=\"onPillClose(index)\"\n" +
    "       on-delete-left=\"onPillDeleteLeft(index)\"\n" +
    "       on-delete-right=\"onPillDeleteRight(index)\"\n" +
    "       on-edit=\"onPillEdit(index)\"\n" +
    "       on-move-left=\"onPillMoveLeft(index)\"\n" +
    "       on-move-right=\"onPillMoveRight(index)\"\n" +
    "       on-pill-change=\"onPillChange(index,label, oldLabel)\"\n" +
    "       on-redundant-tag=\"onPillRedundant(index, isRedundant)\"\n" +
    "       on-tag-length=\"onPillTagLength(index, isValidLength)\"\n" +
    "       resize-callback=\"resizeInput(rect)\"\n" +
    "       ng-readonly=\"ngReadonly\"\n" +
    "       add-on-comma=\"addOnComma\"\n" +
    "       add-on-space=\"addOnSpace\"\n" +
    "       bento-test=\"tag-pill-{{$index}}\"\n" +
    "      ></div>\n" +
    "  <input class=\"bento-tags-input-text\"\n" +
    "         ng-disabled=\"ngDisabled\"\n" +
    "         ng-model=\"inputText\"\n" +
    "         ng-focus=\"onInputFocus()\"\n" +
    "         ng-keypress=\"onKeypress($event)\"\n" +
    "         ng-keyup=\"onKeyup($event)\"\n" +
    "         ng-show=\"!ngReadonly && !disableKeyInput\"\n" +
    "         placeholder=\"{{(!ngModel || ngModel.length === 0)? placeholder: ''}}\"\n" +
    "         type=\"text\"\n" +
    "         bento-test=\"input-tag\"\n" +
    "      />\n" +
    "  <input class=\"bento-tags-input-text-hidden\"\n" +
    "         ng-disabled=\"ngDisabled\"\n" +
    "         ng-show=\"!ngReadonly && !disableKeyInput\"\n" +
    "         ng-focus=\"onHiddenInputFocus()\"\n" +
    "         tabindex=\"-1\"\n" +
    "      />\n" +
    "</div>");
}]);

angular.module("../templates/tile-ribbon/bento_tile_ribbon.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/tile-ribbon/bento_tile_ribbon.html",
    "<div class=\"bento-tile-ribbon-header\"\n" +
    "     ng-class=\"!$ctrl.title && !$ctrl.showCollapseToggle ? 'btrh-hidden' : (!$ctrl.title && $ctrl.showCollapseToggle? 'btrh-collapse' : 'btrh-title')\" title> <!-- intentionally empty title -->\n" +
    "  <h1 ng-if=\"$ctrl.title\">{{$ctrl.title}}</h1>\n" +
    "  <div ng-if=\"$ctrl.showCollapseToggle\"\n" +
    "       class=\"bento-tile-ribbon-visibility-toggle btn btn-link\"\n" +
    "       ng-click=\"$ctrl.toggleVisibility()\">\n" +
    "    <i ng-class=\"$ctrl.ribbonHidden ? 'bento-icon-plus-plain' : 'bento-icon-minus-plain'\"></i>\n" +
    "    <span>{{ ($ctrl.ribbonHidden? 'BENTO_UI_TILE_RIBBON_TOGGLE_SHOW'\n" +
    "          : 'BENTO_UI_TILE_RIBBON_TOGGLE_HIDE') | bentoTranslate }}</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"bento-tile-ribbon-container\"\n" +
    "     ng-class=\"{hidden: $ctrl.ribbonHidden}\" title> <!-- intentionally empty title -->\n" +
    "  <button class=\"bento-tile-ribbon-arrow left\"\n" +
    "          ng-click=\"$ctrl.onArrowClick(false)\"\n" +
    "          ng-disabled=\"$ctrl.disableLeftArrow\">\n" +
    "    <i class=\"bento-icon-chevron-large-left\"></i>\n" +
    "  </button>\n" +
    "  <div class=\"bento-tile-ribbon-wrapper\">\n" +
    "    <div class=\"bento-tile-ribbon-inner\">\n" +
    "      <div class=\"bento-tile-ribbon-panel\">\n" +
    "        <bento-tile-ribbon-tile ng-repeat=\"item in $ctrl.items\"\n" +
    "                                item=\"item\"\n" +
    "                                width=\"$ctrl.itemWidth\"\n" +
    "                                on-select=\"$ctrl.onTileSelect(tile)\"\n" +
    "                                template=\"$ctrl.tileTemplate\">\n" +
    "        </bento-tile-ribbon-tile>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <button class=\"bento-tile-ribbon-arrow right\"\n" +
    "          ng-click=\"$ctrl.onArrowClick(true)\"\n" +
    "          ng-disabled=\"$ctrl.disableRightArrow\">\n" +
    "    <i class=\"bento-icon-chevron-large-right\"></i>\n" +
    "  </button>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../templates/tile-ribbon/bento_tile_ribbon_tile.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/tile-ribbon/bento_tile_ribbon_tile.html",
    "<div class=\"bento-ribbon-tile-inner\"\n" +
    "     title=\"{{$ctrl.item.value ? $ctrl.item.value : $ctrl.item.header ? $ctrl.item.header : null}}\">\n" +
    "  <div ng-if=\"!$ctrl.template\">\n" +
    "    <div class=\"bento-ribbon-tile-value-wrapper\">\n" +
    "      <div class=\"bento-ribbon-tile-value\">{{$ctrl.item.value}}</div>\n" +
    "      <a ng-if=\"$ctrl.item.linkTitle\"\n" +
    "         ng-click=\"$ctrl.onLinkClick($event)\"\n" +
    "         class=\"bento-ribbon-tile-link\"\n" +
    "         tabindex=\"0\">{{$ctrl.item.linkTitle}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"bento-ribbon-tile-header-wrapper\">\n" +
    "      <div ng-if=\"$ctrl.item.indicator\"\n" +
    "           class=\"bento-ribbon-tile-indicator\"\n" +
    "           ng-class=\"$ctrl.item.indicator\"></div>\n" +
    "      <p class=\"bento-ribbon-tile-header\">{{$ctrl.item.header}}</p>\n" +
    "    </div>\n" +
    "    <div ng-if=\"$ctrl.item.description\"\n" +
    "         class=\"bento-ribbon-tile-description\">{{$ctrl.item.description}}</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../templates/toggle/bento-toggle.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/toggle/bento-toggle.html",
    "<div class=\"bento-toggle\"\n" +
    "     tabindex=\"0\"\n" +
    "     ng-class=\"{on : ngModel}\"\n" +
    "     aria-label=\"{{ngModel? ('BENTO_UI_TOGGLE_ON' | bentoTranslate) : ('BENTO_UI_TOGGLE_OFF' | bentoTranslate)}}\"\n" +
    "     ng-keydown=\"onKeydown($event)\"\n" +
    "  >\n" +
    "  <div class=\"bento-toggle-nob\"></div>\n" +
    "</div>");
}]);

angular.module("../templates/toolbar/bento-toolbar.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/toolbar/bento-toolbar.html",
    "<div ng-transclude=\"navbarLeft\" class=\"toolbar-navbar-left\" role=\"group\">\n" +
    "</div>\n" +
    "<ul class=\"nav navbar-nav\" role=\"menu\">\n" +
    "  <li ng-disabled=\"button.disabled\" \n" +
    "      role=\"menuitem\"\n" +
    "      aria-checked=\"{{button.active}}\"\n" +
    "      ng-attr-uib-dropdown=\"{{angular.isDefined(button.dropdown) || undefined}}\" \n" +
    "      ng-attr-uib-tooltip=\"{{button.tooltip}}\"\n" +
    "      tooltip-placement=\"{{button.tooltipPlacement || 'bottom'}}\"\n" +
    "      ng-if=\"!button.hidden && button.isVisible\"\n" +
    "      bento-toolbar-button\n" +
    "      ng-class=\"[button.className,{'transparent':button.isTransparent===true,'active':button.active}]\"\n" +
    "      ng-repeat=\"button in bentoToolbarCtrl.tData\"\n" +
    "      data-button-id=\"{{$index}}\"\n" +
    "      bento-busy-loader-size=\"small\"\n" +
    "      ng-attr-bento-busy-loader=\"button.isBusy\"\n" +
    "      bento-toolbar-ng-repeat-complete\n" +
    "      >\n" +
    "    <!-- if no dropdown, and regular button -->\n" +
    "    <a ng-if=\"!button.dropdown\" \n" +
    "       href=\"\" \n" +
    "       role=\"button\"\n" +
    "       ng-attr-id=\"{{button.id}}\" \n" +
    "       ng-class=\"{'disabled':button.disabled}\"\n" +
    "       ng-click=\"button.disabled||button.action($event)\"\n" +
    "       tabindex=\"{{button.disabled ? -1: 0}}\">\n" +
    "      <i ng-if=\"button.icon\" class=\"{{button.icon}}\"></i>\n" +
    "      {{button.label}}\n" +
    "      <span class=\"toolbar-smart-badge\" bento-smart-badge details=button.smartbadge></span>\n" +
    "    </a>\n" +
    "    <!-- if there's a dropdown -->\n" +
    "    <a ng-if=\"button.dropdown\" \n" +
    "       href=\"\"\n" +
    "       class=\"dropdown-toggle\" \n" +
    "       role=\"button\"\n" +
    "       ng-disabled=\"button.disabled\"\n" +
    "       ng-attr-id=\"{{button.id}}\" \n" +
    "       ng-click=\"button.disabled||button.action?button.action($event):$event.preventDefault()\"\n" +
    "       tabindex=\"{{button.disabled ? -1: 0}}\"\n" +
    "       uib-dropdown-toggle>\n" +
    "       <i ng-if=\"button.icon\" class=\"{{button.icon}}\"></i>\n" +
    "       {{button.label}}\n" +
    "       <span class=\"toolbar-smart-badge\" bento-smart-badge details=button.smartbadge></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"button.dropdown\" class=\"dropdown-menu\" role=\"menu\">\n" +
    "      <li ng-disabled=\"subBtn.disabled\" \n" +
    "          ng-repeat=\"subBtn in button.dropdown\"\n" +
    "          role=\"menuitem\"\n" +
    "          >\n" +
    "        <span ng-if=\"subBtn.separated\" class=\"divider\" role=\"separator\"></span>\n" +
    "        <a href=\"\" \n" +
    "           role=\"button\"\n" +
    "           ng-click=\"subBtn.disabled||subBtn.action($event)\"\n" +
    "           ng-attr-id=\"{{subBtn.id}}\" \n" +
    "           tabindex=\"{{subBtn.disabled ? -1: 0}}\">\n" +
    "           <i ng-if=\"subBtn.icon\" class=\"{{subBtn.icon}}\"></i>\n" +
    "           {{subBtn.label}}\n" +
    "           <span class=\"toolbar-smart-badge\" bento-smart-badge details=subBtn.smartbadge></span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </li>\n" +
    "  <!-- more button -->\n" +
    "  <li ng-if=\"bentoToolbarCtrl.moreVisible\" style=\"opacity:0;\" class=\"more-button dropdown\" data-more-buttons=\"true\" role=\"menuitem\" bento-toolbar-button uib-dropdown>\n" +
    "    <a href=\"\" \n" +
    "       class=\"dropdown-toggle\"\n" +
    "       uib-dropdown-toggle\n" +
    "       role=\"button\"\n" +
    "       tabindex=\"0\"\n" +
    "    >{{ bentoToolbarCtrl.moreButtonLabel || \"BENTO_UI_TOOLBAR_MORE\" | bentoTranslate }}\n" +
    "    </a>\n" +
    "    <ul class=\"more-dropdown-menu dropdown-menu\" ng-click=\"$event.stopPropagation()\" role=\"menu\">\n" +
    "      <li ng-disabled=\"button.disabled\" \n" +
    "          ng-repeat=\"button in bentoToolbarCtrl.tData\"\n" +
    "          ng-if=\"!button.hidden && !button.isVisible\"\n" +
    "          ng-class=\"[button.className,{'toolbar-dropdown-close':bentoToolbarDropdownCtrl.isOpen!=undefined&&bentoToolbarDropdownCtrl.isOpen===false,'toolbar-dropdown-open':bentoToolbarDropdownCtrl.isOpen===true, 'dropdown':button.dropdown}]\"\n" +
    "          ng-attr-bento-toolbar-dropdown=\"{{angular.isDefined(button.dropdown) || undefined}}\" \n" +
    "          role=\"menuitem\"\n" +
    "          bento-busy-loader-size=\"small\"\n" +
    "          ng-attr-bento-busy-loader=\"button.isBusy\"\n" +
    "          >\n" +
    "        <!-- if no dropdown, and regular button -->\n" +
    "        <span ng-if=\"button.separated\" class=\"divider\" role=\"separator\"></span>\n" +
    "        <a ng-if=\"!button.dropdown\" \n" +
    "           href=\"\" \n" +
    "           role=\"button\"\n" +
    "           ng-attr-id=\"{{button.id}}\" \n" +
    "           ng-click=\"button.disabled||button.action($event)\"\n" +
    "           tabindex=\"{{button.disabled ? -1: 0}}\">\n" +
    "           <i ng-if=\"button.icon\" class=\"{{button.icon}}\"></i>\n" +
    "           {{button.label}}\n" +
    "           <span class=\"toolbar-smart-badge\" bento-smart-badge details=button.smartbadge></span>\n" +
    "        </a>\n" +
    "        <!-- if there's a dropdown -->\n" +
    "        <a ng-if=\"button.dropdown\" \n" +
    "           href=\"\"\n" +
    "           role=\"button\"\n" +
    "           class=\"toolbar-dropdown-toggle\" \n" +
    "           ng-disabled=\"button.disabled\"\n" +
    "           ng-attr-id=\"{{button.id}}\" \n" +
    "           aria-haspopup=\"true\"\n" +
    "           aria-expanded=\"{{bentoToolbarDropdownCtrl.isOpen}}\"\n" +
    "           ng-attr-tabindex=\"{{button.disabled ? -1: 0}}\"\n" +
    "           ng-click=\"$event.preventDefault();bentoToolbarDropdownCtrl.toggle(button)\">\n" +
    "           <i ng-if=\"button.icon\" class=\"{{button.icon}}\"></i>\n" +
    "           {{button.label}}\n" +
    "           <span class=\"toolbar-smart-badge\" bento-smart-badge details=button.smartbadge></span>\n" +
    "        </a>\n" +
    "        <ul ng-if=\"button.dropdown\" class=\"toolbar-dropdown-menu\" role=\"menu\">\n" +
    "          <li ng-disabled=\"subBtn.disabled\" \n" +
    "              ng-repeat=\"subBtn in button.dropdown\"\n" +
    "              role=\"menuitem\"\n" +
    "              >\n" +
    "            <span ng-if=\"subBtn.separated\" class=\"divider\" role=\"separator\"></span>\n" +
    "            <a href=\"\" \n" +
    "               role=\"button\"\n" +
    "               ng-attr-id=\"{{subBtn.id}}\"\n" +
    "               ng-click=\"subBtn.disabled||subBtn.action($event)\"\n" +
    "               tabindex=\"{{subBtn.disabled ? -1: 0}}\">\n" +
    "               <i ng-if=\"subBtn.icon\" class=\"{{subBtn.icon}}\"></i>\n" +
    "               {{subBtn.label}}\n" +
    "               <span class=\"toolbar-smart-badge\" bento-smart-badge details=subBtn.smartbadge></span>\n" +
    "            </a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "<div ng-transclude class=\"toolbar-navbar-right\" role=\"group\">\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/transfer_box/bento-flexgrid-transferbox-base.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/transfer_box/bento-flexgrid-transferbox-base.html",
    "<div class=\"bento-transferbox\" ng-class=\"{'force-desktop':desktopMode,'no-pagination':hidePagination}\" ng-style=\"bentoTransferBoxCtrl.style\" >\n" +
    "  <div id=\"main-splitter-group\"\n" +
    "       data-bento-splitter-group\n" +
    "       data-left-width=\"{{leftWidth || '60%'}}\"\n" +
    "       data-is-left-collapsed=\"toggleRight\"\n" +
    "       data-collapsed=\"false\"\n" +
    "       data-resizable=\"true\"\n" +
    "       data-on-resize=\"bentoTransferBoxCtrl.onSplitterResize()\"\n" +
    "       data-no-collapse=\"true\"\n" +
    "       class=\"\">\n" +
    "    <div data-bento-splitter-group-left>\n" +
    "        <div bento-flexgrid-tbox\n" +
    "          column-definitions=\"bentoTransferBoxCtrl.columnDefinitions\"\n" +
    "          grid-data=\"bentoTransferBoxCtrl.gridDataOne\"\n" +
    "          config=\"bentoTransferBoxCtrl.config\"\n" +
    "          transfer-items=\"bentoTransferBoxCtrl.checkItemsOne(items,gridData)\"\n" +
    "          show-filters=\"showFilters\"\n" +
    "          hide-pagination=\"hidePagination\"\n" +
    "          desktop-mode=\"desktopMode\"\n" +
    "          control=\"bentoTransferBoxCtrl.box1\"\n" +
    "          child-items-path=\"childItemsPath\"\n" +
    "          disable-transfer=\"bentoTransferBoxCtrl.config.disableTransfer\"\n" +
    "          grid-template-url=\"gridTemplateUrl\"\n" +
    "          box-one=\"true\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <section data-bento-splitter-group-main>\n" +
    "        <div bento-flexgrid-tbox\n" +
    "          column-definitions=\"bentoTransferBoxCtrl.columnDefinitions\"\n" +
    "          grid-data=\"bentoTransferBoxCtrl.gridDataTwo\"\n" +
    "          config=\"bentoTransferBoxCtrl.config\"\n" +
    "          show-filters=\"showFilters\"\n" +
    "          hide-pagination=\"hidePagination\"\n" +
    "          desktop-mode=\"desktopMode\"\n" +
    "          transfer-items='bentoTransferBoxCtrl.checkItemsTwo(items,gridData)'\n" +
    "          child-items-path=\"childItemsPath\"\n" +
    "          disable-transfer=\"bentoTransferBoxCtrl.config.disableTransfer\"\n" +
    "          grid-template-url=\"gridTemplateUrl\"\n" +
    "          control=\"bentoTransferBoxCtrl.box2\">\n" +
    "        </div>\n" +
    "    </section>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/transfer_box/bento-flexgrid-transferbox-grid.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/transfer_box/bento-flexgrid-transferbox-grid.html",
    "<div class=\"no-padding\">\n" +
    "  <!-- Show Info only once -->\n" +
    "  <p class=\"hidden container-info\"\n" +
    "     ng-if=\"bentoFlexgridTboxCtrl.boxOne\">\n" +
    "     The Transferbox is a tool to move items between two lists, typically from the source side to the destination side.\n" +
    "  </p>\n" +
    "\n" +
    "  <p class=\"hidden container-title\">\n" +
    "    {{bentoFlexgridTboxCtrl.tBoxAriaLabel.tboxSelectedAriaLabel}}\n" +
    "  </p>\n" +
    "  <!-- box one header -->\n" +
    "  <bento-scrollable-bar ng-if=\"bentoFlexgridTboxCtrl.boxOne\" class=\"tbox-sbar\" role=\"menu\" controller=\"bentoFlexgridTboxCtrl.scrollableBarControllerLeft\">\n" +
    "    <div class=\"bento-toolbar transferbox-header tbox-container left\">\n" +
    "      <ul class=\"transferbox-header-info\"\n" +
    "            ng-show=\"bentoFlexgridTboxCtrl.config.boxOneInfoShown\">\n" +
    "        <li class=\"bento-search transferbox-searchbox force-desktop\">\n" +
    "          <!-- <wj-input-mask ng-model=\"bentoFlexgridTboxCtrl.globalFilterText\" value-changed=\"bentoFlexgridTboxCtrl.globalFilterTextChange()\"></wj-input-mask> -->\n" +
    "          <input type=\"text\" \n" +
    "                bento-reset\n" +
    "                ng-change=\"bentoFlexgridTboxCtrl.globalFilterTextChange()\"\n" +
    "                ng-model=\"bentoFlexgridTboxCtrl.globalFilterText\"\n" +
    "                placeholder=\"{{'BENTO_UI_TRANSFER_BOX_BASIC_SEARCH_TEXT' | bentoTranslate:searchText}}\">\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <h5 class=\"transferbox-header-title\">\n" +
    "            {{bentoFlexgridTboxCtrl.config.boxOneTitle}}\n" +
    "          </h5>\n" +
    "          <!-- INFO TEXT ONE -->\n" +
    "          <div class=\"transferbox-select-info\">\n" +
    "            {{\n" +
    "              bentoFlexgridTboxCtrl.selectedItems.length > 0 ?\n" +
    "              (BENTO_UI_TRANSFER_BOX_INFO_TEXT\n" +
    "              | bentoTranslate:bentoFlexgridTboxCtrl.config.infoText\n" +
    "              | bentoStringReplace:'_SELECTED_':bentoFlexgridTboxCtrl.selectedItems.length\n" +
    "              | bentoStringReplace:'_TOTAL_':bentoFlexgridTboxCtrl.config.totalItems)\n" +
    "              :\n" +
    "              bentoFlexgridTboxCtrl.config.totalItems;\n" +
    "            }}\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "\n" +
    "      <!-- IE 11 Fix for ScrollableBar - Do not remove this empty DIV container -->\n" +
    "      <div class=\"\">\n" +
    "        <ul class=\"nav navbar-right transferbox-buttons\" role=\"group\">\n" +
    "          <li class=\"toggle-button-order\">\n" +
    "            <button class=\"btn btn-default btn-icon btn-toggle\"\n" +
    "                    ng-class=\"{active:filter.showFilterIcons}\"\n" +
    "                    ng-click=\"bentoFlexgridTboxCtrl.toggleFilter()\">\n" +
    "              <i class=\"bento-icon-filter-az\"></i>\n" +
    "            </button>\n" +
    "          </li>\n" +
    "          <li class=\"transfer-button-order\">\n" +
    "            <button class=\"btn transferbox-btn\"\n" +
    "                    ng-class=\"{'btn-primary':bentoFlexgridTboxCtrl.selectedItems.length>0,'btn-default':!bentoFlexgridTboxCtrl.selectedItems.length}\"\n" +
    "                    ng-disabled=\"bentoFlexgridTboxCtrl.selectedItems.length<=0 || disableTransfer\"\n" +
    "                    ng-click=\"bentoFlexgridTboxCtrl.transferItems()\">\n" +
    "                    {{\n" +
    "                      bentoFlexgridTboxCtrl.config.transferBtnTextOne ? \n" +
    "                      ('BENTO_UI_TRANSFER_BOX_BTN_TEXT_ONE' | bentoTranslate:bentoFlexgridTboxCtrl.config.transferBtnTextOne) :\n" +
    "                      ('BENTO_UI_TRANSFER_BOX_BTN_TEXT' | bentoTranslate:bentoFlexgridTboxCtrl.config.transferBtnText)\n" +
    "                    }}\n" +
    "                <span class=\"bento-icon-chevron-right\"></span>\n" +
    "              </button>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </bento-scrollable-bar>\n" +
    "\n" +
    "  <!-- box two header -->\n" +
    "  <bento-scrollable-bar ng-if=\"!bentoFlexgridTboxCtrl.boxOne\" class=\"tbox-sbar\" role=\"menu\" controller=\"bentoFlexgridTboxCtrl.scrollableBarControllerRight\">\n" +
    "    <div class=\"bento-toolbar transferbox-header tbox-container right\">\n" +
    "      <div class=\"\">\n" +
    "        <ul class=\"nav navbar-right transferbox-buttons\" role=\"group\">\n" +
    "          <li class=\"transfer-button-order\">\n" +
    "            <button class=\"btn transferbox-btn\"\n" +
    "                    ng-disabled=\"bentoFlexgridTboxCtrl.selectedItems.length<=0 || disableTransfer\"\n" +
    "                    ng-click=\"bentoFlexgridTboxCtrl.transferItems()\"\n" +
    "                    ng-class=\"{'btn-primary':bentoFlexgridTboxCtrl.selectedItems.length>0,'btn-default':!bentoFlexgridTboxCtrl.selectedItems.length}\">\n" +
    "              <span class=\"bento-icon-chevron-left\"></span>\n" +
    "              {{\n" +
    "                bentoFlexgridTboxCtrl.config.transferBtnTextTwo ?\n" +
    "                ('BENTO_UI_TRANSFER_BOX_BTN_TEXT_TWO' | bentoTranslate:bentoFlexgridTboxCtrl.config.transferBtnTextTwo) :\n" +
    "                ('BENTO_UI_TRANSFER_BOX_BTN_TEXT' | bentoTranslate:bentoFlexgridTboxCtrl.config.transferBtnText)\n" +
    "              }}\n" +
    "            </button>\n" +
    "          </li>\n" +
    "          <li class=\"toggle-button-order\">\n" +
    "            <button class=\"btn btn-default btn-icon btn-toggle\"\n" +
    "                    ng-class=\"{active:filter.showFilterIcons}\"\n" +
    "                    ng-click=\"bentoFlexgridTboxCtrl.toggleFilter()\">\n" +
    "              <i class=\"bento-icon-filter-az\"></i>\n" +
    "            </button>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <ul class=\"transferbox-header-info\"\n" +
    "          ng-show=\"bentoFlexgridTboxCtrl.config.boxTwoInfoShown\">\n" +
    "        <li>\n" +
    "          <h5 class=\"transferbox-header-title\">\n" +
    "            {{bentoFlexgridTboxCtrl.config.boxTwoTitle}}\n" +
    "          </h5>\n" +
    "\n" +
    "          <!-- INFO TEXT TWO -->\n" +
    "          <div class=\"transferbox-select-info\">{{\n" +
    "            bentoFlexgridTboxCtrl.selectedItems.length > 0 ?\n" +
    "            ('BENTO_UI_TRANSFER_BOX_INFO_TEXT'\n" +
    "            | bentoTranslate:bentoFlexgridTboxCtrl.config.infoText\n" +
    "            | bentoStringReplace:'_SELECTED_':bentoFlexgridTboxCtrl.selectedItems.length\n" +
    "            | bentoStringReplace:'_TOTAL_':bentoFlexgridTboxCtrl.config.totalItems)\n" +
    "            :\n" +
    "            bentoFlexgridTboxCtrl.config.totalItems\n" +
    "            }}\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li class=\"bento-search transferbox-searchbox right force-desktop\">\n" +
    "          <input type=\"text\"\n" +
    "                bento-reset\n" +
    "                ng-change=\"bentoFlexgridTboxCtrl.globalFilterTextChange()\"\n" +
    "                ng-model=\"bentoFlexgridTboxCtrl.globalFilterText\"\n" +
    "                placeholder=\"{{'BENTO_UI_TRANSFER_BOX_BASIC_SEARCH_TEXT' | bentoTranslate:searchText}}\">\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </bento-scrollable-bar>\n" +
    "\n" +
    "  <wj-flex-grid\n" +
    "        control=\"bentoFlexgridTboxCtrl.flexGrid\"\n" +
    "        items-source=\"bentoFlexgridTboxCtrl.config.collectionView\"\n" +
    "        initialized=\"bentoFlexgridTboxCtrl.initialized(s,e)\"\n" +
    "        class=\"bento-flex-grid has-row-hover\"\n" +
    "        ng-attr-child-items-path=\"{{childItemsPath}}\"\n" +
    "        sort-row-index=\"0\"\n" +
    "        item-formatter=\"bentoFlexgridTboxCtrl.itemFormatter\"\n" +
    "        ng-style=\"{'height':bentoFlexgridTboxCtrl.config.height+(bentoFlexgridTboxCtrl.desktopMode ? 10 : 0)-bentoFlexgridTboxCtrl.config.offsetHeight+bentoFlexgridTboxCtrl.config.paginationOffsetHeight+'px'}\"\n" +
    "        selection-mode=\"None\"\n" +
    "        >\n" +
    "      <wj-flex-grid-filter initialized=\"bentoFlexgridTboxCtrl.initFilter(s)\" filter-applied=\"bentoFlexgridTboxCtrl.filterApplied(s)\"></wj-flex-grid-filter>\n" +
    "      <wj-flex-grid-cell-template cell-type=\"TopLeft\">\n" +
    "          <i \n" +
    "            ng-if=\"$row.index === 0\"\n" +
    "            ng-click=\"bentoFlexgridTboxCtrl.onHeaderCheckBoxChange()\"\n" +
    "            class=\"bento-flex-grid-checkbox\"\n" +
    "            ng-class=\"{'bento-icon-checkmark':bentoFlexgridTboxCtrl.headerCheckBoxMode === bentoFlexgridTboxCtrl.CHECKBOX_SELECTED,'bento-icon-minus-plain':bentoFlexgridTboxCtrl.headerCheckBoxMode === bentoFlexgridTboxCtrl.CHECKBOX_INDETERMINATE}\">\n" +
    "          </i>\n" +
    "      </wj-flex-grid-cell-template>\n" +
    "      <wj-flex-grid-cell-template\n" +
    "          cell-type=\"RowHeader\">\n" +
    "            <i \n" +
    "              ng-click=\"$item.disabled||bentoFlexgridTboxCtrl.onCheckBoxChange($item);\" \n" +
    "              ng-model=\"$item.bentoTboxSelect\" \n" +
    "              class=\"bento-flex-grid-checkbox\"\n" +
    "              ng-class=\"{'bento-icon-checkmark':$item.bentoTboxSelect,'disabled':$item.disabled === true}\">\n" +
    "            </i>\n" +
    "      </wj-flex-grid-cell-template>\n" +
    "      <wj-flex-grid-column \n" +
    "          ng-repeat=\"col in bentoFlexgridTboxCtrl.config.columnDefinitions\" \n" +
    "          ng-if=\"col.binding != 'bentoTboxSelect'\"\n" +
    "          min-width=\"{{col.minWidth || '80'}}\" \n" +
    "          width=\"{{col.width || '*'}}\" \n" +
    "          header=\"{{col.header}}\" \n" +
    "          binding=\"{{col.binding}}\"\n" +
    "          visible=\"{{col.visible || true}}\"\n" +
    "          data-type=\"{{col.dataType}}\"\n" +
    "          format=\"{{col.format}}\"\n" +
    "          allow-sorting=\"{{col.allowSorting || true}}\"\n" +
    "          allow-dragging=\"{{col.allowDragging || true}}\"\n" +
    "          is-read-only=\"{{col.isReadOnly || false}}\">\n" +
    "          <wj-flex-grid-cell-template\n" +
    "            ng-repeat=\"ct in col.cellTemplates\"\n" +
    "            ng-if=\"col.cellTemplates\"\n" +
    "            cell-type=\"{{ct.type}}\">\n" +
    "            <ng-include src=\"ct.templateUrl\">\n" +
    "            </ng-include>\n" +
    "          </wj-flex-grid-cell-template>\n" +
    "      </wj-flex-grid-column>\n" +
    "  </wj-flex-grid>\n" +
    "  <div bento-pagination\n" +
    "        ng-if=\"!hidePagination\"\n" +
    "        page=\"bentoFlexgridTboxCtrl.config.page\"\n" +
    "        items-array=\"ctx.itemPerPageOptions\"\n" +
    "        total-items=\"bentoFlexgridTboxCtrl.config.totalItems\"\n" +
    "        items-per-page=\"bentoFlexgridTboxCtrl.config.pageSize\"\n" +
    "        info-text=\"{{bentoFlexgridTboxCtrl.config.paginationInfoText}}\"\n" +
    "        info-page-text=\"{{bentoFlexgridTboxCtrl.config.paginationInfoPageText}}\"\n" +
    "        go-text=\"{{bentoFlexgridTboxCtrl.config.paginationGoText}}\"\n" +
    "        class=\"\">\n" +
    "  </div>\n" +
    "  <div ng-if=\"showFilters!=false\" class=\"input-filter-container\"></div>\n" +
    "</div>");
}]);

angular.module("../templates/transfer_box_basic/bento-transferbox-base.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/transfer_box_basic/bento-transferbox-base.html",
    "<div class=\"bento-transferlist-container\" ng-style=\"$ctrl.style\" >\n" +
    "  <bento-basic-tbox\n" +
    "    class=\"transferlist\"\n" +
    "    column-definitions=\"$ctrl.columnDefinitions\"\n" +
    "    grid-data=\"$ctrl.boxOneItemSource\"\n" +
    "    transfer-items=\"$ctrl.transferItemsOne(selectedItems,remainingItems)\"\n" +
    "    transfer-btn-text=\"$ctrl.transferBtnTextOne\"\n" +
    "    disable-transfer=\"$ctrl.disableTransfer\"\n" +
    "    info-shown=\"$ctrl.infoShown===undefined?true:$ctrl.infoShown\"\n" +
    "    box-title=\"$ctrl.boxOneTitle\"\n" +
    "    sub-title=\"$ctrl.boxOneSubTitle\"\n" +
    "    pagination-info-text=\"$ctrl.paginationInfoText\"\n" +
    "    pagination-info-page-text=\"$ctrl.paginationInfoPageText\"\n" +
    "    pagination-go-text=\"$ctrl.paginationGoText\"\n" +
    "    search-text=\"$ctrl.searchText\"\n" +
    "    height=\"$ctrl.height || 512\"\n" +
    "    control=\"$ctrl.box1\"\n" +
    "    box-one=\"true\">\n" +
    "  </bento-basic-tbox>\n" +
    "  <bento-basic-tbox\n" +
    "    class=\"transferlist\"\n" +
    "    column-definitions=\"$ctrl.columnDefinitions\"\n" +
    "    grid-data=\"$ctrl.boxTwoItemSource\"\n" +
    "    transfer-btn-text=\"$ctrl.transferBtnTextTwo\"\n" +
    "    transfer-items='$ctrl.transferItemsTwo(selectedItems,remainingItems)'\n" +
    "    disable-transfer=\"$ctrl.disableTransfer\"\n" +
    "    info-shown=\"$ctrl.infoShown===undefined?true:$ctrl.infoShown\"\n" +
    "    box-title=\"$ctrl.boxTwoTitle\"\n" +
    "    sub-title=\"$ctrl.boxTwoSubTitle\"\n" +
    "    pagination-info-text=\"$ctrl.paginationInfoText\"\n" +
    "    pagination-info-page-text=\"$ctrl.paginationInfoPageText\"\n" +
    "    pagination-go-text=\"$ctrl.paginationGoText\"\n" +
    "    search-text=\"$ctrl.searchText\"\n" +
    "    height=\"$ctrl.height || 512\"\n" +
    "    control=\"$ctrl.box2\">\n" +
    "  </bento-basic-tbox>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/transfer_box_basic/bento-transferbox-grid.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/transfer_box_basic/bento-transferbox-grid.html",
    "<div ng-if=\"$ctrl.boxOne\" class=\"transferbox-toolbar\">\n" +
    "  <span class=\"bento-search force-desktop\">\n" +
    "    <input type=\"text\" bento-reset ng-change=\"$ctrl.onFilterInput()\" ng-model=\"$ctrl.filterValue\" placeholder=\"{{'BENTO_UI_TRANSFER_BOX_BASIC_SEARCH_TEXT' |\n" +
    "    bentoTranslate:searchText}}\">\n" +
    "  </span>\n" +
    "  <button class=\"btn transferbox-btn\"\n" +
    "        ng-class=\"{'btn-primary':$ctrl.hasSelection,'btn-default':!$ctrl.hasSelection}\"\n" +
    "        ng-disabled=\"!$ctrl.hasSelection || $ctrl.disableTransfer\"\n" +
    "        ng-click=\"$ctrl.transferItemsClick()\">{{'BENTO_UI_TRANSFER_BOX_BASIC_BTN_TEXT_ADD' |\n" +
    "      bentoTranslate:$ctrl.transferBtnText}}<span class=\"bento-icon-chevron-right\"></span></button>  \n" +
    "</div>\n" +
    "<div ng-if=\"!$ctrl.boxOne\" class=\"transferbox-toolbar\">\n" +
    "  <button class=\"btn transferbox-btn\"\n" +
    "        ng-class=\"{'btn-primary':$ctrl.hasSelection,'btn-default':!$ctrl.hasSelection}\"\n" +
    "        ng-disabled=\"!$ctrl.hasSelection || $ctrl.disableTransfer\"\n" +
    "        ng-click=\"$ctrl.transferItemsClick()\"><span class=\"bento-icon-chevron-left\"></span>{{'BENTO_UI_TRANSFER_BOX_BASIC_BTN_TEXT_REMOVE' |\n" +
    "      bentoTranslate:$ctrl.transferBtnText}}</button>  \n" +
    "  <span class=\"bento-search force-desktop\">\n" +
    "    <input type=\"text\" bento-reset ng-change=\"$ctrl.onFilterInput()\" ng-model=\"$ctrl.filterValue\" placeholder=\"{{'BENTO_UI_TRANSFER_BOX_BASIC_SEARCH_TEXT' |\n" +
    "    bentoTranslate:searchText}}\">\n" +
    "  </span>\n" +
    "</div>\n" +
    "<div class=\"transferlist-header\">\n" +
    "  <div class=\"transferlist-header-info\" ng-if=\"$ctrl.infoShown\">\n" +
    "    <h5 class=\"transferlist-header-title\">{{$ctrl.boxTitle}}</h5>\n" +
    "    <div class=\"transferlist-select-info\">{{\n" +
    "      $ctrl.totalSelected > 0 ?\n" +
    "      ('BENTO_UI_TRANSFER_BOX_INFO_TEXT'\n" +
    "      | bentoTranslate:$ctrl.subTitle\n" +
    "      | bentoStringReplace:'_SELECTED_':$ctrl.totalSelected\n" +
    "      | bentoStringReplace:'_TOTAL_':$ctrl.pagination.totalItems)\n" +
    "      : $ctrl.pagination.totalItems\n" +
    "      }}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"bento-table-grid\">\n" +
    "  <div class=\"bento-table-header-row\">\n" +
    "    <input type=\"checkbox\"\n" +
    "     class=\"bento-checkbox\"\n" +
    "     id=\"header-checkbox\"\n" +
    "     ng-model=\"$ctrl.headerCheckboxModel\">\n" +
    "    <span ng-repeat=\"col in $ctrl.columnDefinitions\" class=\"bento-table-column-header\" ng-click=\"$ctrl.onHeaderClick(col)\">{{col.header}}<i class=\"sort-icon\" ng-class=\"{'bento-icon-chevron-up':$ctrl.colHeaderSort[col.binding].sortDirection==='asc','bento-icon-chevron-down':$ctrl.colHeaderSort[col.binding].sortDirection==='desc'}\"></i></span>\n" +
    "  </div>\n" +
    "  <div class=\"bento-table-body\" ng-style=\"$ctrl.tableStyle\">\n" +
    "    <div class=\"bento-table-row\" ng-class=\"{'selected':$ctrl.selection[item[$ctrl.uniqueKey]]}\" ng-click=\"$ctrl.onRowClick(item)\" ng-repeat=\"item in $ctrl.renderData track by $index\">\n" +
    "      <input type=\"checkbox\"\n" +
    "       class=\"bento-checkbox\"\n" +
    "       id=\"row-checkbox\"\n" +
    "       ng-click=\"$event.stopPropagation()\"\n" +
    "       ng-change=\"$ctrl.onCheckboxChange()\"\n" +
    "       ng-model=\"$ctrl.selection[item[$ctrl.uniqueKey]]\">\n" +
    "      <span ng-repeat=\"col in $ctrl.columnDefinitions\">{{item[col.binding]}}</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div bento-pagination\n" +
    "     ng-if=\"!hidePagination\"\n" +
    "     page=\"$ctrl.pagination.currentPage\"\n" +
    "     items-array=\"ctrl.pagination.itemsArray\"\n" +
    "     total-items=\"$ctrl.pagination.totalItems\"\n" +
    "     info-text=\"{{$ctrl.paginationInfoText}}\"\n" +
    "     info-page-text=\"{{$ctrl.paginationInfoPageText}}\"\n" +
    "     go-to-text=\"{{$ctrl.paginationGoText}}\"\n" +
    "     items-per-page=\"$ctrl.pagination.pageSize\"\n" +
    "     on-change=\"$ctrl.onPageChanged(page)\"\n" +
    "     on-change-size=\"$ctrl.onSizeChanged(size)\"\n" +
    "     class=\"\">\n" +
    "</div>");
}]);

angular.module("../templates/tree-view/bento-tree-view.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/tree-view/bento-tree-view.html",
    "<div class=\"bento-tree-view-container\">\n" +
    "  <style>\n" +
    "  </style>\n" +
    "  <div\n" +
    "    class=\"bento-expand-collapse-button-group\"\n" +
    "    ng-if=\"$treeViewCtrl.showExpandCollapseAllButtons\"\n" +
    "  >\n" +
    "    <button\n" +
    "      class=\"btn btn-default btn-xs btn-icon\"\n" +
    "      ng-click=\"$treeViewCtrl.expandAll()\"\n" +
    "      title=\"{{'BENTO_UI_TREE_EXPAND_ALL' | bentoTranslate}}\"\n" +
    "    >\n" +
    "      <i class=\"bento-expand-icon bento-icon-plus-plain\"></i>\n" +
    "    </button>\n" +
    "    <div class=\"bento-expand-divider\"></div>\n" +
    "    <button\n" +
    "      class=\"btn btn-default btn-xs btn-icon\"\n" +
    "      ng-click=\"$treeViewCtrl.collapseAll()\"\n" +
    "      title=\"{{'BENTO_UI_TREE_COLLAPSE_ALL' | bentoTranslate}}\"\n" +
    "    >\n" +
    "      <i class=\"bento-collapse-icon bento-icon-minus-plain\"></i>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "  <div class=\"bento-tree-view-wrapper\">\n" +
    "    <div\n" +
    "      bento-table\n" +
    "      bento-table-control=\"$treeViewCtrl.btControl\"\n" +
    "      column-definitions=\"$treeViewCtrl.btColumnDefinitions\"\n" +
    "      source-data-callback=\"$treeViewCtrl.feedTreeData\"\n" +
    "      source-data-ready-callback=\"$treeViewCtrl.onBTReady\"\n" +
    "      options=\"$treeViewCtrl.btOptions\"\n" +
    "    ></div>\n" +
    "    <script type=\"text/ng-template\" id=\"tree-view-default-cell-template\">\n" +
    "      <div class=\"bui-tree-view-item {{($row[$treeViewCtrl.nodeChildren] ? 'has-children' : '') +\n" +
    "      ($row[$treeViewCtrl.selectModel] ? ' bui-tree-view-item-selected' : '')}}\"\n" +
    "           rel=\"{{$index}}\"\"\n" +
    "           role=\"treeitem\">\n" +
    "        <div class=\"bui-tree-view-item-inner\"\n" +
    "             ng-style=\"$treeViewCtrl.getIndentation($row)\">\n" +
    "          <button ng-if=\"$row[$treeViewCtrl.nodeChildren] && !$row.hideCheckbox\"\n" +
    "                  aria-expanded=\"{{!$row.collapsed}}\"\n" +
    "                  ng-click=\"$treeViewCtrl.toggleCollapse($row)\"\n" +
    "                  type=\"button\" class=\"bui-tree-view-expand-btn\"></button>\n" +
    "          <div class=\"bui-tree-view-item-content\" >\n" +
    "            <i ng-if=\"!!$treeViewCtrl.treeIcon && !!$row[$treeViewCtrl.treeIcon]\"\n" +
    "               class=\"{{$row[$treeViewCtrl.treeIcon]}}\"></i>\n" +
    "            <input ng-if=\"$treeViewCtrl.checkboxModel && !$row.hideCheckbox\"\n" +
    "                   type=\"checkbox\"\n" +
    "                   class=\"bento-checkbox\"\n" +
    "                   ng-indeterminate=\"$row[$treeViewCtrl.indeterminateProp]\"\n" +
    "                   ng-model=\"$row[$treeViewCtrl.checkboxModel]\"\n" +
    "                   ng-change=\"$treeViewCtrl.onCheckChange($row)\">\n" +
    "            <ng-include src=\"$treeViewCtrl.rowTemplate\" ></ng-include>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </script>\n" +
    "    <script type=\"text/ng-template\" id=\"tree-view-default-row-template\">\n" +
    "      <span class=\"bui-tree-view-item-label\" ng-click=\"$treeViewCtrl.onItemSelect($row, $event)\">\n" +
    "          <i ng-if=\"!!$treeViewCtrl.secondTreeIcon && !!$row[$treeViewCtrl.secondTreeIcon]\"\n" +
    "          ng-class=\"$row[$treeViewCtrl.secondTreeIcon]\"></i>\n" +
    "        <span ng-bind-html=\"$row[$treeViewCtrl.treeLabel]\"></span>\n" +
    "      </span>\n" +
    "    </script>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/tree/bento-tree.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/tree/bento-tree.html",
    "<div>\n" +
    "  <div class=\"bento-search force-desktop\" ng-if=\"$ctrl.isRoot && searchable()\">\n" +
    "      <input bento-reset class=\"form-control\" type=\"text\" ng-model=\"$ctrl.search\" ng-change=\"$ctrl.onSearchChange($event)\"/>\n" +
    "  </div>\n" +
    "  <div class=\"bento-expand-collapse-button-group\" ng-if=\"showExpandCollapseAllButtons()\">\n" +
    "    <button class=\"btn btn-default btn-xs btn-icon\"\n" +
    "            ng-click=\"expandAll()\"\n" +
    "            title=\"{{'BENTO_UI_TREE_EXPAND_ALL' | bentoTranslate}}\"\n" +
    "    >\n" +
    "      <i class=\"bento-expand-icon bento-icon-plus-plain\"></i>\n" +
    "    </button>\n" +
    "    <div class=\"bento-expand-divider\"></div>\n" +
    "    <button class=\"btn btn-default btn-xs btn-icon\"\n" +
    "            ng-click=\"collapseAll()\"\n" +
    "            title=\"{{'BENTO_UI_TREE_COLLAPSE_ALL' | bentoTranslate}}\"\n" +
    "    >\n" +
    "      <i class=\"bento-collapse-icon bento-icon-minus-plain\"></i>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "  <div class=\"bento-tree-branch\">\n" +
    "    <ul class=\"bento-tree-branch-base\">\n" +
    "      <li ng-repeat=\"node in treeModel\"\n" +
    "          class=\"bento-tree-node\"\n" +
    "          ng-class=\"getNodeSelectionClass(node)\"\n" +
    "          id=\"{{getTreeId(node)}}\"\n" +
    "          ng-hide=\"node.$$bentoNodeHidden || node.hidden\"\n" +
    "          ng-if=\"$ctrl.branchReady\"\n" +
    "          role=\"treeitem\">\n" +
    "        <div class=\"bento-tree-node-content\">\n" +
    "          <div class=\"expand-button-compiled\"\n" +
    "               ng-if=\"node[nodeChildren]\"\n" +
    "               ng-hide=\"navMode()\"\n" +
    "               ng-click=\"toggleCollapse(node)\"\n" +
    "               ng-attr-tabindex=\"{{node.disabled ||treeDisabled ? '-1' : '0'}}\"\n" +
    "               >\n" +
    "            <div\n" +
    "                ng-class=\"{'bento-icon-minus-plain':!node.collapsed,'bento-icon-plus-plain':node.collapsed}\"></div>\n" +
    "          </div>\n" +
    "          <i ng-class=\"node[treeIcon]\" ng-if=\"!!node[treeIcon]\"></i>\n" +
    "          <input type=\"checkbox\"\n" +
    "                 id=\"{{getTreeId(node)}}-checkbox\"\n" +
    "                 class=\"bento-tree-check-box bento-checkbox\"\n" +
    "                 ng-if=\"useCheckbox && !node.hideCheckbox\"\n" +
    "                 ng-model=\"node[checkboxModel]\"\n" +
    "                 ng-click=\"checkboxClick(node)\"\n" +
    "                 ng-disabled=\"node.disabled || treeDisabled\"\n" +
    "                 tabindex=\"{{selectAsCheck || nopde.disabled ||treeDisabled ? '-1' : '0'}}\"\n" +
    "                 aria-labelledby=\"{{getTreeId(node)}}-label\"\n" +
    "          />\n" +
    "          <i class=\"{{node[secondTreeIcon]}} bento-tree-icon second-tree-icon\"\n" +
    "             ng-if=\"!!node[secondTreeIcon]\"\n" +
    "          ></i>\n" +
    "          <div ng-click=\"labelSelect(node, $event)\"\n" +
    "               ng-keydown=\"onTreeItemKeydown($event, node)\"\n" +
    "               ng-keyup=\"onTreeItemKeyup($event, node)\"\n" +
    "               class=\"bento-tree-item-cta\"\n" +
    "               ng-class=\"{'bento-tree-node-parent':node[nodeChildren], 'bento-tree-item-static':node.static}\"\n" +
    "               id=\"{{getTreeId(node)}}-label\"\n" +
    "               aria-label=\"{{node[treeLabel] | bentoStripHtml}}{{\n" +
    "            node.items.length > 0 ? ' ' +\n" +
    "              (node.collapsed ?\n" +
    "                ('BENTO_UI_TREE_COLLAPSED'|bentoTranslate) : ('BENTO_UI_TREE_EXPANDED'|bentoTranslate))\n" +
    "              : ''\n" +
    "            }}\"\n" +
    "              ng-attr-tabindex=\"{{node.disabled||treeDisabled||node.static ? '-1' : '0'}}\"\n" +
    "          >\n" +
    "            <div ng-bind-html=\"node[treeLabel]\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div bento-tree\n" +
    "             ng-if=\"node[nodeChildren]\"\n" +
    "             ng-hide=\"node.collapsed\"\n" +
    "             tree-icon=\"{{treeIcon}}\"\n" +
    "             tree-model=\"node[nodeChildren]\"\n" +
    "             tree-collapsed=\"treeCollapsed\"\n" +
    "             tree-label=\"{{treeLabel}}\"\n" +
    "             node-children=\"{{nodeChildren}}\"\n" +
    "             collapsing-callback=\"collapsingCallback\"\n" +
    "             expanding-callback=\"expandingCallback\"\n" +
    "             select-callback=\"selectCallback\"\n" +
    "             multi-select=\"multiSelect\"\n" +
    "             use-checkbox=\"useCheckbox\"\n" +
    "             checkbox-model=\"{{checkboxModel}}\"\n" +
    "             select-model=\"{{selectModel}}\"\n" +
    "             selectable-model=\"{{selectableModel}}\"\n" +
    "             second-tree-icon=\"{{secondTreeIcon}}\"\n" +
    "             on-checkbox-change=\"onCheckboxChange\"\n" +
    "             select-as-check=\"selectAsCheck\"\n" +
    "             tree-selection-helper=\"treeSelectionHelper\"\n" +
    "             expand-only-model=\"{{expandOnlyModel}}\"\n" +
    "             tree-disabled=\"node.disabled || treeDisabled\"\n" +
    "             tree-level=\"currentLevel\"\n" +
    "             independent-checkbox=\"independentCheckbox()\"\n" +
    "             nav-mode=\"navMode()\"\n" +
    "        >\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/accordion/accordion-group.html",
    "<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-class=\"{open: isOpen}\" ng-keypress=\"toggleOpen($event)\">\n" +
    "  <h4 class=\"panel-title\">\n" +
    "    <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle><i ng-class=\"isOpen === true ? 'bento-icon-minus-plain' : 'bento-icon-plus-plain'\" ></i><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "  </h4>\n" +
    "</div>\n" +
    "<div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
    "  <div class=\"panel-body\" ng-transclude></div>\n" +
    "</div>");
}]);

angular.module("../templates/universe_filter/bento-universe-filter-dropdown.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/universe_filter/bento-universe-filter-dropdown.html",
    "<div class=\"bento-uni-filter row\" ng-class=\"[{'has-back-btn':bentoUniverseFilterCtrl.hasBackBtn,'first-open':bentoUniverseFilterCtrl.isOpen[0],'align-right':bentoUniverseFilterCtrl.alignPosition==='right','full-width':bentoUniverseFilterCtrl.alignPosition==='full'},bentoUniverseFilterCtrl.isLastOpen()]\">\n" +
    "	<div class=\"bento-uni-filter_back-btn\" \n" +
    "		ng-if=\"bentoUniverseFilterCtrl.hasBackBtn\" \n" +
    "		ng-disabled=\"bentoUniverseFilterCtrl.backButtonDisabled\" \n" +
    "		ng-click=\"bentoUniverseFilterCtrl.onBackButtonClick()\"\n" +
    "		ng-keypress=\"($event.which === 13)?bentoUniverseFilterCtrl.onBackButtonClick():0\"\n" +
    "		tabindex=\"0\">\n" +
    "		<i class=\"bento-icon-arrow-left\"></i>\n" +
    "	</div>\n" +
    "	<div class=\"bento-uni-filter_item\" \n" +
    "		ng-repeat=\"item in bentoUniverseFilterCtrl.filterItems | limitTo: 4\" \n" +
    "		ng-class=\"{'col-xs-12':bentoUniverseFilterCtrl.filterItems.length===1,'col-xs-6':bentoUniverseFilterCtrl.filterItems.length===2,'col-xs-4':bentoUniverseFilterCtrl.filterItems.length===3,'col-xs-3':bentoUniverseFilterCtrl.filterItems.length>=4,'selected':bentoUniverseFilterCtrl.selectedName===item.name, 'open':bentoUniverseFilterCtrl.isOpen[$index]}\"\n" +
    "		tabindex=\"0\" ng-keypress=\"($event.which === 13)?bentoUniverseFilterCtrl.isOpen[$index]=!bentoUniverseFilterCtrl.isOpen[$index]:0\" uib-dropdown dropdown-append-to=\"bentoUniverseFilterCtrl.appendToElement\" auto-close=\"outsideClick\" is-open=\"bentoUniverseFilterCtrl.isOpen[$index]\">\n" +
    "		<div class=\"bento-uni-filter_dropdown-toggle\" href uib-dropdown-toggle>\n" +
    "			<div class=\"bento-uni-filter_item-header\">{{item.name}}</div>\n" +
    "			<div class=\"bento-uni-filter_item-text\" bento-universe-filter-ellipsis bento-ellipsis-text=\"item.selectedName || bentoUniverseFilterCtrl.selectText\" data-uib-tooltip=\"{{item.selectedName || bentoUniverseFilterCtrl.selectText}}\" tooltip-placement=\"bottom\"></div>\n" +
    "			<i class=\"bento-uni-filter_carat bento-icon-caret-down\"></i>\n" +
    "		</div>\n" +
    "		<div class=\"bento-uni-filter_dropdown-menu\" ng-class=\"{'dropdown-menu-right': bentoUniverseFilterCtrl.isRTL === true}\" uib-dropdown-menu>\n" +
    "			<div bento-universe-filter-dropdown-menu filter-item=\"item\" is-open=\"bentoUniverseFilterCtrl.isOpen[$index]\" ng-include src=\"item.modalTemplateUrl || item.templateUrl || 'bentoUniFilterDropdownMenu.html'\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"bento-uni-filter_back-drop\"></div>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"bentoUniFilterDropdownMenu.html\">\n" +
    "  <ul class=\"bento-uni-filter_dropdown-list\">\n" +
    "  	<li ng-repeat=\"item in bentoUniFilterItemCtrl.filterItem.items\" ng-click=\"bentoUniFilterItemCtrl.selectItem(item, bentoUniFilterItemCtrl.filterItem)\" ng-keypress=\"($event.which === 13)?bentoUniFilterItemCtrl.selectItem(item, bentoUniFilterItemCtrl.filterItem):0\" ng-class=\"{'selected':item.name === bentoUniFilterItemCtrl.filterItem.selectedName}\" tabindex=\"0\">{{item.name}}</li>\n" +
    "  </ul>\n" +
    "</script>");
}]);

angular.module("../templates/universe_filter/bento-universe-filter.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../templates/universe_filter/bento-universe-filter.html",
    "<div class=\"bento-uni-filter row\" ng-class=\"{'has-back-btn':bentoUniverseFilterCtrl.hasBackBtn}\">\n" +
    "	<div class=\"bento-uni-filter_back-btn\" \n" +
    "		ng-if=\"bentoUniverseFilterCtrl.hasBackBtn\" \n" +
    "		ng-disabled=\"bentoUniverseFilterCtrl.backButtonDisabled\" \n" +
    "		ng-click=\"bentoUniverseFilterCtrl.onBackButtonClick()\"\n" +
    "		ng-keypress=\"($event.which === 13)?bentoUniverseFilterCtrl.onBackButtonClick():0\"\n" +
    "		tabindex=\"0\">\n" +
    "		<i class=\"bento-icon-arrow-left\"></i>\n" +
    "	</div>\n" +
    "	<div class=\"bento-uni-filter_item\" \n" +
    "		ng-repeat=\"item in bentoUniverseFilterCtrl.filterItems | limitTo: 4\" \n" +
    "		ng-class=\"{'col-xs-12':bentoUniverseFilterCtrl.filterItems.length===1,'col-xs-6':bentoUniverseFilterCtrl.filterItems.length===2,'col-xs-4':bentoUniverseFilterCtrl.filterItems.length===3,'col-xs-3':bentoUniverseFilterCtrl.filterItems.length>=4,'selected':bentoUniverseFilterCtrl.selectedName===item.name}\"\n" +
    "		ng-click=\"bentoUniverseFilterCtrl.openModal(item)\"\n" +
    "		ng-keypress=\"($event.which === 13)?bentoUniverseFilterCtrl.openModal(item):0\"\n" +
    "		tabindex=\"0\">\n" +
    "		<div class=\"bento-uni-filter_item-header\">{{item.name}}</div>\n" +
    "		<div class=\"bento-uni-filter_item-text\" bento-universe-filter-ellipsis bento-ellipsis-text=\"item.selectedName || bentoUniverseFilterCtrl.selectText\" data-uib-tooltip=\"{{item.selectedName || bentoUniverseFilterCtrl.selectText}}\" tooltip-placement=\"bottom\"></div>\n" +
    "		<i class=\"bento-uni-filter_carat bento-icon-caret-down\"></i>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<script type=\"text/ng-template\" id=\"bentoUniFilterModal.html\">\n" +
    "	<button type=\"button\" class=\"close\" aria-hidden=\"true\" ng-click=\"closeModal()\" ng-keypress=\"($event.which === 13)?closeModal():0\" tabindex=\"0\">\n" +
    "    <i class=\"bento-icon-close-x\"></i>\n" +
    "  </button>\n" +
    "  <div class=\"modal-header\">\n" +
    "    Select {{filterItem.name}}\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <ul class=\"bento-uni-filter_modal-list\">\n" +
    "    	<li ng-repeat=\"item in filterItem.items\" ng-click=\"selectItem(item, filterItem)\" ng-keypress=\"($event.which === 13)?selectItem(item, filterItem):0\" tabindex=\"0\">{{item.name}}</li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</script>");
}]);

(function(angular){

  'use strict';

  angular.module('bento.cookie',[])
    .provider('$bentoCookie', function(){

      this.getCookie = _getCookie;

      this.$get = [function(){
        return {
          getCookie : _getCookie
        };
      }];

      function _getCookie(cookieName, defaultValue){
        var cookie = (document.cookie.match('(^|; )' + cookieName + '=([^;]*)') || 0)[2];

        if((cookie === null || cookie === '' || typeof cookie === 'undefined') && !!defaultValue){
          cookie = defaultValue;
        }

        return cookie;
      }
    });

})(window.angular);

/* jshint -W044 */
(function (angular) {

  'use strict';

  // This greatly helps finding out the current JS file / Bento Frameworks location
  // and a possible solution to bundling issues with the i18n files
  var jsScripts = document.getElementsByTagName("script");
  var currentJSFileSrc = jsScripts[jsScripts.length - 1].src;

  /**
   * Bento Service Module
   */
  angular.module('bento.services', ['ui.bootstrap.tooltip'])
    /**
     * Config the whole framework
     */
    .config([
      '$animateProvider',
      '$uibTooltipProvider',
      function ($animateProvider, $uibTooltipProvider) {
        // Register `ng-animate-disabled` as a class to turn off ng-animate
        $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);

        // Add UIB Tooltip trigger
        $uibTooltipProvider.setTriggers({
          'touchstart': 'touchstart'
        });

        // This is redundant but we'll use it for the time been
        var msTouchEnabled = window.navigator.msMaxTouchPoints;
        var generalTouchEnabled = "ontouchstart" in document.createElement("div");

        if (msTouchEnabled || generalTouchEnabled) {
          angular.element(document.getElementsByTagName('body')).addClass('touch');
        }

        var os = getOS();

        angular.element(document.getElementsByTagName('body')).addClass(os);

        var browser = getBrowser();

        angular.element(document.getElementsByTagName('body')).addClass(browser.browser);
        angular.element(document.getElementsByTagName('body')).addClass(browser.browserVersion);
      }
    ])
    /**
     * FILTER: Highlight a substring that matches the value and return it with <strong></strong>
     */
    .filter('highlight', function () {

      /**
       * @param str - input string
       * @param value - search string
       * @param bypass - bypass highlighting
       */
      return function (_str, value, bypass) {

        if (value === '' || typeof value === 'undefined' || bypass) {
          return _str;
        }

        var str = _str || '';
        var newStr;
        var re = new RegExp('(' + value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'gi');
        newStr = str.replace(re, '<span class="matching-text-highlight">$&</span>');

        return newStr;
      };
    })
    /**
     * Find and replace a subString within a string
     */
    .filter('bentoStringReplace', function () {
      return function (str, find, replace) {
        if (str) {
          return str.replace(find, replace);
        }
        return;
      }
    })
    /**
     * Strip HTML from a string
     */
    .filter('bentoStripHtml', function () {
      return function (str) {
        return str ? String(str).replace(/<[^>]+>/gm, '') : '';
      };
    })
    /**
     * Provide keycodes
     */
    .factory('$bentoKeyboard', function () {
      return {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        COMMAND: 91,
        COMMA: 188,
      };
    })
    /**
     * BentoService Factory to provide various services and utilities
     */
    .factory('$bentoServices', [
      '$window',
      '$timeout',
      function ($window, $timeout) {
        return {
          // Returns current IE version
          getIEVersion: getIEVersion,
          // rAF for animation
          rAF: RAFProvider,
          // Detect retina displays
          retina: $window.devicePixelRatio > 1,
          // Check if the device is touch supported
          isTouchSupported: isTouchSupported,
          // Generate a numeric uniqueID
          generateUID: generateUID,
          // Fire scope.$apply safely
          safeApply: safeApply,
          // Check if a keyCode is printable
          isPrintableKeyCode: isPrintableKeyCode,
          // Check if desktop
          isDesktop: isDesktop,
          // Remove all browser selections
          removeBrowserSelection: removeBrowserSelection,
          // Find focussable elements in element
          findFocussable: findFocussable,
          // Find tabbable elements in element
          findTabbable: findTabbable,
          // Find if the element is visible on the stage
          isVisible: isVisible,
          // Loop tabble elements in an element
          loopTabbables: loopTabbables,
          // Find if RTL
          isRTL: isRTL,
          // Get the closest scrollable parent
          getScrollableParent: getScrollableParent,
          // get browser version
          getBrowser: getBrowser,
          // Get scrollbar width
          getScrollbarWidth: getScrollbarWidth
        };

        /**
         * Calculates scrollbar width
         */
        function getScrollbarWidth() {
          var outter = document.createElement('div');
          var inner = document.createElement('div');
          var width;
          outter.style.width = '100px';
          outter.style.height = '100px';
          outter.style.overflow = 'auto';
          outter.style.position = 'fixed';
          outter.style.top = '-200px';
          inner.style.height = '110px';
          outter.appendChild(inner);
          document.body.appendChild(outter);
          width = 100 - inner.offsetWidth;
          document.body.removeChild(outter);

          return width;
        }

        /**
         * Loop tabbable elements in a given element
         * Caution: USE THIS WISELY
         * @param  {jqLite Element} element - The container element
         */
        function loopTabbables($element) {
          $element[0].addEventListener('keydown', function (event) {
            if (event.keyCode === 9) {
              var tabbables = findTabbable($element[0]);
              if (event.shiftKey) {
                if (tabbables.indexOf(event.target) === 0) {
                  tabbables[tabbables.length - 1].focus();
                  event.preventDefault();
                  event.stopPropagation();
                }
              } else {
                if (tabbables.indexOf(event.target) === tabbables.length - 1 && tabbables[0]) {
                  tabbables[0].focus();
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          });
        }

        /**
         * Find focussable elements in an element
         * @param  {htmlElement} element - container htmlElement
         * @return {array}         array of elements that are focussable
         */
        function findFocussable(element) {
          var els = element.querySelectorAll('a,input,select,textarea,button,[tabindex]'),
            elArray = [],
            el;

          for (var i = 0, len = els.length; i < len; i++) {
            el = els[i];
            if (isVisible(el) && (!el.hasAttribute('disabled') || el.nodeName === 'A')) {
              elArray.push(el);
            }
          }

          return elArray;
        }

        /**
         * Find tabbable element in an element
         * @param  {htmlElement} element - container htmlElement
         * @return {array}          array of elements that are tabbable
         */
        function findTabbable(element) {
          var elArray = findFocussable(element);

          return elArray.filter(function (item, index) {
            var a = item.getAttribute('tabindex');
            if (!a || a != -1) {
              return true;
            }
          });
        }

        function isVisible(element) {
          return !(element.offsetWidth === 0 && element.offsetHeight === 0);
        }

        /**
         * Remove all browser selections
         */
        function removeBrowserSelection() {
          // Remove all text selections from the document
          if (window.getSelection) {
            // Chrome & Safari
            if (window.getSelection().empty) {
              window.getSelection().empty();
            } else
              // Firefox
              if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
              }
          } else
            // IE
            if (document.selection) {
              document.selection.empty();
            }
        }

        /**
         * isDesktop
         * @returns {boolean}
         *
         * Check if current device is desktop
         *
         */
        function isDesktop() {
          var os = getOS();
          return os != 'android' && os != 'ios';
        }

        /**
         * isTouchSupported
         * @returns {boolean}
         *
         * Check of the current device is touch friendly
         *
         */
        function isTouchSupported() {
          var msTouchEnabled = window.navigator.msMaxTouchPoints;
          var generalTouchEnabled = "ontouchstart" in document.createElement("div");

          return msTouchEnabled || generalTouchEnabled;
        }

        /**
         * safeApply a function on a scope
         * @param scope
         * @param fn
         *
         */
        function safeApply(scope, fn) {
          var phase;
          if (scope && scope.$root) {
            phase = scope.$root.$$phase;
          }
          if (phase === '$apply' || phase === '$digest' || typeof phase === 'undefined') {
            if (fn && (typeof (fn) === 'function')) {
              fn();
            }
          } else {
            scope.$apply(fn);
          }
        }

        /**
         * getIEVersion
         * @returns {number}
         *
         * Returns the version of Internet Explorer or a -1
         * (indicating the use of another browser).
         */
        function getIEVersion() {
          var rv = -1; // Return value assumes failure.
          var ua;
          var re;
          if (navigator.appName === 'Microsoft Internet Explorer') {

            ua = navigator.userAgent;
            re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) !== null) {
              rv = parseFloat(RegExp.$1);
            }
          } else if (navigator.appName === 'Netscape') {
            ua = navigator.userAgent;
            re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) !== null) {
              rv = parseFloat(RegExp.$1);
            }
          }

          return rv;
        }

        /**
         * Generate an unique numeric ID
         */
        function generateUID() {
          return Math.round(Math.random() * 10000000).toString() + Math.round(Math.random() * 10000000).toString();
        }

        /**
         * This is a port to angularJS v1.2.11 and up $$rAF for temporary use
         * @param callBackFunc
         * @returns {Function}
         * @constructor
         */
        function RAFProvider(callBackFunc) {

          var requestAnimationFrame = $window.requestAnimationFrame ||
            $window.webkitRequestAnimationFrame ||
            $window.mozRequestAnimationFrame;

          var cancelAnimationFrame = $window.cancelAnimationFrame ||
            $window.webkitCancelAnimationFrame ||
            $window.mozCancelAnimationFrame ||
            $window.webkitCancelRequestAnimationFrame;

          var rafSupported = !!requestAnimationFrame;
          if (rafSupported) {
            var id = requestAnimationFrame(callBackFunc);
            return function () {
              cancelAnimationFrame(id);
            };
          } else {
            var timer = $timeout(callBackFunc, 16.66, false); // 1000 / 60 = 16.666
            return function () {
              $timeout.cancel(timer);
            };
          }
        }

        /**
         * Check if a keyCode is printable
         * @param keyCode
         * @returns {boolean}
         */
        function isPrintableKeyCode(keyCode) {
          return (keyCode > 47 && keyCode < 58) || // number keys
            keyCode === 32 || keyCode === 13 || // spacebar & return key(s) (if you want to allow carriage returns)
            (keyCode > 64 && keyCode < 91) || // letter keys
            (keyCode > 95 && keyCode < 112) || // numpad keys
            (keyCode > 185 && keyCode < 193) || // ;=,-./` (in order)
            (keyCode > 218 && keyCode < 223); // [\]' (in order)
        }

        /**
         * Determine if dir is set to RTL
         * @return {boolean}
         */
        function isRTL(element) {
          var value = false;
          if (window.getComputedStyle(element || document.body, null).getPropertyValue('direction') === 'rtl') {
            value = true;
          }
          return value;
        }

        /**
         * Get the closest scrollable parent
         * @param el - HTMLElement
         * @returns {any}
         */
        function getScrollableParent(el) {
          if (el === null) {
            return;
          }
          var cStyle = window.getComputedStyle(el);

          var overflowY = cStyle.getPropertyValue('overflow-y');
          var overflow = cStyle.getPropertyValue('overflow');

          if (
            overflowY === 'auto' ||
            overflowY === 'scroll' ||
            overflow === 'auto' ||
            overflow === 'scroll' ||
            overflow === 'hidden' ||
            overflowY === 'hidden'
          ) {
            return el;
          } else if (el.nodeName === 'BODY') {
            return el;
          } else {
            return getScrollableParent(el.parentElement);
          }
        }
      }
    ])
    /**
     * Help directive recursions without running into stack overflow on string replace
     */
    .factory('$recursionHelper', ['$compile', function ($compile) {
      return {
        /**
         * Manually compiles the element, fixing the recursion loop.
         * @param element
         * @param [link] A post-link function, or an object with function(s) registered via pre and post properties.
         * @returns An object containing the linking functions.
         */
        compile: function (element, link) {
          // Normalize the link parameter
          if (angular.isFunction(link)) {
            link = {
              post: link
            };
          }

          // Break the recursion loop by removing the contents
          var contents = element.contents().remove();
          var compiledContents;
          return {
            pre: (link && link.pre) ? link.pre : null,
            /**
             * Compiles and re-adds the contents
             */
            post: function (scope, element) {
              // Compile the contents
              if (!compiledContents) {
                compiledContents = $compile(contents);
              }
              // Re-add the compiled contents to the element
              compiledContents(scope, function (clone) {
                element.append(clone);
              });

              // Call the post-linking function, if any
              if (link && link.post) {
                link.post.apply(null, arguments);
              }
            }
          };
        }
      };
    }])

    .factory('$bentoObservables', [
      function () {
        return {
          createObservable: createObservable
        };

        function BentoObservable (data) {
          this.observers = [];
          this.data = data;

          BentoObservable.prototype.subscribe = function(f) {
            this.observers.push(f);
          };
         
          BentoObservable.prototype.unsubscribe = function(f) {
            this.observers = this.observers.filter(function(subscriber) {
              subscriber !== f;
            });
          };
        
          BentoObservable.prototype.getData = function(f) {
            return this.data;
          };
  
          BentoObservable.prototype.notify = function(data) {
            this.observers.forEach(function(observer) {
              observer(data);
            });
          }
        }
      
        function createObservable(data) {
          return new BentoObservable(data);
        }
      }
    ])

    /**
     * Provider: Provide Bento JS Root
     */
    .provider('$bentoJSRoot', function () {
      var bentoJSRootLink;
      var _this = this;

      /**
       * configAngularTranslateProvider
       * @param componentName
       * @param $translateProvider
       * @param $bentoTranslateLoaderProvider
       * @param defaultLanguage
       *
       * Configures $translateProvider for multilingual support
       */
      this.configAngularTranslateProvider = function (componentName, $translateProvider, $bentoTranslateLoaderProvider, defaultLanguage) {
        //Setup Bento Translate Loader
        //
        // Concert Example:
        //
        // $bentoTranslateLoaderProvider.addURLPattern('components/languages/lang-{lang}.js');
        //
        $bentoTranslateLoaderProvider.addURLPattern(_this.getBentoJSRoot(componentName) + 'i18n/' + componentName + '-{lang}.json');

        // Use Bento Translate Loader
        $translateProvider.useLoader('$bentoTranslateLoader');

        // Default all languages to en_us for the time been
        if (!!defaultLanguage) {
          $translateProvider.preferredLanguage(defaultLanguage.replace('-', '_').toLowerCase());
        } else {
          $translateProvider.preferredLanguage('en');
        }

        $translateProvider.translationNotFoundIndicatorLeft('!');
        $translateProvider.translationNotFoundIndicatorRight('!');

        $translateProvider.fallbackLanguage(defaultLanguage);
      };

      /**
       * getBentoJSRoot
       * @param elementName
       * @returns {string}
       */
      this.getBentoJSRoot = getBentoJSRoot;

      function getBentoJSRoot(elementName) {
        var bentoLinks = document.querySelectorAll('script[src]'); //document.querySelector('script[src~="/bento-"');
        var index = -1;
        for (var i = 0; i < bentoLinks.length; i++) {

          if (bentoLinks[i].attributes['src'].value.search('/' + elementName) != -1) {
            index = i;
            break;
          } else if (bentoLinks[i].attributes['src'].value.search('components/bento-modern.') != -1) {
            index = i;
            break;
          }
        }

        // currentJSFileSrc is a Global variable to this JS file
        // Check if bento.ui is loaded individually
        var bentoLinkTemp = (index === -1) ?
          // Death start approach
          currentJSFileSrc.split('/') :
          // Found it!
          bentoLinks[index].src.split('/');
        bentoLinkTemp.pop();
        bentoJSRootLink = bentoLinkTemp.join('/') + '/';

        return bentoJSRootLink;
      }

      /**
       * Turn on or of Full Console Error reporting where Chrome omits most of the outputs
       * @param bool
       */
      this.turnOnFullErrorReporting = function (bool) {
        if (bool) {
          //Chrome passes the error object (5th param) which we must use since it now truncates the Msg (1st param).
          window.onerror = function (errorMsg, url, lineNumber, columnNumber, errorObject) {
            var errMsg;
            //check the errorObject as IE and FF don't pass it through (yet)
            if (errorObject && errorObject !== undefined) {
              errMsg = errorObject.message;
            } else {
              errMsg = errorMsg;
            }
            window.console.log('Full Error: ' + errMsg);
          };
        } else {
          window.onerror = null;
        }
      };

      this.$get = [function () {
        if (typeof bentoJSRootLink === 'undefined') {
          getBentoJSRoot(currentJSFileSrc);
        }
        return bentoJSRootLink;
      }];
    });

  function getOS() {
    // Adding os name to body
    var OSName = navigator.appVersion;
    var os = 'unknown-os';
    if (OSName.indexOf("Win") !== -1) {
      os = 'win';
    } else if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
      os = 'ios';
    } else if (OSName.indexOf("Mac") !== -1) {
      os = 'mac';
    } else if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      os = 'android';
    } else if (OSName.indexOf("X11") !== -1) {
      os = 'unix';
    } else if (OSName.indexOf("Linux") !== -1) {
      os = 'linux';
    } else if (OSName.indexOf("SunOS") !== -1) {
      os = 'solaris';
    }
    return os;
  }

  function getBrowser() {
    // Adding brower name and version to body
    var isOpera = !!window.opera || (navigator && navigator.userAgent.indexOf(' OPR/') >= 0),
      isFirefox = typeof InstallTrigger !== 'undefined',
      isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
      isMobileSafari = (navigator.userAgent && (navigator.userAgent.search("Mobile") > -1) && (navigator.userAgent.search("Safari") > -1)),
      isiOSChrome = navigator.userAgent.match('CriOS'),
      isChrome = !!window.chrome && !isOpera,
      isIE = detectIE(),
      browser = 'unknown-browser',
      browserVersion = 'unknown-browser-version',
      version;

    var os = getOS();

    try {
      if (isIE) {
        browser = 'ie';
        browserVersion = browser + isIE;
      } else if (isiOSChrome) {
        browser = 'ios_chrome';
        browserVersion = browser + navigator.userAgent.match(/CriOS\/(\d+)/i)[1];
      } else if (isMobileSafari && os !== 'android') {
        browser = 'mobile_safari';
        browserVersion = browser + navigator.userAgent.match(/version\/(\d+)/i)[1];
      } else if (isOpera) {
        browser = 'opera';
        browserVersion = browser + (window.opera ? window.opera.version() : navigator.userAgent.match(/opr\/(\d+)/i)[1]);
      } else if (isFirefox && navigator.userAgent) {
        browser = 'firefox';
        browserVersion = browser + navigator.userAgent.match(/firefox\/(\d+)/i)[1];
      } else if (isSafari && navigator.userAgent.search(/version/i) !== -1) {
        browser = 'safari';
        browserVersion = browser + navigator.userAgent.match(/version\/(\d+)/i)[1];
      } else if (isChrome && navigator.userAgent) {
        browser = 'chrome';
        version = navigator.userAgent.match(/chrome\/(\d+)/i);
        // Android Jellybean and below don't have Chrome/[version] parameter so we skip them
        if (version) {
          browserVersion = browser + navigator.userAgent.match(/chrome\/(\d+)/i)[1];
        }
      } else if (isOpera) {
        browser = 'opera';
        if (window.opera) {
          browserVersion = browser + window.opera.version();
        } else {
          browserVersion = browser + navigator.userAgent.match(/ OPR\/(\d+)/i)[1];
        }
      } //else if(os !== 'android' &&)
    } catch (e) {
      // This browser is unknown;
    }

    return {
      browser: browser,
      browserVersion: browserVersion
    }
  }

  /**
   * detect IE
   * returns version of IE or false, if browser is not Internet Explorer
   * https://codepen.io/gapcode/pen/vEJNZN
   */
  function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }

})(window.angular);
(function() {
    'use strict';

         angular.module('bento.services')
        .service('flexGridSetUpService', flexGridSetUpService);

    flexGridSetUpService.$inject = ['$rootScope', '$timeout'];

    function flexGridSetUpService($rootScope, $timeout) {
        var self = this;
        var ON_MULTI_SELECT = 'onMultiSelect';
        this.multiSelectPanelObj = {}

        this.setupCulture = function(){
            wijmo.culture.FlexGridFilter = {
                // filter
                ascending: '\u2191 Ascending',
                descending: '\u2193 Descending',
                apply: 'Apply',
                clear: 'Clear',
                conditions: 'Filter by Condition',
                values: 'Filter by Value',
                // value filter
                search: 'Search',
                selectAll: 'Select All',
                null: '(nothing)',
                // condition filter
                header: 'Show items where the value',
                and: 'And',
                or: 'Or',
                stringOperators: [
                    { name: '(not set)', op: null },
                    { name: 'Equals', op: 0 /* EQ */ },
                    { name: 'Does not equal', op: 1 /* NE */ },
                    { name: 'Begins with', op: 6 /* BW */ },
                    { name: 'Ends with', op: 7 /* EW */ },
                    { name: 'Contains', op: 8 /* CT */ },
                    { name: 'Does not contain', op: 9 /* NC */ }
                ],
                numberOperators: [
                    { name: '(not set)', op: null },
                    { name: 'Equals', op: 0 /* EQ */ },
                    { name: 'Does not equal', op: 1 /* NE */ },
                    { name: 'Is Greater than', op: 2 /* GT */ },
                    { name: 'Is Greater than or equal to', op: 3 /* GE */ },
                    { name: 'Is Less than', op: 4 /* LT */ },
                    { name: 'Is Less than or equal to', op: 5 /* LE */ }
                ],
                dateOperators: [
                    { name: '(not set)', op: null },
                    { name: 'Equals', op: 0 /* EQ */ },
                    { name: 'Is Before', op: 4 /* LT */ },
                    { name: 'Is After', op: 2 /* GT */ }
                ],
                booleanOperators: [
                    { name: '(not set)', op: null },
                    { name: 'Equals', op: 0 /* EQ */ },
                    { name: 'Does not equal', op: 1 /* NE */ }
                ]
            };
        }

        this.updateFlexGridRowHeight = function(grid, height, headHeight) {
            height = height || 48;
            grid.rows.defaultSize = height;
            var headerHeight = 48;
            for (var i = 0, total = grid.columnHeaders.rows.length; i < total; i++) {
                grid.columnHeaders.rows[i].height = headHeight && headHeight[i] ? headHeight[i] : headerHeight;
            }
        };

        this.setupRowHeader = function(panel, r, c, cell) {
            if (panel.cellType == wijmo.grid.CellType.RowHeader) {
                cell.style.textAlign = 'right';
                cell.textContent = (r + 1).toString();
            }
        };

        this.initFilters = function(grid, gridFilter, filteredCols) {
            if (!gridFilter) {
                gridFilter = new wijmo.grid.filter.FlexGridFilter(grid);
                // gridFilter.filterColumns = filteredCols;
                // grid.autoSizeColumns();
                self.toggleFilter(false, gridFilter, filteredCols);
            }
            return gridFilter;
        };

        this.setupActions = function(panel, r, c, cell, header) {
            var col = panel.columns[c];
            if (col.header === header) {
                cell.className += " cell-actions";
            }
        };

        this.addClassToColumnByHeader = function(panel, r, c, cell, header, className) {
            var col = panel.columns[c];
            if (col.header === header) {
                cell.className += " " + className;
            }
        };

        this.addClassToColumnByBinding = function(panel, r, c, cell, binding, className) {
            var col = panel.columns[c];
            if (col.binding === binding) {
                cell.className += " " + className;
            }
        };

      /**
       * Setup Column visibility
       * @param flex
       * @param colBindings
       * @param numRows
       * @returns {{columnBindingsToggle: Array, columnVis: {}}}
       */
      this.setUpColumnVisibility = function (flex, colBindings, numRows) {
        if (flex && colBindings.length > 0) {
          var columnBindingsToggle = [];
          var columnVis = {};
          var ttl = colBindings.length;
          var rows = numRows || 10;
          var colArray;
          for (var i = 0; i < ttl; i++) {
            if(i % rows === 0){
              colArray = [];
              columnBindingsToggle.push(colArray);
            }
            colArray.push(colBindings[i]);
            columnVis[colBindings[i].binding] = true;
          }
          return {
            columnBindingsToggle: columnBindingsToggle,
            columnVis           : columnVis
          }
        }
      };

        this.toggleFilter = function(filtersHidden, gridFilter, filteredCols) {
            //if flexgrid available
            if (gridFilter) {
                //get FlexGridFilter, defined in initGrid
                var f = gridFilter;
                if (f) {
                    //if filters are hidden, clear the grid filter
                    if(filtersHidden){
                        f.clear();
                    }
                    //iterate through columns to filtered
                    for (var i = 0, il = filteredCols.length; i < il; i++) {
                        //get column and column filter
                        var col = f.grid.columns.getColumn(filteredCols[i].binding),
                            cf = col ? f.getColumnFilter(col, true) : {};
                        //switch filterType to 0 if filters hidden, otherwise to filterType defined in model
                        cf.filterType = filtersHidden ? 0 : filteredCols[i].filterType;
                    }

                }
                //refresh grid
                f.grid.refresh();
            }

        }


    }
})();
(function (angular, window) {
  'use strict';

  /**
   * This Service Object is backported from Bento NG
   * @type {{}}
   */
  var BentoPositioning = {};

  window.BentoPositioning = BentoPositioning;

  angular.module('bento.positioning', [])
    .constant('$bentoPositioning', BentoPositioning);

  // Back-ported from the Original TS file
 
  /**
   * Main method to position a target element against the host element included in a container
   * @param host The HTMLElement that is to be aligned to
   * @param target The HTMLElement that is to be placed to align with the `host`
   * @param container Container HTMLElement to host the `target` element
   * @param placement Only work for 'top' and 'bottom' at this point
   * @param alignment Horizontal alignment 'left' and 'right' TODO: 'center' to come later
   * @param offset Offset in pixels to fine tune the placement location
   * @param autoRealign Auto relaign to the container with the `target` is out of boundary
   */
  BentoPositioning.positionElement = function (
    host,
    target,
    container,
    placement,
    alignment,
    offset,
    autoRealign // Only works for TOP & BOTTOM
  ) {
    var containerClientWidth = container.clientWidth;
    placement = placement || 'bottom';
    alignment = alignment || 'left';
    offset = offset == null ? 0 : offset;
    target.style.visibility = 'hidden';

    if (placement === 'bottom') {
      target.style.top = '0';
      target.style.bottom = 'auto';
    } else {
      target.style.bottom = '0';
      target.style.top = 'auto';
    }

    if (alignment === 'left') {
      target.style.left = '0';
      target.style.right = 'auto';
    } else {
      target.style.right = '0';
      target.style.left = 'auto';
    }

    if (autoRealign) {
      // Set max width to the target el if there is an auto-relaignment
      target.style.maxWidth = containerClientWidth + 'px';
    }

    container.appendChild(target);
    var hostRect = host.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var dTop = hostRect.bottom - targetRect.top;
    var dBottom = hostRect.top - targetRect.bottom;
    var dLeft = hostRect.left - targetRect.left;
    var dRight = hostRect.right - targetRect.right;

    if (autoRealign) {
      // We still need a temporary element to measure the content location against
      // the viewport so that we can conpensate gaps with all borders and scrollbars(in RTL)
      // without having gaps
      var tempEl = document.createElement('div');
      var tempRect;
      tempEl.style.visibility = 'hidden';
      tempEl.style.height = '0';
      container.appendChild(tempEl);
      tempRect = tempEl.getBoundingClientRect();

      // Remove and clean temporary element
      container.removeChild(tempEl);
      tempEl = null;

      if (alignment === 'left' && hostRect.left + targetRect.width > tempRect.right) {
        // `target` is out of boundary on the right need to move it back
        dLeft = tempRect.right - targetRect.width - targetRect.left;
      } else if (alignment === 'right' && hostRect.right - targetRect.width < tempRect.left) {
        // `target` is out of boundary on the left and need to align left
        dRight = tempRect.left + targetRect.width - targetRect.right;
      }
    }

    // There are only two case for now 'top' and 'bottom'
    // Will exrtend to 'left' and 'right' when required
    switch (placement) {
      case 'top':
        if (alignment === 'left') {
          BentoPositioning.updatePositionStyles(target, 'auto', 'auto', -dBottom + offset + 'px', dLeft + 'px');
        } else {
          BentoPositioning.updatePositionStyles(target, 'auto', -dRight + 'px', -dBottom + offset + 'px', 'auto');
        }
        break;
      default:
        if (alignment === 'left') {
          BentoPositioning.updatePositionStyles(target, dTop + offset + 'px', 'auto', 'auto', dLeft + 'px');
        } else {
          BentoPositioning.updatePositionStyles(target, dTop + offset + 'px', -dRight + 'px', 'auto', 'auto');
        }
    }

    // Show element
    target.style.visibility = 'visible';
  };


  /**
   * Reset element styles
   * @param {HTMLElement} el 
   */
  BentoPositioning.resetStyles = function(el){
    var style = el.style;
    style.top = null;
    style.right = null;
    style.bottom = null;
    style.left = null;
    style.width = null;
  };


  /**
   * Update positioning CSS styles
   * @param target
   * @param top
   * @param right
   * @param bottom
   * @param left
   */
  BentoPositioning.updatePositionStyles = function (target, top, right, bottom, left, width) {
    var style = target.style;
    style.top = top;
    style.right = right;
    style.bottom = bottom;
    style.left = left;

    if (width) {
      style.width = width;
    }
  };
  // End of back-port

})(window.angular, window);
(function(angular, window, performance, undefined) {
'use strict';

var EASE_FUNCTIONS = {
  // no easing, no acceleration
  linear: function(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function(t) {
    return (--t) * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function(t) {
    return 1 - (--t) * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function(t) {
    return 1 + (--t) * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
  }
};


angular.module('bento.transition', []).factory('$bentoTransition', function() {
  // Ease functions

  function go(from, to, duration, tick, complete, ease) {
    var easeFunc = ease || EASE_FUNCTIONS.easeOutCubic;
    var startTime = performance.now();
    var d = to - from;
    var frameDuration = 18;  // ~60FPS
    var timeoutID;
    var stop = false;

    animate();

    function animate() {
      var dTime = performance.now() - startTime;
      var dX = easeFunc(dTime / duration) * d;

      if (dTime >= duration) {
        tick && tick(to);
        complete && complete();
      } else {
        tick && tick(from + dX);
        window.requestAnimationFrame(animate);
      }
    }

    return function() {
      stop = true;
    };
  }
  return {go: go, ease: EASE_FUNCTIONS};
});
})(angular, window, window.performance);

(function (angular, window, undefined) {

  'use strict';

  angular.module('bento.inputblur', [])
    // Supporting directive for input fields
    .directive('input',directiveFunction)
    // Supporting directive for textarea fields
    .directive('textarea',directiveFunction);

  directiveFunction.$inject = ['$bentoServices'];

  /**
   * Input Blur and Textarea blur directive definition
   * @param $bentoServices
   * @returns {{restrict: string, require: string, link: Function}}
   */
  function directiveFunction($bentoServices) {
    return {
      restrict: 'E',
      require : '?ngModel',
      link    : function (scope, element, attr, control) {
        if (!control) {
          return;
        }

        element.on('focus', function () {
          // Using safe apply to comply bug [CXUI-289]
          $bentoServices.safeApply(scope,function () {
            element.addClass('has-focus');
            control.hasFocus = true;
          });
        });

        element.on('blur', function () {
          // Using safe apply to comply bug [CXUI-289]
          $bentoServices.safeApply(scope,function () {
            element.removeClass('has-focus');
            element.addClass('has-visited');
            control.hasFocus = false;
            control.hasVisited = true;
          });
        });

        // extend $setPristine()
        if (!!control.$setPristine) {
          control.$setPristineUsedByBentoInputBlur = control.$setPristine;

          control.$setPristine = function () {
            // called Super function
            control.$setPristineUsedByBentoInputBlur();
            // Resetting hasVisited flag

            $bentoServices.safeApply(scope,function () {
              element.removeClass('has-visited');
              control.hasVisited = false;
            });
          };
        }
      }
    };
  }
})(window.angular, window);
/* jshint -W016 */
(function (window, angular, undefined) {

  'use strict';

  angular.module('bento.busyloader', ['bento.services', 'bento.translate'])
    /**
     * Config to add $http interceptions
     */
    .config([
      '$provide',
      '$httpProvider',
      function ($provide, $httpProvider) {

        /**
         * Register a new interceptor for Busy Loader for auto show and hide
         */
        $provide.factory('bentoBusyLoaderHttpInterceptor', [
          '$q',
          '$log',
          function ($q, $log) {

            /**
             * Get a BentoBusyLoader from the config file, undefined otherwise
             * @param config
             * @returns {*}
             */
            var getBusyLoader = function (config) {
              // There is nothing assigned to config
              if (typeof config === 'undefined') {
                return undefined;
              }

              // Make sure busyLoader is assigned as part of the config object
              // And the object is a `BentoBusyLoader` instance
              if (!!config.busyLoader) {
                return config.busyLoader;
              } else {
                return undefined;
              }
            };

            /**
             * Show the Busy Loader referenced from the config object
             * @param config
             */
            var showBusyLoader = function (config) {
              var busyLoader = getBusyLoader(config);

              if (!!busyLoader) {
                busyLoader.show(config.showDelay || 0);
              }
            };

            /**
             * Hides the Busy Loader referenced from the config object
             * @param config
             */
            var hideBusyLoader = function (config) {
              var busyLoader = getBusyLoader(config);

              if (!!busyLoader) {
                busyLoader.hide(config.hideDelay || 0);
              }
            };

            /**
             * Return all $http interception results
             */
            return {
              // optional method
              'request': function (config) {
                // do something on success
                showBusyLoader(config);
                return config;
              },

              // optional method
              'requestError': function (rejection) {
                // do something on error
                //hideBusyLoader(rejection.config);

                return $q.reject(rejection);
              },

              // optional method
              'response': function (response) {
                // do something on success
                hideBusyLoader(response.config);
                return response;
              },

              // optional method
              'responseError': function (rejection) {
                // do something on error
                // hideBusyLoader(rejection.config);

                return $q.reject(rejection);
              }
            };

          }]);

        // Push the interceptor to $httpProvider.interceptor stack
        $httpProvider.interceptors.push('bentoBusyLoaderHttpInterceptor');

      }
    ])
    /**
     * Provides Busy Loader services
     */
    .factory('$bentoBusyLoader', [
      '$timeout',
      '$log',
      '$q',
      '$bentoServices',
      '$bentoTranslate',
      function ($timeout, $log, $q, $bentoServices, $bentoTranslate) {

        // Busy Loader Object
        function BentoBusyLoader(_dom, _size, nonBlocking) {
          // Normalize DOM type
          var dom                = typeof _dom === 'string' ? document.querySelector(_dom) : _dom,
              bgSize             = '',
              canvasSize,
              isPositionedStatic = false,
              showTimeoutID,
              hideTimeoutID,
              self               = this
            ;

          _size = _size? _size:'default';

          // Now we can set the size of the spinner animation
          switch (_size) {
            case 'small' :
              canvasSize = 24;
              break;
            default:
              canvasSize = 75;
          }


          // Create loader dom elements
          var loader  = angular.element('<div '+
                (nonBlocking? '' : 'tabindex="0" ') +
                'class="bento-busyloader-blocker'+ bgSize + '">' +
                '<div class="bento-busyloader-wrapper"><div class="bento-busyloader-inner">' +
                '<svg ' +
                'class="bento-busyloader-svg bento-busyloader-svg-'+_size+'" preserveAspectRatio="none"' +
            'viewBox="0 0 '+canvasSize+' '+canvasSize+'"' +
            '></svg>' +
                '</div>'+
                '</div>' +
                '</div>'),

              // Insert loader HTML code into the DOM
              mainDom = angular.element(dom),
              mainDomPosition,
              blocker = nonBlocking? null : angular.element('<div tabindex="0" class="bento-busyloader-front-blocker"></div>')
            ;

          this.$el = loader;

          // SR Support
          applySR();
          function applySR() {
            $bentoTranslate.translate('BENTO_UI_BUSY_LOADER_LOADING')
              .then(function (value) {
                loader.attr('aria-label', value);
                !nonBlocking && blocker.attr('aria-label', value);
              });
          }

          $bentoTranslate.onChange(applySR);
          loader.on('$destroy', function () {
            $bentoTranslate.removeOnChange(applySR);
          });

          if(!nonBlocking){
            loader[0].addEventListener('keydown', function (event) {
              // Bypass the content from tabbing
              if (event.shiftKey && event.keyCode === 9) {
                blocker[0].focus();
              }
            });
  
            blocker[0].addEventListener('keydown', function (event) {
              // Bypass the content from tabbing
              if (!event.shiftKey && event.keyCode === 9) {
                loader[0].focus();
              }
            });
          }

          this.show = function (delay) {
            var deferred = $q.defer();
            var _delay = (typeof delay === 'undefined') ? 0 : parseInt(delay, 10);

            // Clear any previous $timeout IDs
            $timeout.cancel(hideTimeoutID);

            showTimeoutID = $timeout(function () {
              // Adding loader
              mainDom.append(loader);
              !nonBlocking && mainDom.prepend(blocker);
              
              // Clear any previous $timeout IDs
              $timeout.cancel(showTimeoutID);

              // Make parent container 'relative' when it is static
              mainDomPosition = window.getComputedStyle(mainDom[0]).position.trim();

              // Check and assign `relative` position where it is at default, `static`
              if (mainDomPosition.length === 0 || mainDomPosition === 'static') {
                mainDom[0].style.position = 'relative';
                isPositionedStatic = true;
              }

              // svg render disabled
              startAnimate();

              deferred.resolve('Busy Loader is now bocking content');

              /*
               Gain focus if necessary and
               ONLY gains focus when this loader is an overlay
               */
              self.activeElement = document.activeElement;

              if (mainDom[0].contains(self.activeElement)) {
                loader[0].focus();
              } else {
                self.activeElement = undefined;
              }

            }, _delay);

            return deferred.promise;
          };

          this.hide = function (delay) {
            var _delay = (typeof delay === 'undefined') ? 0 : parseInt(delay, 10);
            var deferred = $q.defer();

            // Clear any previous $timeout IDs
            $timeout.cancel(hideTimeoutID);

            hideTimeoutID = $timeout(function () {
              // Clear any previous $timeout IDs
              $timeout.cancel(showTimeoutID);

              // Put static positioning back
              if (isPositionedStatic) {
                mainDom[0].style.position = null;
              }

              stopAnimate();

              deferred.resolve('Busy Loader is now hidden');

              /*
               Return focus if necessary
               */
              if (self.activeElement && blocker &&
                (document.activeElement === loader[0] || document.activeElement === blocker[0])// focus hasn't
                                                                                                  // changed during
                                                                                                  // loading phase
              ) {
                self.activeElement.focus();
              }

              loader.remove();
              !nonBlocking && blocker.remove();
            }, _delay);

            return deferred.promise;

          };

          // svg spinner animation code
          // rFA is used for animation part to minimize CPU load
          var svg,
              intervalDelay   = 150,
              currentArcIndex = 0,
              arcs            = [],
              setIntID,
              radius          = canvasSize / 2,
              segments        = 8,
              stroke          = radius * 0.40,
              gap             = 7;

          /**
           * Start animation
           */
          function startAnimate() {
            clearInterval(setIntID);
            setIntID = setInterval(tick, intervalDelay);
          }

          /**
           * Stop animation
           */
          function stopAnimate() {
            clearInterval(setIntID);
          }

          /**
           *
           */
          function tick() {
            var arc = arcs[currentArcIndex];
            currentArcIndex = (currentArcIndex - 1 + arcs.length) % arcs.length;

            arc.setAttribute('class', 'bento-busyloader-arc bento-busyloader-arc-alt');

            setTimeout(function () {
              arc.setAttribute('class', 'bento-busyloader-arc');
            }, 200);
          }

          // Spinner init
          function initSpinner() {
            var arcSize = 360 / segments,
                arc
              ;
            svg = angular.element(loader[0].getElementsByTagName('svg')[0]);
            //svg is not ready when render is called by apps
            if (!svg) {
              return;
            }
            for (var i = 0; i < segments; i++) {
              arc = getSegment(i, arcSize, gap, stroke, radius);
              arcs.push(arc);
              svg.append(arc);
            }
          }

          function getSegment(segNum, arcSize, gap, stroke, radius) {
            var nRadius = radius - stroke * 0.5,
                startD  = getRadianFromDegree((segNum * arcSize + gap * 0.5)),
                endD    = getRadianFromDegree(segNum * arcSize + arcSize - gap * 0.5),
                d       = (radius + Math.sin(startD) * (radius - stroke * 0.5)) + ' ' +  // X1
                  (radius + Math.cos(startD) * (radius - stroke * 0.5)) + ' ' + // Y1
                  'A ' + nRadius + ' ' + nRadius + ' 0 0 0 ' + // min point
                  (radius + Math.sin(endD) * nRadius) + ' ' + // X2
                  (radius + Math.cos(endD) * nRadius), // Y1
                path    = document.createElementNS('http://www.w3.org/2000/svg', 'path')
              ;
            path.setAttribute('d', 'M' + d);
            path.setAttribute('stroke-width', stroke);
            path.setAttribute('fill', 'none');
            path.setAttribute('class', 'bento-busyloader-arc');

            return path;
          }

          function getRadianFromDegree(degrees) {
            return degrees * (Math.PI / 180);
          }

          initSpinner();
        }

        var getNewLoader = function (dom, size, nonBlocking) {
          return new BentoBusyLoader(dom, size, nonBlocking);
        };

        // Finally return the actual loader
        return {
          getNewLoader: getNewLoader
        };
      }])
    .directive('bentoBusyLoader', [
      '$bentoBusyLoader',
      '$log',
      function ($bentoBusyLoader, $log) {
        return {
          scope: {
            bentoBusyLoader    : '=',  //get Busy Loader state
            bentoBusyLoaderSize: '@', //define the size of BL
            nonBlocking: '&', // flag to set busyloader non blocking
          },
          link : function (scope, element, attr) {

            var busyLoader = $bentoBusyLoader.getNewLoader(element, scope.bentoBusyLoaderSize, scope.nonBlocking());

            // Watch loader variable
            scope.$watch('bentoBusyLoader', function (newVal) {
              if (newVal) {
                busyLoader.show();
              } else {
                busyLoader.hide();
              }
            });
          } // end of link
        };
      }
    ])
    .directive('busyLoader', [
      '$bentoBusyLoader',
      '$log',
      function ($bentoBusyLoader, $log) {
        return {
          scope: {
            busyLoader    : '=',  //get Busy Loader state
            busyLoaderSize: '@', //define the size of BL
            nonBlocking: '&', // flag to set busyloader non blocking
          },
          link : function (scope, element, attr) {

            $log.warn('`busy-loader` directive is deprecated, use `bento-busy-loader`.');

            var busyLoader = $bentoBusyLoader.getNewLoader(element, scope.busyLoaderSize, scope.nonBlocking());

            // Watch loader variable
            scope.$watch('busyLoader', function (newVal) {
              if (newVal) {
                busyLoader.show();
              } else {
                busyLoader.hide();
              }
            });
          } // end of link
        };
      }
    ])
  ;
})(window, window.angular);

(function () {
  'use strict';

  var $sanitize;

  angular.module('bento.carousel', ['bento.services'])
  /**
   * Main Bento Carousel Directive
   */
    .directive('bentoCarousel', [
      '$sanitize',
      function ($s) {
        $sanitize = $s;
        return {
          scope     : false,
          restrict  : 'EA',
          controller: 'bentoCarouselController',
          link      : bentoCarouselLink
        }
      }
    ])
    .controller('bentoCarouselController', bentoCarouselMainController)
  /**
   * Bento Carousel Card Directive
   * Defines card class and as a parent of card templates
   */
    .directive('bentoCarouselCard',
    function () {
      return {
        //require: '^bentoCarousel',
        restrict: 'EA',
        scope   : false,
        link    : bentoCarouselCardLink
      }
    }
  );

  /**
   * Bento Carousel Card Directive Main Link
   * @param scope
   * @param element
   * @param attrs
   * @param ctrl
   */
  function bentoCarouselCardLink(scope, element, attrs, ctrl) {
    attrs.$addClass('bento-carousel-card');
    //attrs.$set('tabindex', '0');
    attrs.$set('role', 'card');
  }

  /**
   * bentoCarouselMainController for main directive
   */
  bentoCarouselMainController.$inject = [
    '$scope',
    '$element',
    '$timeout',
    '$rootScope',
    '$compile',
    '$attrs',
    '$sanitize',
    '$bentoServices'];
  function bentoCarouselMainController($scope, $element, $timeout, $rootScope, $compile, $attrs, $sanitize,$bentoServices) {
    // init variables
    var ctrl = this;
    var slideshowTimeout = 5000;
    var slideshowTimeoutPromise;
    var cardHeightStyle = document.createElement('style');
    ctrl.localScope = $rootScope.$new();
    ctrl.localScope.dots = ['active'];
    ctrl.isRTL = $bentoServices.isRTL();

    if($attrs.slideshow){
      $timeout(autoChangeSlides);
    }

    var scrollXTimeout;
    var cardMargin = 20;
    var currentPage = 0;
    ctrl.dom = {};
    ctrl.dom.mainContainer = angular.element($element[0].querySelector('ul'));

    // Dom change after all scopes are linked
    $timeout(function () {
      ctrl.dom.mainContainer.wrap('<div class="bento-carousel-container"></div>');
    });

    ctrl.dom.leftArrow = angular.element(
      '<div class="bento-carousel-left-arrow bento-carousel-arrow" ' +
      'ng-show="showLeftArrow && !hideArrows" ' +
      'ng-click="onLeftArrowClick()">' +
      '<i class="bento-icon-chevron-left"></i>' +
      '</div>');
    ctrl.dom.rightArrow = angular.element(
      '<div class="bento-carousel-right-arrow bento-carousel-arrow" ' +
      'ng-show="showRightArrow  && !hideArrows" ' +
      'ng-click="onRightArrowClick();">' +
      '<i class="bento-icon-chevron-right"></i>' +
      '</div>');
    ctrl.dom.dots = angular.element(
      '<div class="bento-carousel-dots">' +
      '<button class="bento-carousel-dot {{dot}}" ' +
      'ng-click="onDotClick($index)" ' +
      'ng-repeat="dot in dots track by $index">' +
      '</button></div>');

    ctrl.localScope.onLeftArrowClick = function () {
      var dX = ctrl.dom.mainContainer.children()[0].offsetWidth;
      scrollToAnimate(ctrl.dom.mainContainer[0].scrollLeft - dX, 500, ctrl.dom.mainContainer[0]);

      if($attrs.slideshow){
        $timeout.cancel(slideshowTimeoutPromise);
        slideshowTimeoutPromise = $timeout(autoChangeSlides, slideshowTimeout + 1000);
      }
    };

    ctrl.localScope.onRightArrowClick = function (isAuto) {
      var dX = ctrl.dom.mainContainer.children()[0].offsetWidth;
      scrollToAnimate(ctrl.dom.mainContainer[0].scrollLeft + dX, 500, ctrl.dom.mainContainer[0]);

      if($attrs.slideshow && !isAuto){
        $timeout.cancel(slideshowTimeoutPromise);
        slideshowTimeoutPromise = $timeout(autoChangeSlides, slideshowTimeout + 1000);
      }
    };

    ctrl.localScope.onDotClick = function (page) {
      //reset all dots
      for (var i = 0; i < ctrl.localScope.dots.length; i++) {
        ctrl.localScope.dots[i] = '';
      }
      // activate the current page dot
      ctrl.localScope.dots[page] = 'active';

      // scroll to the new page
      scrollTo(ctrl.dom.mainContainer[0].offsetWidth * page);
    };

    $compile(ctrl.dom.leftArrow)(ctrl.localScope);
    $compile(ctrl.dom.rightArrow)(ctrl.localScope);
    $element.append(ctrl.dom.leftArrow);
    $element.append(ctrl.dom.rightArrow);

    $compile(ctrl.dom.dots)(ctrl.localScope);
    $element.append(ctrl.dom.dots);

    // inject card height with variable binding
    $element[0].parentNode.insertBefore(cardHeightStyle, $element[0]);

    // Watch children size to refresh rendering for dots
    $scope.$watch(function () {
      return ctrl.dom.mainContainer.children().length
    }, function (numChildren) {
      // Always make sure that AngularJS has finished rendering the children
      $timeout(function () {
        updateDotsAndArrows();
      });
    });

    // Watch children heights
    $scope.$watch(function(){
      var children = ctrl.dom.mainContainer.children();
      var maxHeight = 0;
      var h;
      for(var i=0; i<children.length; i++){
        h = children[i].firstElementChild.offsetHeight;
        if(h > maxHeight){
          maxHeight = h;
        }
      }
      return maxHeight;
    }, function(newHeight){
      cardHeightStyle.innerHTML = '.bento-carousel .bento-carousel-card{height:'+$sanitize(newHeight)+'px}';
    })

    $scope.$watch(function () {
        return $bentoServices.isRTL();
    }, function (nv, ov) {
      if(nv !== null || nv !== undefined) {
        ctrl.isRTL = nv;
        updateDotsAndArrows();
      }
    });

    // Watch windows resize
    var timeoutID = 0;
    angular.element(window).on('resize', onWindowResize);

    // Function to fire on window resize
    function onWindowResize(){
      $timeout.cancel(timeoutID);
      timeoutID = $timeout(function () {
        updateDotsAndArrows();
        $bentoServices.safeApply(ctrl.localScope);
      }, 500);
    }

    ctrl.dom.mainContainer.on('scroll', function () {
      $timeout.cancel(timeoutID);
      timeoutID = $timeout(function () {
        updateDotsAndArrows();
        $bentoServices.safeApply(ctrl.localScope);
      }, 100);
    });

    // Listen to mouseenter and mouseleave to enable and disable slideshow
    ctrl.dom.mainContainer.on('mouseenter', function(event){
      if($attrs.slideshow){
        $timeout.cancel(slideshowTimeoutPromise);
      }
    });

    ctrl.dom.mainContainer.on('mouseleave', function(event){
      if($attrs.slideshow){
        slideshowTimeoutPromise = $timeout(autoChangeSlides, slideshowTimeout);
      }
    });

    // Function for slideshow
    function autoChangeSlides(){
      var container = ctrl.dom.mainContainer[0];
      var safeNumX = container.scrollWidth - container.offsetWidth;
      $timeout.cancel(slideshowTimeoutPromise);

      if(container.scrollLeft  === safeNumX){
        scrollTo(0);
      }else{
        ctrl.localScope.onRightArrowClick(true);
      }


      slideshowTimeoutPromise = $timeout(autoChangeSlides, slideshowTimeout);
    }

    // Animate scrolling
    function scrollTo(numX) {
      $timeout.cancel(scrollXTimeout);
      if (numX < 0) {
        numX = 0;
      }
      var container = ctrl.dom.mainContainer[0];
      // Prevent from over scroll effect
      var safeNumX = container.scrollWidth - container.offsetWidth;
      // last page
      if (safeNumX < numX) {
        numX = safeNumX;
      }
      // snap to a cell
      else if (numX !== 0) {
        // find and align with card
        var cardIndexToShow = 0;
        var cards = ctrl.dom.mainContainer.children();
        for (var i = 0; i < cards.length; i++) {
          if (Math.abs(cards[i].offsetLeft) > numX) {
            cardIndexToShow = i - 1;
            break;
          }
        }
        numX = Math.abs(cards[cardIndexToShow].offsetLeft) - cardMargin * 0.5;
      }
      // animate scrolling
      scrollToAnimate(numX, 500, container);
    }

    // using RAF with (x-1)^3+1 curve easing
    function scrollToAnimate(scrollX, duration, container, originalTime, originalX, dX) {
      if(typeof originalTime === 'undefined'){
        originalTime = new Date();
        originalX = container.scrollLeft;
        dX = scrollX-originalX;
      }

      var currentTime = new Date();
      var dTimeRatio = Math.pow((currentTime.getTime() - originalTime.getTime()) / duration -1, 3) + 1; // (x-1)^3 + 1
      var distanceByRatio = dTimeRatio * dX;

      if (Math.abs(dX - distanceByRatio) < 1) {
        container.scrollLeft = scrollX;
      } else {
        container.scrollLeft = originalX + distanceByRatio;
        $bentoServices.rAF(function(){
          scrollToAnimate(scrollX, duration, container, originalTime, originalX, dX);
        });
      }
    }

    function updateDotsAndArrows() {
      var container = ctrl.dom.mainContainer[0];

      if (container.scrollWidth === container.offsetWidth) {
        ctrl.localScope.dots = ['active'];
        currentPage = 0;
      } else {
        var newDots = [];
        var numPages = Math.ceil(container.scrollWidth / container.offsetWidth);
        currentPage = Math.ceil(container.scrollLeft / container.offsetWidth);
        for (var i = 0; i < numPages; i++) {
          newDots.push('');
        }
        newDots[currentPage] = 'active';
        ctrl.localScope.dots = newDots;
      }

      // Show hide arrows
      ctrl.localScope.showLeftArrow = (container.scrollLeft > 0);
      ctrl.localScope.showRightArrow = (container.scrollLeft + container.offsetWidth < container.scrollWidth);
    }

    // on $destroy cleanup
    $element.on('$destroy',function(){
      // remove window resize listener and its timeout
      $timeout.cancel(timeoutID);
      angular.element(window).off('resize', onWindowResize);
    });
  }

  /**
   * Bento Carousel driective link function
   * @param scope
   * @param element
   * @param attrs
   * @param ctrl
   */
  function bentoCarouselLink(scope, element, attrs, ctrl) {
    attrs.$addClass('bento-carousel');
    // Determine if need to hide arrows
    ctrl.localScope.hideArrows = !!attrs.hideArrows && attrs.hideArrows.toLowerCase() === 'true';
    ctrl.localScope.arrowOffset = !!attrs.arrowOffset ? attrs.arrowOffset : '0';

    // Update arrow offset
    ctrl.dom.leftArrow[0].style.left = '-'+ctrl.localScope.arrowOffset;
    ctrl.dom.rightArrow[0].style.right = '-'+ctrl.localScope.arrowOffset;

    // Adding gutter size override
    var customStyling;

    // Adjust gutter size
    if (!!attrs.gutterSize) {
      customStyling = '.bento-carousel-container>ul>li{' +
      'margin-right:' + attrs.gutterSize +
      '}';
    }
    // Change indicator color
    if (!!attrs.indicatorColor) {
      customStyling += '.bento-carousel-dots .bento-carousel-dot{' +
      'border:1px solid ' + attrs.indicatorColor +
      '}';
      customStyling += '.bento-carousel-dots .bento-carousel-dot.active{' +
      'background:' + attrs.indicatorColor +
      '}';
    }

    var styleNode = document.createElement('style');
    styleNode.innerHTML = $sanitize(customStyling);

    element[0].parentNode.insertBefore(styleNode,element[0]);
  }

})();
(function () {
  'use strict';
  angular.module('bento.carousel')
    .directive('bentoCarouselCardTemplate', [
      '$timeout',
      function ($timeout) {
        return {
          scope   : {
            cardData          : '=',  // Card Data
            cardName          : '=',  // This Card's Main Name
            cardSecondaryName : '=?', // This Card's Secondary Name
            cardTimestamp     : '=',  // Time stamp in [Date] object
            cardTemplateUrl   : '=',  // URL to the card inner template
            hideNewTabIcon    : '=',  // Show/Hide new tab icon
            onNewTabClick     : '&',  // Tab click callback
            enablePopover     : '='   // Enable/Disable Popover
          },
          templateUrl: '../templates/carousel/bento-carousel-card-default.html'
          ,
          link    : function (scope) {
            /**
             * Fire tab click callback function
             * @param $event
             */
            scope.newTabClick = function ($event) {
              scope.onNewTabClick({cardData: scope.cardData});
              $event.stopPropagation();
              $event.preventDefault();
            };

            /**
             * Set the main name from car templates
             * @param name
             */
            scope.setName = function(name){
              scope.cardName = name;
            };

            /**
             * Set secondary name from car templates
             * @param name
             */
            scope.setSecondaryName = function(name){
              scope.cardSecondaryName = name;
            };

            /**
             * PRIVATE DO NOT CHANGE
             */

            /**
             * Bottom Day feedback calculation and updates
             */
            var today, tempToday, oldDay, updateTimeout;

            // Initiate
            calcDays();

            // Clean timeout queue
            scope.$on('$destroy', function () {
              $timeout.cancel(updateTimeout);
            });

            /**
             * Calculate the time difference and update the `date` label for hourly date
             */
            function calcDays() {



              if(scope.cardTimestamp && scope.cardTimestamp.getDate) {
                tempToday = new Date();
                today = new Date(
                  tempToday.getUTCFullYear(),
                  tempToday.getUTCMonth(),
                  tempToday.getUTCDate());
                oldDay = new Date(
                  scope.cardTimestamp.getUTCFullYear(),
                  scope.cardTimestamp.getUTCMonth(),
                  scope.cardTimestamp.getUTCDate());

                scope.dDay = Math.floor((today.getTime() - oldDay.getTime())/ (86400000));

                // `scope.date` is assigned with Bento Translate label
                if (scope.dDay === 0) {
                  scope.date = 'BENTO_UI_TODAY';
                }
                else if (scope.dDay === 1) {
                  scope.date = 'BENTO_UI_YESTERDAY';
                } else {
                  scope.date = 'BENTO_UI_N_DAY_AGO';
                }
              }else{
                scope.date = null;
              }

              // Calculate for the next update
              // Every update should be at the first second of each hour
              var secondsUntilNextUpdate = (60 - today.getMinutes()) * 60 - today.getSeconds() + 1;
              updateTimeout = $timeout(calcDays, secondsUntilNextUpdate * 1000);

            }

            scope.onHeaderClick = function (event) {
              event.stopPropagation();
              event.preventDefault();
            }
          }
        }
      }])
})();

(function(angular) {
  'use strict';

  var CLASS_CHECKED = 'bento-icon-checkbox-filled';
  var CLASS_EMPTY = 'bento-icon-checkbox';
  var CLASS_INDETERMINATE = 'bento-icon-collapse';

  angular
    .module('bento.checkbox', [])
    .controller('bentoCheckboxController', function() {
      this.$onDestroy = function() {
        if (this.wrapperEl && this.wrapperEl.parentElement) {
          // Make sure to remove the wrapper element
          this.wrapperEl.parentElement.removeChild(this.wrapperEl);
        }
      };
    })
    .directive('bentoCheckbox', function() {
      return {
        restrict: 'C',
        controller: 'bentoCheckboxController',
        link: function(scope, element, attrs, ctrl) {
          var el = element[0];
          var val, indeterminate;
          var parent = el.parentElement;
          var fakeIcon = document.createElement('i');
          var classList = fakeIcon.classList;
          ctrl.wrapperEl = document.createElement('DIV');
          ctrl.wrapperEl.className = el.className;
          el.className = '';

          // Wrap the checkbox with Bento UI
          parent.insertBefore(ctrl.wrapperEl, el);
          ctrl.wrapperEl.appendChild(el);
          ctrl.wrapperEl.appendChild(fakeIcon);

          // Init UI
          val = el.checked;
          indeterminate = el.indeterminate;

          scope.$watch(
            function() {
              return el.indeterminate;
            },
            function(newVal) {
              indeterminate = newVal;
              if (newVal) {
                // Indeterminate is a priority class.
                // Therefore, it overrides other CSS classes when it's set to
                // `true`
                classList.remove(CLASS_CHECKED);
                classList.remove(CLASS_EMPTY);
                classList.add(CLASS_INDETERMINATE);
              } else {
                classList.remove(CLASS_INDETERMINATE);
                setClass();
              }
            }
          );

          scope.$watch(
            function() {
              return el.checked;
            },
            function(newVal) {
              val = newVal;
              setClass();
            }
          );

          /**
           * Set checkbox UI CSS Class
           */
          function setClass() {
            attrs.$set('aria-checked', val);

            if (indeterminate) {
              // Do not add classes when indeterminate is in place
              return;
            }

            if (val) {
              classList.add(CLASS_CHECKED);
              classList.remove(CLASS_EMPTY);
            } else {
              classList.remove(CLASS_CHECKED);
              classList.add(CLASS_EMPTY);
            }
          }

          // Initialize class
          setClass();
        }
      };
    })
    .directive('ngIndeterminate', function() {
      return {
        restrict: 'A',
        link: function(scope, element, attributes) {
          scope.$watch(attributes['ngIndeterminate'], function(value) {
            element.prop('indeterminate', !!value);
          });
        }
      };
    });
})(window.angular);

(function(angular, undefined) {

'use strict';

var comboboxApp = angular.module(
    'bento.combobox',
    ['ngSanitize', 'bento.services', 'bento.busyloader', 'bento.translate']);

comboboxApp
    /**
     * CONSTANTS
     */
    .constant('COMBOBOX_PAGE_UP', -1)   // Page up direction
    .constant('COMBOBOX_PAGE_DOWN', 1)  // page down direction
    /**
     * DIRECTIVE: bentoCombobox
     */
    .directive(
        'bentoCombobox',
        [
          '$document', '$timeout', '$parse', '$bentoServices',
          function($document, $timeout, $parse, $bentoServices) {
            return {
              require: ['ngModel', 'bentoCombobox', '?bentoAppendToParent'],
              scope: {
                getData: '&',
                columnsWidth: '&',  // Option to determine each column-width
                editable:
                    '&',  // Flag to determine if this component is editable
                headers: '=',  // headers
                headerIndex:
                    '=?',  // header index to be displayed in the input field
                headerTemplate: '=',  // Template support for headers
                ignoreInputClick:
                    '&',  // To ignore click even for the input field
                inputLabel: '=?inputText',
                labelName: '@',
                deferLoad:
                    '&',  // defer getData until the input field is onFocus
                minSearchCharacterCount:
                    '=?',  // Determines minimum character count to trigger
                // server search
                ngDisabled: '&',
                ngHide: '&',  // Track ng-hide
                ngModel: '=',
                ngShow: '&',  // Track ng-show
                onChange: '&',
                placeholder: '@',
                resetListOnSelect:
                    '&',  // Flag to determine whether to reset the list
                // when a selection is made
                revertOnInvalidInput:
                    '&',           // Revert selection on invalid inputs
                rowTemplate: '&',  // Custom row template for this Combobox
                searchable: '&',   // Check if this is searchable
                searchKeydownTimeout:
                    '&',  // Expose local `searchKeydownTimeout` to let dev
                // to control the delay
                type: '&',  // Table or normal
                useServer: '&',
                controller:
                    '=?',  // controller to trigger internal instructions
                searchFunction: '&',  // before the search starts
                // Footer Attributes to be forwarded
                footerOptions: '&',  // Footer Object
                containerVisibilityChanged:
                    '&',  // Function to be executed when container visibility
                          // changes.
                // Args: {visibility: scope.isContainerVisible}
                valueUpdatedWithoutMatch: '&'  // Callback function for when the
                                               // ngModel is about to update
                // on an EMPTY result set.
              },
              templateUrl: function(element, attrs) {
                return angular.isDefined(attrs.templateUrl) ?
                    attrs.templateUrl :
                    '../templates/combobox/bento-combobox.html';
              },
              controller: [
                function() {}
              ],  // for references to be improved in the future
              link:
                  /**
                   * Main Link function for Bento Combobox
                   * @param scope
                   * @param element
                   * @param attrs
                   * @param controllers
                   */
                  function comboboxMainLink(
                      scope, element, attrs, controllers) {
                    var ngModelController = controllers[0],
                        comboboxController = controllers[1],
                        appentToParentController = controllers[2];

                    // Initialize scope variables
                    scope.data = [];
                    scope.selectedIndex = -1;
                    scope.uid =
                        'bento-combobox-' + $bentoServices.generateUID();
                    scope.minSearchCharacterCount =
                        scope.minSearchCharacterCount || 1;

                    scope.attrs = attrs;  // link attrs for template to use

                    // Initialize header index when header exists
                    if (scope.headers) {
                      // No header Index
                      if (typeof scope.headerIndex === 'undefined') {
                        if (typeof scope.labelName === 'undefined') {
                          scope.headerIndex = scope.headers[0];
                        } else {
                          scope.headerIndex = 0;
                        }
                      }
                    }

                    // Set ng-form element state flags
                    ngModelController.$setUntouched();
                    ngModelController.$setPristine();

                    // local variabled
                    var $input =
                            angular.element(element[0].querySelector('input')),
                        getLabel = $parse(scope.labelName), baseData,
                        // `useServer` variabled
                        focused = false, isFullData = false, page = 0,
                        initLoad = true, searchFunc, initialDataLoaded = false;

                    // Check if there is a custom search function assigned
                    if (attrs.searchFunction) {
                      searchFunc = scope.searchFunction;
                    }
                    // Use default case insensitive global search
                    else {
                      searchFunc = function(obj) {
                        return obj.string.toLowerCase().indexOf(
                                   obj.search.toLowerCase()) > -1;
                      }
                    }

                    // Kick off initial data retrieval
                    if (!scope.deferLoad()) {
                      getData();
                      initialDataLoaded = true;
                    }

                    // Add element event listener
                    element.on('focusin', onInputFocus);
                    element.on('focusout', onInputBlur);
                    $input.on('click touchend', onInputClick);

                    // Add destroy listener to Scope to make sure that the
                    // listeners are cleaned properly
                    scope.$on('$destroy', function() {
                      element.off('focusin', onInputFocus);
                      element.off('focusout', onInputBlur);
                      $input.off('click touchend', onInputClick);
                      $input = undefined;
                      document.removeEventListener(
                          'mousedown', onAppendToParentDocClick);
                      document.removeEventListener(
                          'touchstart', onAppendToParentDocClick);
                      window.removeEventListener('resize', onWindowResize);
                    });

                    window.addEventListener('resize', onWindowResize);

                    function onWindowResize() {
                      // Align header if there is any
                      if (scope.containerCtrl) {
                        scope.containerCtrl.align();
                      }
                    }

                    // Watch ngModel to update the inputLabel accordingly
                    var ignoreNgModelWatchOnce = false;
                    scope.$watch('ngModel', function(object, previousObject) {
                      // Nothing needs to be updated even when `ngModel` changes
                      // from `undefined` to `null` or vice versa. Use loose
                      // comparison here to match `undefined` with `null`
                      if (!object && object == previousObject) return;

                      // update Label
                      if (!ignoreNgModelWatchOnce) {
                        scope.inputLabel = getLabelText(object);
                      }
                      ignoreNgModelWatchOnce = false;

                      inputLabelWatchIgnoreOnce = true;
                    });

                    // initialize controller object
                    scope.controller = {
                      reload: function() {
                        // Reset all internal references
                        isFullData = false;
                        baseData = undefined;
                        autoSelectCatchUp = false;
                        page = 0;
                        scope.selectedIndex = -1;
                        scope.data = [];
                        scope.loadingData = false;
                        ngModelController.$setUntouched();
                        ngModelController.$setPristine();
                        getData();
                      },
                      setTextField: function(str) {
                        scope.inputLabel = str;
                      }
                    };

                    function onAppendToParentDocClick(event) {
                      var dropdownContainer =
                          document.getElementById(scope.uid);
                      if (dropdownContainer.contains(event.target) ||
                          event.target === dropdownContainer) {
                        if (event.type === 'mousedown') {
                          // Only prevent default from clicking for mouse
                          // Otherwise, the dropdown does not scroll on touch
                          // devices
                          event.stopPropagation();
                          event.preventDefault();
                        }
                      }
                    }

                    /**
                     * When the Dropdown button is clicked
                     */
                    scope.onButtonClick = function() {
                      // Toggle container visibility
                      showContainer(!scope.isContainerVisible);

                      if (scope.isContainerVisible) {
                        $input[0].select();
                        if (scope.inputLabel) {
                          $input[0].setSelectionRange(
                              scope.inputLabel.length, scope.inputLabel.length);
                        }
                      }

                      // Safe apply the change to the scope
                      $bentoServices.safeApply(scope);
                    };

                    /**
                     * Callback function when an item is clicked
                     * @param index
                     */
                    scope.onItemClick = function(index, ignoreFocus) {
                      var isSameSelection = false;

                      if (!ignoreFocus && index > -1) {
                        $input[0].focus();
                      }

                      // Combobox ngModel will be changed, there for the
                      // directive is now "dirty"
                      ngModelController.$setDirty();

                      // Hide container
                      showContainer(false);

                      // Skip watch & search
                      inputLabelWatchIgnoreOnce = true;

                      // Make no changes and fire no callbacks
                      if (index > -1 &&
                          angular.equals(scope.ngModel, scope.data[index])) {
                        isSameSelection = true;
                      }

                      if (scope.editable() && index === -1) {
                        // We are going to fire a callback with the current
                        // input
                        var newItem = {};
                        newItem[scope.labelName] = scope.inputLabel;
                        scope.ngModel = newItem;
                      } else {
                        // Update input label immediately
                        scope.inputLabel = getLabelText(scope.data[index]);

                        // update model
                        scope.ngModel = scope.data[index];
                      }

                      // Fire onChange event
                      if (!isSameSelection) {
                        setTimeout(function() {
                          // onChange callback need to be fired after ngModel is
                          // updated
                          scope.onChange({item: scope.ngModel});
                        });
                      }

                      // Clear the keyboard dirty flag from the same data gets
                      // updated multiple time
                      scope.isDirty = false;
                      ignoreNgModelWatchOnce = true;
                      // Reset server searche flags for next refresh
                      if (scope.useServer()) {
                        isFullData = false;
                        page = 0;
                        scope.selectedIndex = -1;

                        getData();
                      } else if (!scope.useServer()) {
                        if (baseData) {
                          scope.data = baseData;
                          baseData = undefined;
                        }
                        scope.selectedIndex = scope.data.indexOf(scope.ngModel);
                      }
                    };

                    /**
                     * Get Label Text
                     * @param  {object} row Row object in an array
                     * @return {string}     Label to be displayed in textinput
                     */
                    function getLabelText(row) {
                      var label = getLabel(row);
                      if (typeof label === 'undefined' && !!row) {
                        label = row;
                      }

                      if (typeof label === 'object') {
                        label = label[scope.headerIndex];
                      }

                      return label;
                    }

                    /**
                     * When the expand Carat is clicked
                     */
                    function onInputClick(event) {
                      if (event.type === 'touchend') {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                      }
                      // Clear timeouts
                      $input[0].select();

                      // ignore input click
                      if (scope.ignoreInputClick()) {
                        return;
                      }

                      // Toggle container visibility
                      showContainer(!scope.isContainerVisible);

                      // Safe apply the change to the scope
                      $bentoServices.safeApply(scope);
                    }

                    var inputLabelWatchIgnoreOnce = false;
                    var isKeyboardInteraction = false;
                    scope.$watch('inputLabel', inputLabelWatch);

                    function inputLabelWatch(str) {
                      if (!str || str.length === 0) {
                        scope.selectedIndex = -1;
                        str = '';
                      }

                      if (attrs.required && str.length === 0) {
                        ngModelController.$setValidity('required', false);
                      } else {
                        ngModelController.$setValidity('required', true);
                      }

                      if (!initLoad && !inputLabelWatchIgnoreOnce &&
                          isKeyboardInteraction) {
                        scope.isDirty = true;
                        comboboxController.search(str);
                      } else {
                        initLoad = false;
                        inputLabelWatchIgnoreOnce = false;
                      }

                      isKeyboardInteraction = false;
                    }

                    /**
                     * Callback when the content is changed in inputlabel
                     * @param $event
                     */
                    scope.onInputChange = function($event) {
                      ngModelController.$setDirty();
                    };

                    /**
                     * When a key is pressed on the Input Field
                     * @param $event
                     */
                    scope.onInputKeypress = function($event) {
                      // FF fires Keypress on all keys including un-printable
                      // characters... 9 : Tab 13: Enter
                      if ($event.keyCode !== 9 && $event.keyCode !== 13) {
                        scope.isDirty = true;
                      }
                    };

                    /**
                     * When a key is down on the Input Field
                     * @param $event
                     */
                    scope.onInputKeyDown = function($event) {
                      // An user interaction is recorded
                      isKeyboardInteraction = true;

                      inputLabelWatchIgnoreOnce =
                          false;  // don't ignore keyboard interaction

                      // bypass all instructions
                      if (attrs.readonly) {
                        return;
                      }

                      var keyCode = $event.keyCode;

                      switch (keyCode) {
                        // Enter Key
                        case 13:
                          if (scope.isDirty) {
                            if (scope.selectedIndex > -1 ||
                                !scope.revertOnInvalidInput()) {
                              scope.onItemClick(scope.selectedIndex);
                            } else {
                              resetSelection();
                            }
                          }
                          $event.preventDefault();
                          break;
                          // Arrow Key  down
                        case 40:
                          $event.stopPropagation();
                          $event.preventDefault();
                          // Alt + Arrow Key behavior
                          // Recrouce:
                          // https://www.w3.org/TR/2009/WD-wai-aria-practices-20090224/#combobox
                          if ($event.ALT || !scope.isContainerVisible) {
                            showContainer(!scope.isContainerVisible);
                            break;
                          }

                          if (scope.data.length > 0 &&
                              (!scope.useServer() ||
                               (scope.useServer() && isFullData) ||
                               (scope.useServer() &&
                                scope.selectedIndex < scope.data.length - 1))) {
                            scope.selectedIndex =
                                (scope.selectedIndex + 1) % scope.data.length;
                          }
                          showContainer(true);
                          scope.isDirty = true;

                          break;
                          // Arrow Key Up
                        case 38:
                          $event.stopPropagation();
                          $event.preventDefault();

                          // Alt + Arrow Key behavior
                          // Recrouce:
                          // https://www.w3.org/TR/2009/WD-wai-aria-practices-20090224/#combobox
                          if ($event.ALT || !scope.isContainerVisible) {
                            showContainer(!scope.isContainerVisible);
                            break;
                          }
                          if (scope.data.length > 0) {
                            scope.selectedIndex = scope.selectedIndex < 0 ?
                                0 :
                                scope.selectedIndex;
                            scope.selectedIndex =
                                (scope.selectedIndex - 1 + scope.data.length) %
                                scope.data.length;
                          }
                          showContainer(true);
                          scope.isDirty = true;
                          break;
                          // Home
                        case 36:
                          if (scope.data.length > 0) {
                            scope.selectedIndex = 0;
                          }
                          scope.isDirty = true;
                          $event.stopPropagation();
                          $event.preventDefault();
                          break;
                          // End
                        case 35:
                          if (scope.data.length > 0) {
                            scope.selectedIndex = scope.data.length - 1;
                          }
                          scope.isDirty = true;
                          $event.stopPropagation();
                          $event.preventDefault();
                          break;
                          // Page up
                        case 33:
                          if (scope.data.length > 0) {
                            scope.selectedIndex -= 8;
                            scope.selectedIndex = scope.selectedIndex < 0 ?
                                0 :
                                scope.selectedIndex;
                          }
                          scope.isDirty = true;
                          $event.stopPropagation();
                          $event.preventDefault();
                          break;
                          // Page Down
                        case 34:
                          if (scope.data.length > 0) {
                            scope.selectedIndex += 8;
                            scope.selectedIndex =
                                scope.selectedIndex >= scope.data.length ?
                                scope.data.length - 1 :
                                scope.selectedIndex;
                          }
                          scope.isDirty = true;
                          $event.stopPropagation();
                          $event.preventDefault();
                          break;
                          // ESC Key
                        case 27:
                          resetSelection();
                          $event.stopPropagation();
                          $event.preventDefault();
                          break;
                        default:
                          break;
                      }
                    };

                    /**
                     * When a key is released from the keyboard
                     * @param $event
                     */
                    scope.onInputKeyup = function($event) {
                      // bypass all instructions
                      if (attrs.readonly) {
                        return;
                      }

                      var keyCode = $event.keyCode;
                      switch (keyCode) {
                        // Enter Key
                        case 13:
                          // Stop a FORM from submitting
                          $event.stopPropagation();
                          $event.preventDefault();
                          break;
                          // Tab Key
                        case 9:
                          break;
                      }

                      isKeyboardInteraction = false;
                    };

                    /**
                     * When focused out from this Combobox
                     * @param $event
                     */
                    var autoSelectCatchUp;

                    function onInputBlur($event) {
                      focused = false;
                      // bypass all instructions
                      if (attrs.readonly) {
                        return;
                      }

                      // Ignore all key entry delays
                      $timeout.cancel(keyEntryDelayTimeoutId);
                      if (element[0].contains($event.relatedTarget) ||
                          comboboxController.containerScope.containerEl
                              .contains($event.relatedTarget)) {
                        // Ignore blur when the related target is also part of
                        // combobox
                        return;
                      }

                      // Emit blur event for this component
                      element.triggerHandler('blur');
                      if (scope.isDirty) {
                        if (scope.selectedIndex > -1) {
                          if (scope.loadingData) {
                            // If were searching for the wrong thing (i.e. the
                            // user typed more characters), do a search with the
                            // most recent string
                            if (currentSearchTerm !== scope.inputLabel) {
                              page = 0;
                              isFullData = false;
                              getData(scope.inputLabel);
                            }
                            autoSelectCatchUp = true;
                          } else {
                            scope.onItemClick(scope.selectedIndex, true);
                          }
                          // If the user typed quickly enough such that the
                          // search never started, start now
                        } else if (
                            scope.useServer() && scope.inputLabel.length > 0 &&
                            currentSearchTerm !== scope.inputLabel) {
                          page = 0;
                          isFullData = false;
                          getData(scope.inputLabel);
                          autoSelectCatchUp = true;
                        } else {
                          if (scope.valueUpdatedWithoutMatch) {
                            scope.valueUpdatedWithoutMatch(
                                {value: scope.inputLabel});
                          }

                          if (scope.revertOnInvalidInput()) {
                            resetSelection();
                          } else {
                            scope.onItemClick(-1);
                          }
                        }

                        // Update ngModel dirty flag
                        ngModelController.$setDirty();

                        // Reset data here to refresh the dropdown
                        // If were waiting to autoselect, the onItemClick method
                        // will handle the data refresh
                        if (scope.useServer() && scope.isDirty &&
                            !autoSelectCatchUp) {
                          // Reset page number so that a fresh set of data will
                          // be requested
                          page = 0;
                          getData();
                        }

                        // Reset the internal dirty flag until next user
                        // keypress
                        scope.isDirty = false;
                      }

                      // Reset index
                      scope.selectedIndex = -1;
                      showContainer(false);

                      ngModelController.$setTouched();

                      if ($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                      }
                    }

                    /**
                     * When focused in to this Combobox
                     */
                    function onInputFocus() {
                      if (scope.deferLoad() && !initialDataLoaded) {
                        getData();
                        initialDataLoaded = true;
                      }
                      focused = true;
                    }

                    /**
                     * Callback function when the list is at the end of scroll
                     */
                    scope.onEndOfScroll = function() {
                      // Only applies to server enabled environement
                      // This instance must be idle
                      if (scope.useServer() && !scope.loadingData) {
                        getData(currentSearchTerm);
                      }
                    };

                    /**
                     * Reset selection to the previous one
                     */
                    function resetSelection() {
                      // Do not watch the reset change for once
                      scope.inputLabel = getLabelText(scope.ngModel);
                      cleanSelectionData();
                    }

                    /**
                     * Clean selection data without touch the inputlabel &
                     * ngModel
                     */
                    function cleanSelectionData() {
                      scope.selectedIndex = -1;
                      scope.isDirty = false;
                      comboboxController.search('');
                      inputLabelWatchIgnoreOnce = true;
                      // Hide container
                      showContainer(false);
                    }

                    /**
                     * Get data from callback
                     * @param page
                     * @param search
                     */
                    var missedSearchTerm;  // use a stack
                    var currentSearchTerm = '';
                    var currentGetDataID;

                    function getData(search) {
                      currentSearchTerm = search || '';

                      // Need to ignore getData until the preivous getData
                      // request is finished
                      if (scope.loadingData) {
                        missedSearchTerm = currentSearchTerm;
                      } else if (isFullData) {
                        return;
                      }

                      // Generate UID for this get data
                      var getDataID = $bentoServices.generateUID();
                      // For promise validation
                      currentGetDataID = getDataID;

                      missedSearchTerm = undefined;

                      var dataObj = scope.getData(
                          {page: page || 0, search: search || ''});

                      scope.loadingData = true;

                      // Check if the returned data is an array or not
                      if (Array.isArray(dataObj)) {
                        if (page === 0) {
                          scope.data = dataObj;
                        } else {
                          // Directly assign
                          scope.data = scope.data.concat(dataObj);
                        }
                        scope.loadingData = false;

                        if (autoSelectCatchUp) {
                          if (scope.inputLabel.length > 0) {
                            if (scope.data.length > 0) {
                              scope.selectedIndex = 0;
                              scope.onItemClick(0, true);
                              autoSelectCatchUp = false;
                            } else {
                              if (scope.revertOnInvalidInput()) {
                                resetSelection();
                              } else {
                                scope.onItemClick(-1);
                              }
                            }
                          } else {
                            scope.ngModel = undefined;
                          }

                          autoSelectCatchUp = false;
                        }

                        // In case it's a lazyload
                        if (dataObj.length > 0) {
                          page++;
                        } else {
                          isFullData = true;
                        }
                      }
                      // This is promise
                      else if (dataObj && dataObj.then) {
                        dataObj.then(
                            function(data) {
                              // This dataset is no longer valid
                              if (getDataID !== currentGetDataID) {
                                return;
                              }

                              scope.loadingData = false;
                              if (page === 0) {
                                scope.data = [];

                                // There is no need to scroll to top even the
                                // container dropdown isn't ready New container
                                // will have scrollToTop => 0 anyways...
                                if (scope.containerCtrl) {
                                  scope.containerCtrl.scrollToTop();
                                }
                              }
                              scope.data = scope.data.concat(data);

                              // There is a pending getData (mostly a new
                              // search)
                              if (missedSearchTerm !== undefined) {
                                page = 0;
                                isFullData = false;
                                getData(missedSearchTerm);
                                return;
                              } else
                                  // There is data
                                  if (data.length > 0) {
                                // prepare for the next request
                                page++;

                                if (autoSelectCatchUp) {
                                  if (scope.inputLabel.length > 0) {
                                    scope.selectedIndex = 0;
                                    scope.onItemClick(0, true);
                                  } else {
                                    scope.ngModel = undefined;
                                  }
                                  autoSelectCatchUp = false;
                                }
                              } else
                              // Empty result and there is no need to load more
                              // data and select
                              {
                                if (autoSelectCatchUp &&
                                    scope.inputLabel.length > 0) {
                                  if (scope.revertOnInvalidInput()) {
                                    resetSelection();
                                  } else {
                                    scope.onItemClick(-1);
                                  }
                                }
                                scope.selectedIndex = -1;
                                isFullData = true;
                                autoSelectCatchUp = false;
                              }

                              // Align after the data is populated and rendered
                              if (scope.containerCtrl) {
                                $timeout(scope.containerCtrl.align, 10);
                              }
                            },
                            function(message) {
                              scope.loadingData = false;
                              isFullData = true;

                              // Reset data array if there is no result on page
                              // 0
                              if (page === 0) {
                                scope.data = [];
                              }
                            });
                      } else {
                        // None qualitfied data is returned.
                        // We stop loading here
                        isFullData = true;
                        scope.loadingData = false;

                        // Reset data array if there is no result on page 0
                        if (page === 0) {
                          scope.data = [];
                        }
                      }
                      $bentoServices.safeApply(scope);
                    }

                    /**
                     * Show/Hide the container
                     * @param bool
                     */
                    var isUserDefinedDropdown;

                    function showContainer(bool) {
                      // Ignore if bool is not changed
                      if (scope.isContainerVisible === bool ||
                          scope.ngDisabled() || attrs.readonly) {
                        return;
                      }

                      // Align header if there is any
                      if (scope.containerCtrl) {
                        scope.containerCtrl.align();
                      }

                      if (attrs.bentoAppendToParent) {
                        // Only applies doc event listeners when
                        // `bento-append-to-parent` is enabled Also need to
                        // calculate its button absolute alignement when it's
                        // calculated as a dropup

                        if (bool) {
                          document.addEventListener(
                              'mousedown', onAppendToParentDocClick);
                          document.addEventListener(
                              'touchstart', onAppendToParentDocClick);
                        } else {
                          document.removeEventListener(
                              'mousedown', onAppendToParentDocClick);
                          document.removeEventListener(
                              'touchstart', onAppendToParentDocClick);
                        }
                        // calculate view port position then update
                        if (typeof isUserDefinedDropdown === 'undefined') {
                          isUserDefinedDropdown = !element.hasClass('up');
                        }

                        if (!bool) {
                          // reset dropdown / dropup class to its original state
                          if (isUserDefinedDropdown) {
                            element[0].classList.remove('up');
                          } else {
                            element[0].classList.add('up');
                          }
                        } else {
                          // calculate and update dropdown / dropup properties
                          var elRect = element[0].getBoundingClientRect(),
                              containerHeight =
                                  scope.containerCtrl.el.offsetHeight,
                              scrollableParent =
                                  $bentoServices.getScrollableParent(
                                      element[0]);

                          if (scrollableParent) {
                            var scrollableParentRect =
                                    scrollableParent.getBoundingClientRect(),
                                top = elRect.top - scrollableParentRect.top,
                                isUp = !isUserDefinedDropdown;

                            if (isUp) {
                              // check if up is possible or not
                              if (top + scrollableParent.scrollTop -
                                      containerHeight <
                                  0) {
                                // There is not enough space on the top
                                isUp = false;
                              }
                            } else {
                              // check if bottom is possible or not
                              if ((top + elRect.height + containerHeight) >
                                  (scrollableParent.scrollHeight +
                                   scrollableParent.scrollTop)) {
                                // There is not enough space at the bottom
                                isUp = true;
                              }
                            }

                            if (isUp) {
                              element[0].classList.add('up');
                            } else {
                              element[0].classList.remove('up');
                            }
                          }
                        }
                      }

                      // Set show/hide flag variable

                      scope.isContainerVisible = bool;

                      emitAppendToParent(bool);
                      if (scope.containerVisibilityChanged) {
                        scope.containerVisibilityChanged(
                            {visibility: scope.isContainerVisible});
                      }

                      // Safe apply the change to the scope
                      $bentoServices.safeApply(scope);
                    }

                    /**
                     * Emit append to parent change
                     * @param show
                     */
                    function emitAppendToParent(show) {
                      if (appentToParentController) {
                        // Only emit when there is appendToParent Directive that
                        // is assigned to this Combobox component
                        if (show) {
                          window.addEventListener(
                              'scroll', onAppendToParentWindowScroll, true);
                        } else {
                          window.removeEventListener(
                              'scroll', onAppendToParentWindowScroll, true);
                        }

                        scope.$emit(
                            'append_to_parent_show_list', show, scope.uid);
                      }
                    }

                    /**
                     * Window Scroll Listener for Append to Parent
                     * @param e
                     */
                    function onAppendToParentWindowScroll(e) {
                      var target = e.target;
                      if (target.contains(element[0]) &&
                          !target.contains(scope.containerCtrl.el)) {
                        showContainer(false);
                      }
                    }

                    /**
                     * Search through data labels and list result
                     */
                    var keyEntryDelayTimeoutId = 0;

                    /**
                     * Search and update data
                     * @param str
                     * @param silentSearch : search without showing the
                     *     container
                     */
                    comboboxController.search = function(str, silentSearch) {
                      // Normalize undefined value to an empty string
                      if (typeof str === 'undefined') {
                        str = '';
                      }

                      if (scope.searchable() &&
                          (scope.minSearchCharacterCount <= str.length ||
                           str.length === 0)) {
                        if (!silentSearch) {
                          showContainer(true);
                        }

                        if (!scope.useServer()) {
                          if (!baseData) {
                            baseData = scope.data;
                          }

                          var newArray = [], i, iLen, row, rowLabel;

                          // No entry
                          // IGNORE THE RESET
                          if (!str || str.trim().length === 0) {
                            scope.selectedIndex = -1;
                            scope.data = baseData;
                            return;
                          }

                          for (i = 0, iLen = baseData.length; i < iLen; i++) {
                            row = baseData[i];
                            rowLabel =
                                scope.labelName ? row[scope.labelName] : row;

                            // Search column if there are some
                            if (typeof rowLabel === 'object') {
                              var isNumKey = Array.isArray(rowLabel);

                              for (var key in rowLabel) {
                                if (searchFunc({
                                      string: rowLabel[key],
                                      search: str,
                                      column: isNumKey ? Number(key) : key,
                                      row: row
                                    })) {
                                  newArray.push(row);
                                  break;
                                }
                              }
                            } else if (searchFunc({
                                         string: rowLabel,
                                         search: str,
                                         column: 0,
                                         row: row
                                       })) {
                              newArray.push(row);
                            }
                          }

                          // Reset `selectedIndex` to auto select only if the
                          // input field is not empty
                          if (newArray.length > 0) {
                            scope.selectedIndex = 0;
                          } else {
                            // nothing to select
                            scope.selectedIndex = -1;
                          }

                          // Feed new Array
                          scope.data = newArray;

                          // Need to align the columns during search to avoid
                          // jumping when there is a scrollbar
                          $timeout(scope.containerCtrl.align);
                        }
                        // Server search
                        else {
                          $timeout.cancel(keyEntryDelayTimeoutId);
                          keyEntryDelayTimeoutId = $timeout(function() {
                            page = 0;
                            isFullData = false;
                            // Auto select when there is a string in the input
                            // field
                            if (scope.inputLabel &&
                                scope.inputLabel.length > 0) {
                              scope.selectedIndex = 0;
                            }
                            // Empty string gets no selection
                            else {
                              scope.selectedIndex = -1;
                            }

                            // Because of the 200 mil delay we need to find out
                            // if the search is done after blur
                            if (str.length > 0 && !focused) {
                              autoSelectCatchUp = true;
                            }
                            getData(str || '');
                          }, scope.searchKeydownTimeout() || 200);
                        }
                      }
                    }
                  }
            };
          }
        ])

    /**
     * Bento Combobox Container Directive
     * For Combobox 1.x
     */
    .directive(
        'bentoComboboxContainer',
        [
          '$timeout',
          function($timeout) {
            return {
              replace: true, require: '^bentoCombobox', scope: {
                selectedIndex: '=',
                columnsWidth: '&',
                headers: '=',
                headerTemplate: '=',
                data: '=',
                isTable: '=',
                labelName: '=',
                onItemClick: '&',
                controller: '=',
                onEndOfScroll: '&',
                rowTemplate: '&',
                footerTemplateUrl: '&?',
              },
                  templateUrl:
                      function(element, attrs) {
                        return angular.isDefined(attrs.templateUrl) ?
                            attrs.templateUrl :
                            '../templates/combobox/bento-combobox-container.html';
                      },
                  link: function bentoComboboxContainerListLink(
                      scope, element, attrs, comboboxCtrl) {
                    scope.selectedIndex =
                        typeof scope.selectedIndex === 'undefined' ?
                        -1 :
                        scope.selectedIndex;
                    var container = element[0].querySelector(
                        '.bento-combobox-container-body');
                    scope.containerEl = container;

                    comboboxCtrl.containerScope = scope;

                    // Listen to scrolling for lazy loading
                    container.addEventListener('scroll', function() {
                      // fire end of scroll event, offset by 200px to make
                      // infinite scroll a little smoother
                      if (container.scrollTop + container.offsetHeight + 200 >=
                          container.scrollHeight) {
                        scope.onEndOfScroll();
                      }
                    });

                    scope.selectItem = function(index) {
                      scope.selectedIndex = index;
                      scope.onItemClick({index: index});
                    };

                    scope.$watch('selectedIndex', function(value) {
                      if (value > -1 && container && scope.data &&
                          scope.data.length > 0) {
                        // Wait until rendering is finished.
                        $timeout(function() {
                          var item = element[0].querySelector(
                              '[rel="row-' + value + '"]');
                          if (item) {
                            // Make sure the selected item/row is in view
                            if (item.offsetTop < container.scrollTop) {
                              container.scrollTop = item.offsetTop;
                            } else if (
                                item.offsetTop + item.offsetHeight >
                                container.scrollTop + container.offsetHeight) {
                              container.scrollTop = item.offsetTop +
                                  item.offsetHeight - container.offsetHeight;
                              if (value === scope.data.length - 1) {
                                scope.onEndOfScroll();
                              }
                            }
                          }
                        });
                      }
                    });

                    // Create a controller for the parent directive to access
                    scope.controller = {
                      scrollToTop: scrollToTop,
                      align: alignColumns,  // Align the header and columns
                      el: element[0],
                    };

                    // Dropdown load helpers
                    function scrollToTop() {
                      container.scrollTop = 0;
                    }

                    function alignColumns() {
                      if (scope.data && scope.data.length > 0) {
                        var cWidth = scope.columnsWidth() ?
                            scope.columnsWidth().slice() :
                            [];
                        var rowObj = element[0].querySelector(
                            '.bento-combobox-container-item bento-combobox-row-template');
                        var header = element[0].querySelector(
                            '.bento-combobox-container-header');
                        if (!rowObj || !header) {
                          return;
                        }
                        var row = rowObj.children, headers = header.children, i,
                            len, tempVar;

                        // Normalize Column Width
                        for (i = 0, len = headers.length; i < len; i++) {
                          tempVar = parseInt(cWidth[i]);
                          cWidth[i] = isNaN(tempVar) ? 'auto' : (tempVar + 'px')
                        }

                        // reset header widths
                        for (i = 0, len = headers.length; i < len; i++) {
                          headers[i].style.width = cWidth[i];
                          headers[i].style.opacity = '0';
                        }

                        // delayed render
                        $timeout(function() {
                          var targetWidth;
                          for (i = 0, len = headers.length; i < len; i++) {
                            if (i < len - 1 && row[i]) {
                              tempVar = cWidth[i];
                              targetWidth = (tempVar === 'auto') ?
                                  (Math.max(
                                       row[i].offsetWidth,
                                       headers[i].offsetWidth) +
                                   'px') :
                                  tempVar;
                              // Make sure the min width inline with the header
                              // columns
                              row[i].style.minWidth = targetWidth;
                              row[i].style.width = targetWidth;
                              // Align header widths
                              headers[i].style.width =
                                  row[i].offsetWidth + 'px';
                            }
                            headers[i].style.opacity = '1';
                          }
                        });
                      }
                    }
                  }
            }
          }
        ])

    /**
     * Bento Combobox Header Template Directive
     * For Combobox 1.x
     */
    .directive('bentoComboboxHeaderTemplate', [
      '$compile',
      function($compile) {
        return {
          replace: true,
          templateUrl:
              '../templates/combobox/bento-combobox-header-template.html',
          scope: {
            bentoComboboxHeaderTemplate:
                '&',       // Custom header template string/array
            $header: '&',  // item object
            $index: '@'    // an index of this column to refer the template
            // array
          },
          link: function(scope, element) {
            var defaultRowTemplate = '<span>{{$header()}}</span>',
                template = defaultRowTemplate;

            if (typeof scope.bentoComboboxHeaderTemplate() === 'string') {
              template =
                  '<span>' + scope.bentoComboboxHeaderTemplate() + '</span>';
            } else if (Array.isArray(scope.bentoComboboxHeaderTemplate())) {
              template = '<span>' +
                  scope.bentoComboboxHeaderTemplate()[scope.$index] + '</span>';
            }

            if (!template) {
              template = defaultRowTemplate;
            }

            template = angular.element(template);

            $compile(template)(scope);
            element.append(template);
          }
        };
      }
    ]);

/**
 * Bento Combobox Footer Directive
 * For Combobox 1.x
 */
var comboboxFooterDefaultTemplate = '<div class="bento-combobox-footer-row">' +
    '<div class="bento-combobox-footer-item" ng-repeat="button in footerOptions.buttons track by $index">' +
    '<div class="bento-combobox-footer-item-inner">' +
    '<a ng-click="onButtonAction(button)"' +
    ' ng-attr-aria-label="{{button.ariaLabel}}"' +
    ' ng-attr-title="{{button.ariaLabel}}"' +
    ' ng-keydown="onFooterItemKeydown($event, button)">' +
    '<i ng-if="button.icon" ng-class="button.icon"></i> ' +
    '{{button.label | bentoStringReplace:\'_ITEM_\': getComboboxInputLabel() || button.defaultItemLabel}}</a>' +
    '</div>' +
    '</div>' +
    '</div>';

comboboxApp
    .directive(
        'bentoComboboxFooter',
        [
          '$compile', '$templateCache', '$http', '$log',
          function($compile, $templateCache, $http, $log) {
            return {
              restrict: 'EA',
              require: '^bentoCombobox',
              template: '',
              link: function(scope, element, attrs, comboboxCtrl) {
                var template,
                    $templateEl =
                        angular.element(document.createElement('div')),
                    comboboxScope = scope.$parent.$parent,
                    // Create Keycode ref
                    KeyCodes = {
                      TAB: 9,
                      RETURN: 13,
                      SPACE: 32,
                      ALT: 18,
                      UP: 38,
                      DOWN: 40,
                      ESCAPE: 27
                    };

                comboboxCtrl.footerScope = scope;

                if (attrs.templateUrl && attrs.templateUrl.length) {
                  template = $templateCache.get(attrs.templateUrl);
                  if (template) {
                    // Template exists in the template
                    init();
                  } else {
                    // Use $http to lazy load template file
                    $http.get(attrs.templateUrl, {cache: true})
                        .then(
                            function(res) {
                              template = res.data;
                              init();
                            },
                            function(res) {
                              $log.error(
                                  'Combobox Footer Tempalte: [Error] Faild to load "' +
                                  attrs.templateUrl + '"');
                            });
                  }
                } else {
                  template = comboboxFooterDefaultTemplate;
                  init();
                }

                // Initialize
                function init() {
                  $templateEl.addClass('bento-combobox-footer-inner');
                  $templateEl.html(template);
                  $compile($templateEl)(scope);
                  element.append($templateEl);
                }

                // Get options
                scope.footerOptions = comboboxScope.footerOptions();
                // Init object
                scope.values = {};

                scope.onButtonAction = function(button) {
                  var value = scope.values.input || '';

                  // Make that the default item label is not forwarded to the
                  // callback
                  if (button.defaultItemLabel &&
                      value.toLowerCase() ===
                          button.defaultItemLabel.toLowerCase()) {
                    value = '';
                  }

                  // Call button action
                  button.action(value);

                  // Clear input label and set the Combobox to dirty
                  if (button.clearInputOnAction) {
                    comboboxScope.inputLabel = '';
                    comboboxScope.isDirty = false;
                  }

                  // Collapse the list container by default
                  if (button.collapseOnAction ||
                      typeof button.collapseOnAction == 'undefined') {
                    comboboxScope.onButtonClick();
                    comboboxCtrl.search('', true);
                  }
                };

                scope.onTabList = function() {
                  return comboboxScope.isContainerVisible;
                };

                scope.onFooterItemKeydown = function($event, button) {
                  switch ($event.keyCode) {
                    case KeyCodes.SPACE:
                    case KeyCodes.RETURN:
                      scope.onButtonAction(button);
                      $event.preventDefault();
                      $event.stopPropagation();
                      break;
                  }
                };

                // TODO: assign to scope to make unit testing easier
                scope.bentoOnInputKeyDown = comboboxScope.onInputKeyDown;
                comboboxScope.onInputKeyDown = function($event) {
                  if (scope.footerOptions) {
                    switch ($event.keyCode) {
                      case KeyCodes.RETURN:
                        // deprecated: this will be deprecated on the next
                        // update of bento
                      case KeyCodes.UP:
                      case KeyCodes.DOWN:
                        if ($event.ALT) {
                          comboboxScope.onButtonClick();
                          $event.preventDefault();
                          $event.stopPropagation();
                          return;
                        }
                        break;
                        // end here
                    }
                  }
                  scope.bentoOnInputKeyDown.call(
                      scope.bentoOnInputKeyDown, $event);
                };

                // Determine if the CTAs are tabbable
                scope.onTabList = function() {
                  if (comboboxScope.isContainerVisible) {
                    if (comboboxScope.data.length < 1 ||
                        !comboboxScope.inputLabel) {
                      return true;
                    }
                  }
                  return false;
                };

                // Get Text from the input label of the Combobox
                scope.getComboboxInputLabel = function() {
                  // If the dropdown is open a item may be selected
                  var selectedItem =
                      comboboxScope.data[comboboxScope.selectedIndex];
                  var itemLabel;
                  var inputString;
                  var labelName =
                      comboboxScope.labelName || comboboxScope.headerIndex;
                  // If an item is selected get the displayed property,
                  // otherwise the selected item is the ngModel
                  //
                  // (the user is not interacting with the combobox when
                  // selectedItem is the model)
                  if (comboboxScope.selectedIndex > -1 &&
                      angular.isObject(selectedItem)) {
                    itemLabel = selectedItem[labelName];

                    if (Array.isArray(itemLabel)) {
                      // This is a grid layout we need to find the right label
                      // string
                      itemLabel =
                          getLabelFrom(itemLabel[comboboxScope.headerIndex])
                              .toLowerCase();
                    } else {
                      // Label is a normal string
                      itemLabel = getLabelFrom(itemLabel).toLowerCase();
                    }

                  } else if (
                      comboboxScope.selectedIndex > -1 &&
                      angular.isObject(comboboxScope.ngModel) &&
                      comboboxScope.ngModel.hasOwnProperty(labelName)) {
                    itemLabel = getLabelFrom(comboboxScope.ngModel[labelName])
                                    .toLowerCase();
                  } else if (
                      angular.isObject(comboboxScope.ngModel) &&
                      comboboxScope.ngModel.hasOwnProperty(labelName)) {
                    if (angular.isObject(comboboxScope.ngModel[labelName])) {
                      itemLabel =
                          getLabelFrom(
                              comboboxScope.ngModel[labelName]
                                                   [comboboxScope.headerIndex])
                              .toLowerCase();
                    } else {
                      itemLabel = getLabelFrom(comboboxScope.ngModel[labelName])
                                      .toLowerCase();
                    }
                    selectedItem = comboboxScope.ngModel;
                  }
                  // If the user typed something in the combobox input
                  if (angular.isString(comboboxScope.inputLabel)) {
                    inputString = comboboxScope.inputLabel.toLowerCase();
                  }
                  // Use the text in the combobox input if there is not a
                  // selected item with the same text, otherwise use the default
                  // text
                  if (comboboxScope.inputLabel &&
                      (!angular.isObject(selectedItem) ||
                       itemLabel !== inputString)) {
                    scope.values.input = comboboxScope.inputLabel;
                  } else {
                    scope.values.input = scope.defaultAddText;
                  }

                  return scope.values.input;
                };

                // There are chances where the variable str is undefined, so
                // return and empty string to avoid errors
                function getLabelFrom(str) {
                  return typeof str === 'string' ? str : '';
                }
              }
            };
          }
        ])

    /**
     * Bento Combobox Row Template Directive
     * For Combobox 1.x
     */
    .component('bentoComboboxRowTemplate', {
      bindings: {
        rowTemplate: '<',  // Custom row template
        $item: '<',        // item object
        $labelName: '<',   // variable name used to display row
        $index: '<',       // an index of this item
        headers: '<'
      },
      // template    : '',
      controllerAs: '$row',
      controller: [
        '$scope', '$compile', '$element', '$attrs',
        function($scope, $compile, $element, $attrs) {
          var $row = this;

          $row.$onInit = function() {
            var defaultRowTemplate =
                    '<span class="combobox-default-row">{{$row.$labelName? $row.$item[$row.$labelName]:$row.$item}}</span>',
                defaultGridTemplate =
                    '<span class="combobox-grid-column" ng-repeat="cell in $row.$item[$row.$labelName] track by $index">{{cell}}</span>',
                defaultGridTemplateWithoutLabelName =
                    '<span class="combobox-grid-column-no-ln" ng-repeat="header in $row.headers track by $index">{{$row.$item[header]}}</span>',
                template = defaultRowTemplate;

            if ($row.rowTemplate) {
              template = $row.rowTemplate;
            } else
                // Grid
                if (Array.isArray($row.headers)) {
              if ($row.$labelName) {
                template = defaultGridTemplate;
              } else {
                template = defaultGridTemplateWithoutLabelName;
              }
            }
            var templateEl = angular.element(template);

            $compile(templateEl)($scope);
            $element.append(templateEl);
          };
        }
      ]
    });
})(window.angular);
(function (angular) {
  'use strict';

  angular
    .module('bento.contextualheader', [])
    .directive('bentoContextualHeader', bentoContextualHeader);

  bentoContextualHeader.$inject = [];

  function bentoContextualHeader() {
    var isImgRegex = /[^\s]+(\.(jpg|png|gif|bmp|svg)$)/;

    return {
      restrict   : 'EA',
      scope      : {
        contextualHeaderData: '&',
        onBackBtnClick      : '&',
        backBtnDisabled     : '&',
        hideBackBtn         : '&'
      },
      templateUrl: function (element, attrs) {
        return angular.isDefined(attrs.templateUrl) ?
          attrs.templateUrl : '../templates/contextual_header/bento-contextual-header.html';
      },
      link       : function (scope, element) {
        element.addClass('bento-contextual-header');

        // Right button click CTA
        scope.onRightButtonClick = function(){
          var button = scope.contextualHeaderData().button;
          if(button && button.action){
            button.action();
          }
        };

        // Return the condition whether the subtitle needs a tooltip
        scope.isTooltipEnabled = function(index){
          var selector = 'div[data-subtitle-id="'+index+'"]';
          var el = element[0].querySelector(selector);
          return (el && el.offsetWidth < el.scrollWidth);
        };

        // Check if the str is an image url
        scope.isImage = function(str){
          return isImgRegex.test(str);
        };
      }
    };
  }
})(window.angular);

(function(angular, window, undefined) {

'use strict';

angular
    .module(
        'bento.fileselector',
        ['bento.busyloader', 'bento.services', 'bento.translate'])
    .directive(
        'bentoFileSelector', [function() {
          return {
            controller: 'fileSelectorController',
            controllerAs: 'bentoFileSelectorCtrl',
            replace: true,
            scope: {
              ngModel: '=?',  // List of selected files
              accept: '@',    // Accept file types
              fileType:
                  '@',  // Limit the type of file that needs to be selected
              onFileSelect: '&',  // Callback when a file is selected
              onFileRemove: '&',  // Callback when the selected file's reference
                                  // is removed from this directive
              onDuplicateSelect: '&',  // Callback when the file(s) that have
                                       // already been selected
              multiple: '=',           // (Boolean) for multiple file selections
              appendOnSelection:
                  '=',  // (Boolean) append new files onto the existing list
              showSelected: '=',            // Show selected files in the view
              showFileSize: '=',            // Show file size info
              uploadProgress: '=',          // Upload progress variable
              showProgressPercentage: '=',  // Show upload progress percentage
              disableFilesDuringUpload: '=?',  // Disable file buttons from
                                               // being removed during upload
              dropFieldLabel: '@',     // Override to the drop field text
              browseButtonLabel: '@',  // Override to the upload button
              ngDisabled: '&'          // If this component is disabled or not
            },
            templateUrl: function(element, attrs) {
              return angular.isDefined(attrs.templateUrl) ?
                  attrs.templateUrl :
                  '../templates/file_selector/bento-file-selector.html';
            },
          };
        }])
    .filter(
        'bentoFileSizeFilter',
        function() {
          return function(value) {
            var output = '0 Byte';
            if (value < 1000) {
              output = value + 'B';
            } else if (value < 100000) {
              output = Math.round(value / 100) / 10 + 'KB';
            } else if (value < 1000000) {
              output = Math.round(value / 1000) + 'KB';
            } else if (value < 100000000) {
              output = Math.round(value / 100000) / 10 + 'MB';
            } else if (value < 1000000000) {
              output = Math.round(value / 1000000) + 'MB';
            } else if (value < 100000000000) {
              output = Math.round(value / 100000000) / 10 + 'GB';
            } else if (value < 1000000000000) {
              output = Math.round(value / 1000000000) + 'GB';
            } else if (value < 100000000000000) {
              output = Math.round(value / 100000000000) / 10 + 'TB';
            } else if (value < 1000000000000000) {
              output = Math.round(value / 1000000000000) + 'TB';
            }

            return output;
          }
        })
    .factory(
        '$fileSelectorServices',
        [
          '$bentoServices', '$sanitize',
          function($bentoServices, $sanitize) {
            /**
             * Parse a File out from the file list and forward it back to the
             * callback function
             * @param scope
             * @param files
             * @param selectedCallback
             * @param duplicateCallback
             * @param fileType
             */
            var parseFiles = function(
                scope, files, selectedCallback, duplicateCallback, fileType,
                element, accepted) {
              // Ignore non-file selection
              if (typeof files === 'undefined') {
                return;
              }

              var newFiles = (scope.multiple) ?
                  files :
                  [files[0]];  // 1 element when `mutiple` is NOT
                               // `true`
              var originalFiles = scope.ngModel;

              var selectedFiles = [];
              var duplicatedFiles = [];
              var dupIndex;
              scope.errorFiles = [];
              for (var i = 0; i < newFiles.length; i++) {
                var file = newFiles[i];
                if (originalFiles &&
                    (dupIndex = hasFileAtIndex(originalFiles, file)) > -1) {
                  // This is file has already been selected
                  duplicatedFiles.push(originalFiles[dupIndex]);
                  if (duplicateCallback && duplicatedFiles.length > 0) {
                    // Fire callback only when there are duplicates
                    duplicateCallback({files: duplicatedFiles});
                  }

                  $bentoServices.safeApply(scope);
                } else {
                  isFileAccepted(
                      file, accepted, element, scope, function(accepted) {
                        if (accepted) {
                          if (isValidFileType(file, fileType)) {
                            // A new file
                            var displayFilename =
                                truncateFilename(file, element);

                            // add new property to file object `displayFilename`
                            // only for display purpose, to avoid showing very
                            // long file name
                            file.displayFilename = displayFilename;
                            selectedFiles.push(file);

                            if (selectedFiles.length > 0) {
                              // Append or renew only if there is at least a
                              // selected file
                              if (scope.appendOnSelection &&
                                  Array.isArray(scope.ngModel) &&
                                  scope.multiple) {
                                // Determine if it needs to append to the
                                // existing file array or not
                                scope.ngModel =
                                    scope.ngModel.concat(selectedFiles);
                              } else if (selectedFiles.length > 0) {
                                // Add a file reference to scope
                                scope.ngModel = selectedFiles;
                                scope.disabledFiles = [];
                                scope.fileProgresses = [];
                              }

                              if (selectedCallback) {
                                selectedCallback({files: selectedFiles});
                              }
                            }
                          }
                        }
                        $bentoServices.safeApply(scope);
                      });
                }
              }
            };


            /**
             * Determine if the first element in files has the right file type
             * @param file
             * @param fileTypes
             * @returns {boolean}
             */
            var isValidFileType = function(file, fileTypes) {
              var _ft = (!!fileTypes) ? fileTypes.trim() : '';
              var fileNameBreakDown = file.name.split('.');
              var fileExtension =
                  fileNameBreakDown[fileNameBreakDown.length - 1];

              // This is no filetype specified
              if (typeof _ft === 'undefined' || _ft.length === 0) {
                return true;
              }

              // Check if this file extension exists in fileTypes string
              if (fileTypes.toLowerCase().search(
                      fileExtension.toLowerCase()) !== -1) {
                return true;
              }

              // File extension does not exist in the fileTypes
              return false;
            };

            /**
             * Callback will be set to true if it's a file.
             * If it's a folder the callback will be set to false.
             *
             * https://stackoverflow.com/questions/47362320/how-to-identify-the-difference-between-file-and-folder-ondropping-in-javascript
             *
             * @param {*} file - File that is uploaded
             * @param {*} callback true: if file, false: if it's a folder
             */
            function isFile(file, callback) {
              var start = 0;  // start byte
              var stop = 4;   // end byte - to avoid read all the content

              try {
                var reader = new FileReader();
                reader.onloadend = function(evt) {
                  if (evt.target.readyState == FileReader.DONE) {
                    var binary = '';
                    var bytes = new Uint8Array(evt.target.result);
                    var length = bytes.byteLength;
                    if (length == 0) {
                      callback(false);
                    } else {
                      callback(true);
                    }
                  } else {
                    callback(false);
                  }
                };

                var blob = file.slice(start, stop + 1);
                reader.readAsArrayBuffer(blob);
              } catch (e) {
                callback(false);
              }
            }

            /**
             * Find out if the file extensions belong to the `accepted` array
             * list
             * @param {File} file
             * @param {Array} accepted
             * @param {HTMLElement} element
             * @param {Object} scope
             * @param {Function} callback
             */
            var isFileAccepted =
                function(file, accepted, element, scope, callback) {
              isFile(file, function(isFile) {
                file.displayType = isFile ? 'file' : 'folder';
                var fileAccepted = isFile;
                if (fileAccepted) {
                  // this file type is not accepted
                  var indexOfExt = file.name.lastIndexOf('.');
                  var selectedFileExtension = indexOfExt < 0 ?
                      '' :
                      file.name.slice(indexOfExt).toLowerCase();

                  // list only the files that are accepted
                  if (accepted && accepted.length &&
                      accepted.indexOf(selectedFileExtension) < 0) {
                    fileAccepted = false;
                  }
                }

                updateFileNotAcceptedUI(file, fileAccepted, element, scope);

                callback(fileAccepted);
              });
            }

            /**
             * This function updates the UI if there are any errors. The UI is
             * manipulated inside the service is for a reason - to show errors
             * individually for all files when executing `parseFiles`.
             * @param {File} file File Object
             * @param {boolean} fileAccepted Defines whether the file is
             *     accecepted or not
             * @param {HTMLElement} element File Selector Element Container
             * @param {Object} scope Controller scope object
             */
            var updateFileNotAcceptedUI =
                function(file, fileAccepted, element, scope) {
              var fsContainer = element.querySelector('.bento-file-selector');
              var fsErrorEl = element.querySelector('.file-selection-error');
              if (fileAccepted) {
                // do not reset any old errors, if present
                if (scope.errorFiles.length === 0) {
                  if (fsContainer) {
                    fsContainer.classList.remove('accept-error');
                  }
                  if (fsErrorEl) {
                    fsErrorEl.classList.remove('show');
                  }
                }
              } else {
                if (fsContainer) {
                  fsContainer.classList.add('accept-error');
                }

                if (fsErrorEl) {
                  fsErrorEl.classList.add('show');
                }

                // push the new file
                scope.errorFiles.push(file);
              }
            }

            /**
             * Truncate given displayFilename based on the max length
             * @param file
             * @returns updated file object with `displayFilename` added
             */
            var truncateFilename = function(file, element) {
              // consider the file size information (ex: (100.2KB) ) + 'x'
              // (close button)
              var FILESIZE_INFO_LENGTH = 10;

              // 3 dots that needs to be shown
              var START_LENGTH_TO_REDUCE = 3;

              // last 5 chars
              var LAST_CHARS_TO_SHOW = 5;

              var fileNameBreakDown = file.name.split('.');
              var fileExtension =
                  fileNameBreakDown[fileNameBreakDown.length - 1];
              var displayFilename = file.name;
              var filename = fileNameBreakDown[0];

              if (!element) {
                return displayFilename;
              }

              var lengthCalcEl =
                  element.querySelector('span#truncated-filename-placeholder');
              if (lengthCalcEl) {
                var pixelsPerCharacter = 0;
                var charsLengthThatFit = 0;

                lengthCalcEl.innerHTML = $sanitize(displayFilename);
                lengthCalcEl.classList.remove('hidden');

                var style = window.getComputedStyle(element, null)
                                .getPropertyValue('font-size');
                var fontSize = parseFloat(style);
                lengthCalcEl.style.fontSize = fontSize;

                pixelsPerCharacter =
                    (lengthCalcEl.clientWidth / displayFilename.length);

                // remove spaces, number & spl characters to compute proper
                // pixels per char value
                pixelsPerCharacter +=
                    (displayFilename.length -
                     (displayFilename.replace(/[^A-Z]/gi, '').length - 1)) /
                    2;

                // add additional characters (size info)
                var sizeInfoLength = pixelsPerCharacter * FILESIZE_INFO_LENGTH;
                if (lengthCalcEl.clientWidth + sizeInfoLength >
                    element.clientWidth) {
                  charsLengthThatFit =
                      Math.round(element.clientWidth / pixelsPerCharacter);

                  var removeFromStart = START_LENGTH_TO_REDUCE +
                      FILESIZE_INFO_LENGTH + LAST_CHARS_TO_SHOW;
                  var showAtEnd = LAST_CHARS_TO_SHOW;

                  if (charsLengthThatFit <= removeFromStart) {
                    removeFromStart -= (LAST_CHARS_TO_SHOW);
                    if (charsLengthThatFit - removeFromStart < 1) {
                      removeFromStart = charsLengthThatFit - 1;
                    }
                    showAtEnd = 1;
                  }

                  displayFilename =
                      filename.substr(0, charsLengthThatFit - removeFromStart) +
                      '...' +
                      filename.substr(
                          filename.length - showAtEnd, filename.length);
                }

                lengthCalcEl.classList.add('hidden');
              }

              return displayFilename;
            };


            /**
             * Resets variables for the selector
             * @param scope
             */
            var resetFileSelector = function(scope) {
              scope.ngModel = undefined;
            };

            /**
             * Construct a new file input
             * @param scope
             * @returns {*}
             */
            var getFileInput = function(scope) {
              var accept = (scope.accept && scope.accept.length > 1) ?
                  ' accept="' + scope.accept + '"' :
                  '',
                  fileInput = angular.element(
                      '<input type="file" name="fileselect[]"' +
                      ' class="sr-only" tabindex="-1"' + accept +
                      (!!scope.multiple ? ' multiple' : '') +
                      ' bento-test="input-file"' +
                      ' />');

              return fileInput;
            };

            // private functions
            /**
             * Determine if the two files are identical
             * @param f1
             * @param f2
             * @returns {boolean}
             */
            function fileEqual(f1, f2) {
              return f1.lastModified === f2.lastModified &&
                  f1.name === f2.name && f1.size === f2.size;
            }

            /**
             * Determine if a file exist in a file array
             * @param fileArray
             * @param file
             * @returns {boolean}
             */
            function hasFileAtIndex(fileArray, file) {
              for (var i = 0, len = fileArray.length; i < len; i++) {
                if (fileEqual(fileArray[i], file)) {
                  return i;
                }
              }
              return -1;
            }

            return {
              resetFileSelector: resetFileSelector,
              isValidFileType: isValidFileType,
              parseFiles: parseFiles,
              getFileInput: getFileInput,
              truncateFilename: truncateFilename,
              isFileAccepted: isFileAccepted
            };
          }
        ])
    .controller('fileSelectorController', [
      '$scope', '$element', '$timeout', '$compile', '$bentoServices',
      '$fileSelectorServices', '$log',
      function(
          $scope, $element, $timeout, $compile, $bentoServices,
          $fileSelectorServices, $log) {
        // to debounce resize event
        var resizeTimer;

        // files types accepted
        // var accepted = ($scope.accept && $scope.accept.length) ?
        // $scope.accept.replace(/ /g,'').toLowerCase().split(',') : undefined;
        var accepted = parseAcceptFileList($scope.accept);

        // Initialize fileInput
        var fileInput = $fileSelectorServices.getFileInput($scope);
        // post removal message SR element
        var postRemovalMessage = $element[0].querySelector(
            '.bento-file-selector-post-removal-message');
        // File input field file change callback
        fileInput.on('change', onFileInputChange);
        $element.append(fileInput);

        if (typeof $scope.disableFilesDuringUpload === 'undefined') {
          $scope.disableFilesDuringUpload = true
        }

        // Need to compile when everything else is ready
        $timeout(function() {
          $compile(fileInput)($scope);
        });

        // Init variable
        $scope.disabledFiles = [];
        $scope.errorFiles = [];

        // Browse button click and trigger file input
        $scope.onBrowseClick = function($event) {
          if ($scope.ngDisabled()) {
            // This component is disabled therefore do nothing
            return;
          }

          // Use native dispatch for IEs
          if ($bentoServices.getIEVersion() !== -1) {
            // Using the native dispatcher on click for the file selector
            var clickEvent = document.createEvent('Event');
            clickEvent.initEvent('click', true, true);
            fileInput[0].dispatchEvent(clickEvent);
          } else {
            // Otherwise simple
            fileInput[0].click();
          }

          if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
          }
        };

        // Watch Selected files count when removing
        $scope.$watch('ngModel', function() {
          // Create a new  input field for the next file selection
          var newFileInput = $fileSelectorServices.getFileInput($scope);

          // Need to compile when everything else is ready
          $timeout(function() {
            $compile(fileInput)($scope);
          });

          newFileInput.on('change', onFileInputChange);

          // Replace the old fileInput with the new one
          fileInput.off('change', onFileInputChange);
          fileInput.replaceWith(newFileInput);
          fileInput = newFileInput;
        });

        // User clicks on the file name remove icon
        // Removes the file name pill and notify the
        // parent controller if there is a callback function `onFileRemove()`
        $scope.onRemoveClick = function($index) {
          var fileToBeRemoved = $scope.ngModel[$index];

          $scope.ngModel.splice($index, 1);
          $scope.fileRemoved = fileToBeRemoved.name;

          postRemovalMessage.focus();

          if (!!$scope.onFileRemove) {
            $scope.onFileRemove({file: fileToBeRemoved});
          }
        };

        // Add drag and drop event listeners
        $element[0].addEventListener('dragover', function(event) {
          if ($scope.ngDisabled()) {
            // prevent browsers to open the file
            event.stopPropagation();
            event.preventDefault();

            // Disabled do nothing
            return;
          }

          $element.addClass('dragged-over');

          // prevent browsers to open the file
          event.stopPropagation();
          event.preventDefault();
        });

        // When user drags the file away from the dropping area
        $element[0].addEventListener('dragleave', function(event) {
          if ($scope.ngDisabled()) {
            // prevent browsers to open the file
            event.stopPropagation();
            event.preventDefault();

            // Disabled do nothing
            return;
          }

          $element.removeClass('dragged-over');
        });

        // When user drops a files into the dropping area
        $element[0].addEventListener('drop', function(event) {
          if ($scope.ngDisabled()) {
            // prevent browsers to open the file
            event.stopPropagation();
            event.preventDefault();

            // Disabled do nothing
            return;
          }

          $element.removeClass('dragged-over');

          /**
           * IE 11
           * Drag and Drop for Folders behaves little different in IE. Every
           * drop method callback will be supplied with event . This event
           * argument is little different for IE when a folder is dropped.
           * Basically the file list (inside event) comes empty, where as in
           * Chrome or FF, the file list shows up with the folder name and a
           * default size of 4096.
           */
          if (event && event.dataTransfer && event.dataTransfer.files &&
              !event.dataTransfer.files.length) {
            var file = {type: 'unknown'};
            $scope.errorFiles = [];
            $fileSelectorServices.isFileAccepted(
                file, '', $element[0], $scope, function() {
                  $bentoServices.safeApply($scope);
                });
          } else {
            $fileSelectorServices.parseFiles(
                $scope, event.dataTransfer.files, $scope.onFileSelect,
                $scope.onDuplicateSelect, $scope.fileType, $element[0],
                accepted);
          }

          // prevent browsers to open the file
          event.stopPropagation();
          event.preventDefault();
        });

        window.addEventListener('resize', updateDisplayFilenameDuringResize);

        function updateDisplayFilenameDuringResize(event) {
          if (!$scope.ngModel) {
            return;
          }
          // simple debounce
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            var selectedFile;
            var updatedDisplayName;
            var applyChanges = false;
            for (var i = 0; i < $scope.ngModel.length; i++) {
              selectedFile = $scope.ngModel[i];
              updatedDisplayName = $fileSelectorServices.truncateFilename(
                  selectedFile, $element[0]);
              if (selectedFile.displayFilename !== updatedDisplayName) {
                selectedFile.displayFilename = updatedDisplayName;
                applyChanges = true;
              }
            }
            // apply only when display name is updated
            if (applyChanges) {
              $scope.$apply()
            }
          }, 250);
        }

        // Upload progress
        var uploadProgressTickPromise;
        $scope.uploadProgressPercentage = 0;
        $scope.$watchCollection('uploadProgress', function(progress) {
          uploadProgressTick();
        });

        function uploadProgressTick() {
          $timeout.cancel(uploadProgressTickPromise);
          uploadProgressTickPromise = $timeout(function() {
            var progress = $scope.uploadProgress;
            if (progress && progress.length > 0) {
              if (!Array.isArray(progress)) {
                $element.removeClass('bento-file-selector-in-progress');
                $log.error(
                    'Bento File Selector: incorrect "upload-progross" data structure.\nUse [{file:<type File>, position:<type Number - bytes uploaded>},...]')
              } else if (progress.length > 0) {
                var totalFileSize = 0, totalPosition = 0, fileObj, fileIndex;

                if (!$scope.appendOnSelection) {
                  $scope.disableBrowseButton = true;
                }

                // calculate the percentage and file disabled states
                for (var i in progress) {
                  fileObj = progress[i];
                  fileIndex = $scope.ngModel.indexOf(fileObj.file);

                  // No need to
                  if (fileIndex === -1) {
                    continue;
                  } else {
                    totalFileSize += fileObj.file.size;
                    totalPosition += fileObj.position;

                    if (fileObj.file.size > fileObj.position) {
                      $scope.disabledFiles[fileIndex] = true;
                    } else {
                      $scope.disabledFiles[fileIndex] = false;
                    }

                    $scope.fileProgresses[fileIndex] =
                        Math.floor(fileObj.position / fileObj.file.size * 100);
                  }
                }

                $scope.uploadProgressPercentage =
                    Math.floor(totalPosition / totalFileSize * 100);

                // update the progress bar view based on the current progress
                // percentage
                if (
                    $scope.uploadProgressPercentage >= 100 ||
                    totalFileSize === 0  // No more files
                ) {
                  $element.removeClass('bento-file-selector-in-progress');
                  $scope.disableBrowseButton = false;
                  // remove all progress references
                  $scope.uploadProgress = [];

                  // reset progress bar after hiding
                  $timeout(function() {
                    $scope.uploadProgressPercentage = 0;
                  }, 1000);
                } else if ($scope.uploadProgressPercentage >= 0) {
                  if (!$element.hasClass('bento-file-selector-in-progress')) {
                    $element.addClass('bento-file-selector-in-progress');
                  }
                  uploadProgressTick();
                }
              }
            } else {
              $element.removeClass('bento-file-selector-in-progress');
              $scope.disableBrowseButton = false;
              $scope.disabledFiles = [];
            }
          }, 500);  // $timeout
        }

        // Callback
        function onFileInputChange(event) {
          $fileSelectorServices.parseFiles(
              $scope, event.target.files, $scope.onFileSelect,
              $scope.onDuplicateSelect, $scope.fileType, $element[0], accepted);

          $timeout(function() {
            // focus to the first file label
            if ($scope.showSelected) {
              var filenameLabel = $element[0].querySelector(
                  '.bento-file-selector-filename-label');
              if (filenameLabel) {
                filenameLabel.focus();
              }
            }
          }, 100);
        }

        function parseAcceptFileList(sAcceptTypes) {
          var consolidatedAcceptFileTypeList;
          var acceptedTypeLists = (sAcceptTypes && sAcceptTypes.length) ?
              sAcceptTypes.replace(/ /g, '').toLowerCase().split(',') :
              undefined;
          if (!acceptedTypeLists) {
            return undefined;
          }

          var acceptedType;
          for (var i = 0; i < acceptedTypeLists.length; i++) {
            acceptedType = acceptedTypeLists[i];
            // if the accept string is a MIME type, then prepare the list, else
            // convert string to array
            var mime = getMime(acceptedType);
            if (mime && mime.type) {
              var acceptedFileList;
              switch (mime && mime.type) {
                case 'audio':
                  acceptedFileList = mime.extension === '*' ?
                      [
                        '.aac', '.mid', '.midi', '.oga', '.wav', '.weba',
                        '.3gp', '.3g2'
                      ] :
                      [mime.extension];
                  break;

                case 'video':
                  acceptedFileList = mime.extension === '*' ?
                      ['.avi', '.mpeg', '.ogv', '.webm', '.3gp', '.3g2'] :
                      [mime.extension];
                  break;

                case 'image':
                  acceptedFileList = mime.extension === '*' ?
                      [
                        '.bmp', '.gif', '.ico', '.jpeg', '.jpg', '.png', '.svg',
                        '.tif', '.tiff', '.webp'
                      ] :
                      [mime.extension];
                  break;

                case 'text':
                  acceptedFileList = mime.extension === '*' ?
                      ['.css', '.csv', '.html', '.calendar', '.plain'] :
                      [mime.extension];
                  break;

                default:
                  break;
              }

              if (acceptedFileList) {
                !consolidatedAcceptFileTypeList &&
                    (consolidatedAcceptFileTypeList = []);
                for (var j = 0; j < acceptedFileList.length; j++) {
                  consolidatedAcceptFileTypeList.push(acceptedFileList[j]);
                }
              }
            } else {
              !consolidatedAcceptFileTypeList &&
                  (consolidatedAcceptFileTypeList = []);
              consolidatedAcceptFileTypeList.push(acceptedType);
            }
          }

          return consolidatedAcceptFileTypeList;
        }

        function getMime(sAccept) {
          var mime;
          if (sAccept && sAccept.length) {
            var index = sAccept.indexOf('/');
            if (index !== -1) {
              var extension = sAccept.slice(index + 1, sAccept.length);
              mime = {
                type: sAccept.slice(0, index),
                extension: extension === '*' ? extension : '.' + extension
              };
            }
          }

          return mime;

          // return (sAccept && sAccept.length && sAccept.indexOf('/') !== -1) ?
          // true : false;
        }

        $scope.$on('$destroy', function() {
          window.removeEventListener(
              'resize', updateDisplayFilenameDuringResize);
        });
      }
    ]);
})(window.angular, window);

(function (window, angular) {
  var timeout;
  /* Directive */
  angular.module('bento.megamenu', [])
    .directive('megamenu', [
      '$timeout',
      function ($timeout) {
        timeout = $timeout;
        return {
          restrict: 'AC',
          scope   : false,
          link    : megamenuLinkFunc
        }
      }]);

  /**
   * Megamenu Main link function
   * @param scope
   * @param element
   * @param attrs
   * @param controller
   */
  function megamenuLinkFunc(scope, element, attrs, controller) {

    var isMemberOfToolbar = false,
        toolbar,
        currentItem,
        submenu,
        toggleButton = element[0].parentElement.querySelector('[uib-dropdown-toggle]')
    ;

    // make sure this directive has the right class name for CSS to kick in
    element.addClass('megamenu');

    /**
     * Takeover Megamenu
     */
    // Check if this is an `takeover` element
    if (attrs.takeover && attrs.takeover.trim() === 'true') {
      /*
      Instead of restructure the current DOM element AKA "dropdown-menu",
      We will create a new element after this and move everything over.
      At the same time, $watch the original element and see if its content gets repopulated or not
       */
      // check if this megamenu is part of a toolbar
      var tmpEl        = element[0],
          takeoverMenu,
          isClicked;

      // Walk up the DOM tree to find out if this `takeover` is part of a navbar
      do {
        if (tmpEl.className.search('global-subnav') > -1) {
          // Bingo
          // This `takeover` is a Nav (Tool)Bar member
          isMemberOfToolbar = true;
          toolbar = tmpEl;
        }
        tmpEl = tmpEl.parentNode;
      } while (tmpEl.tagName !== 'BODY' && !isMemberOfToolbar);

      // Only a Nav (Tool)Bar member can become the actual `takeover` directive.
      // Otherwise, nothing is executed below.
      if (isMemberOfToolbar) {

        // Hide the origina megamenu
        element.removeClass('dropdown-menu');
        element.addClass('ng-hide');

        // Create and add the new menu
        takeoverMenu = angular.element('<ul class="dropdown-menu megamenu megamenu-takeover"></ul>')
        element.after(takeoverMenu);

        // Declare the entire menu item is a `megamenu-takeover-dropdown`
        angular.element(element[0].parentElement).addClass('megamenu-takeover-dropdown');

        // Check if this dropdown is expanded or not
        scope.$watch(function () {
          return toggleButton.getAttribute('aria-expanded') === 'true';
        }, function (isOpen) {
          // clean columns when closed
          if (!isOpen) {
            cleanColumns();
            isClicked = false;

            // Clean global var `submenu`
            if (submenu) {
              submenu.removeAttr('style');
            }

            // Remove active state to the current `submenu` item
            if (currentItem) {
              angular.element(currentItem).removeClass('active');
            }
          }
        });

        // Restructure the menu as a `takeover` element
        scope.$watch(function () {
          return element[0].textContent;
        }, function () {
          // Wait for all the variables bindings are rendered
          timeout(function () {
            restructureMenu(element, takeoverMenu);
          }, 0);
        });
      }

      /**
       * Cleans all the columns except for the submenu header column
       * 'megamenu-takeover-header'
       */
      function cleanColumns() {
        var columnsToRemove = takeoverMenu[0].querySelectorAll('.column.submenu');

        for (i = 0, len = columnsToRemove.length; i < len; i++) {
          column = columnsToRemove[i];
          column.parentNode.removeChild(column);
        }
      }

      /**
       * Event Handler when a submenu header is click or hovered
       * @param currentTarget
       * @param element
       */
      function onHeaderHover(currentTarget, element) {
        // clean the previous columns if there is any
        var columns = [],
            links   = currentTarget.links,
            i, len, column;

        // Clean before preceeding
        cleanColumns();

        // Clean `megamenu-takeover-header`
        submenu.removeAttr('style');

        // create new column(s)
        var currentColumn;
        for (i = 0, len = links.length; i < len; i++) {
          if (!currentColumn) {
            currentColumn = angular.element('<li class="column submenu"></li>');
            element.append(currentColumn);
            columns.push(currentColumn);
          }

          currentColumn.append(links[i]);

          // Make new column if content overflows
          if (currentColumn[0].offsetHeight > submenu[0].offsetHeight) {
            currentColumn = angular.element('<li class="column submenu"></li>');
            element.append(currentColumn);

            columns.push(currentColumn);
            currentColumn.append(links[i]);
          }

          // This column is overflowing to the next row.
          // It needs to be removed and to be rendered differently
          if (currentColumn[0].offsetTop > submenu[0].offsetTop) {
            columns.pop();
            currentColumn[0].parentElement.removeChild(currentColumn[0]);
            // New render
            renderOnlyIntoGivenColumns(columns, links);
            break;
          }
        }
      }

      /**
       * Re-render the submenu items into give columns
       * @param columns
       * @param links
       * @param submenu
       */
      function renderOnlyIntoGivenColumns(columns, links) {
        var columnItemCount = Math.ceil(links.length / columns.length);
        var currentColumnIndex = 0;

        // Start to put links into the current column that is indexed
        for (var i = 0, len = links.length; i < len; i++) {
          if (i >= columnItemCount * (currentColumnIndex + 1)) {
            currentColumnIndex++;
          }
          if (columns[currentColumnIndex]) {
            columns[currentColumnIndex].append(links[i]);
            // Need to redo the rearranging with less columns
            if (columns[currentColumnIndex][0].offsetTop > submenu[0].offsetTop) {
              columns.pop();
              renderOnlyIntoGivenColumns(columns, links);
              break;
            }
          }
        }

        if (columns[0]) {
          submenu.css('height', columns[0][0].offsetHeight + 'px');
        }
      }

      /**
       * Restructuring the current Menu
       * @param element
       */
      function restructureMenu(element, takeoverMenu) {
        var linkCollection = [], link;
        var liEls = element[0].querySelectorAll('li.column');
        var $liEl;
        var lastActive;

        // we do not restructure when there is nothing in the original dropdown-menu
        if (liEls.length === 0) {
          return;
        }

        // Reset takeoverMenu
        takeoverMenu[0].innerHTML = '';

        // Generate a new DOM structure for this `Takeover` megamenu
        submenu = angular.element('<li class="column"><ul></ul></li>');
        takeoverMenu.append(submenu);
        submenu.find('ul').append(liEls);

        // Remove all categorized links into memory/`links` variable
        for (var i = 0, len = liEls.length; i < len; i++) {
          var links = [];
          var children = liEls[i].children,
              child
          ;

          for(var c=0, lenC = children.length; c < lenC; c++){
            child = children[c];
            if(child.tagName === 'A'){
              links.push(child);
            }
          }

          linkCollection.push(links);

          // Create a reference for its submenu links
          liEls[i].links = links;

          // Remove all the links and to use later
          for (var j = 0, lenJ = links.length; j < lenJ; j++) {
            link = links[j];
            link.parentElement.removeChild(link);
          }

          // Add style to headers
          $liEl = angular.element(liEls[i]);
          $liEl.removeClass('column');
          $liEl.addClass('megamenu-takeover-header');


          if(links.length > 0) {
            // Only add navigation when there are children in this column
            $liEl.attr('tabindex', 0);
            $liEl.append('<i class="bento-icon-chevron-right"></i>');
          }
          // Support `hover` `click` and `touch` so that there is no delay
          $liEl.on('click mouseenter touchstart focus', function (e) {
            // Update global var
            currentItem = e.currentTarget;

            if(currentItem.links.length > 0){
              // Just execute this even listener once without
              // any additional clicking interference
              // Only when there is child in the link
              e.stopPropagation();
              e.preventDefault();
            }

            if (e.type === 'click') {
              isClicked = true;
              return;
            }

            if (e.type === 'mouseover' && isClicked) {
              // mouseover is no longer available after a mouse click
              return;
            }

            // Reset the previous `active` category menu header
            if (lastActive) {
              lastActive.removeClass('active');
            }

            lastActive = angular.element(e.currentTarget);
            lastActive.addClass('active');

            // Fire the actual code for submenu header hover event handler
            onHeaderHover(currentItem, takeoverMenu);
          });

        }
      }
    }
    /**
     * Normal Megamenu
     */
    else {
      // no need to proceed as megamenu leaves on CSS natively
      // Need to add resize code

      var windowResizeTimer, vw, toggleRect;

      window.addEventListener('resize', onWindowResize);

      function onWindowResize(e) {

        timeout.cancel(windowResizeTimer);
        timeout(timedResize, 100);
      }

      function timedResize() {
        vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (vw < 600) {
          toggleRect = toggleButton.getBoundingClientRect();
          element.addClass('megamenu-mobile');
          element.css('width', vw + 'px');

          if (toggleRect.left < 20) {
            element.css('max-width', (vw - toggleRect.left - 20) + 'px');
            element.css('left', 0);
          } else {
            element.css('max-width', (vw - 40) + 'px');
            element.css('left', (20 - toggleRect.left) + 'px');
          }

        } else {
          element.removeClass('megamenu-mobile');
          element.attr('style', '');
        }
      }

      // Clear
      element.on('$destroy', function () {
        window.removeEventListener('resize', onWindowResize);
      });

      timedResize();
    }

  }
})(window, angular);
(function(angular, window) {
'use strict';
// GLOBAL CONSTANTS
var CHECKED_STAT = '__buimsoChecked';

angular
    .module('bento.multiselectoverlay', ['bento.services', 'bento.translate'])
    .directive(
        'bentoMultiselectOverlay',
        [
          '$timeout',
          function($timeout) {
            return {
              require: ['ngModel', '?bentoAppendToParent'],
              scope: {
                ngModel: '=',   // in Array
                listData: '&',  // List data array in `{name:string,
                                // data:object}` format
                side: '@',  // Side where the overlay shows ['left : 'right']
                sort: '=',  // (boolean) turn on / off sorting
                sortReverse: '=',     // (boolean) sort in reverse order or not
                doneButtonText: '@',  // Text for Done button
                selectAllText: '@',   // Text for Select All checkbox
                showAllText: '@',     // Text for Show All tab
                showSelectedText: '@',  // Text for Show Selected tab
                selectButtonText: '@',  // Text for select
                editButtonText: '@',    // Text for Edit
                selectedInfoText:
                    '@',  // Text for Info text next to the Edit button
                allSelectedInfoText: '@',  // Text Pattern for Info text when
                                           // all items are selected
                revertSelectionsOnDismissal:
                    '=',  // Flag to revert to the previous selections when
                          // clicked outside of the component
                hideSelectedInfo: '&',     // Flag to hide selected info text,
                bentoAppendToParent: '@',  // CSS selector to set scrollable
                                           // parent, pass to side overlay
                isOpen: '=?',  // To dynamically change its open/close state
                tooltip: '@'   // Show tooltip when enabled
              },
              templateUrl: function(element, attrs) {
                return angular.isDefined(attrs.templateUrl) ?
                    attrs.templateUrl :
                    '../templates/multiselect_overlay/bento-multiselect-overlay.html';
              },
              link: function(scope, element, attrs, controllers) {
                var lastArray = Array.isArray(scope.ngModel) ?
                    scope.ngModel.slice() :
                    [],
                    mainLabel = element[0].querySelector(
                        '.bento-multiselect-overlay-label'),
                    sideOverlayEl =
                        element[0].querySelector('.bento-side-overlay'),
                    cancelNgModelWatch, ngModelController = controllers[0];

                // initialize ngModel properties
                ngModelController.$setPristine();
                ngModelController.$setUntouched();

                // Override the isEmpty definition
                ngModelController.$isEmpty = function(val) {
                  if (scope.ngModel && scope.ngModel.length === 0) {
                    return true;
                  } else if (!scope.ngModel) {
                    return true;
                  }
                  return false;
                };

                // Initiate internal variables
                scope.selectedItemCount = 0;
                scope.selectedItems = [];
                scope.firstItemName =
                    (scope.selectedItemCount > 0) ? scope.ngModel[0].name : '';

                scope.onDoneClick = function(isDismissal) {
                  var revertAndDismissal =
                      scope.revertSelectionsOnDismissal && isDismissal;

                  if (revertAndDismissal) {
                    // revert selection in the list
                    scope.selectedItems = ngModelController.$modelValue.slice();
                    mainLabel.focus();
                  } else if (!arrayEqual(
                                 scope.selectedItems,
                                 ngModelController.$modelValue)) {
                    // update ngModel
                    scope.ngModel =
                        scope.selectedItems && scope.selectedItems.length ?
                        scope.selectedItems.slice() :
                        [];
                    ngModelController.$setViewValue(scope.ngModel);
                    ngModelController.$commitViewValue();

                    // Make this component dirty
                    ngModelController.$setDirty();
                  }

                  // Set the component to be touched
                  ngModelController.$setTouched();
                };

                attrs.$observe('disabled', function(bool) {
                  scope.isDisabled = bool;
                });

                scope.onListChange = function() {
                  ngModelController.$setTouched();
                };

                // Start watching `ngModel`
                watchNgModel();

                /**
                 * Initiate `ngModel` watch
                 */
                function watchNgModel() {
                  if (cancelNgModelWatch) {
                    cancelNgModelWatch();
                  }

                  cancelNgModelWatch =
                      scope.$watchCollection('ngModel', function(newModel) {
                        if (!arrayEqual(newModel, scope.selectedItems)) {
                          // after ngModel is updated internally
                          scope.selectedItems =
                              newModel ? newModel.slice() : [];
                        }

                        var length = newModel ? newModel.length : 0;
                        scope.selectedItemCount = length;
                        scope.firstItemName =
                            (length > 0) ? scope.ngModel[0].name : '';
                      });
                }
              }
            };
          }
        ])

    /**
     * Sub Directive
     * Bento Side Overlay and elements
     */
    .directive(
        'bentoSideOverlay',
        [
          '$timeout', '$parse', '$bentoServices',
          function($timeout, $parse, $bentoServices) {
            return {
              scope: false,
              restrict: 'A',
              link: function(scope, element, attrs, controller) {
                // properties and pointer to do the geo calculations
                var $body = angular.element(document.body), overlayMargin = 20,
                    side = attrs.side ? attrs.side.trim() : 'right',
                    $toggleButton = angular.element(
                        element[0].querySelector('.bento-side-overlay-toggle')),
                    $overlayContainer =
                        angular.element(element[0].querySelector(
                            '[bento-side-overlay-content]')),
                    $overlayContainerWrapper =
                        angular.element(element[0].querySelector(
                            '.bento-side-overlay-container-wrapper')),
                    $overlayFooter = angular.element(element[0].querySelector(
                        '.bento-side-overlay-container-footer')),
                    overlayHeight = 0,
                    $doneButton = angular.element(element[0].querySelector(
                        '.bento-side-overlay-container-footer-done')),
                    $cancelButton = angular.element(element[0].querySelector(
                        '.bento-side-overlay-container-footer-cancel')),
                    scrollableParent =
                        getScrollableParent(element[0].parentElement),
                    scrollableParentScrollTop, isDismissal = false;

                // Init directive CSS classes
                element.addClass('bento-side-overlay');
                element.addClass(
                    (side === 'right') ? 'bento-side-overlay-right' :
                                         'bento-side-overlay-left');

                // Toggle button listener
                $toggleButton.on('click', function(event) {
                  toggle();
                  preventEvent(event);
                });

                // Done button listener and function
                $doneButton.on('click touchend', function(event) {
                  isDismissal = false;
                  scope.isOpen = false;
                  preventEvent(event);
                  $bentoServices.safeApply(scope);
                });

                // Cancel Button listener and function
                $cancelButton.on('click touchend', function(event) {
                  isDismissal = true;
                  scope.isOpen = false;
                  preventEvent(event);
                  $bentoServices.safeApply(scope);
                });

                // Keyboar event listener for keyboard supports
                element[0].addEventListener('keydown', function(event) {
                  switch (event.keyCode) {
                    // 'ESC'
                    case 27:
                      if (element.hasClass('open')) {
                        isDismissal = true;
                        scope.isOpen = false;
                        preventEvent(event);
                        $bentoServices.safeApply(scope);
                      }
                      break;
                  }
                });

                var scrollPane;

                $timeout(function() {
                  // Get El reference of the scrollpane when ready
                  scrollPane = element[0].querySelector(
                      '.bento-multiselect-list-scroll-pane');
                }, 100);

                function toggle() {
                  scope.isOpen = !scope.isOpen;
                  $bentoServices.safeApply(scope);
                }

                function open() {
                  if (!element.hasClass('open')) {
                    element.addClass('open');

                    $timeout(function() {
                      // `click` should not be used since the items clicked in
                      // the overlay could disappear before the window recieves
                      // its event
                      window.addEventListener('mousedown', onWindowClick);

                      // Render after the overlay is not hidden on stage
                      renderOverlay();

                      // Focus on the overlay's input
                      $overlayContainer[0].querySelector('input').focus();
                    });

                    // disable the parent scroll from double scrolling
                    scrollableParentScrollTop = scrollableParent.scrollTop;
                    window.addEventListener('wheel', preventWheelScroll);
                    window.addEventListener('keydown', preventKeyScroll);
                  }
                }

                function close() {
                  if (element.hasClass('open')) {
                    isDismissal = false;
                    onDoneClick();
                  }
                }

                function preventWheelScroll(event) {
                  if (!scrollPane) {
                    scrollPane = element[0].querySelector(
                        '.bento-multiselect-list-scroll-pane');
                  }

                  var scrollTop = scrollPane.scrollTop, deltaY = event.deltaY;

                  if ((!scrollPane.contains(event.target) &&
                       event.target !== scrollPane) ||
                      (deltaY < 0 && scrollTop === 0) ||
                      (deltaY > 0 &&
                       (scrollTop + scrollPane.offsetHeight >=
                        scrollPane.scrollHeight))) {
                    event.stopPropagation();
                    event.preventDefault();
                  }

                  scrollableParent.scrollTop = scrollableParentScrollTop;
                }

                // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
                // left: 37, up: 38, right: 39, down: 40,
                var keysToPrevent =
                    {32: 0, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 40: 1};

                function preventKeyScroll(event) {
                  if (keysToPrevent[event.keyCode]) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }

                function preventEvent(e) {
                  e.stopPropagation();
                  e.preventDefault();
                }

                // jQuery event Listener
                function onDoneClick() {
                  element.removeClass('open');
                  $overlayContainerWrapper.removeClass('show-overlay');

                  // Remove fixed position classes
                  $overlayContainerWrapper.removeClass(
                      'bento-side-overlay-container-wrapper-fixed');
                  $overlayContainerWrapper.removeClass('open');


                  window.removeEventListener('wheel', preventWheelScroll);
                  window.removeEventListener('keydown', preventKeyScroll);

                  // remove window listener
                  window.removeEventListener('mousedown', onWindowClick);

                  // focus back to the toggle button
                  $toggleButton[0].focus();

                  if (!!attrs.onDone) {
                    var funcName = attrs.onDone.replace('()', '').trim();
                    // fire callback function
                    if (!!scope[funcName]) {
                      scope[funcName](isDismissal);
                      // notify NG digest
                      $bentoServices.safeApply(scope);
                    }
                  }

                  $toggleButton.after($overlayContainerWrapper);
                }

                // Window (aka Done) click listener function
                function onWindowClick(event) {
                  if (!element[0].contains(event.target) &&
                      !$overlayContainerWrapper[0].contains(event.target)) {
                    isDismissal = true;
                    scope.isOpen = false;
                    preventEvent(event);
                    $bentoServices.safeApply(scope);
                  }
                }

                // Watch and assign overlay height
                if (!!attrs.overlayHeight) {
                  scope.$watch(
                      function() {
                        return scope[attrs.overlayHeight.trim()];
                      },
                      function(newHeight) {
                        overlayHeight = newHeight;
                      });
                }

                scope.$watch('isOpen', function(v) {
                  if (v && !element.hasClass('open')) {
                    open();
                  } else if (!v) {
                    close();
                  }
                });

                // Watch and adjust footer height when switching `force-desktop`
                // class
                scope.$watch(
                    function() {
                      return $overlayFooter[0].offsetHeight;
                    },
                    function(newHeight) {
                      $overlayContainer.css('padding-bottom', newHeight + 'px');
                    });

                // Get the parent where there is scrolling or <body>
                function getScrollableParent(el) {
                  if (el === null) {
                    return;
                  }

                  if (attrs.bentoAppendToParent &&
                      attrs.bentoAppendToParent != '') {
                    var cssSelector = attrs.bentoAppendToParent;
                    var parentEl = el.closest(cssSelector);
                    if (parentEl) {
                      return parentEl;
                    }
                  }

                  var overflowY = window.getComputedStyle(el).getPropertyValue(
                      'overflow-y');
                  var overflow =
                      window.getComputedStyle(el).getPropertyValue('overflow');

                  if (overflowY === 'auto' || overflowY === 'scroll' ||
                      overflow === 'auto' || overflow === 'scroll') {
                    return el;
                  } else if (el.nodeName === 'BODY') {
                    return el;
                  } else {
                    return getScrollableParent(el.parentElement);
                  }
                }

                // Find out how far the toggle is away from it's scrolling
                // parent
                function getElementOffsetFrom(element, parentElement) {
                  var parentRect = parentElement.getBoundingClientRect();
                  var toggleRect = element.getBoundingClientRect();

                  // Return the relative RECT of the toggle button to the given
                  // parent
                  return {
                    left: toggleRect.left - parentRect.left,
                    right: parentRect.right - toggleRect.right,
                    top: toggleRect.top - parentRect.top,
                    bottom: parentRect.bottom - toggleRect.bottom,
                    width: toggleRect.width,
                    height: toggleRect.height
                  };
                }

                // Render and position overlay
                var getOverlayHeightWith = $parse(attrs.overlayHeight),
                    windowResizeTimeout = 0;

                /**
                 * Event Listener when the window is resizing
                 * @param e
                 */
                function onWindowResize(e) {
                  if (element.hasClass('open')) {
                    $timeout.cancel(windowResizeTimeout);
                    windowResizeTimeout = $timeout(renderOverlay, 100);
                  }
                }

                // Attach windows resize code
                window.addEventListener('resize', onWindowResize);
                // Make sure to remove the listener when this component is
                // destroyed
                scope.$on('$destroy', function() {
                  window.removeEventListener('resize', onWindowResize);
                  $overlayContainerWrapper.remove();
                });

                function renderOverlay() {
                  var parentElement = $overlayContainerWrapper, viewport = {
                    width: Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0),
                    height: Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0)
                  };

                  if (viewport.width < 601 || viewport.height < 421) {
                    parentElement.addClass(
                        'bento-side-overlay-container-wrapper-fixed open');
                    $body.append($overlayContainerWrapper);
                    $doneButton.addClass('btn-primary');
                    $doneButton.removeClass('btn-default');
                  } else {
                    parentElement.removeClass(
                        'bento-side-overlay-container-wrapper-fixed open');
                    $toggleButton.after($overlayContainerWrapper);
                    $doneButton.addClass('btn-default');
                    $doneButton.removeClass('btn-primary');

                    var maxOverlayHeight =
                            scrollableParent.offsetHeight - overlayMargin * 2,
                        overlayInnerHeight = !!attrs.overlayHeight ?
                        getOverlayHeightWith(scope) :
                        -1,
                        toggleOffset = getElementOffsetFrom(
                            $toggleButton[0], scrollableParent),
                        toggleOffsetTop = toggleOffset.top -
                        (document.documentElement.scrollTop ||
                         document.body.scrollTop),
                        toggleCenterOffsetTop = toggleOffsetTop +
                        $toggleButton[0].offsetHeight * 0.5,

                        // check toggle button location and realign if needed
                        // for better layout spacing
                        allowedTopSpacing = overlayMargin + 25, overlayHeight,
                        targetOverlayTop;

                    // adjust overlay height based on the scrollable container
                    // or body
                    if (overlayInnerHeight > 0) {
                      // overlayHeight is bigger than max-height
                      if (overlayInnerHeight >
                          maxOverlayHeight - $overlayFooter[0].offsetHeight) {
                        $overlayContainer.css(
                            'max-height', maxOverlayHeight + 'px');
                      } else {
                        $overlayContainer.css(
                            'max-height',
                            (overlayInnerHeight +
                             $overlayFooter[0].offsetHeight) +
                                'px');
                      }
                    } else {
                      $overlayContainer.css(
                          'max-height', maxOverlayHeight + 'px');
                    }

                    // Get the overlay height of max is updated
                    overlayHeight = $overlayContainer[0].offsetHeight;

                    // when the scrollable is <BODY>
                    if (scrollableParent.tagName === 'BODY') {
                      // We need to scroll up a little bit
                      if (toggleCenterOffsetTop < allowedTopSpacing) {
                        // IE
                        if (document.documentMode) {
                          document.documentElement.scrollTop =
                              toggleOffset.top - allowedTopSpacing;
                        }
                        // Other browsers
                        else {
                          scrollableParent.scrollTop =
                              toggleOffset.top - allowedTopSpacing;
                        }
                        toggleCenterOffsetTop = allowedTopSpacing +
                            $toggleButton[0].offsetHeight * 0.5;
                      } else
                          // We need to scroll down a little
                          if (toggleCenterOffsetTop >
                              scrollableParent.offsetHeight -
                                  allowedTopSpacing) {
                        // IE
                        if (document.documentMode) {
                          document.documentElement.scrollTop =
                              (toggleOffset.top +
                               $toggleButton[0].offsetHeight) -
                              scrollableParent.offsetHeight + allowedTopSpacing;
                        }
                        // Other Broswers
                        else {
                          scrollableParent.scrollTop =
                              (toggleOffset.top +
                               $toggleButton[0].offsetHeight) -
                              scrollableParent.offsetHeight + allowedTopSpacing;
                        }
                        toggleCenterOffsetTop = scrollableParent.offsetHeight -
                            allowedTopSpacing -
                            $toggleButton[0].offsetHeight * 0.5;
                      }

                      // Set default
                      targetOverlayTop = -overlayHeight * 0.5;

                      // Make sure the overlay is not overflowing the top
                      if (-targetOverlayTop >
                          toggleCenterOffsetTop - overlayMargin) {
                        targetOverlayTop =
                            -(toggleCenterOffsetTop - overlayMargin +
                              $toggleButton[0].offsetHeight * 0.25);
                      } else
                          // Make sure the overlay is not overflowing the bottom
                          if (overlayHeight + targetOverlayTop >
                              scrollableParent.offsetHeight -
                                  toggleCenterOffsetTop - overlayMargin) {
                        targetOverlayTop = scrollableParent.offsetHeight -
                            toggleCenterOffsetTop - overlayMargin -
                            overlayHeight -
                            $toggleButton[0].offsetHeight * 0.25;
                      }
                    }
                    // Scrollable is other
                    else {
                      // We need to scroll up a little bit
                      if (toggleOffset.bottom < allowedTopSpacing) {
                        scrollableParent.scrollTop +=
                            allowedTopSpacing - toggleOffset.bottom;
                      }
                      // We need to scroll down a little
                      else if (toggleOffset.top < allowedTopSpacing) {
                        scrollableParent.scrollTop -=
                            allowedTopSpacing - toggleOffset.top;
                      }

                      var overlayLocalRect = getElementOffsetFrom(
                          $overlayContainer[0], scrollableParent);

                      // set default
                      targetOverlayTop =
                          -$overlayContainer[0].offsetHeight * 0.5;

                      // Make sure the overlay is not overflowing the top
                      if (targetOverlayTop < overlayMargin) {
                        targetOverlayTop = $overlayContainer[0].offsetTop -
                            overlayLocalRect.top + overlayMargin;
                      } else
                          // Make sure the overlay is not overflowing the bottom
                          if (overlayLocalRect.bottom + targetOverlayTop <
                              overlayMargin) {
                        targetOverlayTop = $overlayContainer[0].offsetTop +
                            overlayLocalRect.bottom - overlayMargin;
                      }

                      if (targetOverlayTop >
                          -$doneButton[0].offsetHeight * 0.5 - overlayMargin) {
                        targetOverlayTop =
                            -$doneButton[0].offsetHeight * 0.5 - overlayMargin;
                      } else if (
                          targetOverlayTop + overlayLocalRect.height <
                          $doneButton[0].offsetHeight * 0.5 + overlayMargin) {
                        targetOverlayTop = -overlayLocalRect.height +
                            $doneButton[0].offsetHeight * 0.5 + overlayMargin;
                      }
                    }

                    $overlayContainer.css('top', targetOverlayTop + 'px');
                  }

                  // animate in
                  if (!$overlayContainerWrapper.hasClass('show-overlay')) {
                    $timeout(function() {
                      $overlayContainerWrapper.addClass('show-overlay');
                    });
                  }
                }

                function getOffsetFromParent(child, parent) {
                  if (!parent.contains(child) || parent === child) {
                    return {left: 0, top: 0};
                  } else {
                    var offset =
                        getOffsetFromParent(child.offsetParent, parent);
                    return {
                      left: child.offsetLeft + offset.left,
                          top: child.offsetTop + offset.top
                    }
                  }
                }
              }
            };
          }
        ])
    // THe actual toggle button
    .directive('bentoSideOverlayToggle', [function() {
                 return {
                   restrict: 'A',
                   scope: false,
                   link: function(scope, element, attrs) {
                     // only add class
                     element.addClass('bento-side-overlay-toggle noselect');
                   }
                 };
               }])
    // Redering to the actual toggle
    // Might need templateUrl later
    .directive(
        'bentoSideOverlayContent',
        [
          '$compile', '$timeout', '$bentoServices',
          function($compile, $timeout, $bentoServices) {
            return {
              restrict: 'A',
              scope: false,
              link: function(scope, element) {
                element.addClass('bento-side-overlay-container');
                element.wrap(
                    '<div class="bento-side-overlay-container-wrapper"></div>');

                // Add arrows
                var leftArrow = '<div class="bento-side-overlay-left-arrow">' +
                    '<svg height="35" width="20">' +
                    '<polygon points="21,0 0.5,17.5 21,35" class="bento-side-overlay-triangle" />' +
                    '</svg>' +
                    '</div>',
                    rightArrow =
                        '<div class="bento-side-overlay-right-arrow">' +
                    '<svg height="35" width="20">' +
                    '<polygon points="-1,0 19.5,17.5 -1,35" class="bento-side-overlay-triangle" />' +
                    '</svg>' +
                    '</div>';
                element.after(leftArrow);
                element.after(rightArrow);

                // Add footer
                var footer = angular.element(
                    '<div class="bento-side-overlay-container-footer">\
              <button class="btn btn-primary bento-side-overlay-container-footer-done" \
              aria-label="{{\'BENTO_UI_MULTISELECT_OVERLAY_DONE_DESCRIPTION\' | bentoTranslate}}"\
              type="button">' +
                    '{{ "BENTO_UI_MULTISELECT_OVERLAY_DONE" | bentoTranslate:doneButtonText }}</button>\
              <button class="btn btn-default bento-side-overlay-container-footer-cancel" \
              aria-label="{{\'BENTO_UI_MULTISELECT_OVERLAY_CANCEL_DESCRIPTION\' | bentoTranslate}}"\
              type="button">' +
                    '{{ "BENTO_UI_MULTISELECT_OVERLAY_CANCEL" | bentoTranslate }}</button>\
              </div>');

                $compile(footer)(scope);
                element.append(footer);
                // Loops tabs within
                $bentoServices.loopTabbables(element);
              }
            };
          }
        ])

    /**
     * Sub Directive
     * Bento MultiSelect List
     */

    /*
     * Show only the selected item base on the flag
     */
    .filter(
        'multiselectShowSelected',
        function() {
          return function(itemArray, flag, uid) {
            if (flag) {
              var arr = [];
              for (var i = 0; i < itemArray.length; i++) {
                var item = itemArray[i];

                if (getItemChecked(item, uid)) {
                  arr.push(item);
                }
              }
              return arr;
            }

            return itemArray;
          };
        })
    .directive('bentoMultiselectList', [
      '$timeout', '$bentoServices', '$filter',
      function($timeout, $bentoServices, $filter) {
        return {
          templateUrl: function(element, attrs) {
            return angular.isDefined(attrs.templateUrl) ?
                attrs.templateUrl :
                '../templates/multiselect_list/bento-multiselect-list.html';
          },
          scope: {
            listData: '&',
            onChange: '&',
            selectedItems: '=',
            side: '@',
            selectAllText: '@',
            showAllText: '@',
            showSelectedText: '@',
            sort: '=',         // (boolean) sort
            sortReverse: '=',  // (boolean) sort reverse
            maxAllowedHeight:
                '=?'  // Get the total height of the scrolling for external use
          },
          link: function(scope, element, attrs) {
            var firstLoad = true, input = element[0].querySelector('input');

            scope.filteredItems = [];
            scope.checkedUid = CHECKED_STAT + $bentoServices.generateUID();

            if (typeof scope.selectedItems === 'undefined') {
              scope.selectedItems = [];
            }
            scope.searchTerm = '';

            // showSelectedCallback
            scope.setShowSelected = function(bool) {
              // change focus
              element[0]
                  .querySelector('.bento-multiselect-search input')
                  .focus();
              scope.showSelected = bool;
            };

            // Helper
            function redefineAllChecked() {
              // Check whether to show the check to "Select All" checkbox
              if (hasAllChecked(scope.filteredItems, scope.checkedUid)) {
                scope.selectAll = true;
              } else {
                scope.selectAll = false;
              }
            }

            function refreshList() {
              // Dataset is not ready
              if (typeof scope.listData() === 'undefined') {
                return;
              }

              var value = scope.searchTerm;
              if (!value || typeof value.length === 'undefined' ||
                  value.length === 0) {
                scope.filteredItems = scope.sort ?
                    $filter('orderBy')(
                        scope.listData(), 'name', scope.sortReverse) :
                    scope.listData().slice();
              } else {
                scope.filteredItems = scope.sort ?
                    $filter('orderBy')(
                        searchArray(value, scope.listData(), 'name'), 'name',
                        scope.sortReverse) :
                    searchArray(value, scope.listData(), 'name');
              }

              redefineAllChecked();
            }

            scope.onSearchChange = function() {
              refreshList();
            };

            scope.$watchCollection(
                function() {
                  return scope.listData();
                },
                function(value) {
                  refreshList();
                });

            // Helper

            scope.$watchCollection(
                'selectedItems', function(newArray, oldArray) {
                  var i, len;

                  for (i = 0, len = oldArray.length;
                       Array.isArray(oldArray) && i < len; i++) {
                    setItemChecked(oldArray[i], false, scope.checkedUid);
                  }

                  if (newArray) {
                    for (i = 0, len = newArray.length; i < len; i++) {
                      setItemChecked(newArray[i], true, scope.checkedUid);
                    }
                  }

                  redefineAllChecked();

                  // Fire a callback
                  if (!firstLoad) {
                    scope.onChange();
                  } else {
                    firstLoad = false;
                  }
                });

            var searchBar =
                    element[0].querySelector('.bento-multiselect-search'),
                scrollPane = element[0].querySelector(
                    '.bento-multiselect-list-scroll-pane');

            element.addClass('bento-multiselect-list-wrapper');

            // Watch the top offset of `.bento-multiselect-list-scroll-pane`
            scope.$watch(
                function() {
                  return searchBar.offsetHeight;
                },
                function(newHeight) {
                  scrollPane.style.top = newHeight + 'px';

                  // Update maxAllowedHeight
                  scope.maxAllowedHeight =
                      searchBar.offsetHeight + scrollPane.scrollHeight;
                });

            /**
             * Triggers select and deselect all items
             */
            scope.onSelectAllClick = function(e) {
              if (e.screenX !== 0 || e.screenY !== 0) {
                // Focus back onto the input field when it's a mouse click
                input.focus();
                input.setSelectionRange(0, input.value.length);
              }

              scope.selectAll = !scope.selectAll;

              if (scope.selectAll) {
                scope.selectedItems = [];
                for (var i = 0; i < scope.filteredItems.length; i++) {
                  var item = scope.filteredItems[i];
                  scope.selectedItems.push(item);
                }
              } else {
                scope.selectedItems = [];
              }
            };

            /**
             * Update checked status when an item is clicked
             * @param item
             */
            scope.onItemClick = function(item, e) {
              if (e.screenX !== 0 || e.screenY !== 0) {
                // Focus back onto the input field when it's a mouse click
                input.focus();
                input.setSelectionRange(0, input.value.length);
              }

              var selectItemIndex = scope.selectedItems.indexOf(item);

              if (selectItemIndex === -1) {
                scope.selectedItems.push(item);
              } else {
                scope.selectedItems.splice(selectItemIndex, 1);
              }
            };

            /**
             * Like htmlentities in PHP, it change special characters such as
             * (>) into their encoded values (&lt;)
             */
            scope.htmlEntities = function(str) {
              return String(str)
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;');
            };

            // Get Max height
            $timeout(function() {
              scope.maxAllowedHeight =
                  searchBar.offsetHeight + scrollPane.scrollHeight;
            });
          }
        };
      }
    ]);

// helper classes
/**
 * See if the array has all items checked
 * @param  {Array}  a Array to check
 * @return {Boolean}
 */
function hasAllChecked(a, uid) {
  var len = a.length;

  // Empty array
  if (len === 0) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (!getItemChecked(a[i], uid)) {
      return false;
    }
  }
  return true;
}

/**
 * check if the two arrays have the same child in order
 **/
function arrayEqual(a1, a2) {
  if ((!a1 && !a2) || (a1 && a1.length === 0 && !a2) ||
      (!a1 && a2 && a2.length === 0) || (a1 === a2)) {
    // Both arrays are undefined or
    // one of the arrays is undefined and the other has length that is 0
    return true;
  }

  if ((a1 && a1.length > 0 && !a2) || (!a1 && a2 && a2.length > 0)) {
    // one of the arrays is undefined and the other has length > 0
    return false
  }

  if (a1.length != a2.length) {
    // Two arrays have difference lengths
    return false;
  }

  // Need to sort the two arrays
  var a1S = a1.slice().sort(function(a, b) {
    return a.name > b.name;
  }),
      a2S = a2.slice().sort(function(a, b) {
        return a.name > b.name;
      });

  for (var i = 0, len = a1S.length; i < len; i++) {
    // Do the
    if (a1S[i] != a2S[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Search and return an array of found items
 * @param  {String} search - Search term
 * @param  {Array}  array  - Array to search from
 * @param  {String} label  - Label of the variable to search from each object
 * @return {Array}         - Found objects in an array
 */
function searchArray(search, array, label) {
  var found = [], item, searchLow = search.toLowerCase();

  // Linear search
  for (var i = 0, len = array.length; i < len; i++) {
    item = array[i];
    if (item[label].toLowerCase().indexOf(searchLow) > -1) {
      found.push(item);
    }
  }

  return found;
}

/**
 * Set a item checked/unchecked
 * @param {object}  obj  the item object
 * @param {boolean} flag
 */
function setItemChecked(obj, flag, checkedUid) {
  obj[checkedUid] = flag;
}

/**
 * Get an item check state
 * @param  {object}      obj Item object
 * @param  {uid}         uid Unique ID
 * @return {boolean}     checked/unchecked
 */
function getItemChecked(obj, checkedUid) {
  return obj[checkedUid];
}
})(window.angular, window);
(function (window, angular, undefined) {
  'use strict';

  //Define bentoUI App object
  angular.module('bento.numberinput', ['bento.services'])
    .factory('$bentoNumberInputHelper', [

      function () {

        function alignButtons($element) {
          var parentElement = $element[0].parentNode;
          parentElement.style.width = $element[0].offsetWidth + 'px';
          parentElement.style.height = $element[0].offsetHeight + 'px';
        }

        function updateModelWithStep(model, step, max, min, decimalSep) {
          var value  = Number(String(model).replace(decimalSep, '.')),
              maxNum = Number(max),
              minNum = Number(min);

          if (typeof model === 'undefined') {
            value = 0;
          }

          value = Math.round((Number(value) + step) * 1000000000000) / 1000000000000;

          if (typeof max !== 'undefined' && value > maxNum) {
            value = maxNum;
          } else if (typeof min !== 'undefined' && value < minNum) {
            value = minNum;
          }

          return String(value).replace('.', decimalSep);
        }

        return {
          alignButtons       : alignButtons,
          updateModelWithStep: updateModelWithStep
        };

      }
    ])
    .directive('bentoNumberInput', [
      '$bentoNumberInputHelper',
      '$bentoServices',
      '$locale',
      '$bentoTranslate',
      '$timeout',
      '$log',
      function ($bentoNumberInputHelper, $bentoServices, $locale, $bentoTranslate, $timeout, $log) {
        return {
          restrict  : 'A',
          require   : 'ngModel',
          replace   : false,
          transclude: true,
          link      : function ($scope, $element, $attrs, ngModelCtrl) {

            // Due to type="number" has limitations retrieving invalid input,
            // we need to change it back to "text"
            if ($attrs.type.toLowerCase() === 'number') {
              $log.warn('Bento.UI: `bento-number-input` must ' +
                'be implemented as `<... type="text" ... />` in order to work properly');
            }

            // Error notification
            if (typeof $attrs.min !== 'undefined'
              && typeof $attrs.max !== 'undefined'
              && Number($attrs.min) > Number($attrs.max)) {
              $log.error('Bento.UI: `bento-number-input` "max" value must be larger than "min" value');
            }

            // Locale Related
            var decimalSeparatorTranslateLabel = 'BENTO_NUMBER_INPUT_DECIMAL_SEPARATOR';
            var decimalSep = '.';  // default

            // Decide which decimal separator to use
            if ($attrs.decimalSeparator) {
              // Directive has its specified
              decimalSep = $attrs.decimalSeparator;
            } else {
              // Lookup Bento Translate dictionary first
              // NOTE: the translation needs to be pre-defined before this directive is loaded
              $bentoTranslate.translate(decimalSeparatorTranslateLabel)
                .then(bentoTranslateReady);
            }

            // Listen to Bento Translate Onchange when a new translation is ready
            $bentoTranslate.onChange(bentoTranslateOnChange);

            /**
             * Callback to bentoTranslate onchange
             */
            function bentoTranslateOnChange() {
              $bentoTranslate.translate(decimalSeparatorTranslateLabel)
                .then(bentoTranslateReady);
            }

            /**
             * Get the translated decimal separator and update the model
             * @param value
             */
            function bentoTranslateReady(value) {
              if (value !== decimalSeparatorTranslateLabel) {
                // Bento Translate defined
                decimalSep = value;
              } else {
                // Use Angular $locale service
                decimalSep = $locale.NUMBER_FORMATS.DECIMAL_SEP;
              }

              // Update ngModelView with the new decimal separator if there is a predefined number
              if (!isNaN(ngModelCtrl.$modelValue)) {
                ngModelCtrl.$setViewValue(String(ngModelCtrl.$modelValue).replace('.', decimalSep));
                ngModelCtrl.$commitViewValue();
                ngModelCtrl.$render();
              }
            }

            var uid = $bentoServices.generateUID();
            var step = Number($attrs.step) || 1;
            var previousValue = '';
            var _upButton = angular.element('<div ' +
              'id="bento-number-input-button-up-' + uid + '" ' +
              'class="bento-number-input-button bento-number-input-button-up">' +
              '<i class="bento-icon-chevron-up"></i>' +
              '</div>'
            );
            var _downButton = angular.element('<div ' +
              'id="bento-number-input-button-down-' + uid + '" ' +
              'class="bento-number-input-button bento-number-input-button-down">' +
              '<i class="bento-icon-chevron-down"></i>' +
              '</div>'
            );

            // Adding parser to handle decimal separator on commit
            ngModelCtrl.$parsers.push(function (value) {
              return typeof value === 'undefined' || value.length === 0 ? undefined : Number(value.replace(decimalSep, '.'));
            });

            // Adding formatter to handle decimal separator on ng-model update
            ngModelCtrl.$formatters.push(function (value) {
              return typeof value === 'undefined' || value === null ? '' : String(value).replace('.', decimalSep);
            });

            // Add validator for min and max validation
            ngModelCtrl.$validators.min = function (modelValue) {
              if (typeof $attrs.min === 'undefined') {
                // There is no minimum
                return true;
              }else if(typeof modelValue === 'undefined' || modelValue === null){
                // The number isn't even ready. This validation cannot be done
                return true;
              }

              return modelValue >= Number($attrs.min);
            };

            ngModelCtrl.$validators.max = function (modelValue) {
              if (typeof $attrs.max === 'undefined') {
                // There is no maximum
                return true;
              }else if(typeof modelValue === 'undefined' || modelValue === null){
                // The number isn't even ready. This validation cannot be done
                return true;
              }

              return modelValue <= Number($attrs.max);
            };

            // Check max and min to block from additional input
            $element.on('input', function (event) {
              setModelValue(event.currentTarget.value);
            });

            /**
             * Prevent non number input related keypress
             */
            $element[0].addEventListener('keypress', function (event) {
              var char = String.fromCharCode(event.charCode);
              var modelVale = event.currentTarget.value;

              if ((isNaN(char)
                && event.charCode > 0
                && char !== '-'
                && char !== decimalSep
                && event.charCode !== 13)// Enter key on chrome
                || (char === '-' && modelVale.indexOf(char) > -1) //IE 9
                || (char === decimalSep && modelVale.indexOf(char) > -1) //IE 9
                || (char === '-' && event.currentTarget.selectionStart > 0)
              ) {
                event.preventDefault();
                event.stopPropagation();
              }
            });

            /**
             * Watch element height for responsiveness
             */
            $scope.$watch(function () {
              return $element[0].offsetTop;
            }, function (top) {
              _upButton.css('top', top + 'px');
              _downButton.css('top', top + 'px');
            });

            $element[0].addEventListener('paste', function () {
              isPasted = true;
            });

            $element[0].addEventListener('keydown', function (event) {
              var target = event.currentTarget,
                  val;

              // 38 up
              // 40 down
              if (event.keyCode === 38) {
                val = $bentoNumberInputHelper
                  .updateModelWithStep(ngModelCtrl.$viewValue, step, $attrs.max, $attrs.min, decimalSep);
                setModelValue(val);
              } else if (event.keyCode === 40) {
                val = $bentoNumberInputHelper
                  .updateModelWithStep(ngModelCtrl.$viewValue, -step, $attrs.max, $attrs.min, decimalSep);
                setModelValue(val);
              } else if (event.keyCode !== 37 && event.keyCode !== 39) {
                setModelValue(target.value);
              }
            });

            //Parse step into a number
            step = Number(step);

            var pointerDown              = 'mousedown touchstart',
                pointerUp                = 'mouseup touchend',
                defaultRepeatDelayAmount = 125,
                initRepeatDelay          = 1000,
                isPasted                 = false,
                repeatDelayAmount,
                delay,
                timeoutProcess,
                direction;

            /**
             * Repeater for Up/Down arrow keys or buttons
             * @param isInitDelay
             */
            function onUpDownTimer(isInitDelay) {
              inputButtonRepeat();

              if (isInitDelay) {
                repeatDelayAmount = defaultRepeatDelayAmount;
                delay = initRepeatDelay;
              } else {
                delay = (delay <= 20) ? 20 : repeatDelayAmount -= 2;
              }

              timeoutProcess = $timeout(onUpDownTimer, delay);
            }

            //On up arrow click
            _upButton.on(pointerDown, function (e) {
              // kill event for right click
              if (e.which === 3) {
                return false;
              }

              // Repeat direction
              direction = step;

              var cElement = $element.context || $element[0];
              if (cElement && !cElement.disabled) {
                onUpDownTimer(true);

                angular.element(window).one(pointerUp, function (e) {
                  $timeout.cancel(timeoutProcess);
                  e.preventDefault();
                  e.stopPropagation();
                });
              }

              e.preventDefault();
              e.stopPropagation();
            });

            //On down arrow click
            _downButton.on(pointerDown, function (e) {
              // kill event for right click
              if (e.which === 3) {
                return false;
              }

              // Repeat direction
              direction = -step;

              var cElement = $element.context || $element[0];
              if (cElement && !cElement.disabled) {
                onUpDownTimer(true);

                angular.element(window).one(pointerUp, function () {
                  $timeout.cancel(timeoutProcess);
                });
              }

              e.preventDefault();
              e.stopPropagation();
            });

            function inputButtonRepeat() {
              var val = $bentoNumberInputHelper
                .updateModelWithStep(ngModelCtrl.$modelValue, direction, $attrs.max, $attrs.min, decimalSep);
              setModelValue(val);
            }

            // Check how many digits that this input field will have
            var maxDigits = typeof $attrs.max !== 'undefined' ? $attrs.max.length : 6;
            var digitClass = ' six-digit';

            if (!!$attrs.min && $attrs.min.length > maxDigits) {
              maxDigits = $attrs.min.length;
            }

            if (maxDigits <= 3) {
              digitClass = ' two-digit';
            }

            // Determine if this directive follows bootstrap's `form-control` CSS
            $element.wrap('<span class="bento-number-input-wrapper' +
              ($element.hasClass('form-control') ? ' full-width' : '') +
              digitClass +
              '"></span>');

            // We still need form-control styling
            $element.addClass('form-control');
            $element.after(_downButton);
            $element.after(_upButton);

            // When the DOM element is removed from the page cancel
            // any possible pending triggers
            $scope.$on(
              "$destroy",
              function () {
                // Stop arrow press repeater
                $timeout.cancel(timeoutProcess);
                // Remove bentoTranslate callback
                $bentoTranslate.removeOnChange(bentoTranslateOnChange);
              }
            );

            /**
             * Validate the current string and correct its input
             * @param value
             * @returns {object}
             */
            function validateValue(value) {
              var hasMax      = typeof $attrs.max !== 'undefined',
                  hasMin      = typeof $attrs.min !== 'undefined',
                  vNum        = Number(value),
                  max         = Number(hasMax ? $attrs.max : Number.POSITIVE_INFINITY),
                  min         = Number(hasMin ? $attrs.min : Number.NEGATIVE_INFINITY),
                  maxDigits   = hasMax ? String($attrs.max).length : 20,
                  minDigits   = hasMin ? String($attrs.min).length : 21,
                  valueLength = value.length,
                  isRollback  = false,
                  newNum      = vNum;

              if (typeof value === 'undefined' || value === null
                || valueLength === 0) {
                newNum = '';
              } else if ((isNaN(vNum) && value !== '-')
                ||
                (vNum > max || vNum < min)
              ) {

                if(isNaN(vNum)){
                  newNum = vNum = 0;
                }

                if (isPasted) {
                  // we need to do concat the value
                  newNum = (vNum > max) ?
                    value.slice(0, maxDigits) :
                    value.slice(0, minDigits)
                } else if (
                  (vNum > max && ((valueLength >= maxDigits && max >= 0) || valueLength >= minDigits))
                  || (vNum < min && ((valueLength >= minDigits && min < 0) || valueLength >= maxDigits))
                  || (min < 0 && max < 0 && vNum >= 0)
                ) {
                  // Rollback when out of bound
                  newNum = previousValue;
                  isRollback = true;
                }
              } else if (value.indexOf('-') === 0 || value.indexOf('.') > -1) {

                if (min >= 0 && max >= 0 && value.indexOf('-') > -1) {
                  // Minus sign is used when max and min are all positive
                  newNum = previousValue;
                  isRollback = true;
                } else {
                  // OK to add both minus sign and default decimal separator
                  newNum = value.trim();
                }
              }

              return {
                number    : newNum,
                isRollback: isRollback
              };
            }

            /**
             * Set value to ngModel
             * @param value
             */
            function setModelValue(value) {
              // Normalize localization
              value = String(value).replace(decimalSep, '.').trim();  // Convert decimal separator back to period

              // No need to update the ngModel since there is no change in string
              if (value === previousValue) {
                return;
              }

              // Proceed with number validation
              var newVal = validateValue(value);
              var newValStr     = String(newVal.number).replace('.', decimalSep),
                  input         = $element[0],
                  caratPosStart = newVal.isRollback ? input.selectionStart - 1 : input.selectionStart,
                  caratPosEnd   = input.selectionEnd;

              previousValue = newVal.number;
              isPasted = false;



              ngModelCtrl.$setViewValue(newValStr, 'inputvalidate');
              ngModelCtrl.$commitViewValue();
              ngModelCtrl.$render();

              // make sure to bring the selection back after setting the value after rendering
              input.setSelectionRange(caratPosStart, caratPosEnd);
            }
          }
        };
      }
    ]);

})(window, window.angular);
(function (window, angular, undefined) {
  'use strict';

//Define bentoUI App object
  angular.module('bento.off.canvas.menu', [])
  /**
   * Bento Off Canvas Menu Main Controller
   */
    .controller('bentoOffCanvasMenuController', [
      '$scope',
      '$element',
      function ($scope, $element) {

      }
    ])
  /**
   * Bento Off Canvas Menu Main Directive
   */
    .directive('bentoOffCanvasMenu', [
      '$parse',
      '$bentoServices',
      '$timeout',
      function ($parse, $bentoServices, $timeout) {
        /**
         * Main Off Canvas Menu Directive
         */
        return {
          restrict  : 'AE',
          scope     : false,
          controller: 'bentoOffCanvasMenuController',
          link      : function (scope, element, attrs, controller) {
            // Getters
            var expandedLeftGetter, expandedRightGetter;
            var expandedLeftLocal, expandedRightLocal;
            element.addClass('bento-off-canvas-menu');

            if (!!attrs.type && attrs.type === 'push') {
              element.addClass('push-over');
            } else {
              element.addClass('default');
            }

            //Get menu object from DOM
            var $menu = angular.element(element[0].querySelector('.bento-off-canvas-menu-aside'));
            var $menuRight = angular.element(element[0].querySelector('.bento-off-canvas-menu-aside-right'));
            var $menuHeader, $menuHeaderRight;
            var $menuBackgroundRight;
            var $menuCloseButton, $menuRightCloseButton, $hambugerButton;

            //Get navbar object from DOM
            var $navbar = angular.element(element[0].querySelector('.bento-off-canvas-menu-topbar'));

            //Get content object from DOM
            var $content = angular.element(querySelector(element[0], '.bento-off-canvas-menu-content'));

            // Trnasition listeners
            $menu.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(event){
              if(!element.hasClass('expanded')){
                $menu.addClass('ng-hide');
                $hambugerButton[0].focus();
              }
            });

            $menuRight.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(event){
              if(!element.hasClass('expanded-right')){
                $menuRight.addClass('ng-hide');
                if (typeof $menuBackgroundRight !== 'undefined') {
                  $menuBackgroundRight.addClass('ng-hide');
                }
              }
            });

            // Left menu ESC key listener
            $menu.on('keyup', function(event){
              if(event.keyCode === 27){
                setLeftExpand(false);
              }
            });

            if ($navbar.length === 0) {
              $content.css('top', '0');
            } else {
              $hambugerButton = angular.element('<button class="bento-off-canvas-menu-button" role="button" aria-label="Open side menu"><i class="bento-icon-hamburger-menu"></i></button>')
              $navbar.prepend($hambugerButton);
              $hambugerButton.on('click', onMenuClick);
            }

            //Add hamburger icon to navbar

            //Add Overlay
            var $overlay = angular.element('<div class="bento-off-canvas-menu-content-overlay"></div>');
            //Adding click actions to menuButton and .bento-off-canvas-menu-content
            $overlay.on('click', onContentClick);

            //Inject a fake background to the menu so it fully extends to the bottom of the page
            // Construct Memu DOM

            // LEFT
            element.append($overlay);


            if ($menu.length > 0) {
              $menu.after('<div class="bento-off-canvas-menu-aside-bg"></div>');
              $menuCloseButton = angular.element('<button class="bento-off-canvas-menu-close-button" role="button" aria-label="Close Side Menu">&times;</button>');
              $menuHeader = angular.element('<div class="bento-off-canvas-menu-header"></div>');
              $menuHeader.append($menuCloseButton);
              $menuHeader.append(['<div class="bento-off-canvas-menu-header-title">', (!!attrs.menuTitle ? attrs.menuTitle : 'Menu'), '</div>'].join(''));
              $menu.prepend($menuHeader);
              $menu.on('click', function (event) {

                if ((event.target.nodeName === 'A' || event.target.nodeName === 'BUTTON' || isParentClickable(event.target))
                  && !event.target.parentNode.hasAttribute('disabled')
                  && !event.target.hasAttribute('bento-off-canvas-menu-aside')
                ) {
                  //auto collapse left aside menu
                  setLeftExpand(false);
                }
              });

              if (attrs.menuTitle) {
                attrs.$observe('menuTitle', function (newValue) {
                  $menuHeader[0].querySelector('.bento-off-canvas-menu-header-title').innerHTML = $sanitize(newValue);
                });
              }
            }

            //Helper function
            // Check if
            function isParentClickable(node){
              var n = node;
              while(n.className.search('bento-off-canvas-menu-aside') === -1 && typeof n !== 'undefined'){
                if(n.nodeName === 'A' || n.nodeName === 'BODY'){
                  return true;
                }
                n = n.parentNode;
              }
              return false;
            }

            // RIGHT
            if ($menuRight.length > 0) {
              $menuRightCloseButton = angular.element('<button class="bento-off-canvas-menu-close-button">&times;</button>');
              $menuHeaderRight = angular.element('<div class="bento-off-canvas-menu-header"></div>');
              $menuHeaderRight.append($menuRightCloseButton);
              $menuRight.prepend($menuHeaderRight);
              $menuRight.after('<div class="bento-off-canvas-menu-aside-bg-right"></div>');
              $menuBackgroundRight = angular.element($menuRight[0].nextElementSibling);
              $menuRightCloseButton.on('click', function (event) {
                setRightExpand(false);
              })
            }

            // Add watchers for expand and collapse
            if (attrs.isExpanded) {
              expandedLeftGetter = $parse(attrs.isExpanded);
            }
            scope.$watch(function () {
                return expandedLeftGetter ? expandedLeftGetter(scope) : expandedLeftLocal;
              },
              function (exp) {
                toggleLeftMenu(exp);
              });

            if (attrs.isExpandedRight) {
              expandedRightGetter = $parse(attrs.isExpandedRight);
            }
            scope.$watch(function () {
                return expandedRightGetter ? expandedRightGetter(scope) : expandedRightLocal;
              },
              function (exp) {
                toggleRightMenu(exp);
              });

            /**
             * Toggle Left Menu
             * @param expanded
             */
            function toggleLeftMenu(expanded) {
              if (expanded) {
                setRightExpand(false);
                $menu.removeClass('ng-hide');
                $timeout(function(){
                  // Animation only works when ng-hide is completely removed
                  element.addClass('expanded');
                  $timeout(function(){
                    $menu[0].focus();
                  },200);
                  element[0].scrollTop = 0;
                  if ($menu.length > 0) {
                    $menu[0].scrollTop = 0;
                  }
                });

              } else if(!element.hasClass('expanded')){
                $menu.addClass('ng-hide');
              } else{
                element.removeClass('expanded');
              }
            }

            /**
             * Toggle Right Menu
             * @param expanded
             */
            function toggleRightMenu(expanded) {

              if (expanded) {
                setLeftExpand(false);
                $menuRight.removeClass('ng-hide');
                $menuBackgroundRight.removeClass('ng-hide');
                $timeout(function(){
                  element.addClass('expanded-right');
                  $timeout(function(){
                    $menuRight[0].focus();
                  },200);
                });

                if ($menuRight.length > 0) {
                  $menuRight[0].scrollTop = 0;
                }
              } else if(!element.hasClass('expanded-right')){
                $menuRight.addClass('ng-hide');
                if (typeof $menuBackgroundRight !== 'undefined') {
                  $menuBackgroundRight.addClass('ng-hide');
                }
              } else {
                element.removeClass('expanded-right');
              }

            }

            //When the hamburger menu is clicked
            function onMenuClick() {
              setLeftExpand(!expandedLeftLocal);
            }

            //Fires when the content is clicked
            //Check and retract the Off Canvas Menu
            function onContentClick() {
              setLeftExpand(false);
              setRightExpand(false);
            }

            /**
             * Set left menu expand state
             * @param b (bool)
             */
            function setLeftExpand(b) {
              if (expandedLeftGetter) {
                expandedLeftGetter.assign(scope, b);
              }
              expandedLeftLocal = b;

              $bentoServices.safeApply(scope);
            }

            /**
             * Set right menu expand state
             * @param b
             */
            function setRightExpand(b) {
              if (expandedRightGetter) {
                expandedRightGetter.assign(scope, b);
              }
              expandedRightLocal = b;

              $bentoServices.safeApply(scope);
            }
          }
        };
      }])
  /**
   * Bento Off Canvas Menu Aside Directive
   */
    .directive('bentoOffCanvasMenuAside',['$bentoServices', function ($bentoServices) {
      return {
        scope  : false,
        require: '^bentoOffCanvasMenu',
        template: '<div class="bento-off-canvas-menu-aside" ng-transclude tabindex="-1"></div>',
        transclude: true,
        replace: true,
        link   : function (scope, element, attrs) {
          $bentoServices.loopTabbables(element);
        }
      };
    }])
  /**
   * Bento Off Canvas Menu Aside Right Directive
   */
    .directive('bentoOffCanvasMenuAsideRight',['$bentoServices', function ($bentoServices) {
      return {
        scope  : false,
        require: '^bentoOffCanvasMenu',
        template: '<div class="bento-off-canvas-menu-aside-right" ng-transclude tabindex="-1"></div>',
        transclude: true,
        replace: true,
        link   : function (scope, element, attrs) {
        }
      };
    }])
  /**
   * Bento Off Canvas Menu Top Navbar
   */
    .directive('bentoOffCanvasMenuTopbar', function () {
      return {
        scope  : false,
        require: '^bentoOffCanvasMenu',
        link   : function (scope, element, attrs, controller) {
          element.addClass('bento-off-canvas-menu-topbar');
        }
      };
    })
  /**
   * Bento Off Canvas Menu Main Content
   */
    .directive('bentoOffCanvasMenuContent', function () {
      return {
        scope  : false,
        require: '^bentoOffCanvasMenu',
        link   : function (scope, element, attrs, controller) {
          element.addClass('bento-off-canvas-menu-content');
        }
      };
    });

  // Helper functions
  function querySelector(element, queryString) {
    var obj = element.querySelector(queryString);

    // Return if obj is not null
    if (typeof obj !== 'undefined' && obj) {
      return obj;
    } else {
      obj = element.querySelector(queryString.replace('div[', 'div[data-'));
      return obj;
    }

  }
})(window, window.angular);
(function(angular, window) {
    'use strict';
    //Define bentoUI App object
    var bentoPaginageApp = angular.module('bento.pagination', ['bento.services', 'bento.select', 'bento.cookie', 'bento.translate']);
    //Directive
    bentoPaginageApp
        .controller('bentoPaginationController',bentoPaginationController)
        .directive('bentoPagination', bentoPagination);

    function bentoPaginationController(){
        return this;
    }
    bentoPagination.$inject = ['$parse', '$q', '$window', '$timeout'];

    function bentoPagination($parse, $q, $window, $timeout) {
        return {
            restrict: 'EA',
            scope: {
                currentPage: '=page',
                totalItems: '=',
                itemsPerPage: '=?',
                infoText: '@', // String
                infoPageText: '@', // String
                goToText: '@', // String
                directionLinks: '&',
                boundaryLinks: '&',
                itemsArray: '=?',
                onChange: '&',
                onChangeSize: '&',
                eventTracking: '&',
                onSelectPage: '&'
            },
            templateUrl: function(element, attrs) {
                return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/pagination/bento-pagination.html'
            },
            controller: 'bentoPaginationController',
            controllerAs: 'bentoPaginationCtrl',
            replace: true,
            link: function(scope, el, attrs, paginationCtrl) {
                // Link Math lib to template
                scope.Math = Math;


                var trackedEvent = {
                    eventName: 'default',
                    value: '-1'
                };
                var onChangeEvent = {
                    page: 1
                };
                var sizeChangeEvent = {
                    size: -1
                };

                paginationCtrl = scope.VM = {
                    currentPage: 1,
                    tgtPage: 1,
                    maxPage: 1,
                    itemsPerPage: 10,
                    itemsPerPageHistory: 10,
                    itemsArray: [{
                        value: 10,
                        label: 10
                    }, {
                        value: 25,
                        label: 25
                    }, {
                        value: 50,
                        label: 50
                    }, {
                        value: 100,
                        label: 100
                    }],
                    goBtnVisible: true,
                    goIconVisible: false,
                    boundaryLinks: true,
                    directionLinks: true,
                    lastButtonSmallMargin: false
                };

                Object.keys(scope.VM).forEach(function(el, i) { //ignores interpolated attributes
                    attrs[el] = (typeof(attrs[el]) == 'undefined') ? scope.VM[el] : attrs[el];
                    // scope[el] = (typeof(scope[el]) == "undefined") ? scope.VM[el] : scope[el];
                });
                scope.VM.boundaryLinks = typeof attrs.boundaryLinks == 'string' ? JSON.parse(attrs.boundaryLinks.toLowerCase()) : true;
                scope.VM.itemsPerPageHistory = scope.itemsPerPage;
                scope.VM.maxPage = Math.ceil(scope.totalItems / scope.itemsPerPage);

                //set default itemsArray if needed
                scope.itemsArray = scope.itemsArray ? scope.itemsArray : scope.VM.itemsArray;

                var renderComponent = function() {
                    scope.VM.tgtPage = scope.currentPage;
                    scope.VM.maxPage = Math.ceil(scope.totalItems / scope.itemsPerPage);
                    scope.eventTracking(trackedEvent);
                    if (scope.currentPage != onChangeEvent.page) {
                        onChangeEvent.page = scope.currentPage;
                        scope.onChange(onChangeEvent);
                    }
                };
                scope.renderComponent = renderComponent; //used only to test this function.
                angular.element($window).on('resize', onWindowResize);
                scope.$watch(function() {
                    return el[0].offsetWidth;
                }, onElementResize);
                scope.$on('$destroy', onDestroy);

                scope.$watch('itemsPerPage', function(newValue, oldValue) {
                    // Yes, this happens on $watch()...
                    if (newValue === oldValue) {
                        return;
                    }
                    trackedEvent.eventName = "items per page changed";
                    trackedEvent.value = scope.itemsPerPage;
                    sizeChangeEvent.size = scope.itemsPerPage;
                    scope.onChangeSize(sizeChangeEvent);

                    // No change when the current page is 1
                    if (scope.currentPage === 1 || (angular.isDefined(attrs.pageOverride)&&attrs.pageOverride == "true")) {
                        renderComponent();
                    } else {
                        scope.currentPage = 1;
                    }
                });

                scope.$watch('currentPage', function(newVal,oldVal) {
                    if(newVal !== oldVal){
                         renderComponent();
                    }
                });

                scope.$watch('totalItems', function() {
                    trackedEvent.eventName = "total items changed";
                    trackedEvent.value = scope.totalItems;
                    renderComponent();
                });

                attrs.$observe('infoPageText', function(value) {
                    if (value) {
                        renderComponent();
                    }
                });
                attrs.$observe('infoText', function(value) {
                    if (value) {
                        renderComponent();
                    }
                });
                attrs.$observe('goToText', function(value) {
                    if (value) {
                        renderComponent();
                    }
                });


                scope.keySelectPage = function(ev, page) {
                    ev = (ev) ? ev : window.event;
                    if (ev.which === 13) {
                        scope.goToPage(page);
                    }
                };

                scope.goToPage = function(n) {
                    //if there are no items, disable pagination
                    if(scope.totalItems<=0){
                        return;
                    }
                    if (n === "max") {
                        scope.currentPage = scope.VM.maxPage;
                    } else {
                        scope.currentPage = (!isNaN(parseInt(n)) && n > 0 && n <= scope.VM.maxPage) ? parseInt(n) : scope.currentPage;
                    }
                    trackedEvent.eventName = "current page value modification";
                    trackedEvent.value = "input value => " + n + " value@ " + scope.currentPage;
                };

                function onWindowResize() {
                    $timeout(function(){
                        onElementResize(el[0].offsetWidth)
                    });
                }

                function onElementResize(width) {
                    if (!width) return;
                    if (width < 550) {
                        scope.VM.lastButtonSmallMargin = true;
                        if (width < 420) {
                            scope.VM.boundaryLinks = false;
                            if (width < 290) {
                                scope.VM.goBtnVisible = false;
                            } else {
                                scope.VM.goIconVisible = true;
                                scope.VM.goBtnVisible = true;
                            }
                        } else {
                            scope.VM.goIconVisible = false;
                            scope.VM.goBtnVisible = true;
                            checkBoundaryLinks();
                        }
                    } else {
                        scope.VM.goIconVisible = false;
                        scope.VM.goBtnVisible = true;
                        checkBoundaryLinks();
                        scope.VM.lastButtonSmallMargin = false;
                    }
                }

                function checkBoundaryLinks() {
                    scope.VM.boundaryLinks = typeof attrs.boundaryLinks == 'string' ? JSON.parse(attrs.boundaryLinks.toLowerCase()) : true;
                }

                function onDestroy() {
                    angular.element($window).off('resize', onWindowResize);
                }

            }
        };
    }
})(window.angular, window);
(function (window, angular, undefined) {
  'use strict';

  // Define bentoUI App object
  angular.module('bento.reset', ['bento.services'])

    /**
     * Main Bento Reset factory
     */
    .factory('$bentoResetFactory', [
      '$bentoServices',
      function ($bentoServices) {
        var isRTL = $bentoServices.isRTL();
        var browser = $bentoServices.getBrowser();

        /**
         * Align the clear button to the input field
         * @param inputElement
         * @param clearButton
         */
        var alignClearButton = function (inputElement, clearButton) {

          var position = 'left';
          var inputEl = inputElement[0];
          var clearButtonEl = clearButton[0];
          var scrollableParentEl = findScrollableParent(inputEl.parentElement);
          var offsetParent = inputEl.offsetParent;
          var offsetLeft;

          if (offsetParent && offsetParent.contains(scrollableParentEl)) {
            offsetLeft = browser === 'firefox'? inputEl.offsetLeft : inputEl.offsetLeft - scrollableParentEl.scrollLeft;
          } else {
            offsetLeft = inputEl.offsetLeft;
          }

          if (isRTL) {
            position = 'right';
          }

          // set left
          clearButton.css(position,
            (inputEl.offsetWidth - clearButtonEl.offsetWidth + offsetLeft) + 'px'
          );

          // set top
          clearButton.css('top',
            (inputEl.offsetTop + (inputEl.offsetHeight - clearButtonEl.offsetHeight) * 0.5) + 'px'
          );

        };

        /**
         * Show and hide clear button and adjust input fields right padding
         * @param inputElement
         * @param clearButton
         * @param value
         */
        var showAndHideButton = function (inputElement, clearButton, value) {
          // Hide clearButton where is the input field is empty
          // or it is not focused
          if (typeof value === 'undefined' || value === null || value.length === 0) {
            clearButton.addClass('hide');
            inputElement.removeClass('bento-reset-dirty');
            window.removeEventListener('resize', windowResizeEventHandler);
          } else if (clearButton.hasClass('hide')) {
            clearButton.removeClass('hide');
            inputElement.addClass('bento-reset-dirty');
            // Realign clear button is there is any change
            alignClearButton(inputElement, clearButton);
            window.addEventListener('resize', windowResizeEventHandler);
          } else{
            // Realign clear button is there is any change while typing
            // ex. browser input scroll... 
            alignClearButton(inputElement, clearButton);
          }

          // Private event handler
          // Check clear button location when window is resizing
          function windowResizeEventHandler(event) {
            alignClearButton(inputElement, clearButton);
          }
        };
        /**
         * Find the the parent that scrolls
         * @param {HTMLElement} el 
         */
        function findScrollableParent(el) {
          if(el == null){
            return document.body;
          }else if (el.nodeName === 'HTML') {
            return el;
          } else if (el.offsetWidth < el.scrollWidth || el.offsetHeight < el.scrollHeight) {
            return el;
          } else {
            return findScrollableParent(el.parentElement);
          }
        }

        // Return all services
        return {
          alignClearButton: alignClearButton,
          showAndHideButton: showAndHideButton
        };

      }
    ])
    /**
     * Directive: Bento Reset
     */
    .directive('bentoReset', [
      '$window', '$timeout', '$bentoResetFactory', '$parse', '$bentoServices',
      function ($window, $timeout, $bentoResetFactory, $parse, $bentoServices) {

        return {
          restrict: 'A',
          require: 'ngModel',
          replace: false,
          scope: false,
          link: function (scope, element, attrs, ngModelController) {
            var override = (attrs.closeButtonIconClass) ? attrs.closeButtonIconClass : 'bento-icon-close-x',
              clearButton = angular.element('<div class="bento-reset-close-button hide '+
              override+
              '" tabindex="-1"></div>');

            var getter = $parse(attrs.ngModel);

            // Add class
            element.addClass('bento-reset');

            scope.$watch(function () {
              return getter(scope);
            }, function (newVal) {
              if (document.activeElement === element[0]) {
                // Only change status when input is in focus
                $bentoResetFactory.showAndHideButton(element, clearButton, newVal);
              }
            }, true);

            if (typeof attrs.bentoResetAlwaysOn === 'undefined') {

              // Listen to input field `change` and `focus` and show / hide clear button
              element.on('focus', function () {
                $bentoResetFactory.showAndHideButton(element, clearButton, getter(scope));
              });

              // Listen to input field blur
              // update: `event.relatedTarget` is not available on `blur` use `focusout` instead with IE9
              element.on('focusout', function (event) {
                if (event.relatedTarget !== clearButton[0]) {
                  // We need to use timeout to make sure clearBottom is clicked
                  // even `event.relatedTarget` is NULL <-- FF security
                  $timeout(function () {
                    clearButton.addClass('hide');
                  }, 10);
                }
              });
            }

            window.addEventListener('scroll',onWindowScroll, true);

            function onWindowScroll(e){
              if(document.activeElement === element[0]){
                $bentoResetFactory.alignClearButton(element, clearButton);
              }
            }

            // On clear button click
            // Clear input field
            clearButton.on('mousedown touchstart', function (event) {
              ngModelController.$setViewValue('', 'reset');
              ngModelController.$render();
              clearButton.addClass('hide');
              $bentoServices.safeApply(scope);

              // bring the focus back to the input field after one digest cycle
              $timeout(function () {
                element[0].focus();
              });

            });

            scope.$on('$destroy', function(){
              window.removeEventListener('scroll',onWindowScroll, true);
            })

            // Initialize the location of the clear button
            $timeout(function () {
              $bentoResetFactory.alignClearButton(element, clearButton);
            });

            // Add clearButton after the input field
            element.after(clearButton);
          }
        };
      }
    ]);
})(window, window.angular);
(function (window, angular, undefined) {
  'use strict';

  var TRANSITON_DURATION = 750;

  angular.module('bento.scrollablebar', [])
    .component('bentoScrollableBar', {
      bindings: {
        controller: '=?',
      },
      templateUrl: '../templates/scrollable-bar/bento-scrollable-bar.html',
      transclude: true,
      controller: [
        '$element',
        '$bentoTransition',
        '$timeout',
        BentoScrollbarController
      ]
    });

  function BentoScrollbarController($element, $bentoTransition, $timeout) {
    var ctrl = this;
    var stopTransition = function () {};

    ctrl.$onInit = function () {
      // Bind `this` to listeners
      ctrl.onInnerScroll = ctrl.onInnerScroll.bind(ctrl);
      ctrl.renderUI = ctrl.renderUI.bind(ctrl);
      ctrl.onMouseScroll = ctrl.onMouseScroll.bind(ctrl);

      ctrl._isLeftArrowDisabled = false;
      ctrl._isRightArrowDisabled = false;
      ctrl.el = $element[0];

      window.addEventListener('resize', ctrl.renderUI);
    };

    ctrl.$postLink = function () {
      ctrl.innerEl = ctrl.el.querySelector('.bento-scrollable-bar-inner');
      ctrl.innerEl.addEventListener('scroll', ctrl.onInnerScroll);
      ctrl.innerEl.addEventListener('wheel', ctrl.onMouseScroll);

      if (!ctrl.controller) {
        ctrl.controller = {};
      }

      ctrl.controller.refresh = ctrl.refresh;

      setTimeout(function () {
        ctrl.renderUI();
      });
    };

    ctrl.$onDestroy = function () {
      window.removeEventListener('resize', ctrl.renderUI);
    };

    /**
     * Scroll forward to the next half of screen
     */
    ctrl.scrollForward = function () {
      stopTransition();

      var maxScroll = ctrl.innerEl.scrollWidth - ctrl.innerEl.offsetWidth;
      var from = ctrl.innerEl.scrollLeft;
      var to = Math.min(ctrl.innerEl.scrollLeft + ctrl.innerEl.offsetWidth * .5, maxScroll);

      stopTransition = $bentoTransition.go(
        from,
        to,
        TRANSITON_DURATION,
        ctrl.onScrollTransitionTick.bind(this),
        null,
        $bentoTransition.ease.easeOutQuint
      );
    };

    /**
     * Scroll back to the previous screen
     */
    ctrl.scrollBack = function () {
      stopTransition();

      var from = ctrl.innerEl.scrollLeft;
      var to = Math.max(ctrl.innerEl.scrollLeft - ctrl.innerEl.offsetWidth * .5, 0);

      stopTransition = $bentoTransition.go(
        from,
        to,
        TRANSITON_DURATION,
        ctrl.onScrollTransitionTick.bind(this),
        null,
        $bentoTransition.ease.easeOutQuint
      );
    };

    /**
     * Call this method to refesh toolbar when it's displayed after it's been hidden with `display:none;`
     */
    ctrl.refresh = function () {
      ctrl.innerEl.scrollLeft = 0;
      ctrl.renderUI();
    };

    /**
     * Scroll content on mouse vertical scroll
     */
    ctrl.onMouseScroll = function (e) {
      var delta;

      if (e.deltaX === 0) {
        delta = e.deltaY;
      }else{
        delta = e.deltaX;
      }

      ctrl.innerEl.scrollLeft += delta;
      e.stopPropagation();
      e.preventDefault();
    };

    /**
     * Display scroll
     * @param val the value from the current transtion tick
     */
    ctrl.onScrollTransitionTick = function (val) {
      ctrl.innerEl.scrollLeft = val;
    };



    /**
     * Callback when the inner container is scrolled
     * We will need to check the arrow states
     * @param e
     */
    ctrl.onInnerScroll = function (e) {
      $timeout(function(){
        // Need the detection to be aligned with template with appropriate $digest
        var scrollLeft = ctrl.innerEl.scrollLeft;
      
        if (scrollLeft === 0) {
          ctrl._isLeftArrowDisabled = true;
          ctrl._isRightArrowDisabled = false;
        } else if (scrollLeft + ctrl.innerEl.offsetWidth === ctrl.innerEl.scrollWidth) {
          ctrl._isLeftArrowDisabled = false;
          ctrl._isRightArrowDisabled = true;
        } else {
          ctrl._isLeftArrowDisabled = false;
          ctrl._isRightArrowDisabled = false;
        }
      });
    };

    /**
     * Render arrows and gradients based on the width of this bar
     */
    ctrl.renderUI = function () {

      if (ctrl.innerEl) {
        clearTimeout(ctrl.renderUITimeout);

        ctrl.renderUITimeout = setTimeout(function () {
            // Render only when DOM is ready
            ctrl.hasScroll = ctrl.innerEl.scrollWidth > ctrl.el.offsetWidth;

            if (ctrl.hasScroll) {
              $element.addClass('bento-scroll-bar-has-scroll');
              ctrl.onInnerScroll();
            }else{
              $element.removeClass('bento-scroll-bar-has-scroll');
            }
          },
          100 // window resize debounce
        );
      }
    };
  }
})(window, angular);
(function (window, angular, undefined) {
  'use strict';

  angular.module('bento.scrollabletoolbar', [])
    .component('bentoScrollableToolbarItem', {
      bindings: {
        item: '<', // Menu item
      },
      require: {
        scrollableToolbar: '^^bentoScrollableToolbar'
      },
      templateUrl: '../templates/scrollable-toolbar/bento-scrollable-toolbar-item.html',
      controller: [
        '$element',
        '$bentoKeyboard',
        '$timeout',
        BentoScrollToolbarItemController
      ]
    });

  function BentoScrollToolbarItemController($element, Keyboard, $timeout) {
    var ctrl = this;
    ctrl.placement = 'left';
    ctrl.el = $element[0];

    ctrl.$onInit = function(){
    };

    ctrl.$postLink = function () {
      ctrl.onToggleKeydown = ctrl.onToggleKeydown.bind(ctrl);
      ctrl.onDropdownKeydown = ctrl.onDropdownKeydown.bind(ctrl);
      ctrl.onToggleFocus = ctrl.onToggleFocus.bind(ctrl);
      ctrl.onWindowKeydown = ctrl.onWindowKeydown.bind(ctrl);
      ctrl.calculatePlacementSide = ctrl.calculatePlacementSide.bind(ctrl);

      $timeout(function(){
        ctrl.dropdownMenuEl = ctrl.el.querySelector('.dropdown-menu');
        ctrl.dropdownEl = ctrl.el.querySelector('.dropdown');
      
        if (ctrl.dropdownMenuEl) {
          // There is a dropdown
          // Need to wire tabs for better accessibility
          ctrl.parentEl = ctrl.el.parentElement;
          ctrl.toggleEl = ctrl.el.querySelector('button');
          ctrl
          ctrl.dropdownMenuEl = ctrl.el.querySelector('.dropdown-menu');
  
          ctrl.toggleEl.addEventListener('keydown', ctrl.onToggleKeydown);
          ctrl.dropdownMenuEl.addEventListener('keydown', ctrl.onDropdownKeydown);
          ctrl.toggleEl.addEventListener('focus',ctrl.onToggleFocus);
          window.addEventListener('keydown', ctrl.onWindowKeydown);
          ctrl.parentEl.addEventListener('scroll', ctrl.calculatePlacementSide);
          ctrl.calculatePlacementSide();
        }
      });
    };

    ctrl.$onDestroy = function () {
      if (ctrl.dropdownMenuEl) {
        if(ctrl.dropdownMenuEl.parentElement){
          // remove dropdown HTMLElement in case it is not in placed within this component
          ctrl.dropdownMenuEl.parentElement.removeChild(ctrl.dropdownMenuEl);
        }
        window.removeEventListener('keydown', ctrl.onWindowKeydown);
        ctrl.parentEl.removeEventListener('scroll', ctrl.calculatePlacementSide);
      }
    };

    ctrl.$doCheck = function() {
      ctrl.calculatePlacementSide();
    };

    /**
     * To be called to calculate the current placement
     */
    ctrl.calculatePlacementSide = function () {
      if(ctrl.parentEl){
        //ca
        clearTimeout(ctrl.timeoutID);
        ctrl.timeoutID = setTimeout(function () {
            var centerPoint = ctrl.el.offsetWidth * .5 + ctrl.el.offsetLeft;
            var viewLeft = centerPoint - ctrl.parentEl.scrollLeft;
            if (viewLeft > ctrl.parentEl.offsetWidth * .5) {
              ctrl.placement = 'right';
            } else {
              ctrl.placement = 'left';
            }
          }, 100 // debounce the calling of calculation
        );
      }
    };

    /**
     * When the toggle gains focus
     * @param e
     */
    ctrl.onToggleFocus = function (e) {
      if (ctrl.dropdownEl.classList.contains('open') && !ctrl.isInternalFocusChange && ctrl.shiftKey) {
        // Need to move the focus to the last dropdown item
        var menuButtons = ctrl.dropdownMenuEl.querySelectorAll('a');
        var lastButton = menuButtons[menuButtons.length - 1];
        lastButton.focus();
      }
      ctrl.isInternalFocusChange = false;
    };

    /**
     * Check if the current keydown has shiftkey
     * @param e
     */
    ctrl.onWindowKeydown = function (e) {
      ctrl.shiftKey = e.shiftKey;
    };


    /**
     * Listener for the toggle when a TAB is pressed
     */
    ctrl.onToggleKeydown = function (e) {
      if (e.keyCode === Keyboard.TAB && !e.shiftKey && ctrl.dropdownEl.classList.contains('open')) {
        var dropdownItem = ctrl.dropdownMenuEl.querySelector('a');
        dropdownItem.focus();
        e.preventDefault();
      }
    };

    /**
     * Listener for the ngbDropdown when TAB is pressed
     * @param e
     */
    ctrl.onDropdownKeydown = function (e) {
      var buttons = ctrl.dropdownMenuEl.querySelectorAll('a');
      var currentButton = e.target;
      if (buttons[0] === currentButton && e.shiftKey) {
        ctrl.isInternalFocusChange = true;
        ctrl.toggleEl.focus();
        e.preventDefault();
      } else if (currentButton === buttons[buttons.length - 1] && !e.shiftKey) {
        ctrl.isInternalFocusChange = true;
        ctrl.toggleEl.focus();
      }
    };
  }
})(window, angular);
(function (window, angular, undefined) {
  'use strict';

  angular.module('bento.scrollabletoolbar')
    .component('bentoScrollableToolbar', {
      bindings: {
        toolbarData: '<', // Menu item
        controller: '=?',
      },
      transclude: {
        navbarLeft: '?navbarLeft',
        navbarRight: '?navbarRight'
      },
      templateUrl: '../templates/scrollable-toolbar/bento-scrollable-toolbar.html',
      controller: [
        '$scope',
        '$element',
        '$bentoServices',
        BentoScrollToolbarController
      ]
    });

  function BentoScrollToolbarController($scope, $element, $bentoServices) {
    var ctrl = this;
    ctrl.appendToEl = $element[0];
    ctrl.scrollableBarController = {};
    ctrl.id = 'bento-scrollable-toolbar-' + $bentoServices.generateUID();

    $element[0].setAttribute('id', ctrl.id);

    $scope.$on('bentoToolbarRefresh', onRefresh);

    ctrl.$postLink = function () {
      ctrl.controller = ctrl.scrollableBarController;
    };

    function onRefresh(){
      if(ctrl.scrollableBarController){
        ctrl.scrollableBarController.refresh();
      }
    }
  }

})(window, angular);
(function (window, angular, undefined) {
  'use strict';

//Define bentoUI App object
  angular.module('bento.select', ['ui.bootstrap'])
    .directive('bentoSelect', function () {
      return {
        restrict  : 'A',
        scope     : false,
        link      : function(scope, element, attrs, controller){
          var select = element[0].querySelector('select');
          var tabindex = '0';
          element.addClass('bento-select');

          scope.$watch(function(){
            if(select){
              return select.getAttribute('readonly');
            }
          }, function(v){
            if(select){
              if(v){
                tabindex = select.getAttribute('tabindex') || 0;
                select.setAttribute('tabindex', '-1');
              }else{
                select.setAttribute('tabindex', tabindex);
              }
            }
          });


          // Add IE and Firefox version for better UI look and feel
          if (window.navigator.userAgent.search(/MSIE 9/gi) !== -1) {
            element.addClass('ie9');
          } else if (window.navigator.userAgent.search(/MSIE 10/gi) !== -1) {
            element.addClass('ie10');
          } else if (window.navigator.userAgent.search(/Firefox/gi) !== -1) {
            element.addClass('firefox');
            element.append('<div class="bento-select-border"></div>');
          }

          // Add button decoration
          element.append('<div class="btn"><span class="bento-icon-caret-down"></span></div>');
          element.append('<div class="bento-select-overlay"></div>');
        }
      };
    });

})(window, window.angular);





(function(window, angular, undefined) {

'use strict';

var directiveName = 'bentoSplitterGroup';
var bentSplitterGroupApp = angular.module(
    'bento.splittergroup', ['bento.services', 'bento.translate']);

var HANDLE_DEFAULT = '<svg version="1.1" ' +
    'class="bento-splitter-handle-default" ' +
    'id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
    'viewBox="0 0 13 73" enable-background="new 0 0 13 73" xml:space="preserve">' +
    '<g>' +
    '<g>' +
    '<path class="splitter-group-handle-border" d="M5.4,57.3c6.1-1.4,5.6-8.9,5.6-8.9V36.5V24.6c0,0,0.5-7.5-5.6-8.9C0,14.3,0,11,0,11v25.5V62 ' +
    'C0,61.9,0,58.6,5.4,57.3z"/>' +
    '<path class="splitter-group-handle-bg" d="M4.8,55.8c5.3-1.3,4.8-7.1,4.8-7.1V36.5V24.4c0,0,0.5-5.9-4.8-7.1C0,16.1,0,13.9,0,13.9v22.6v22.4 ' +
    'C0,58.9,0,56.9,4.8,55.8z"/>' +
    '</g>' +
    '<polygon class="splitter-group-handle-triangle" points="3,32.4 8.3,36.5 3,40.6 	"/>' +
    '</g>' +
    '</svg>';
var HANDLE_MOVE = '<svg class="bento-splitter-handle-move" ' +
    'version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
    'viewBox="0 0 13 73" enable-background="new 0 0 13 73" xml:space="preserve">' +
    '<g>' +
    '<g>' +
    '<rect y="15" class="splitter-group-handle-border" width="13" height="43"/>' +
    '<rect y="16" class="splitter-group-handle-bg" width="13" height="41"/>' +
    '</g>' +
    '<g>' +
    '<polygon class="splitter-group-handle-triangle" points="6,39.6 3,36.5 6,33.4"/>' +
    '<polygon class="splitter-group-handle-triangle" points="7.1,33.4 10.1,36.5 7.1,39.6"/>' +
    '</g>' +
    '</g>' +
    '</svg>';

var LEFT = 'left', RIGHT = 'right', TOP = 'top', BOTTOM = 'bottom',
    C_LEFT = 'Left', C_RIGHT = 'Right', C_TOP = 'Top', C_BOTTOM = 'Bottom',
    DIRECTIVE_NAME_SPACE = 'bento-splitter-group-';

// Convert side variable to "C_" prfixed side variable (eg. LEFT -> C_LEFT)
function C_(side) {
  return side.charAt(0).toUpperCase() + side.slice(1);
}

bentSplitterGroupApp
    /**
     * A notification factory to let the controllers in the left, middle and
     * right panels to communicate with each other
     *
     * This also helps with Left and Right panel collapses and expansions
     */
    .factory(
        'splitterGroupNotification',
        function() {
          var notificationStack = [];
          /**
           * Add a splitter group notification
           * @param nName - Notification name
           * @param func - Notification function
           * @param uid - (Optional) unique ID
           */
          var addNotification = function(nName, func, uid) {
            // Check if notification with `nName` exists or create a new `nName`
            // stack
            if (typeof notificationStack[nName] === 'undefined') {
              notificationStack[nName] = [];
            }

            // To partially prevent notification redundancy
            var stack = notificationStack[nName];
            var notificationObj;
            for (var i = 0, len = stack.length; i < len; i++) {
              notificationObj = stack[i];
              if (notificationObj.func === func &&
                  notificationObj.uid === uid) {
                console.warn(
                    '`splitterGroupNotification.addNotification()`:', nName,
                    ' notification has already been added width uid =', uid);
                // This notification already exists
                return;
              }
            }

            notificationStack[nName].push({func: func, uid: uid});
          };

          /**
           * Remove a splitter group notification
           * @param nName - Notification name
           * @param func - Notification function
           * @param uid - (Optional) unique ID
           */
          var removeNotification = function(nName, func, uid) {
            // If `nName` notification does not exist
            // Do nothing.
            if (typeof notificationStack[nName] === 'undefined') {
              return;
            }

            var nNameStack = notificationStack[nName];

            var index = 0;
            var notification;
            // Remove the matching notification
            while (index < nNameStack.length) {
              notification = nNameStack[index];
              if (notification.func === func && notification.uid === uid) {
                nNameStack.splice(index, 1);
              } else {
                index++;
              }
            }
          };

          /**
           * Notify through the notification center
           * @param nName - Notification name
           * @param uid - (Optional)
           * @param data - (Optional)
           */
          var notify = function(nName, uid, data) {
            // If `nName` notification does not exist
            // Do nothing.
            if (typeof notificationStack[nName] === 'undefined') {
              return;
            }

            var nNameStack = notificationStack[nName];

            for (var i = 0; i < nNameStack.length; i++) {
              var notification = nNameStack[i];
              if (typeof uid === 'undefined' || uid === null ||
                  notification.uid === uid) {
                notification.func(data);
              }
            }
          };

          // Regiter notification functions to factory
          return {
            addNotification: addNotification,
            removeNotification: removeNotification,
            notify: notify
          };
        })
    .factory(
        'splitterGroupMainHelper',
        [
          '$window', '$timeout',
          function($window, $timeout) {
            /**
             * parse side pane width from a string
             * @param element
             * @param width
             * @returns number
             */
            var parseWidth = function(element, width) {
              return parseLength(element, width, 'w');
            };

            /**
             * parse top/bottom pane height from a string
             * @param element
             * @param width
             * @returns number
             */
            var parseHeight = function(element, height) {
              return parseLength(element, height, 'h');
            };

            function parseLength(element, length, scaleDirection) {
              if (typeof length === 'number') {
                return length;
              } else if (typeof length === 'undefined') {
                return -1;
              }

              var lengthType = length.search('%') > -1 ? '%' : 'px';
              var lengthInt = parseInt(length);

              if (lengthType === '%') {
                if (scaleDirection === 'w') {
                  return element[0].offsetWidth * lengthInt / 100;
                } else {
                  return element[0].offsetHeight * lengthInt / 100;
                }
              }

              return lengthInt;
            }

            return {parseWidth: parseWidth, parseHeight: parseHeight};
          }
        ])
    /**
     * Main Controller to Splitter Group directive
     */
    .controller(
        'bentoSplitterGroupMainController',
        [
          '$scope', '$element', '$window', 'splitterGroupMainHelper',
          '$bentoServices', '$timeout',
          function(
              $scope, $element, $window, splitterGroupMainHelper,
              $bentoServices, $timeout) {
            var ctrl = this;

            ctrl.isRTL = $scope.isRTL = $bentoServices.isRTL();

            // Check if the browser is IE 9
            if ($bentoServices.getIEVersion() === 9) {
              $element.addClass('ie9');
            }

            $element.addClass('bento-splitter-group');

            // Add `no-collapse` class when this directive is not collapsable
            if (!!$scope.noCollapse()) {
              $element.addClass('no-collapse');
            }

            // Determine if user is clicking on the left handle or not

            /* Global Helper */
            ctrl.hasHandle = function(side) {
              return $scope['splitter' + side] &&
                  $scope['splitter' + side].length;
            };

            // Align left & right panes and handles based on the side
            ctrl.alignLeftRightPanes = function(C_SIDE, pos) {
              var SIDE = C_SIDE.toLowerCase(), openedSide = 'opened-' + SIDE,
                  posPx;

              alignSide(C_LEFT);
              alignSide(C_RIGHT);

              function alignSide(C_SIDE) {
                if (ctrl.hasHandle(C_SIDE)) {
                  posPx = $element.hasClass(openedSide) ?
                      ($scope['splitHandle' + C_SIDE][0].offsetWidth + pos) +
                          'px' :
                      $scope['splitHandle' + C_SIDE][0].offsetWidth + 'px';
                  $scope['splitHandle' + C_SIDE][0].style[SIDE] =
                      $scope['splitter' + C_SIDE][0].style[SIDE] = posPx;
                }
              }
            };

            ctrl.toggleSide = function(SIDE) {
              SIDE = !!SIDE ? SIDE : $scope.actionOn;
              var C_SIDE = C_(SIDE);

              // Bypass click when this directive is not collapsable
              if (!!$scope.noCollapse()) {
                return;
              }

              // Do the actual action to its open-close
              if ($element.hasClass('opened-' + SIDE)) {
                ctrl.closePanel(C_SIDE);
                $scope['is' + C_SIDE + 'Collapsed'] = true;
              } else {
                ctrl.openPanel(C_SIDE);
                $scope['is' + C_SIDE + 'Collapsed'] = false;
              }

              $bentoServices.safeApply($scope);
            };

            // Helper
            // get event target side
            function getEventSide(event) {
              return $scope.actionOn;
            }

            /**
             * Execute mouse click
             * @param event
             */
            ctrl.onHandleClick = function(event) {
              ctrl.toggleSide(getEventSide(event));
            };

            /**
             * Execute keyboard event
             * @param  {event} event
             */
            ctrl.onHandleKeyup = function(event) {
              // Enter or Space
              if (event.keyCode === 32 || event.keyCode === 13) {
                ctrl.toggleSide(getEventSide(event));
              }
            };

            // Helper functions used with the above logic for
            // `ctrl.onHandleClick`
            ctrl.openPanel = function(C_SIDE) {
              var SIDE = C_SIDE.toLowerCase();
              var length = SIDE +
                  ((C_SIDE === C_TOP || C_SIDE === C_BOTTOM) ? 'Height' :
                                                               'Width');

              $scope['splitter' + C_SIDE].css('display', 'block');

              $timeout(function() {
                $element.addClass('opened-' + SIDE);

                $scope['splitter' + C_SIDE].css(SIDE, '0');
                $scope.splitterMain.css(SIDE, $scope[length]);
                $scope['splitHandle' + C_SIDE].css(SIDE, $scope[length]);

                if (SIDE === TOP || SIDE === BOTTOM) {
                  ctrl.alignLeftRightPanes(
                      C_SIDE, parseInt($scope[length].replace('px', '')));
                }
              });
            };

            // Helper functions used with the above logic for
            // `ctrl.onHandleClick`
            ctrl.closePanel = function(C_SIDE) {
              var SIDE = C_SIDE.toLowerCase();
              var length = SIDE +
                  ((C_SIDE === C_TOP || C_SIDE === C_BOTTOM) ? 'Height' :
                                                               'Width');

              $element.removeClass('opened-' + SIDE);

              $scope['splitter' + C_SIDE].css(SIDE, '-' + $scope[length]);
              $scope.splitterMain.css(SIDE, '0');
              $scope['splitHandle' + C_SIDE].css(SIDE, '0');

              if (SIDE === TOP || SIDE === BOTTOM) {
                ctrl.alignLeftRightPanes(C_SIDE, 0);
              }

              $timeout(function() {
                $scope['splitter' + C_SIDE].css('display', 'none');
              }, 200)
            };

            // Initialize window resize elements
            $scope.leftMaxWidthPx = splitterGroupMainHelper.parseWidth(
                $element, $scope.leftMaxWidth);
            $scope.rightMaxWidthPx = splitterGroupMainHelper.parseWidth(
                $element, $scope.rightMaxWidth);
            $scope.topMaxHeightPx = splitterGroupMainHelper.parseHeight(
                $element, $scope.topMaxHeight);
            $scope.bottomMaxHeightPx = splitterGroupMainHelper.parseHeight(
                $element, $scope.bottomMaxHeight);

            var $w = angular.element($window);

            // Adding resize listener if there is a maxDraggable variable
            // assigned
            if ($scope.leftMaxWidthPx > -1 || $scope.rightMaxWidthPx > -1) {
              $w.on('resize', onWindowsResize);
              $element.on('$destroy', function() {
                $w.off('resize', onWindowsResize);
              });
            }

            /**
             * check the width of left and right panels to make sure they are
             * not oversized based on the max draggable settings
             * @param $event
             */
            function onWindowsResize($event) {
              $scope.leftMaxWidthPx = splitterGroupMainHelper.parseWidth(
                  $element, $scope.leftMaxWidth);
              $scope.rightMaxWidthPx = splitterGroupMainHelper.parseWidth(
                  $element, $scope.rightMaxWidth);
              $scope.topMaxHeightPx = splitterGroupMainHelper.parseHeight(
                  $element, $scope.topMaxHeight);
              $scope.bottomMaxHeightPx = splitterGroupMainHelper.parseHeight(
                  $element, $scope.bottomMaxHeight);

              // LEFT
              if ($scope.leftMaxWidthPx > -1 && ctrl.hasHandle(C_LEFT)) {
                if (parseInt($scope.leftWidth) > $scope.leftMaxWidthPx) {
                  $scope.leftWidth = $scope.leftMaxWidthPx + 'px';
                  $scope.splitterLeft[0].style.width = $scope.leftWidth;
                }

                if ($scope.splitHandleLeft[0].offsetLeft >
                    $scope.leftMaxWidthPx) {
                  $scope.splitterMain[0].style.left =
                      $scope.splitHandleLeft[0].style.left = $scope.leftWidth;
                }
              }

              // RIGHT
              if ($scope.rightMaxWidthPx > -1 && ctrl.hasHandle(C_RIGHT)) {
                if (parseInt($scope.rightWidth) > $scope.rightMaxWidthPx) {
                  $scope.rightWidth = $scope.rightMaxWidthPx + 'px';
                  $scope.splitterRight[0].style.width = $scope.rightWidth;
                }

                if ($element[0].offsetWidth -
                        $scope.splitHandleRight[0].offsetLeft -
                        $scope.splitHandleRight[0].offsetWidth >
                    $scope.leftMaxWidthPx) {
                  $scope.splitterMain[0].style.right =
                      $scope.splitHandleRight[0].style.right =
                          $scope.rightWidth;
                }
              }

              // TOP
              if ($scope.topMaxHeightPx > -1 && ctrl.hasHandle(C_TOP)) {
                if (parseInt($scope.topHeight) > $scope.topMaxHeightPx) {
                  $scope.topHeight = $scope.topMaxHeightPx + 'px';
                  $scope.splitterTop[0].style.height = $scope.topHeight;
                }

                if ($scope.splitHandleTop[0].offsetTop >
                    $scope.topMaxHeightPx) {
                  $scope.splitterMain[0].style.top =
                      $scope.splitHandleTop[0].style.top = $scope.topHeight;
                }

                ctrl.alignLeftRightPanes(
                    C_TOP, parseInt($scope.topHeight.replace('px', '')));
              }

              // BOTTOM
              if ($scope.bottomMaxHeightPx > -1 && ctrl.hasHandle(C_BOTTOM)) {
                if (parseInt($scope.bottomHeight) > $scope.bottomMaxHeightPx) {
                  $scope.bottomHeight = $scope.bottomMaxHeightPx + 'px';
                  $scope.splitterBottom[0].style.height = $scope.bottomHeight;
                }

                if ($element[0].offsetHeight -
                        $scope.splitHandleBottom[0].offsetTop -
                        $scope.splitHandleBottom[0].offsetHeight >
                    $scope.bottomMaxHeightPx) {
                  $scope.splitterMain[0].style.bottom =
                      $scope.splitHandleRight[0].style.bottom =
                          $scope.bottomHeight;
                }

                ctrl.alignLeftRightPanes(
                    C_BOTTOM, parseInt($scope.bottomHeight.replace('px', '')));
              }
            }

            // Initialize dragging variables
            var draggingClassTimeout;
            var isDragging = false;
            var lastMousePos;  // is used to track mose X movement
            var initialHandlePos;
            var elementSize;
            var handleSize;
            var screenDirection;

            /**
             * When the mouse is pressed down on the handle
             * @param event
             */
            $scope.onHandleDown = function(event) {
              var offsetProp;

              // Prevent the other event
              event.stopPropagation();
              event.preventDefault();

              if (event.currentTarget.className.search('handle-' + LEFT) > -1) {
                $scope.actionOn = LEFT;
                offsetProp = 'offsetWidth';
                screenDirection = 'screenX';
              } else if (
                  event.currentTarget.className.search('handle-' + RIGHT) >
                  -1) {
                $scope.actionOn = RIGHT;
                offsetProp = 'offsetWidth';
                screenDirection = 'screenX';
              } else if (
                  event.currentTarget.className.search('handle-' + TOP) > -1) {
                $scope.actionOn = TOP;
                offsetProp = 'offsetHeight';
                screenDirection = 'screenY';
              } else {
                $scope.actionOn = BOTTOM;
                offsetProp = 'offsetHeight';
                screenDirection = 'screenY';
              }

              var C_SIDE = C_($scope.actionOn);

              elementSize = $element[0][offsetProp];
              handleSize = $scope['splitHandle' + C_SIDE][0][offsetProp];

              // Show pane on drag
              $scope['splitter' + C_SIDE].css('display', 'block');

              // Calculate lastMousePosition
              lastMousePos = (event.touches && event.touches.length > 0) ?
                  event.touches[0][screenDirection] :
                  event[screenDirection];

              switch ($scope.actionOn) {
                case LEFT:
                  initialHandlePos = $scope.splitHandleLeft[0].offsetLeft;
                  break;
                case RIGHT:
                  initialHandlePos = $scope.splitHandleRight[0].offsetLeft +
                      $scope.splitHandleRight[0].offsetWidth;
                  break;
                case TOP:
                  initialHandlePos = $scope.splitHandleTop[0].offsetTop;
                  break;
                case BOTTOM:
                  initialHandlePos = $scope.splitHandleBottom[0].offsetTop +
                      $scope.splitHandleBottom[0].offsetHeight;
                  break;
              }

              $element.addClass('unselectable');

              // start to track mouse move
              // touch devices are disabled for now.
              if (!!$scope.resizable() &&
                  (event.type === 'mousedown' || event.type === 'touchstart')) {
                $w.on('touchmove mousemove', $scope.onHandleMove);

                // on Destroy just in case the splitter group is destroyed while
                // moving
                $element.on('$destroy', function() {
                  $w.off('touchmove mousemove', $scope.onHandleMove);
                });

                $element.addClass(DIRECTIVE_NAME_SPACE + 'handle-pointer-down');

                draggingClassTimeout = $timeout(function() {
                  $element.addClass('dragging-' + $scope.actionOn);
                }, 300);
              }
              // track mouse up
              $w.one('touchend mouseup', $scope.onHandleUp);
            };

            /**
             * When mouse is released within the window
             * @param event
             */
            $scope.onHandleUp = function(event) {
              // angular.element(event.target).on('click',ctrl.onHandleClick);
              event.preventDefault();
              event.stopPropagation();

              $timeout.cancel(draggingClassTimeout);
              var dragging = 'dragging-';
              $element.removeClass(dragging + TOP);
              $element.removeClass(dragging + BOTTOM);
              $element.removeClass(dragging + LEFT);
              $element.removeClass(dragging + RIGHT);
              $element.removeClass(
                  DIRECTIVE_NAME_SPACE + 'handle-pointer-down');

              $bentoServices.removeBrowserSelection();

              // If the user didn't drag mouse pointer and released it inside of
              // the splitter It would be treated as a click
              if (!isDragging && event.target.className &&
                  !$scope.noCollapse()) {
                ctrl.onHandleClick(event);
                // Dispatch click tracking event
                $scope.eventTracking({eventName: 'splitter_group_click'});
              }
              // Normalize width and heights
              else {
                // helper class
                var normalize = function(C_SIDE, offset) {
                  var SIDE = C_SIDE.toLowerCase(),
                      orientation = (C_SIDE === C_LEFT || C_SIDE === C_RIGHT) ?
                      'Width' :
                      'Height',
                      length = SIDE + orientation,
                      $splitter = $scope['splitter' + C_SIDE];

                  offset = (offset < 50) ? 0 : offset;
                  // update offset width or height
                  $scope[length] =
                      (offset < 50) ? $scope[length] : offset + 'px';

                  // Close
                  if (offset === 0) {
                    handleTargetPos = 0;
                    // Restore previous pane width/height
                    $splitter.css(orientation.toLowerCase(), $scope[length]);
                    ctrl.closePanel(C_SIDE);
                    $scope['is' + C_SIDE + 'Collapsed'] = true;
                  } else {
                    $element.addClass('opened-' + SIDE);
                    $scope['is' + C_SIDE + 'Collapsed'] = false;
                  }

                  $bentoServices.safeApply($scope);
                };

                // Normalize leftWidth
                switch ($scope.actionOn) {
                  case LEFT:
                    normalize(C_LEFT, $scope.splitHandleLeft[0].offsetLeft);
                    break;
                  case RIGHT:
                    normalize(
                        C_RIGHT,
                        elementSize - $scope.splitHandleRight[0].offsetLeft -
                            $scope.splitHandleRight[0].offsetWidth);
                    break;
                  case TOP:
                    normalize(C_TOP, $scope.splitHandleTop[0].offsetTop);
                    break;
                  case BOTTOM:
                    normalize(
                        C_BOTTOM,
                        elementSize - $scope.splitHandleBottom[0].offsetTop -
                            $scope.splitHandleBottom[0].offsetHeight);
                    break;
                }
                // Dispatch drag tracking event
                $scope.eventTracking({eventName: 'splitter_group_drag'});

                normalize = null;
              }

              $element.removeClass('unselectable');
              // stop move
              $w.off('touchmove mousemove', $scope.onHandleMove);

              // turn on down
              $scope['splitHandle' + C_($scope.actionOn)].one(
                  'touchstart mousedown', $scope.onHandleDown);

              // reset dragging flag
              isDragging = false;

              // Fire onResize Callback
              if (!!$scope.onResize) {
                $scope.onResize({side: $scope.actionOn});
              }
            };

            var handleTargetPos;
            var dPos;

            // Animate dragging using window.requestAnimationFrame for optimal
            // performance
            var animateDragging = function() {
              var C_SIDE = C_($scope.actionOn);
              var targetPosPx = handleTargetPos + 'px';
              var orientation;

              if (handleTargetPos > 0 && dPos !== 0) {
                orientation = (C_SIDE === C_LEFT || C_SIDE === C_RIGHT) ?
                    'width' :
                    'height';

                $scope.splitterMain[0].style[$scope.actionOn] =
                    $scope['splitHandle' + C_SIDE][0].style[$scope.actionOn] =
                        $scope['splitter' + C_SIDE][0].style[orientation] =
                            targetPosPx;

                if (orientation === 'height') {
                  ctrl.alignLeftRightPanes(C_SIDE, handleTargetPos);
                }

                // Fire onResize Callback
                if (!!$scope.onResize) {
                  $scope.onResize({side: $scope.actionOn});
                }
              }

              if (isDragging) {
                $bentoServices.rAF(animateDragging);
              }
            };

            /**
             * Track on window mousemove
             * @param event
             */
            $scope.onHandleMove = function(event) {
              var touchObject = (event.touches && event.touches.length > 0) ?
                  event.touches[0] :
                  event;
              var currentMousePos = touchObject[screenDirection];
              var SIDE = $scope.actionOn;
              var C_SIDE = C_(SIDE);
              var C_orientation =
                  (SIDE === LEFT || SIDE === RIGHT) ? 'Width' : 'Height';
              var maxLength = $scope[SIDE + 'Max' + C_orientation + 'Px'];

              // Prevent the screen from scrolling on touch devices
              event.preventDefault();
              event.stopPropagation();

              $bentoServices.removeBrowserSelection();

              if (lastMousePos !== currentMousePos) {
                // Calculate dPos for rendering
                dPos = currentMousePos - lastMousePos;
                handleTargetPos = (initialHandlePos + dPos);
                handleTargetPos = (SIDE === LEFT || SIDE === TOP) ?
                    handleTargetPos :
                    elementSize - handleTargetPos;
                handleTargetPos = (handleTargetPos < 0) ? 0 : handleTargetPos;
                handleTargetPos = (handleTargetPos > elementSize - handleSize) ?
                    elementSize - handleSize :
                    handleTargetPos;

                // Check draggable area so the oppsited handles don't overlap
                if (SIDE === LEFT && ctrl.hasHandle(C_RIGHT) &&
                    handleTargetPos >
                        $scope.splitHandleRight[0].offsetLeft - handleSize) {
                  handleTargetPos =
                      $scope.splitHandleRight[0].offsetLeft - handleSize;
                } else if (
                    SIDE === RIGHT && ctrl.hasHandle(C_LEFT) &&
                    handleTargetPos > elementSize -
                            $scope.splitHandleLeft[0].offsetLeft -
                            handleSize * 2) {
                  handleTargetPos = elementSize -
                      $scope.splitHandleLeft[0].offsetLeft - handleSize * 2;
                } else if (
                    SIDE === TOP && ctrl.hasHandle(C_BOTTOM) &&
                    handleTargetPos >
                        $scope.splitHandleBottom[0].offsetTop - handleSize) {
                  handleTargetPos =
                      $scope.splitHandleBottom[0].offsetTop - handleSize;
                } else if (
                    SIDE === BOTTOM && ctrl.hasHandle(C_TOP) &&
                    handleTargetPos > elementSize -
                            $scope.splitHandleTop[0].offsetTop -
                            handleSize * 2) {
                  handleTargetPos = elementSize -
                      $scope.splitHandleTop[0].offsetTop - handleSize * 2;
                }

                if (!isDragging) {
                  $bentoServices.rAF(animateDragging);
                }

                // Need to 'open' the splitter group when the handle is moved
                // out
                if (handleTargetPos > 0 &&
                    !$element.hasClass('opened-' + SIDE)) {
                  $element.addClass('opened-' + SIDE);
                  $scope['splitter' + C_SIDE][0].style[SIDE] = '0';
                }

                // Lock handleTargetPos if there is a dragging limit here
                if (maxLength > -1 && handleTargetPos > maxLength) {
                  handleTargetPos = maxLength;
                }

                // flag isDragging
                isDragging = true;
              }
            };
          }
        ])
    /**
     * Splitter Group directive declaration
     */
    .directive(
        directiveName,
        [
          '$timeout', '$log', 'splitterGroupNotification',
          'splitterGroupMainHelper', '$compile', '$bentoServices',
          function(
              $timeout, $log, splitterGroupNotification,
              splitterGroupMainHelper, $compile, $bentoServices) {
            var isRTL = $bentoServices.isRTL();

            return {
              restrict: 'A',
              replace: false,
              scope: {
                _bottomHeight: '@bottomHeight',  // Set the default width to the
                                                 // bottom pane
                _leftWidth:
                    '@leftWidth',  // Set the default width to the left pane
                _rightWidth:
                    '@rightWidth',  // Set the default width to the right pane
                _topHeight:
                    '@topHeight',  // Set the default width to the top pane
                autoResize: '=',   // Option to auto-resize the parent container
                                   // with the content of this SG
                bottomMaxHeight:
                    '@',  // Set max draggable height of the bottom panel
                eventTracking: '&',  // Dispatch external event handlers
                isLeftCollapsed: isRTL ? '=?isRightCollapsed' :
                                         '=?',  // Default to false if doesn't
                                                // exist
                isRightCollapsed: isRTL ? '=?isLeftCollapsed' :
                                          '=?',  // Default to false if doesn't
                                                 // exist
                isTopCollapsed: '=?',     // Default to false if doesn't exist
                isBottomCollapsed: '=?',  // Default to false if doesn't exist
                leftMaxWidth: '@',  // Set max draggable width of the left panel
                noCollapse: '&',    // Making the splitter group to be only
                                    // resizable but not
                                    // collapsable on Left
                onResize: '&',      // Callback for resize
                resizable: '&',     // This enables the dragging function to the
                                    // handle bar
                rightMaxWidth:
                    '@',           // Set max draggable width of the right panel
                topMaxHeight: '@'  // Set max draggable height of the top panel
              },
              controller: 'bentoSplitterGroupMainController',
              link: function($scope, $element, $attrs, ctrl) {
                // Set default width to both left, right, top & bottom
                if (typeof $scope._leftWidth === 'undefined' ||
                    $scope._leftWidth === null) {
                  $scope.leftWidth = '300px';
                } else {
                  $scope.leftWidth = $scope._leftWidth;
                }

                if (typeof $scope._rightWidth === 'undefined' ||
                    $scope._rightWidth === null) {
                  $scope.rightWidth = '300px';
                } else {
                  $scope.rightWidth = $scope._rightWidth;
                }

                if (typeof $scope._topHeight === 'undefined' ||
                    $scope._topHeight === null) {
                  $scope.topHeight = '300px';
                } else {
                  $scope.topHeight = $scope._topHeight;
                }

                if (typeof $scope._bottomHeight === 'undefined' ||
                    $scope._bottomHeight === null) {
                  $scope.bottomHeight = '300px';
                } else {
                  $scope.bottomHeight = $scope._bottomHeight;
                }

                // Make sure the intial leftWidth doesn't exceed the
                // leftMaxWidth
                if ($scope.leftMaxWidthPx > -1 &&
                    splitterGroupMainHelper.parseWidth(
                        $element, $scope.leftWidth) > $scope.leftMaxWidthPx) {
                  $scope.leftWidth = $scope.leftMaxWidthPx + 'px';
                }

                // Make sure the intial rightWidth doesn't exceed the
                // rightMaxWidth
                if ($scope.rightMaxWidthPx > -1 &&
                    splitterGroupMainHelper.parseWidth(
                        $element, $scope.rightWidth) > $scope.rightMaxWidthPx) {
                  $scope.rightWidth = $scope.rightMaxWidthPx + 'px';
                }

                if ($scope.topMaxHeightPx > -1 &&
                    splitterGroupMainHelper.parseHeight(
                        $element, $scope.topHeight) > $scope.topMaxHeightPx) {
                  $scope.topHeight = $scope.topMaxHeightPx + 'px';
                }

                // Make sure the intial rightWidth doesn't exceed the
                // rightMaxWidth
                if ($scope.bottomMaxHeightPx > -1 &&
                    splitterGroupMainHelper.parseHeight(
                        $element, $scope.bottomHeight) >
                        $scope.bottomMaxHeightPx) {
                  $scope.bottomHeight = $scope.bottomMaxHeightPx + 'px';
                }

                var mainPaneInner = $element[0].querySelector(
                    '.' + DIRECTIVE_NAME_SPACE + 'main-inner');

                // Main SR object
                var srObj = angular.element(
                    '<info class="sr-only" tabindex="0">{{ "BENTO_UI_SPLITTER_GROUP" | bentoTranslate}}</info>');
                $compile(srObj)($scope);
                $element.prepend(srObj);

                // Get the children elements from the splitter group DOM
                // structure
                var getDomEl = function(side) {
                  var children = $element.children(), $sideEl, $foundSideEl;

                  angular.forEach(children, function(sideEl) {
                    $sideEl = angular.element(sideEl);
                    if ($sideEl.hasClass(DIRECTIVE_NAME_SPACE + side)) {
                      $foundSideEl = $sideEl;
                    }
                  });

                  return $foundSideEl;
                };

                $scope.splitterLeft = getDomEl(LEFT);
                $scope.splitterRight = getDomEl(RIGHT);
                $scope.splitterTop = getDomEl(TOP);
                $scope.splitterBottom = getDomEl(BOTTOM);
                $scope.splitterMain = getDomEl('main');

                getDomEl = null;

                /* Inject splitter buttons */
                // helper function
                var handleInject = function(C_SIDE) {
                  // Handle doesn't exist
                  if (!ctrl.hasHandle(C_SIDE)) {
                    return;
                  }

                  var SIDE = C_SIDE.toLowerCase(),
                      splitHandleSide = 'splitHandle' + C_SIDE,
                      splitterSide = 'splitter' + C_SIDE,
                      length = (C_SIDE === C_TOP || C_SIDE === C_BOTTOM) ?
                      SIDE + 'Height' :
                      SIDE + 'Width',
                      lengthOrientation =
                          (length.search('Height') > -1) ? 'height' : 'width',
                      eventOpen = 'open' + C_SIDE,
                      eventClose = 'close' + C_SIDE,
                      openedSide = 'opened-' + SIDE;

                  $scope[splitHandleSide] = angular.element(
                      '<button class="bento-splitter-handle bento-splitter-handle-' +
                      SIDE + '" ' +
                      'tabindex="0" type="button" aria-label="{{ \'BENTO_UI_SPLITTER_GROUP_' +
                      SIDE.toUpperCase() + '_BAR\' | bentoTranslate}}">' +
                      HANDLE_DEFAULT + HANDLE_MOVE + '</button>');

                  $scope[splitHandleSide].on('focusin', function() {
                    $scope.actionOn = SIDE;
                  });

                  // Append the handle after each pane
                  $scope[splitterSide][0].parentNode.insertBefore(
                      $scope[splitHandleSide][0], $scope[splitterSide][0]);

                  $compile($scope[splitHandleSide])($scope);
                  // Initialize pane initial position
                  $scope[splitterSide].css(lengthOrientation, $scope[length]);
                  $scope[splitterSide].css(SIDE, '-' + $scope[length]);
                  // Initialize splitHandle listener
                  $scope[splitHandleSide].one(
                      'touchstart mousedown', $scope.onHandleDown);
                  $scope[splitHandleSide][0].addEventListener(
                      'keyup', ctrl.onHandleKeyup);
                  mainPaneInner.className += ' has-' + SIDE + '-pane';

                  // Assign Notifications
                  splitterGroupNotification.addNotification(
                      eventOpen, eventCallbackOnOpen, $attrs.id);
                  splitterGroupNotification.addNotification(
                      eventClose, eventCallbackOnClose, $attrs.id);

                  $scope.$on('$destroy', function() {
                    splitterGroupNotification.removeNotification(
                        eventClose, eventCallbackOnClose, $attrs.id);
                    splitterGroupNotification.removeNotification(
                        eventOpen, eventCallbackOnOpen, $attrs.id);
                  });

                  function eventCallbackOnOpen() {
                    if (!$element.hasClass(openedSide)) {
                      $scope.actionOn = SIDE;
                      ctrl.onHandleClick(null);
                    }
                  }

                  function eventCallbackOnClose() {
                    if ($element.hasClass(openedSide)) {
                      $scope.actionOn = SIDE;
                      ctrl.onHandleClick(null);
                    }
                  }
                };

                handleInject(C_TOP);
                handleInject(C_LEFT);
                handleInject(C_RIGHT);
                handleInject(C_BOTTOM);
                handleInject = null;  // clear memory

                function isSideCollapsed(SIDE, collapsed) {
                  var C_SIDE = C_(SIDE);
                  var isOpened = $element.hasClass('opened-' + SIDE);

                  if (!ctrl.hasHandle(C_SIDE) || !!collapsed !== isOpened) {
                    return;
                  }
                  // Default to open
                  if (collapsed && $element.hasClass('opened-' + SIDE)) {
                    ctrl.closePanel(C_SIDE);
                  } else {
                    ctrl.openPanel(C_SIDE);
                  }
                }

                $scope.$watch('isLeftCollapsed', function(collapsed) {
                  isSideCollapsed(LEFT, collapsed);
                });

                $scope.$watch('isRightCollapsed', function(collapsed) {
                  isSideCollapsed(RIGHT, collapsed);
                });

                $scope.$watch('isTopCollapsed', function(collapsed) {
                  isSideCollapsed(TOP, collapsed);
                });

                $scope.$watch('isBottomCollapsed', function(collapsed) {
                  isSideCollapsed(BOTTOM, collapsed);
                });

                function getSideContainer(side) {
                  var children = $element.children(), $el;
                  for (var i = 0, len = children.length; i < len; i++) {
                    $el = angular.element(children[i]);
                    if ($el.hasClass(DIRECTIVE_NAME_SPACE + side)) {
                      return $el
                    }
                  }
                }

                // Auto-resize the parent container
                if (!!$scope.autoResize) {
                  // Get DOM Reference
                  var parentContainer = $element[0].parentNode;
                  var leftContainer = getSideContainer(LEFT);
                  var mainContainer = $element[0].querySelector(
                      '.' + DIRECTIVE_NAME_SPACE + 'main-inner');
                  var rightContainer = getSideContainer(RIGHT);
                  // Preserve the parent original height when this
                  // directive shrinks too small
                  parentContainer.style.minHeight =
                      parentContainer.offsetHeight + 'px';

                  // Adding padding to left, main and right containers
                  // and set overflow-y to hidden width one parent class
                  $element.addClass('auto-resize');

                  // Adding three marker objects to determine where the last
                  // line is
                  var markerLeft;
                  var markerRight;
                  var markerMain;

                  if (!!leftContainer) {
                    markerLeft = document.createElement('div');
                    markerLeft.classNames = 'clearfix';
                    leftContainer.appendChild(markerLeft);
                  }

                  markerMain = document.createElement('div');
                  markerMain.classNames = 'clearfix';
                  mainContainer.appendChild(markerMain);

                  if (!!rightContainer) {
                    markerRight = document.createElement('div');
                    markerRight.classNames = 'clearfix';
                    rightContainer.appendChild(markerRight);
                  }

                  // Watch the three containers and return the most height
                  // and adjust their parent container
                  $scope.$watch(
                      function() {
                        var newHeight = Math.max(
                            !!markerLeft ? markerLeft.offsetTop : 0,
                            !!markerRight ? markerRight.offsetTop : 0,
                            !!markerMain ? markerMain.offsetTop : 0);
                        return newHeight;
                      },
                      function(newValue) {
                        parentContainer.style.height = (newValue + 24) + 'px';
                      });
                }

                // Add the transition class to the left and main pane
                // 0.5second after the page is rendered
                // because IE renders the animation on the main pane when
                // the left pane is opened
                $timeout(function() {
                  if (ctrl.hasHandle(C_LEFT)) {
                    $scope.splitterLeft.addClass('animate');
                  }
                  if (ctrl.hasHandle(C_RIGHT)) {
                    $scope.splitterRight.addClass('animate');
                  }
                  if (ctrl.hasHandle(C_TOP)) {
                    $scope.splitterTop.addClass('animate');
                  }
                  if (ctrl.hasHandle(C_BOTTOM)) {
                    $scope.splitterBottom.addClass('animate');
                  }

                  $element.addClass(DIRECTIVE_NAME_SPACE + 'ready');

                  $scope.splitterMain.addClass('animate');
                }, 500);
              }
            };
          }
        ])
    .directive(
        directiveName + C_LEFT,
        [
          '$bentoTranslate',
          function($bentoTranslate) {
            return {
              require: '^' + directiveName,
              restrict: 'A',
              scope: false,
              link: function(scope, element, attr, controller) {
                element.addClass(
                    DIRECTIVE_NAME_SPACE + (controller.isRTL ? RIGHT : LEFT));
                element[0].setAttribute('tabindex', '0');
                // Aria and translation
                updateAria();

                function updateAria() {
                  $bentoTranslate
                      .translate('BENTO_UI_SPLITTER_GROUP_LEFT_PANEL')
                      .then(function(value) {
                        element[0].setAttribute('aria-label', value);
                      });
                }

                $bentoTranslate.onChange(updateAria);
                scope.$on('$destroy', function() {
                  $bentoTranslate.removeOnChange(updateAria);
                });
              }
            };
          }
        ])
    .directive(
        directiveName + C_RIGHT,
        [
          '$bentoTranslate',
          function($bentoTranslate) {
            return {
              require: '^' + directiveName,
              restrict: 'A',
              scope: false,
              link: function(scope, element, attr, controller) {
                element.addClass(
                    DIRECTIVE_NAME_SPACE + (controller.isRTL ? LEFT : RIGHT));
                element[0].setAttribute('tabindex', '0');
                // Aria and translation
                updateAria();

                function updateAria() {
                  $bentoTranslate
                      .translate('BENTO_UI_SPLITTER_GROUP_RIGHT_PANEL')
                      .then(function(value) {
                        element[0].setAttribute('aria-label', value);
                      });
                }

                $bentoTranslate.onChange(updateAria);
                scope.$on('$destroy', function() {
                  $bentoTranslate.removeOnChange(updateAria);
                });
              }
            };
          }
        ])
    .directive(
        directiveName + C_TOP,
        [
          '$bentoTranslate',
          function($bentoTranslate) {
            return {
              require: '^' + directiveName,
              restrict: 'A',
              scope: false,
              link: function(scope, element, attr) {
                element.addClass(DIRECTIVE_NAME_SPACE + TOP);
                element[0].setAttribute('tabindex', '0');
                // Aria and translation
                updateAria();

                function updateAria() {
                  $bentoTranslate.translate('BENTO_UI_SPLITTER_GROUP_TOP_PANEL')
                      .then(function(value) {
                        element[0].setAttribute('aria-label', value);
                      });
                }

                $bentoTranslate.onChange(updateAria);
                scope.$on('$destroy', function() {
                  $bentoTranslate.removeOnChange(updateAria);
                });
              }
            };
          }
        ])
    .directive(
        directiveName + C_BOTTOM,
        [
          '$bentoTranslate',
          function($bentoTranslate) {
            return {
              require: '^' + directiveName,
              restrict: 'A',
              scope: false,
              link: function(scope, element, attr) {
                element.addClass(DIRECTIVE_NAME_SPACE + BOTTOM);
                element[0].setAttribute('tabindex', '0');
                // Aria and translation
                updateAria();

                function updateAria() {
                  $bentoTranslate
                      .translate('BENTO_UI_SPLITTER_GROUP_BOTTOM_PANEL')
                      .then(function(value) {
                        element[0].setAttribute('aria-label', value);
                      });
                }

                $bentoTranslate.onChange(updateAria);
                scope.$on('$destroy', function() {
                  $bentoTranslate.removeOnChange(updateAria);
                });
              }
            };
          }
        ])
    .directive(directiveName + 'Main', [
      '$bentoTranslate',
      function($bentoTranslate) {
        return {
          require: '^' + directiveName,
          restrict: 'A',
          replace: true,
          transclude: true,
          template: '<section class="' + DIRECTIVE_NAME_SPACE +
              'main" tabindex="0" roe="main">' +
              '<div class="' + DIRECTIVE_NAME_SPACE +
              'main-inner" ng-transclude></div>' +
              '</section>',
          scope: false,
          link: function(scope, element, attr) {
            element[0].setAttribute('tabindex', '0');
            // Aria and translation
            updateAria()

            function updateAria() {
              $bentoTranslate.translate('BENTO_UI_SPLITTER_GROUP_MAIN_PANEL')
                  .then(function(value) {
                    element[0].setAttribute('aria-label', value);
                  });
            }

            $bentoTranslate.onChange(updateAria);
            scope.$on('$destroy', function() {
              $bentoTranslate.removeOnChange(updateAria);
            });
          }
        };
      }
    ]);
})(window, window.angular);
(function (window, angular, undefined) {

  'use strict';

  // Template override
  angular.module("template/tabs/tab.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("template/tabs/tab.html",
      '<li ng-class="{active: active, disabled: disabled}" role="tab">\n' +
      '  <a href bento-test="anchor" ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n' +
      '</li>\n' +
      '');
  }]);

  angular.module('bento.tabs', ['bento.services'])
    .directive('uibTabset', tabsetDirective)
    .directive('uibTab', tabDirective);

  tabsetDirective.$inject = ['$compile', '$bentoServices', '$timeout'];
  /**
   * Tabset directive extension
   */
  function tabsetDirective($compile, $bentoServices, $timeout) {
    return {
      require : 'uibTabset',
      priority: 1,
      link    : function (scope, element, attrs, controller) {

        // local variables used within the directive
        var startTime;
        var scrollFrom;
        var scrollTo;
        var scrollDelta;
        var _scrollLeft;
        var _tempDate;
        var lastActiveIndex;
        var scrollAnimateCounter = 0;
        var MAX_SCROLL_COUNTER = 1000;
        var containerScrollWidth = -1;
        var totalScrollLength = 0;

        var localScope = scope.$new();
        element.addClass('bento-tabset');

        // Vertical tabs will be ignored from this directive extension
        if (!element.hasClass('tabs-top') && !element.hasClass('tabs-bottom')) {
          return;
        }

        // Variable declaration
        var tabs         = element[0].querySelector('ul.nav'),
            isRTL        = $bentoServices.isRTL(),
            btnLeftMost  = angular.element(
              '<button aria-label="Move to the first tab" ng-disabled="disableLeftArrows" ng-click="onLeftMostClick()" class="btn btn-default bento-tabset-nav-button left-most">' +
              '<i class="bento-icon-chevron-first-left"></i></button>'),
            btnLeft      = angular.element(
              '<button aria-label="Move one tab left" ng-disabled="disableLeftArrows" ng-click="onLeftClick()" class="btn btn-default bento-tabset-nav-button left">' +
              '<i class="bento-icon-chevron-left"></i></button>'),
            btnRight     = angular.element(
              '<button aria-label="Move one tab right" ng-disabled="disableRightArrows" ng-click="onRightClick()" class="btn btn-default bento-tabset-nav-button right">' +
              '<i class="bento-icon-chevron-right"></i></button>'),
            btnRightMost = angular.element(
              '<button aria-label="Move to the last tab" ng-disabled="disableRightArrows" ng-click="onRightMostClick()" class="btn btn-default bento-tabset-nav-button right-most">' +
              '<i class="bento-icon-chevron-last-right"></i></button>'),

            btnContainer = angular.element('<div class="bento-tabset-nav-button-container"></div>'),
            isAnimating,
            firstTab,  // This reference is used for setting margins
            marginSide = isRTL? 'marginRight' : 'marginLeft',
            currentTab;

        tabs.setAttribute('role', 'tablist');

        localScope.disableLeftArrows = false;
        localScope.disableRightArrows = false;

        // Button listeners
        localScope.onLeftMostClick = function (reversed) {
          if(isRTL && !reversed) {
            localScope.onRightMostClick(true);
          } else {
            if(!currentTab) {
              currentTab = getCurrentTab();
            }
            startTime = performance.now();

            // Skip starting a new animation thread
            if (isAnimating) {
              return;
            }

            // Update flag
            isAnimating = true;
            _scrollAnimate(200, tabs.offsetWidth + currentTab.offsetWidth, 0, -(tabs.offsetWidth + currentTab.offsetWidth));
          }
        };

        localScope.onLeftClick = function (reversed) {
          if(isRTL && !reversed){
            localScope.onRightClick(true);
          } else{
            currentTab = getCurrentTab();
            if(!currentTab) {
              localScope.disableLeftArrows = true;
            } else {
              totalScrollLength -= currentTab.offsetWidth;
              var delta = totalScrollLength - tabs.scrollLeft;

              startTime = performance.now();

              // Skip starting a new animation thread
              if (isAnimating) {
                return;
              }

              // Update flag
              isAnimating = true;
              _scrollAnimate(200, tabs.scrollLeft, totalScrollLength, delta);
            }
          }
          
        };

        localScope.onRightClick = function (reversed) {
          if(isRTL && !reversed){
            localScope.onLeftClick(true);
          } else{
            currentTab = getCurrentTab();
            if(!currentTab) {
              localScope.disableRightArrows = true;
            } else {
              if (currentTab.classList.contains('ng-hide')) currentTab.classList.remove('ng-hide');
              totalScrollLength += currentTab.offsetWidth;
              var delta = totalScrollLength - tabs.scrollLeft;

              startTime = performance.now();

              // Skip starting a new animation thread
              if (isAnimating) {
                return;
              }

              // Update flag
              isAnimating = true;
              _scrollAnimate(200, tabs.scrollLeft, totalScrollLength, delta);
            }
          }
        };

        localScope.onRightMostClick = function (reversed) {
          if(isRTL && !reversed) {
            localScope.onLeftMostClick(true);
          } else {
            currentTab = getCurrentTab();
            if(!currentTab) {
              localScope.disableRightArrows = true;
            } else {
              startTime = performance.now();

              // Skip starting a new animation thread
              if (isAnimating) {
                return;
              }

              // Update flag
              isAnimating = true;
              _scrollAnimate(200, 0, tabs.scrollWidth, tabs.scrollWidth);
            }
          }
        };

        scope.$on('bentoTabsetRefresh', refreshTabset);

        scope.$watch(function () {
            return $bentoServices.isRTL();
        }, function (nv, ov) {
          if(nv !== null || nv !== undefined) {
            // Tabs are not redered yet...
            if (tabs.children.length < 1 || nv === ov) {
              return;
            }
            resetLocals();
            isRTL = nv;

            $timeout(function() {
              inspectWidth();
              validateButtons();
            }, 500);
          }
        });

        // Watch tab active states and autoscroll if neccessary
        scope.$watch(function () {
          var activeIndex = 0;
          var count = 0;
          controller.tabs.forEach(function (item, index) {
            if (item.active) {
              count++;
              activeIndex = index;
            }
          });

          if (count === 1) {
            lastActiveIndex = activeIndex;
          }

          return lastActiveIndex;
        }, function (activeIndex) {

          // Bypass if the tabs are not ready
          // This happens when the tabs are dynamically rendered when Tab is initiated but the data is not
          // BENTO-152
          if (typeof activeIndex === 'undefined') {
            return;
          }

          // Scroll needs to come in after components rendering
          $timeout(function () {
            var tabChildren = tabs.children,
                activeTab   = tabChildren[activeIndex],
                tabLeft     = activeTab.offsetLeft,
                tabRight    = tabLeft + activeTab.offsetWidth,
                tabsWidth   = tabs.offsetWidth -
                  parseInt(getComputedStyle(tabChildren[tabChildren.length - 1]).marginRight.replace('px', ''))
              ;

            if (tabLeft < tabs.scrollLeft) {
              scrollToTab(activeTab, false);
            } else if (tabRight > tabs.scrollLeft + tabsWidth) {
              scroll(tabRight - tabsWidth);
            }
          })

        });

        btnContainer.append(btnLeftMost);
        btnContainer.append(btnLeft);
        btnContainer.append(btnRight);
        btnContainer.append(btnRightMost);

        $compile(btnContainer)(localScope);

        element.prepend(btnContainer);

        angular.element(window).on('resize', onResize);

        function refreshTabset() {
          localScope.onLeftMostClick(true);
        }

        function onResize(event) {
          inspectWidth();
          validateButtons();
        }

        // delay the event loop: calculate width and validate button
        $timeout(function() {
          inspectWidth();
          validateButtons();
        });

        /**
         * Inspect the tab container width and scrollWidth and see if it's scrollable
         */
        function inspectWidth() {
          // Tabs are not redered yet...
          if (tabs.children.length < 1) {
            return;
          }

          var sWidth      = -getTabVirtualLeft(tabs.children[0]) + tabs.scrollWidth,
              width       = tabs.offsetWidth,
              children    = tabs.children,
              hasScroll   = element.hasClass('bento-tabset-h-scrollable'),
              rightMargin = parseInt(getComputedStyle(children[children.length-1]).marginRight.replace('px', ''));

          if (hasScroll && sWidth <= width + rightMargin) {
            element.removeClass('bento-tabset-h-scrollable');
          } else if (!hasScroll && sWidth > width + rightMargin && rightMargin < 100) {
            element.addClass('bento-tabset-h-scrollable');
          }
        }

        /**
         * $destroy listener for cleanup
         */
        scope.$on('$destroy', function () {
          angular.element(window).off('resize', onResize);
          localScope.$destroy();
        });

        /**
         * when toggling between RTL and LTR, reset the variable's state
         */
        function resetLocals() {
          startTime = 0;
          scrollFrom = 0;
          scrollTo = 0;
          scrollDelta = 0;
          _scrollLeft = 0;
          _tempDate = 0;
          firstTab = undefined;
          currentTab = undefined;
          isAnimating = false;
          marginSide = isRTL? 'marginRight' : 'marginLeft';
          containerScrollWidth = -1;
        }

        /**
         * Get the current tab that is in the first position
         * @returns {*}
         */
        function getCurrentTab() {
          var leftPadding = getLeftPadding(),
              i, len, center, tab,
              children    = tabs.children,
              scrollLeft  = tabs.scrollLeft + leftPadding,
              found
            ;
          if(containerScrollWidth === -1) {
            containerScrollWidth = Math.ceil(tabs.scrollWidth - tabs.offsetWidth);
          }
          for (i = 0, len = children.length; i < len; i++) {
            tab = children[i];
            if(tab.offsetLeft >= Math.ceil(tabs.scrollLeft)) {
              found = tab;
              break;
            }
          }

          return found;
        }

        /**
         * 
         * @param tab:  active tab
         * @param isLeft: true when left button is clicked 
         */
        function scrollToTab(tab, isLeft) {
          var scrollLeft;

          if(isRTL){
            if(isLeft) {
              scrollLeft = (containerScrollWidth - Math.ceil(tabs.scrollLeft)) - tab.offsetWidth;
            } else {
              scrollLeft = (containerScrollWidth - Math.ceil(tabs.scrollLeft)) + tab.offsetWidth;
            }
          }else{
            scrollLeft = isLeft ? tab.offsetLeft - tab.offsetWidth:tab.offsetLeft + tab.offsetWidth;
          }

          // reset it to 0
          if(scrollLeft < 0) {
            scrollLeft = 0;
          } else if(scrollLeft > containerScrollWidth) {
            scrollLeft = containerScrollWidth;
          }

          scroll(scrollLeft);
        }

        /**
         * 
         * @param scrollLeftTo: pixes to move
         */
        function scroll(scrollLeftTo) {
          var time = 200;

          // // Initialize animation
          startTime = performance.now();

          if(isRTL) {
            firstTab = tabs.children[0]; // The first tab can dynamically change
            scrollFrom = Math.abs(getTabVirtualLeft(firstTab));
            scrollTo = scrollLeftTo;
          } else {
            scrollFrom = (currentTab) ? currentTab.offsetLeft : 0;
            scrollTo = scrollLeftTo;
          }

          scrollDelta = scrollTo - scrollFrom;

          // Skip starting a new animation thread
          if (isAnimating) {
            return;
          }

          // Update flag
          isAnimating = true;
          // Start animate
          _scrollAnimate(time, tabs.offsetWidth);

        }

        /**
         * 
         * @param time: starting time
         */
        function _scrollAnimate(time, from, to, delta) {
          // restrict the number of times getting called. Sometimes, it gets
          // called un reasonably
          if(++scrollAnimateCounter > MAX_SCROLL_COUNTER) { 
            tabs.scrollLeft = to;
            inspectWidth();
            validateButtons(to);

            isAnimating = false;
            scrollAnimateCounter = 0;
            return;
          }

          _scrollLeft = from + (delta * _ease((performance.now() - startTime) / time));
          tabs.scrollLeft = _scrollLeft;

          if (Math.abs(_scrollLeft - to) <= 1) {
            tabs.scrollLeft = to;

            inspectWidth();
            validateButtons();

            isAnimating = false;
            scrollAnimateCounter = 0;

            totalScrollLength = tabs.scrollLeft;
          } else {
            // Use rAF to generate the next frame
            $bentoServices.rAF(function () {
              _scrollAnimate(time, from, to, delta);
            });
          }
        }

        /**
         * 
         * @param to: scroll to position in pixels
         */
        function validateButtons() {
          // Tabs are not redered yet...
          if (tabs.children.length < 1) {
            return;
          }

          localScope.disableRightArrows = !isRTL ? (Math.ceil(tabs.offsetWidth + tabs.scrollLeft) >= tabs.scrollWidth) : (tabs.scrollLeft <= 0);
          localScope.disableLeftArrows = !isRTL ? (tabs.scrollLeft <= 0) : (Math.ceil(tabs.offsetWidth + tabs.scrollLeft) >= tabs.scrollWidth);

          $bentoServices.safeApply(localScope);
        }

        /**
         * Get ease ration based on time ratio wi
         * @param timeRatio - 0.0 to 1.0
         * @param ease - easing factor
         * @returns {number}
         * @private
         */
        function _ease(timeRatio) {
          return -(Math.pow(timeRatio - 1, 4)) + 1;
        }

        function getLeftPadding() {
          return parseInt(getComputedStyle(tabs).paddingLeft.replace('px', ''));
        }

        function getTabVirtualLeft(tab){
          if(!tab) {
            return 0;
          }
          return Math.round(parseFloat(window.getComputedStyle(tab)[marginSide]));
        }

      }
    }
  }

  tabDirective.$inject = ['$compile', '$log'];
  /**
   * Tabset tab directive extension
   * @returns {{require: string, priority: number, link: link}}
   */
  function tabDirective($compile, $log) {
    return {
      require : 'uibTab',
      priority: -1,
      link    : function (scope, element, attrs) {

        attrs.$set('role', 'tab');

        if (typeof attrs.count !== 'undefined') {
          // Deprecation warning message
          $log.warn('uib-tab: "count" is deprecated. See "tabset" documentation for the use of <uib-tab-heading></uib-tab-heading>');

          var $count = angular.element('<span class="badge" aria-hidden="false">{{count}}</span>');
          var isoScope = scope.$new();
          $compile($count)(isoScope);

          element.find('a').append($count);

          attrs.$observe('count', function (newValue) {
            isoScope.count = newValue;
          });

          scope.$on('$destroy', function () {
            isoScope.$destroy();
          });
        }
      }
    }
  }

})(window, angular);
(function (angular, window) {
  'use strict';

  var BTI_TYPE_STRING   = 'string',
      BTI_TYPE_OPERATOR = 'operator',
      BTI_TYPE_NUMBER   = 'number',
      defaults          = {
        minTagLength    : 2,
        propertyName    : 'name',
        allowedOperators: '-+=/*%[]()!~&|<>'
      };

  angular.module('bento.tagsinput', [])
  /**
   * Bento Tags Input Directive
   */
    .directive('bentoTagsInput', [
      '$timeout',
      function ($timeout) {
        return {
          priority: 2, // 1 higher than ngModel
          scope       : {
            addOnComma                  : '=?',  // Add a tag on comma key
            addOnEnter                  : '=?',  // Add on enter key
            addOnSpace                  : '=?',  // Add on space bar
            editable                    : '=?',  // Flag to editable pills
            minTagLength                : '=?', // Minimum Tag length
            ngModel                     : '=',  // Tags in array
            onTagAdded                  : '&',  // Event handler - when a tag is added
            onTagAddStart               : '&',  // Event handler - when a tag is being added
            onTagEditEnd                : '&',  // Event handler - when a tag edit is ending
            onTagEdited                 : '&',  // Event handler - when a tag is edited
            onTagInvalidInput           : '&',  // Event handler - when a tag input is invalid
            onTagRemoved                : '&',  // Event handler - when a tag is removed
            onTagRemoveStart            : '&',  // Event handler - when a tag is being removed
            placeholder                 : '@',  // Placeholder for the input field
            useOperators                : '=?', // Use Math Operators
            allowedOperators            : '=?', // String of the operators to use
            replaceSpacesWithDashes     : '=',  // If the spaces are replaced with spaces
            replaceSpacesWithUnderscores: '=?',  // If the spaces are replaced with underscores
            tagPropertyName             : '@?', // Property name of each pill
            ngDisabled                  : '=?', // ngDisabled
            ngReadonly                  : '=?', // ngReadonly
            disableKeyInput             : '=?'  // disable keyboard interaction
          },
          require     : ['ngModel', 'bentoTagsInput'],
          replace     : true,
          templateUrl : function (element, attrs) {
            return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/tags_input/bento-tags-input.html';
          },
          controller  : ['$scope', '$element',
            function ($scope, $element) {
              // Set default
              $scope.propertyName = typeof $scope.tagPropertyName === 'undefined' ?
                defaults.propertyName : $scope.tagPropertyName;
              $scope.minTagLength = typeof $scope.minTagLength === 'undefined' ?
                defaults.minTagLength : $scope.minTagLength;
              $scope.allowedOperators = typeof $scope.allowedOperators === 'undefined' ?
                defaults.allowedOperators : $scope.allowedOperators;
              var self = this;

              self.setEditingMode = function (bool) {
                $scope.isPillEditing = bool;
                angular.element($element[0].querySelector('.bento-tags-input-text')).css('width', 60 + 'px');
              };

              self.setActivePill = function (index) {
                $scope.activePill = index;
              };

              self.hasRedundancy = function (tag, ignoreTagIndex) {
                return $scope.ngModel.some(function (value, index, array) {
                  if (index === ignoreTagIndex) {
                    return false;
                  }

                  return value[$scope.propertyName] === tag.trim();
                });
              };

              self.validate = function (tag) {
                var v = {
                  isValidLength: false,
                  type         : BTI_TYPE_STRING
                };
                tag = tag.trim();
                v.name = tag;

                // operator related inspection
                if ($scope.useOperators) {
                  var allowedOperators = $scope.allowedOperators;
                  v.type = BTI_TYPE_OPERATOR;
                  v.isValidLength = true;

                  if (!isNaN(Number(tag))) {
                    v.type = BTI_TYPE_NUMBER;
                  } else {
                    for (var i = 0, len = tag.length; i < len; i++) {
                      if (allowedOperators.indexOf(tag.charAt(i)) < 0) {
                        v.type = BTI_TYPE_STRING;
                        if (tag.length >= $scope.minTagLength) {
                          v.isValidLength = true;
                        } else {
                          v.isValidLength = false;
                        }
                      }
                    }
                  }
                } else
                // length based inspection
                if (tag.length >= $scope.minTagLength) {
                  v.isValidLength = true;
                }

                return v;
              };

              $element.on('focusout', function(e){
                // This event listener needs to be declared from ngModel does it's own
                // ignore ngModel from assignment touched

                var target = e.relatedTarget || document.activeElement;

                if($element[0].contains(target)){
                  e.stopImmediatePropagation();
                }
              })
            }
          ],
          controllerAs: 'bentoTagsInputCtrl',
          link        : /**
           * Link funcion of bento-tags-input directive
           * @param scope
           * @param element
           * @param attrs
           * @param controllers
           */
          function (scope, element, attrs, controllers) {
            var ngModelController = controllers[0];
            var controller = controllers[1];
            var $input = angular.element(element[0].querySelector('.bento-tags-input-text'));
            var $hiddenInput = angular.element(element[0].querySelector('.bento-tags-input-text-hidden'));
            var goBlur = true;
            var t;
            var textBeforeKeypress;

            // init ngModel form element conditions
            ngModelController.$setPristine();
            ngModelController.$setUntouched();
            attrs.$set('tabindex','-1');


            // Set Defaults
            scope.activePill = -1;
            scope.addOnComma = typeof scope.addOnComma === 'undefined' ? true : scope.addOnComma;
            scope.addOnEnter = typeof scope.addOnEnter === 'undefined' ? true : scope.addOnEnter;

            scope.ngModel = scope.ngModel ? scope.ngModel : [];

            scope.$watch(function () {
              return scope.ngModel ? scope.ngModel.length : 0;
            }, function (modelSize) {
              if (attrs.required) {
                if (modelSize === 0) {
                  ngModelController.$setValidity('required', false);
                } else {
                  ngModelController.$setValidity('required', true);
                }
              }
            });

            scope.$watch('editable', function () {
              if ($input) {
                $input.css('width', 60 + 'px');
              }
            });

            /**
             * When a user focus out from this input
             *
             * To be declared in controller
             **/
            element.on('focusout', function (event) {

              var target = event.relatedTarget || document.activeElement;

              if (goBlur && !element[0].contains(target)) {
                // Only goBlur is set to true
                // Workaround in order to work with various browsers

                if(ngModelController.$untouched){
                  $timeout(function(){
                    ngModelController.$setTouched();
                  });
                }

                element.removeClass('bento-tags-input-focused');
                t = scope.inputText ? scope.inputText : '';
                if (t.length === 0) {
                  return;
                }
                addTagToModel(t);
              }else{
                event.preventDefault();
                event.stopImmediatePropagation();
              }
            });

            /**
             * On a pillfocus
             * @param index
             */
            scope.onPillFocus = function (index) {
              if (scope.ngReadonly) {
                return;
              }
              scope.activePill = index;
              element.addClass('bento-tags-input-focused');
            };

            /**
             * Callback when entering pill edit mode
             * @param index
             */
            scope.onPillEdit = function (index) {
              element.addClass('bento-tags-input-focused');
            };

            /**
             * On a pillblur
             * @param index
             */
            scope.onPillBlur = function (index) {
              scope.activePill = -1;
              element.removeClass('bento-tags-input-focused');
            };

            /**
             * Callback when a pill demends to move selections to the left
             * @param index
             */
            scope.onPillMoveLeft = function (index) {
              $hiddenInput.focus();
            };

            /**
             * Callback when a pill demends to move selections to the left
             * @param index
             */
            scope.onPillMoveRight = function (index) {
              $hiddenInput.focus();
            };

            /**
             * Callback when a pill demends to move selections to the left
             * @param index
             * TODO: doesn't play well with ng-repeat
             */
            scope.onPillDeleteLeft = function (index) {
//              if (index > 0) {
//                scope.ngModel.splice(index - 1, 1);
//              }
            };

            /**
             * Callback when a pill demends to move selections to the left
             * @param index
             * TODO: doesn't play well with ng-repeat
             */
            scope.onPillDeleteRight = function (index) {
//              if (index === scope.ngModel.length - 1 && scope.inputText) {
//                scope.inputText = scope.inputText.substring(1);
//              } else {
//                scope.ngModel.splice(index+1,1);
//              }
            };

            /**
             * Return form element based default classes for NG
             * @returns {string}
             */
            scope.getClass = function () {
              return ''
            };

            /**
             * Get focus event
             */
            element.on('focus', function (event) {
              goBlur = false;
              $input[0].focus();
              goBlur = true;
            });

            /**
             * Callback function to when a pill's content is changed
             * @param label
             * @param index
             */
            scope.onPillChange = function (index, label, oldLabel) {
              // This label is completely removed
              if (!label || label.length === 0) {
                var toBeRemovedTag = scope.ngModel[index];

                decideTagRemoval(
                  toBeRemovedTag,
                  function () {
                    // remove tag from ngModel array
                    scope.ngModel.splice(scope.ngModel.indexOf(toBeRemovedTag), 1);

                    // Fire callback
                    scope.onTagRemoved({tag: toBeRemovedTag});
                  }
                ); // decideTagRemoval

              } else {
                var res = scope.onTagEditEnd({tagString: label});
                
                if(res === true || res == null){
                  // Result is either true or undefined
                  // This is a valid edit
                  // Fire callback
                  scope.onTagEdited({tag: scope.ngModel[index]});
                }else if (typeof res === 'object' && res.then){
                  // Result is a promise
                  res.then(function(){
                    // This is also a valid edit with deferred response
                    // Fire callback
                    scope.onTagEdited({tag: scope.ngModel[index]});
                  },
                  function(){
                    // Rejection
                    // Invalid edit
                    // Revert edit
                    scope.ngModel[index][scope.propertyName] = oldLabel;
                  }
                );
                }else{
                  // Invalid edit
                  // Revert edit
                  scope.ngModel[index][scope.propertyName] = oldLabel;

                }
              }

              // resize the main input field
              if (scope.ngModel && scope.ngModel.length > 0) {
                var pills = element[0].querySelectorAll('.bento-tags-input-pill:not(.ng-leave)');
                var rect = pills[pills.length - 1].getBoundingClientRect();
                calculateInputField(rect);
              } else {
                calculateInputField(0);
              }
            };

            /**
             * Callback from pills redundancy report
             * @param index
             * @param isRedundant
             */
            scope.onPillRedundant = function (index, isRedundant) {
              if (isRedundant) {
                ngModelController.$setValidity('tags-input-redundant', false);
              } else {
                ngModelController.$setValidity('tags-input-redundant', true);
              }
            };

            /**
             * Callback from pills' length report
             * @param index
             * @param invalidLength
             */
            scope.onPillTagLength = function (index, isValidLength) {
              if (!isValidLength) {
                ngModelController.$setValidity('tags-input-invalid-length', false);
              } else {
                ngModelController.$setValidity('tags-input-invalid-length', true);
              }
            };

            /**
             * When a key is entered into the input field
             * Auto resize input field as user types
             * @param event
             */
            scope.onKeypress = function (event) {
              if (scope.isPillEditing) {
                return;
              }
              var width = (scope.inputText) ? (scope.inputText.length) * 9 : 60;
              $input.css('width', width + 'px');
            };

            /**
             * Callback when a key is up in the input field
             * @param event
             */
            scope.onKeyup = function (event) {
              if (scope.ngReadonly) {
                return;
              }

              if (textBeforeKeypress !== scope.inputText) {
                ngModelController.$setDirty();

                ngModelController.$setValidity('tags-input-length', true);
                ngModelController.$setValidity('tags-input-redundant', true);
                $input.removeClass('tags-input-invalid');
              }
            };

            /**
             * On keydown in the directive
             * @param event
             */
            scope.onKeydown = function (event) {
              if (scope.ngReadonly) {
                return;
              }

              textBeforeKeypress = scope.inputText;
              if (scope.isPillEditing) {
                return;
              }
              // Enter: 13
              // Left: 37
              // Right: 39
              // Delete: 46
              // Backspace: 8
              // Tab: 9
              // Comma: 188
              // Space: 32
              if (
                // Enter
              (scope.addOnEnter && event.keyCode === 13) ||
              // Space
              (scope.addOnSpace && event.keyCode === 32) ||
              // Comma
              (scope.addOnComma && event.keyCode === 188)) {
                if (scope.inputText) {
                  t = scope.inputText;
                  if (t.length === 0) {
                    return;
                  }

                  // unrelate to NG
                  $timeout(function () {
                    goBlur = false;
                    $input[0].focus();
                    goBlur = true;
                  }, 10);

                  addTagToModel(t);

                  event.stopPropagation();
                  event.preventDefault();
                }
              } else if (event.keyCode === 37) {
                if ($input[0].selectionStart === 0) {
                  goBlur = false;
                  $hiddenInput[0].focus();
                  goBlur = true;

                  if (scope.activePill === -1) {
                    scope.activePill = scope.ngModel.length - 1;
                  } else if (scope.activePill > 0) {
                    scope.activePill--;
                  }
                  event.stopPropagation();
                  event.preventDefault();
                }

              } else if (event.keyCode === 39) {
                if (scope.activePill === scope.ngModel.length - 1) {
                  $timeout(function () {
                    goBlur = false;
                    $input[0].focus();
                    goBlur = true;
                  }, 10);
                } else if (scope.activePill != -1) {
                  scope.activePill++
                }

                if (document.activeElement !== $input[0]) {
                  event.stopPropagation();
                  event.preventDefault();
                }

              } else if (event.keyCode == 46 || event.keyCode == 8) {
                if (scope.activePill != -1) {
                  scope.onPillClose(scope.activePill);

                  if (scope.activePill === scope.ngModel.length) {
                    scope.activePill = scope.ngModel.length - 1;
                  }

                  if (scope.activePill === -1) {
                    $timeout(function () {
                      $input[0].focus()
                    }, 10);
                  }
                  event.preventDefault();
                  event.stopPropagation();
                } else if (event.keyCode === 8 && $input[0].selectionStart === 0 && $input[0].selectionEnd === 0) {
                  scope.onPillClose(scope.ngModel.length - 1);
                } else {
                  $input.css('width', ((scope.inputText) ? scope.inputText.length * 9 : 0 ) + 'px')
                }
              } else if (
                // Tab
              event.keyCode === 9
              ) {
                if (scope.inputText) {
                  t = scope.inputText;
                  if (t.length === 0) {
                    return;
                  }
                  addTagToModel(t);
                  event.preventDefault();
                  event.stopPropagation();
                }
                scope.activePill = -1;
              }
            };

            /**
             * Decide to whether add the item or not
             * @param tag
             * @param callback
             */
            function decideTagAddition(tag, callback) {
              var okToAdd = scope.onTagAddStart({tag: tag});

              // `okToAdd` is a promise
              if (typeof okToAdd === 'object' && okToAdd.then) {
                // Resolve or reject
                okToAdd.then(
                  function () {
                    callback(tag);
                  },
                  function () {
                    // rejected, no addition
                  }
                );
              } else
              // Boolean
              if (typeof okToAdd === 'undefined' || okToAdd) {
                callback(tag);
              }
            }

            /**
             * Decide whether we should remove the tag based on `onTagRemoveStart` callback function
             * @param tag
             * @param callback
             */
            function decideTagRemoval(tag, callback) {
              var okToRemove = scope.onTagRemoveStart({tag: tag});

              // `okToRemove` is a promise
              if (typeof okToRemove === 'object' && okToRemove.then) {
                // Resolve or reject
                okToRemove.then(
                  function () {
                    callback(tag);
                  },
                  function () {
                    // Removal rejected
                  }
                );
              } else
              // Boolean
              // Only add when there is no onTagRemoveStart callback or returned `true`
              if (typeof okToRemove === 'undefined' || okToRemove) {
                callback(tag);
              }
            }

            /**
             * Add a new Tag to the array
             * @param tag
             */
            function addTagToModel(tag) {
              var isValidTag = true;
              var validation = controller.validate(tag)

              if (scope.replaceSpacesWithDashes) {
                tag = tag.replace(/ /g, "-");
              } else if (scope.replaceSpacesWithUnderscores) {
                tag = tag.replace(/ /g, "_");
              }

              // Check if the tag is too short
              // Or there is a repeated one
              if (!validation.isValidLength) {
                $input.addClass('tags-input-invalid');
                ngModelController.$setValidity('tags-input-length', false);
                isValidTag = false;
              }

              if (!scope.useOperators && controller.hasRedundancy(tag)) {
                // error notification
                $input.addClass('tags-input-invalid');
                ngModelController.$setValidity('tags-input-redundant', false);
                validation.isRedundant = true;
                isValidTag = false;
              }

              if (isValidTag) {
                var newTag = {};
                newTag[scope.propertyName] = tag;
                newTag.type = validation.type;

                // findout if we can add this new tag
                decideTagAddition(
                  newTag,
                  function () {
                    scope.ngModel.push(newTag);
                    scope.inputText = '';
                    $input.css('width', '0');

                    // Fire tagAdded event handler
                    scope.onTagAdded({tag: newTag});
                  }
                ); //decideTagAddition
              } else {
                // fire invalidicity callback
                scope.onTagInvalidInput({
                  tag: validation
                });
              }
            }

            scope.onInputFocus = function () {
              scope.activePill = -1;
              element.addClass('bento-tags-input-focused');
            };

            scope.onHiddenInputFocus = function () {
              element.addClass('bento-tags-input-focused');
            };

            scope.onPillClose = function (index) {
              var tagToBeRemoved = scope.ngModel[index];

              // Need to confirm removal
              decideTagRemoval(
                tagToBeRemoved,
                function () {
                  $timeout(function () {
                    scope.ngModel.splice(scope.ngModel.indexOf(tagToBeRemoved), 1);

                    if (scope.ngModel.length > 0) {
                      var pills = element[0].querySelectorAll('.bento-tags-input-pill:not(.ng-leave)');
                      var rect = pills[pills.length - 1].getBoundingClientRect();
                      calculateInputField(rect);
                    } else {
                      calculateInputField(0);
                    }

                    // focus back to the text-field for additional user input
                    $input[0].focus();

                    // Fire callback
                    scope.onTagRemoved({tag: tagToBeRemoved});
                  }, 100);

                  // Set dirty
                  ngModelController.$setDirty();
                }
              );
            }; // decideTagRemoval

            scope.resizeInput = function (rect) {
              if (rect) {
                calculateInputField(rect);
              } else {
                var pill = element[0].querySelector('.bento-tags-input-pill:last-of-type');
                calculateInputField(pill.getBoundingClientRect());
              }
            };

            function calculateInputField(rect) {
              var elRect = element[0].getBoundingClientRect();
              var targetWidth = elRect.width - ( rect.left - elRect.left) - rect.width - 30;
              targetWidth = targetWidth < 60 || rect === 0 ? '60px' : targetWidth + 'px';
              $input.css('width', targetWidth);
            }
          }
        }
      }
    ])
    /**
     * To accommodate multiple spaces in pills
     */
    .filter('bentoTagsInputPillFilter', function () {
      return function (input) {

        if (input) {
          // \u00A0 is the unicode for &nbsp;
          return input.replace(/ /g, '\u00A0');
        } else {
          return input;
        }
      }
    })
    /**
     * Bento Tags Input Pill Sub-Directive
     */
    .directive('bentoTagsInputPill', [
      '$timeout',
      function ($timeout) {
        return {
          scope      : {
            label         : '=',
            editable      : '=',
            index         : '=',
            isActive      : '=',
            length        : '=',
            onEdit        : '&',
            onClose       : '&',
            resizeCallback: '&',
            onPillChange  : '&',
            onMoveLeft    : '&',
            onMoveRight   : '&',
            onDeleteLeft  : '&',
            onDeleteRight : '&',
            onRedundantTag: '&',
            onTagLength   : '&',
            tag           : '=',
            ngReadonly    : '=',
            addOnComma    : '&',
            addOnSpace    : '&',
          },
          templateUrl: function (element, attrs) {
            return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/tags_input/bento-tags-input-pill.html';
          },
          require    : '^bentoTagsInput',
          replace    : true,
          link       : /**
           * Link function of bento-tags-input-pill directive
           * @param scope
           * @param element
           * @param attr
           * @param controller
           */
          function (scope, element, attr, controller) {
            var $input,
                sizeRef = element[0].querySelector('.bento-tags-input-pill-size-ref'),
                isRedundant, isValidLength, validation, pillchangetimeout;

            scope.isEditing = false;
            validation = controller.validate(scope.label);
            scope.tag.type = validation.type;

            /**
             * Watch the change of the label and make size adjustments
             */
            scope.$watch('editLabel', function (newLabel) {
              // Only adjust when it's in editing mode
              if (scope.isEditing && sizeRef && $input) {
                $input.css('width', (sizeRef.offsetWidth + 2) + 'px');
                scope.resizeCallback();
                isRedundant = controller.hasRedundancy(newLabel, scope.index);
                validation = controller.validate(newLabel);
                isValidLength = validation.isValidLength;
                scope.tag.type = validation.type;
                scope.onRedundantTag({index: scope.index, isRedundant: isRedundant});
                scope.onTagLength({index: scope.index, isValidLength: isValidLength});

                if (isRedundant || !isValidLength) {
                  element.addClass('bento-tags-input-pill-invalid');
                } else {
                  element.removeClass('bento-tags-input-pill-invalid');
                }
              }
            });

            /**
             * On pill edit keypress
             * @param event
             */
            scope.onKeypress = function (event) {

            };

            /**
             * On pill edit keydown
             * @param event
             */
            scope.onKeydown = function (event) {
              // Left key 37
              // Right key 39
              switch (event.keyCode) {
                case 37:
                  if ($input[0].selectionStart === 0 && $input[0].selectionEnd === 0) {
                    scope.onMoveLeft({index: scope.index, label: scope.label});
                  }
                  break;
                case 39:
                  if ($input[0].selectionStart === scope.label.length) {
                    scope.onMoveRight({index: scope.index, label: scope.label});
                  }
                  break;
                // Enter
                case 13:
                  // Firing blur to make the change permanent
                  scope.onInputBlur();
                  event.stopPropagation();
                  event.preventDefault();
                  break;
                // Backspace
                case 8:
                  if ($input[0].selectionStart === 0 && scope.index > 0) {
                    scope.onDeleteLeft({index: scope.index});
                  }
                  break;
                // Delete key
                case 46:
                  if ($input[0].selectionStart === scope.label.length) {
                    scope.onDeleteRight({index: scope.index});
                  }
                  break;
                case 32:
                  // Space bar
                  if(scope.addOnSpace()){
                    // Do not add space in pill
                    event.stopPropagation();
                    event.preventDefault();
                  }
                  break;
                case 188:
                  // Comma key
                  if(scope.addOnComma()){
                    // Do not add commas in pill
                    event.stopPropagation();
                    event.preventDefault();
                  }
                  break;
              }
            };

            /**
             * Returns a class for this component
             * @returns {*}
             */
            scope.getClass = function () {
              var c = 'ready ';

              if (scope.isActive) {
                c += 'active ';
              }

              if (!scope.isEditing) {
                c += 'btn btn-default ';
              }

              c += 'bti-pill-type-' + scope.tag.type;

              return c;
            };

            /**
             * Callback when the pill input is on focus
             * @param event
             */
            scope.onInputFocus = function (event) {

            };

            /**
             * When user forcuses out from the edit input field
             * @param event
             */
            scope.onInputBlur = function (event) {
              // Turn off editing mode
              scope.isEditing = false;
              controller.setEditingMode(false);

              // To avoid jump in some browsers
              $input.addClass('ng-hide');

              // Reset error & label to previous state on blur
              if (isRedundant || !isValidLength) {
                isRedundant = false;
                isValidLength = true;
                scope.onRedundantTag({index: scope.index, isRedundant: isRedundant});
                scope.onTagLength({index: scope.index, isValidLength: isValidLength});
                element.removeClass('bento-tags-input-pill-invalid');
              } else {
                var oldLabel = scope.label;
                scope.label = scope.editLabel.trim();

                // Fire callback function
                if(pillchangetimeout){
                  $timeout.cancel(pillchangetimeout);
                }
                pillchangetimeout = $timeout(function () {
                  scope.onPillChange({
                    oldLabel: oldLabel,
                    label: scope.label,
                    index: scope.index
                  });
                });

              }

            };

            /**
             * On edit icon click
             * @param event
             */
            scope.onEditClick = function (event) {

              // ignore if this is not editable
              if (!scope.editable) {
                return;
              }

              scope.isEditing = true;
              scope.editLabel = scope.label;

              $timeout(function () {
                $input = angular.element(element[0].querySelector('input'));
                $input.css('width', sizeRef.offsetWidth + 'px');

                // Wait a bit more for focus
                $timeout(function () {
                  $input[0].select();
                  controller.setEditingMode(true);
                  controller.setActivePill(scope.index);
                  scope.onEdit({index: scope.index});
                }, 100);

              });

              event.stopPropagation();
              event.preventDefault();
            };

            /**
             * On close button click
             * @param event
             */
            scope.onCloseClick = function (event) {
              event.preventDefault();
              event.stopPropagation();
              scope.onClose({index: scope.index});
            };
          }
        }
      }
    ])
  ;

})(angular, window);
(function (undefined) {
  'use strict';

  angular.module('bento.test', [])
    .directive('bentoTest', bentoTestDirFunc)
    .provider('bentoTest', bentoTestProvider)
    .controller('bentoTestDirController', bentoTestDirController)
  ;

  bentoTestDirFunc.$inject = ['bentoTest', '$timeout'];
  /**
   * QE Test directive definition and link
   * @returns {{link: link}}
   */
  function bentoTestDirFunc(bentoTest, $timeout) {
    return {
      controller: 'bentoTestDirController', // API used for children links
      restrict  : 'A', // Attribute ONLY
      require   : ['bentoTest', '^^?bentoTest'],
      link      : function (scope, element, attrs, controllers) {
        var ctrl       = controllers[0],
            parentCtrl = controllers[1],
            isIsolated,
            localWatchCancel,
            idWatchCancel
          ;

        $timeout(function(){
          element[0].removeAttribute('bento-test');
          element[0].removeAttribute('bento-test-attribute-name');
          element[0].removeAttribute('bento-test-isolate');
        });

        if (!bentoTest.isEnabled) {
          // In case Bento Test is enabled again
          bentoTest._onUnmuteOnce(init);
        }else{
          // First time
          init();
        }

        /**
         * Init Link logics
         */
        function init() {
          bentoTest._onMuteOnce(mute);
          ctrl.setParentController(parentCtrl);

          // $watch local elementName & assign
          localWatchCancel = scope.$watch(
            function () {
              return ctrl.elementName;
            },
            function (elName) {
              // Only update it when `bento-test` has a value
              if ((typeof attrs.bentoTest === 'string') && attrs.bentoTest.length > 0) {
                attrs.$set(ctrl.getInheritedAttributeName(), elName);
              }
            }
          );

          // Define isolation value
          isIsolated = (typeof attrs.bentoTestIsolate !== 'undefined') ?
            scope.$eval(attrs.bentoTestIsolate) : bentoTest.isolateByDefault;

          // Test ID needs to be pulled ONLY after all rendering is done
          $timeout(function () {
            if (parentCtrl && !isIsolated) {
              // Watch & update test id if its parent's id changes
              idWatchCancel = scope.$watch(function () {
                  return parentCtrl.elementName;
                },
                function (newElName) {
                  if(newElName){
                    ctrl.addParentElementName(newElName);
                  }
                });
            }
          });
        }

        function mute() {
          localWatchCancel();
          idWatchCancel && idWatchCancel();

          isIsolated =
            localWatchCancel =
              idWatchCancel =
                null;

          bentoTest._onUnmuteOnce(init);
        }

        // Destroy
        scope.$on('$destroy', function () {
          bentoTest._removeCallback(init, mute);
        });
      }
    }
  }

  bentoTestDirController.$inject = ['$scope', '$attrs', '$element', '$timeout', 'bentoTest'];
  /**
   * Bento Test directive controller
   * @param $scope
   * @param $attrs
   */
  function bentoTestDirController($scope, $attrs, $element, $timeout, bentoTest) {
    var ctrl             = this,
        attributeName, inheritedAttributeName,
        childControllers = [],
        parentController,
        cancelDirObserve,
        cancelAttrObserve
      ;

    if (!bentoTest.isEnabled) {
      bentoTest._onUnmuteOnce(init);
    }else{
      init();
    }

    ctrl.addParentElementName = function (parentElName) {

      if (parentElName.length > 0 && ctrl.elementID.length > 0) {
        parentElName += '-';
      }

      ctrl.elementName = parentElName + ctrl.elementID;
    };

    // Add child controller
    ctrl.addChildController = function (childController) {
      if (childControllers.indexOf(childController) === -1) {
        childController.setInheritedAttributeName(ctrl.getInheritedAttributeName());
        childControllers.push(childController);
      }
    };

    // Remove a child controller
    ctrl.removeChildController = function (childController) {
      var index;
      if (index = childControllers.indexOf(childController) > -1) {
        childControllers.splice(index, 1);
      }
    };

    // Set parent controller
    ctrl.setParentController = function (controller) {
      // No need to set parent when this element has its own test attribute name
      if ($attrs.bentoTestAttributeName) {
        return;
      }

      removeFromParentController();
      if (controller) {
        parentController = controller;
        parentController.addChildController(ctrl);
      }
    };

    // Set attribute name
    ctrl.setAttributeName = function (aName) {
      attributeName = aName;
      removeFromParentController();
      ctrl.setInheritedAttributeName(aName);
    };

    // Set Inherited Attribute Name
    ctrl.setInheritedAttributeName = function (aName) {
      // No need to update
      if(aName == inheritedAttributeName) return;

      // Only update when `bento-test` has a value
      if ((typeof $attrs.bentoTest === 'string') && $attrs.bentoTest.length > 0) {
        // get the current El test name
        var elTestName = $attrs[ctrl.getInheritedAttributeName()];
        // Remove old attribute name
        $attrs.$set(ctrl.getInheritedAttributeName(), null);

        // The test value to the new attribute name
        $attrs.$set(aName, elTestName);
      }

      inheritedAttributeName = aName;

      updateChildControllers();
    };

    // Get Inherited Attribute Name
    ctrl.getInheritedAttributeName = function () {
      return inheritedAttributeName || bentoTest.attributeName;
    };

    // Get attribute name
    ctrl.getAttributeName = function () {
      return attributeName || bentoTest.attributeName;
    };

    // Destroy
    $scope.$on('$destroy', function () {
      removeFromParentController();
      bentoTest._removeCallback(init, mute);
    });


    /**
     * Mute Bento Test
     */
    function mute() {
      cancelDirObserve && cancelDirObserve();
      cancelAttrObserve && cancelAttrObserve();

      var attributeToRemove = inheritedAttributeName || bentoTest.attributeName;

      attributeName =
        inheritedAttributeName =
          parentController =
            cancelDirObserve =
              cancelAttrObserve = undefined;
      childControllers = [];

      attributeToRemove = attributeToRemove.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});

      $element[0].removeAttribute(attributeToRemove);
      bentoTest._onUnmuteOnce(init);
    }


    /**
     * Init controller
     */
    function init() {
      // Add mute listener
      bentoTest._onMuteOnce(mute);
      // Initialize variables
      ctrl.elementID = $attrs.bentoTest;
      ctrl.elementName = $attrs.bentoTest;

      cancelDirObserve = $attrs.$observe('bentoTest', function () {
        ctrl.elementID = $attrs.bentoTest;
        ctrl.elementName = $attrs.bentoTest;
        ctrl.componentName = undefined;

        $timeout(function () {
          $element[0].removeAttribute('bento-test');
        });
      });

      cancelAttrObserve = $attrs.$observe('bentoTestAttributeName', function (newAttributeName) {
        if (newAttributeName) {
          ctrl.setAttributeName(newAttributeName);
        }
      });
    }

    // Remove `ctrl` controller from its parent controller
    function removeFromParentController() {
      if (parentController) {
        parentController.removeChildController(ctrl);
      }
    }

    // Update child controllers
    function updateChildControllers() {
      var child;
      for (var i = 0, len = childControllers.length; i < len; i++) {
        child = childControllers[i];
        child.setInheritedAttributeName(inheritedAttributeName);
      }
    }
  }


  // Main API
  var bentoTestAPI = {
    attributeName: 'bentoTestId',
    isEnabled: false,
    isolateByDefault: false,
    enable: function(){
      bentoTestAPI.unmute();
    },
    disable: function(){
      bentoTestAPI.mute()
    },
    /**
     * Mute all Bento Test directives
     */
    mute: function(){
      bentoTestAPI.isEnabled = false;

      // Call mute callbacks
      // NOTE all callbacks get removed onces called
      if (Array.isArray(bentoTestMuteStack) && bentoTestMuteStack.length) {
        do {
          // pop and call
          bentoTestMuteStack.shift()();
        } while (bentoTestMuteStack[0]);
      }
    },
    /**
     * Unmute all tests
     */
    unmute: function(){
      bentoTestAPI.isEnabled = true;

      // Call onmute callbacks
      // NOTE all callbacks get removed onces called
      if (Array.isArray(bentoTestUnmuteStack) && bentoTestUnmuteStack.length) {
        do {
          // pop and call
          bentoTestUnmuteStack.shift()();
        } while (bentoTestUnmuteStack[0]);
      }
    },
    // Private functions
    // Mute callback
    _onMuteOnce  : function(func){
      if (!bentoTestMuteStack) {
        bentoTestMuteStack = [];
      }

      if (bentoTestMuteStack.indexOf(func) == -1) {
        bentoTestMuteStack.push(func);
      }
    },
    // Unmute callback
    _onUnmuteOnce: function(func){
      if (!bentoTestUnmuteStack) {
        bentoTestUnmuteStack = [];
      }

      if (bentoTestUnmuteStack.indexOf(func) == -1) {
        bentoTestUnmuteStack.push(func);
      }
    },
    // Remove callback
    _removeCallback: function(init,mute){
      var index;
      if(bentoTestMuteStack && ((index = bentoTestMuteStack.indexOf(mute)) > -1)){
        bentoTestMuteStack.splice(index,1);
      }
      if(bentoTestUnmuteStack && ((index = bentoTestUnmuteStack.indexOf(init)) > -1)){
        bentoTestUnmuteStack.splice(index,1);
      }
    }
  };

  var bentoTestMuteStack = [], bentoTestUnmuteStack = [];

  // Implement bentoTestProvider Getter and setters

  /**
   * Implement bentoTestProvider Getter and setters
   */
  // `attributeName`
  Object.defineProperty(bentoTestProvider.prototype,'attributeName',{
    set: function(name){
      bentoTestAPI.attributeName = name;
    },
    get: function(){
      return bentoTestAPI.attributeName;
    }
  });
  // `isEnabled`
  Object.defineProperty(bentoTestProvider.prototype,'isEnabled',{
    set: function(bool){
      bentoTestAPI.isEnabled = bool;
    },
    get: function(){
      return bentoTestAPI.isEnabled;
    }
  });
  // `isolateByDefault`
  Object.defineProperty(bentoTestProvider.prototype,'isolateByDefault',{
    set: function(bool){
      bentoTestAPI.isolateByDefault = bool;
    },
    get: function(){
      return bentoTestAPI.isolateByDefault;
    }
  });

  /**
   * QE Test Provider & its service
   */
  function bentoTestProvider() {

    // Detect and automatically turn on forge
    // Forge support infomation
    // `window.theforge.bentoTest` [boolean]
    this.isEnabled = !!window.theforge && window.theforge.bentoTest;


    // Register global API to turn the test on or off
    window.bento = window.bento || {};
    window.bento.enableBentoTest = bentoTestAPI.unmute;
    window.bento.disableBentoTest = bentoTestAPI.mute;

    // Expose API
    this.$get = [function () {
      return bentoTestAPI;
    }];
  }
})();
(function (window, angular, undefined) {

  'use strict';

  angular.module('bento.toggle', ['bento.services'])
  /**
   * Directive declaration
   */
    .directive('bentoToggle', ['$bentoServices', function ($bentoServices) {

      return {
        restrict   : 'A',
        replace    : true,
        require    : 'ngModel',
        scope      : {
          ngModel    : '=',
          onChange   : '&',
          lockToState: '=',
          isLocked   : '&'
        },
        templateUrl: '../templates/toggle/bento-toggle.html',
        link       : function (scope, element, attrs, ngModelController) {

          if (typeof scope.ngModel === 'undefined') {
            scope.ngModel = false;
          }

          /**
           * Swipe gestures
           */
          var startDragging = false;
          var startX = 0;
          var triggeringDX = element[0].offsetWidth * 0.3; //trigering distance when mouse or touch
                                                           // is moved
          var pointerDown;
          var pointerMove;
          var pointerUp;
          var hasPointerDownListener = false;
          scope.isTouch = $bentoServices.isTouchSupported();

          pointerDown = 'touchstart mousedown';
          pointerMove = 'touchmove mousemove';
          pointerUp = 'touchend mouseup';

          element.on(pointerDown, touchdown);
          hasPointerDownListener = true;
          scope.onKeydown = function (event) {
            if (event.keyCode === 32 || event.keyCode === 13) // Space
            {
              toggle(event);
            }
          };

          /**
           * Touchdown / Mousedown
           * @param event
           */

          function touchdown(event) {

            // ignore toggle event when this is locked
            if (scope.isLocked()) {
              return;
            }

            // ignore user event if there is a one-way lock
            if (typeof scope.lockToState !== 'undefined') {
              if ((scope.lockToState && scope.ngModel) ||
                (!scope.lockToState && !scope.ngModel)) {

                return;
              }
            }

            startDragging = true;
            startX = !!event.originalEvent && event.originalEvent.touches ?
              event.originalEvent.touches[0].pageX : event.pageX;

            element.on(pointerMove, touchmove);
            element.on(pointerUp, toggle);
            element.off(pointerDown, touchdown);
            hasPointerDownListener = false;

            event.stopPropagation(); //disable mousedown on touch devices
          }

          /**
           * Turn ON or OFF based on mouse/touch `x` swipes
           * @param event
           */
          function touchmove(event) {
            var dX = !!event.originalEvent && event.originalEvent.touches ?
              event.originalEvent.touches[0].pageX - startX : event.pageX - startX;
            var absDX = Math.abs(dX);

            // Check deltaX to define ON or OFF
            if (absDX > triggeringDX) {
              if (dX > 0) {
                scope.ngModel = true;
              } else {
                scope.ngModel = false;
              }

              element.off(pointerMove, touchmove);
              element.off(pointerUp, toggle);

              if (!hasPointerDownListener) {
                element.on(pointerDown, touchdown);
                hasPointerDownListener = true;
              }

              // Fire external onChange callback function
              if (!!scope.onChange) {
                scope.onChange({value: scope.ngModel});
              }

              scope.$apply();
              event.stopPropagation(); //disable mousedown on touch devices

            }
            // <FALLBACK> Toggle on touch devices
            // incase draggable area is way too small for fat fingers
            else if (scope.isTouch) {
              toggle(event);
            }
          }

          /**
           * Toggle this main directive
           */
          function toggle(event) {

            // ignore toggle event when this is locked
            if (scope.isLocked()) {
              return;
            }

            // ignore user event if there is a one-way lock
            // double assurance
            if (typeof scope.lockToState !== 'undefined') {
              if ((scope.lockToState && scope.ngModel) ||
                (!scope.lockToState && !scope.ngModel)
              ) {

                return;
              }
            }


            scope.ngModel = !scope.ngModel;

            ngModelController.$setDirty();
            ngModelController.$setTouched();

            // Fire external onChange callback function
            if (!!scope.onChange) {
              scope.onChange({value: scope.ngModel});
            }

            // update listeners
            element.off(pointerMove, touchmove);
            element.off(pointerUp, toggle);

            if (!hasPointerDownListener) {
              element.on(pointerDown, touchdown);
              hasPointerDownListener = true;
            }

            $bentoServices.safeApply(scope);

            event.stopPropagation(); //disable mousedown on touch devices
            event.preventDefault();
          }

        }
      };
    }]);

})(window, window.angular);

(function(angular, undefined) {
    'use strict';
    angular
        .module('bento.toolbar', ['bento.translate', 'bento.services', 'bento.reset', 'bento.cookie'])
        .controller('BentoToolbarController', BentoToolbarController)
        .directive('bentoToolbar', bentoToolbar)
        .directive('bentoToolbarButton', bentoToolbarButton)
        .directive('bentoToolbarDropdown', bentoToolbarDropdown)
        .directive('bentoToolbarNgRepeatComplete', bentoToolbarNgRepeatComplete);

    BentoToolbarController.$inject = ['$scope', '$element', '$timeout'];

    function BentoToolbarController($scope, $element, $timeout) {
        var vm = this;
        vm.initialized = false;
        vm.moreVisible = true;
        vm.moreWidth = 100;
        var oldTData = [];
        vm.oldMoreOpacity = 0;
        var repeatTimeout;
        vm.init = function() {
            if(vm.tData){
                vm.tData.map(function(item,index) {
                    item.isVisible = true;
                    if(oldTData[index]){
                        item.isTransparent = oldTData[index].isTransparent;
                    }
                    return item;
                });
                oldTData = vm.tData;
            }
            vm.initialized = false;
            vm.moreVisible = true; 
            vm.oldMoreOpacity = 0;
            vm.moreWidth = 100;
            var moreButton = $element[0].querySelector('li.more-button');
            if (moreButton) {
                moreButton.style.opacity = vm.oldMoreOpacity;
            }
            
        }
        vm.onRepeatComplete = function() {
            $timeout.cancel(repeatTimeout);
            repeatTimeout = $timeout(function(){
                vm.moreVisible = true;
                //when ng repeat is completed, all list elements are rendered in DOM
                //get list element's widths and set in button data
                var children = $element[0].querySelector('ul.nav.navbar-nav').children;
                if(vm.tData){
                    var index = 0;
                    vm.tData.map(function(item) {
                        if (!item.hidden && children[index]) {
                            item.width = children[index].getAttribute('data-button-width');
                            index++;
                        }

                        return item;
                    });
                }
                var moreButton = $element[0].querySelector('li.more-button');
                if (moreButton) {
                    vm.moreWidth = +moreButton.getAttribute('data-button-width');
                }

                //adjust button in toolbar
                //initialized flag is to prevent window resize 
                //from calling adjustButtons first
                vm.initialized = true;
                vm.adjustButtons();
            },10);
        };

        //Watch toolbar data, and set privately used
        //tData, add custom properties isVisible, isTransparent
        $scope.$watch(function() {
                return (vm.toolbarData);
            },
            function onToolbarData(newValue, oldValue) {
                if ((newValue && !vm.initialized) || !angular.equals(newValue,oldValue)) {
                    vm.tData = angular.copy(newValue);
                    vm.init();
                }
            }, true);
    }
    bentoToolbar.$inject = ['$timeout', '$window'];

    function bentoToolbar($timeout, $window) {
        return {
            restrict: 'A',
            scope: {},
            transclude: {
                'navbarLeft': '?navbarLeft',
                'navbarRight': '?navbarRight'
            },
            controller: 'BentoToolbarController',
            controllerAs: 'bentoToolbarCtrl',
            bindToController: {
                'toolbarData': '=',
                'moreButtonLabel': '='
            },
            templateUrl: function(element, attrs) {
                return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/toolbar/bento-toolbar.html';
            },
            link: function(scope, element, attrs, toolbarCtrl) {
                var resizeTimer,initTimeout;

                toolbarCtrl.adjustButtons = adjustButtons;

                angular.element($window).bind('resize', onElementResize);
                //scope.$watch(getElementWidth, onElementResize);
                scope.$on('$destroy', onDestroy);
                element.on('$destroy', onDestroy);

                function getElementWidth() {
                    return element[0].offsetWidth;
                }

                function onWindowResize() {
                    scope.$apply();
                }

                function onElementResize(width) {
                    if (resizeTimer) {
                        $timeout.cancel(resizeTimer);
                    }
                    resizeTimer = $timeout(function() {
                        adjustButtons();
                    });
                }
                scope.$on('bentoToolbarRefresh', onRefresh);
                scope.$on('bentoToolbarResize', onElementResize);

                function onRefresh() {
                    initTimeout = $timeout(function() {
                        toolbarCtrl.init();
                        toolbarCtrl.onRepeatComplete();
                    });
                }

                function onDestroy() {
                    angular.element($window).unbind('resize', onElementResize);
                    $timeout.cancel(initTimeout);
                }

                function adjustButtons() {
                    if (!toolbarCtrl.initialized) {
                        return;
                    }
                    if(!toolbarCtrl.tData || toolbarCtrl.tData.length===0){
                        return;
                    }
                    var tData = toolbarCtrl.tData; //toolbar button data
                    var totalWidth = 0; //reset total width of cumulative button widths
                    var elWidth = getElementWidth(); //get width of toolbar container
                    var navbarRight = element[0]
                        .querySelector('div.toolbar-navbar-right');
                    var navBarRightWidth = navbarRight ? +navbarRight.offsetWidth : 0; //get width of right nav
                    var navbarLeft = element[0]
                        .querySelector('div.toolbar-navbar-left');
                    var navBarLeftWidth =  navbarLeft ? +navbarLeft.offsetWidth : 0; //get width of left nav
                    var moreWidth = toolbarCtrl.moreWidth; //get width of more button
                    var pad = navBarRightWidth > 0 ? 5 : 40; //extra pad
                    var staticWidth = 0;
                    if (tData) {
                        //Iterate through buttons, 
                        //and display if cumulative width is 
                        //less than container width
                        for (var i = 0, il = tData.length; i < il; i++) {
                            var td = tData[i];
                            if(!td.width){
                                continue;
                            }
                            if(td.hidden){
                                continue;
                            }
                            if(td.static){
                                staticWidth += +td.width;
                            }
                            totalWidth += +td.width;
                            var accumulatedWidth = (totalWidth + moreWidth + pad + navBarRightWidth + navBarLeftWidth);
                            var targetWidth = (elWidth - staticWidth);


                            if (accumulatedWidth < targetWidth) {
                                td.isVisible = true;
                                td.isTransparent = false;
                            } else {
                                td.isVisible = false;
                                td.isTransparent = true;
                            }
                            if(td.static){
                                td.isVisible = true;
                                td.isTransparent = false;
                            }
                        }

                        toolbarCtrl.moreVisible = true;

                        // to adjust opacity of more button, need to wrap in timeout for window resize
                        $timeout(function(){
                            var moreButton = element[0].querySelector('li.more-button');
                            if (moreButton) {
                                moreButton.style.opacity = 1;
                                toolbarCtrl.oldMoreOpacity = moreButton.style.opacity;
                            }
                        })

                        if (tData[il - 1].isVisible === true) {
                            if (totalWidth + pad + navBarRightWidth + navBarLeftWidth < elWidth) {
                                toolbarCtrl.moreVisible = false;
                            }
                        }
                    }
                }
            }
        }
    }
    bentoToolbarButton.$inject = ['$timeout'];

    function bentoToolbarButton($timeout) {
        return {
            restrict: 'A',
            require: '^bentoToolbar',
            link: function(scope, element, attr, ctrl) {
                var el = element[0];
                // var width = getTotalWidth(el);
                scope.$watch(function() {
                    return el.offsetWidth;
                }, function(newValue, oldValue) {
                    var width = getTotalWidth(el);
                    el.setAttribute('data-button-width', width);
                    if(oldValue === 0 || oldValue === undefined){
                        ctrl.onRepeatComplete();
                    }
                });

                function getTotalWidth(el) {
                    var style = el.currentStyle || window.getComputedStyle(el);
                    var width = Math.ceil(el.offsetWidth) +
                        parseFloat(style.paddingLeft) +
                        parseFloat(style.paddingRight) +
                        parseFloat(style.marginLeft != "auto" ? style.marginLeft : 0) +
                        parseFloat(style.marginRight != "auto" ? style.marginRight : 0);
                    return width;
                }
            }
        }
    }
    bentoToolbarNgRepeatComplete.$inject = ['$timeout'];

    function bentoToolbarNgRepeatComplete($timeout) {
        return {
            restrict: 'A',
            require: '^bentoToolbar',
            link: function(scope, element, attr, ctrl) {
                if (scope.$last === true) {
                    $timeout(function() {
                        ctrl.onRepeatComplete(element);
                    });
                }
            }
        }
    }

    bentoToolbarDropdown.$inject = ['$parse', '$window', '$timeout', '$compile'];

    function bentoToolbarDropdown($parse, $window, $timeout, $compile) {
        return {
            restrict: 'A',
            controller: function() {
                var vm = this;
                vm.isOpen = false;
                vm.toggle = function(button) {
                    if (!button.disabled) {
                        vm.isOpen = !vm.isOpen;
                    }
                }
            },
            controllerAs: 'bentoToolbarDropdownCtrl',
            bindToController: {},
            link: function(scope, element, attrs, ctrl) {

            }
        };
    }

})(window.angular);
(function(angular){

  'use strict';

  var translateApp = angular.module('bento.services');

  translateApp
    .provider('$bentoTranslateLoader',function(){
      var urlPatterns = [];

      // Pushing a new pattern onto the pattern stack for loading later
      this.addURLPattern = function(pattern){
        urlPatterns.push(pattern);
      };

      /**
       * Loader Factory
       * @type {*[]}
       */
      this.$get = ['$http', '$q', function($http, $q){
        // return loaderFn
        return function (options) {

          var deferred = $q.defer();
          var filePatternArray = urlPatterns.slice(0);
          var languageData = {};
          var counter = 0;

          loadLanguageFile();

          function loadLanguageFile(){
            // pop and get the top time from the stack
            var url = filePatternArray.pop().replace('{lang}',options.key);
            $http({method: 'GET', url: url}).
              then(function(res) {
                // this callback will be called asynchronously
                // when the response is available
                addAndCheckFile(res.data);
              }).
              catch(function(res) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                addAndCheckFile();
              });
          }

          function addAndCheckFile(data){

            if(!!data) {
              for (var key in data) {
                if(!!data[key]) {
                  languageData[key] = data[key];
                  counter += 1;
                }
              }
            }

            if(filePatternArray.length > 0){
              loadLanguageFile();
            }else{
              if(counter > 0){
                deferred.resolve(languageData);
              }else{
                deferred.reject(options.key);
              }
            }
          }
          return deferred.promise;
        };
      }];
    });

})(window.angular);

(function () {

  /*
   DO NOT CHANGE!!
   This is Bento.UI's default translation variable.
   All new translations must be updated or overwritten with its API.

   See: http://bento.ui.int.thomsonreuters.com/#/components/translate
   Default Locale: `en-us`
   */
  var BENTO_TRANSLATE_DEFAULT = {
    // Component Translations
    "BENTO_UI_ALERT_DESCRIPTION"                      : "You have alerts, press tab key to continue.",
    "BENTO_UI_ALERT_CLOSE_BUTTON"                     : "Close alert.",
    "BENTO_UI_BUSY_LOADER_LOADING"                    : "Loading content. ",
    "BENTO_UI_FILE_SELECTOR_DESCRIPTION"              : "This is file selector, press Tab key to proceed to the browse button",
    "BENTO_UI_FILE_SELECTOR_BROWSE_BUTTON"            : "Press enter key to Browse file",
    "BENTO_UI_FILE_SELECTOR_BROWSE_BUTTON_LABEL"      : "Browse for File",
    "BENTO_UI_FILE_SELECTOR_DROP_FILED_LABEL"         : "Drag a File Here or",
    "BENTO_UI_FILE_SELECTOR_FILE_NAME"                : "File _FILE_NUMBER_ of _NUM_FILES_, file name: _FILE_NAME_",
    "BENTO_UI_FILE_SELECTOR_FILE_UPLOAD_PROGRESS"     : " loading",
    "BENTO_UI_FILE_SELECTOR_FILE_UPLOAD_COMPLETE"     : " loading complete",
    "BENTO_UI_FILE_SELECTOR_REMOVE_BUTTON"            : "Remove _FILE_NAME_",
    "BENTO_UI_FILE_SELECTOR_REMOVE_COMPLETE"          : "_FILE_NAME_ is removed",
    "BENTO_UI_MULTISELECT_OVERLAY_DESCRIPTION"        : "Multiselect menu, press Enter key to start selecting.",
    "BENTO_UI_MULTISELECT_OVERLAY_CONTENT_DESCRIPTION": "Tab to navigate through the content. Enter key to select or toggle.  Escape key to dismiss the selection.",
    "BENTO_UI_MULTISELECT_OVERLAY_ALL_SELECTED_INFO"  : "All (NUMBER) selected",
    "BENTO_UI_MULTISELECT_OVERLAY_CANCEL"             : "Cancel",
    "BENTO_UI_MULTISELECT_OVERLAY_CANCEL_DESCRIPTION" : "Enter key or space bar to confirm and cancel the selections.",
    "BENTO_UI_MULTISELECT_OVERLAY_DONE"               : "Done",
    "BENTO_UI_MULTISELECT_OVERLAY_DONE_DESCRIPTION"   : "Enter key or space bar to confirm and apply the selections.",
    "BENTO_UI_MULTISELECT_OVERLAY_EDIT"               : "Edit",
    "BENTO_UI_MULTISELECT_OVERLAY_SELECT"             : "Select",
    "BENTO_UI_MULTISELECT_OVERLAY_SELECT_ALL"         : "Select All",
    "BENTO_UI_MULTISELECT_OVERLAY_SELECTED_INFO"      : "NUMBER selected",
    "BENTO_UI_MULTISELECT_OVERLAY_SHOW_ALL"           : "Show All",
    "BENTO_UI_MULTISELECT_OVERLAY_SHOW_SELECTED"      : "Show Selected",
    "BENTO_UI_MULTISELECT_OVERLAY_SEARCH_LABEL"       : "Search Item Text Field",
    "BENTO_UI_PAGINATION_GO_BUTTON"                   : "Go",
    "BENTO_UI_PAGINATION_INFO_PAGE_TEXT"              : "Page _PAGE_ of _PAGES_",
    "BENTO_UI_PAGINATION_INFO_TEXT"                   : "_START_ to _END_ of _MAX_",
    "BENTO_UI_SPLITTER_GROUP"                         : "This is a splitter group, press Tab key to proceed to its contents.",
    "BENTO_UI_SPLITTER_GROUP_TOP_BAR"                 : "Splitter Group top group bar, press space bar to expand or collapse this panel.",
    "BENTO_UI_SPLITTER_GROUP_BOTTOM_BAR"              : "Splitter Group bottom group bar, press space bar to expand or collapse this panel.",
    "BENTO_UI_SPLITTER_GROUP_LEFT_BAR"                : "Splitter Group left group bar, press space bar to expand or collapse this panel.",
    "BENTO_UI_SPLITTER_GROUP_RIGHT_BAR"               : "Splitter Group right group bar, press space bar to expand or collapse this panel.",
    "BENTO_UI_SPLITTER_GROUP_TOP_PANEL"               : "Splitter Group top panel, press Tab key to proceed.",
    "BENTO_UI_SPLITTER_GROUP_BOTTOM_PANEL"            : "Splitter Group bottom panel, press Tab key to proceed.",
    "BENTO_UI_SPLITTER_GROUP_LEFT_PANEL"              : "Splitter Group left panel, press Tab key to proceed.",
    "BENTO_UI_SPLITTER_GROUP_RIGHT_PANEL"             : "Splitter Group right panel, press Tab key to proceed.",
    "BENTO_UI_SPLITTER_GROUP_MAIN_PANEL"              : "Splitter Group main panel, press Tab key to proceed.",
    "BENTO_UI_TILE_RIBBON_TOGGLE_SHOW"                : 'Show',
    "BENTO_UI_TILE_RIBBON_TOGGLE_HIDE"                : 'Hide',
    "BENTO_UI_TOGGLE_ON"                              : "Toggle is on. Space bar to turn it off",
    "BENTO_UI_TOGGLE_OFF"                             : "Toggle is off. Space bar to turn it on",
    "BENTO_UI_TOOLBAR_MORE"                           : "More",
    "BENTO_UI_TRANSFER_BOX_BTN_TEXT_ONE"              : "Add",
    "BENTO_UI_TRANSFER_BOX_BTN_TEXT_TWO"              : "Remove",
    "BENTO_UI_TRANSFER_BOX_BTN_TEXT"                  : "Transfer",
    "BENTO_UI_TRANSFER_BOX_INFO_TEXT"                 : "_SELECTED_ of _TOTAL_ Checked",
    "BENTO_UI_TRANSFER_BOX_BASIC_BTN_TEXT_ADD"        : 'Add',
    "BENTO_UI_TRANSFER_BOX_BASIC_BTN_TEXT_REMOVE"     : 'Remove',
    "BENTO_UI_TRANSFER_BOX_BASIC_SEARCH_TEXT"         : 'Search',
    "BENTO_UI_TREE_EXPANDED"                          : "expanded",
    "BENTO_UI_TREE_COLLAPSED"                         : "collapsed",
    "BENTO_UI_TREE_EXPAND_ALL"                        : 'Expand All',
    "BENTO_UI_TREE_COLLAPSE_ALL"                      : 'Collapse All',
    "BENTO_UI_WIZARD_DESCRIPTION"                     : "Wizard to complete a process. Tab key to proceed to wizard steps.  Enter key to select each wizard step and its content.",
    "BENTO_UI_WIZARD_STEP_NAME"                       : "Wizard Step Title.",
    "BENTO_UI_WIZARD_BUTTON_CANCEL"                   : "Cancel",
    "BENTO_UI_WIZARD_BUTTON_CANCEL_DESCRIPTION"       : "Cancel",
    "BENTO_UI_WIZARD_BUTTON_DONE"                     : "Done",
    "BENTO_UI_WIZARD_BUTTON_DONE_DESCRIPTION"         : "Done with the last step.",
    "BENTO_UI_WIZARD_BUTTON_NEXT"                     : "Next",
    "BENTO_UI_WIZARD_BUTTON_NEXT_DESCRIPTION"         : "Proceed to next step.",
    "BENTO_UI_WIZARD_BUTTON_PREVIOUS"                 : "Previous",
    "BENTO_UI_WIZARD_BUTTON_PREVIOUS_DESCRIPTION"     : "Back to previous step.",
    // Static translations
    "BENTO_UI_TODAY"                                  : "Today",
    "BENTO_UI_TOMORROW"                               : "Tomorrow",
    "BENTO_UI_YESTERDAY"                              : "Yesterday",
    "BENTO_UI_N_DAY_AGO"                              : "_NUMBER_ Days Ago",

    // A11Y translations
    // Transferbox
    "BENTO_UI_A11Y_TBOX_BOX1_LABEL"                   : "Source Box",
    "BENTO_UI_A11Y_TBOX_BOX2_LABEL"                   : "Destination Box",
    "BENTO_UI_A11Y_TBOX_ADD_LABEL"                    : "Add items from ",
    "BENTO_UI_A11Y_TBOX_REMOVE_LABEL"                 : "Remove items from ",
    "BENTO_UI_TBOX_TOGGLE_FILTERS"                    : "Toggle Filters",

    // Pagination
    "BENTO_UI_TBOX_PAGINATION_FIRST"                  : "Goto First Page",
    "BENTO_UI_TBOX_PAGINATION_NEXT"                   : "Goto Next Page",
    "BENTO_UI_TBOX_PAGINATION_PREVIOUS"               : "Goto Previous Page",
    "BENTO_UI_TBOX_PAGINATION_LAST"                   : "Goto Last Page",
    "BENTO_UI_TBOX_PAGINATION_PAGE_NUM"               : "Enter Page number to Goto",
    "BENTO_UI_TBOX_PAGINATION_GOTO_PAGE"              : "Goto Page",
    "BENTO_UI_TBOX_PAGINATION_ITEMS_PER_PAGE"         : "Items Per Page",

    // scrollable bar
    "BENTO_UI_SCROLLABLE_BAR_SCROLL_LEFT"             : "Scroll Left",
    "BENTO_UI_SCROLLABLE_BAR_SCROLL_RIGHT"            : "Scroll Right",

  };

  angular.module('bento.translate', ['bento.services'])
    /**
     * Setting up the translate
     */
    .run([
      '$bentoTranslate',
      function ($bentoTranslate) {

        $bentoTranslate.setTranslation(
          BENTO_TRANSLATE_DEFAULT,
          true // To avoid $apply in init cycle since the first cycle will be automatically applied.
        );

      }])
    /**
     * Bento Translate Main Filter
     */
    .filter('bentoTranslate', [
      '$bentoTranslate',
      function ($bentoTranslate) {

        function bentoTranslateFilter(label, override) {

          // Use override
          if (!!override && override.trim().length > 0) {
            return override;
          }

          return $bentoTranslate._translate(label);
        }

        bentoTranslateFilter.$stateful = true;

        return bentoTranslateFilter;
      }])
    /**
     * Factory to support various useful functions
     */
    .factory('$bentoTranslate', [
      '$http',
      '$bentoServices',
      '$rootScope',
      '$q',
      '$log',
      function ($http, $bentoServices, $rootScope, $q, $log) {
        var _data         = {},
            isLoading     = true,
            promiseStack  = [],
            callbackStack = [];

        // Add a callback to stack
        function onChange(fn) {
          callbackStack.push(fn);
        }

        // Remove a callback from stack
        function removeOnChange(fn) {
          var i = callbackStack.indexOf(fn);
          if (i > -1) {
            callbackStack.splice(i, 1);
          }
        }

        // Set custom data
        function set(data, bypassApply) {
          for (var key in data) {
            _data[key] = data[key];
          }
          isLoading = false;

          _fireCallbacks();

          // To avoid apply conflicts in init cycle
          if (!bypassApply) {
            $bentoServices.safeApply($rootScope);
          }
        }

        // Add translation key
        function add(key, translation) {
          if (hasData()) {
            _data[key] = translation;
            _fireCallbacks();
          }
        }

        // Get custom data
        function get() {
          return _data;
        }

        // Load a new set of translation
        function load(url) {
          isLoading = true;
          $http.get(url)
            .then(function (res) {
              isLoading = false;
              set(res.data);
              resolvePromises(true);
              $bentoServices.safeApply($rootScope);
            })
            .catch(function () {
              $log.error('Bento Translate: Unable to load ' + url);
              resolvePromises(false);
              isLoading = false;
            })
        }

        // Has translation in this factory/service
        function hasData() {
          return !!_data;
        }

        // Resolve all promises
        function resolvePromises() {
          var p;
          while (promiseStack.length > 0) {
            p = promiseStack.pop();
            p.deferred.resolve(_translate(p.label));
          }
        }

        // Public API for translate
        function translate(label) {
          var deferred = $q.defer();

          // Still loading translation need to wait
          if (isLoading) {
            promiseStack.push({label: label, deferred: deferred});
          } else {
            deferred.resolve(_translate(label));
          }

          return deferred.promise;
        }

        // Private API for translate
        // Offers instant possible translation
        // Not suiTable for server loadings
        function _translate(label) {
          if (hasData()) {
            if (_data[label]) {
              return _data[label];
            } else {
              return label;
            }
          } else {
            return label;
          }
        }

        // fire all callbacks
        function _fireCallbacks() {
          for (var i in callbackStack) {
            callbackStack[i]();
          }
        }

        return {
          add           : add,
          getTranslation: get,
          hasTranslation: hasData,
          load          : load,
          onChange      : onChange,
          removeOnChange: removeOnChange,
          setTranslation: set,
          translate     : translate,
          //Private API
          _translate    : _translate
        };
      }
    ])
  ;

})();

(function() {
    'use strict';

    angular.module('bento.transferbox', [
        'bento.cookie',
        'bento.translate'
    ])
        .controller('bentoFlexgridTransferBoxController', transferboxController)
        .directive('bentoFlexgridTransferbox', transferbox)

    transferboxController.$inject = ['$timeout', '$scope', '$window', 'flexGridSetUpService'];

    function transferboxController($timeout, $scope, $window, flexGridSetUpService) {
        var vm = this;
        // to debounce resize event
        var resizeTimer;
        /**** CONFIG ***/
        vm.config = {
            boxOneTitle: "Available Users",
            boxTwoTitle: "Available Users",
            infoText: undefined,
            transferBtnText: undefined,
            transferBtnTextOne: "Add",
            transferBtnTextTwo: "Remove",
            paginationInfoText: undefined,
            paginationGoText: undefined,
            paginationInfoPageText: undefined,
            boxOneInfoShown: true,
            boxTwoInfoShown: true,
            disableTransfer: false
        };
        vm.transferItems = transferItems;
        vm.style = {
            height: vm.config.height + 'px'
        }
        $scope.$watch('columnDefinitions', function(columnDefinitions) {
            vm.columnDefinitions = columnDefinitions;
        });
        $scope.$watch('height', function(height) {
            vm.config.height = height;
            vm.style.height = height + 'px';
        });
        $scope.$watchCollection('boxOneItemSource', function(data) {
            vm.gridDataOne = data
        });
        $scope.$watchCollection('boxTwoItemSource', function(data) {
            vm.gridDataTwo = data
        });

        var gridOneWatch = $scope.$watch(function() {
            return vm.box1;
        }, function(box1) {
            if (box1) {
                if (typeof $scope.control === "object") {
                    $scope.control.gridOne = box1;
                }
                gridOneWatch();
            }
        });
        var gridTwoWatch = $scope.$watch(function() {
            return vm.box2;
        }, function(box2) {
            if (box2) {
                if (typeof $scope.control === "object") {
                    $scope.control.gridTwo = box2;
                }
                gridTwoWatch();
            }
        });

        vm.onSplitterResize = function onSplitterResize() {
          // simple debounce
          clearTimeout(resizeTimer);

          resizeTimer = $timeout(function() {
            $scope.$broadcast('bentoTransferBoxResize')
          }, 100);
        }

        vm.checkItemsOne = function (items, gridData){
            if (!!$scope.onBeforeTransfer) {
                $scope.onBeforeTransfer({
                    fromData: items,
                    toData: gridData,
                    transferItemsFn: vm.transferItemsOne
                });
            } else {
                vm.transferItemsOne(items,gridData);
            }
        }
        vm.checkItemsTwo = function (items, gridData){
            if (!!$scope.onBeforeTransfer) {
                // $scope.onBeforeTransfer(items, gridData, vm.transferItemsTwo);
                $scope.onBeforeTransfer({
                    fromData: items,
                    toData: gridData,
                    transferItemsFn: vm.transferItemsTwo
                });
            } else {
                vm.transferItemsTwo(items,gridData);
            }
        }
        vm.transferItemsOne = function (items, gridData) {
                vm.gridDataTwo = items.concat(vm.gridDataTwo);
                vm.gridDataOne = gridData;
                vm.transferItems();
        }
        vm.transferItemsTwo = function (items, gridData) {
                vm.gridDataOne = items.concat(vm.gridDataOne);
                vm.gridDataTwo = gridData;
                vm.transferItems();
        }

        function transferItems() {
            // //strip out select property
            // vm.gridDataOne.forEach(function(obj) {
            //     delete obj.bentoTboxSelect;
            // });
            // vm.gridDataTwo.forEach(function(obj) {
            //     delete obj.bentoTboxSelect;
            //     console.log('strip',obj)
            // });

            $scope.boxOneItemSource = vm.gridDataOne;
            $scope.boxTwoItemSource = vm.gridDataTwo;

            $scope.onTransfer({
                gridDataOne: vm.gridDataOne,
                gridDataTwo: vm.gridDataTwo
            });
        }
    }

    transferbox.$inject = ['$timeout'];

    function transferbox($timeout) {
        return {
            restrict: 'AE',
            scope: {
                boxOneItemSource: '=',
                boxTwoItemSource: '=',
                columnDefinitions: '=',
                control: '=?',
                desktopMode: '=?',
                boxOneTitle: '@',
                boxTwoTitle: '@',
                infoText: '@',
                transferBtnText: '@',
                transferBtnTextOne: '@',
                transferBtnTextTwo: '@',
                height: '=',
                childItemsPath: '=?',
                hidePagination: '=?',
                onBeforeTransfer: '&?',
                onTransfer: '&',
                uniqueKey: '@',
                paginationInfoText: '@',
                paginationGoText: '@',
                paginationInfoPageText: '@',
                showFilters: '=?',
                gridTemplateUrl: '=?',
                disableTransfer: '=?',
                leftWidth: '=?'
            },
            controller: 'bentoFlexgridTransferBoxController',
            controllerAs: 'bentoTransferBoxCtrl',
            templateUrl: function(element, attrs) {
                return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/transfer_box/bento-flexgrid-transferbox-base.html';
            },
            replace: true,
            link: function(scope, element, attrs, tBoxCtrl) {
                for (var key in tBoxCtrl.config) {
                    if (key in attrs.$attr) {
                        tBoxCtrl.config[key] = attrs[key];
                    }
                }
                attrs.$observe('boxOneTitle', function(title) {
                    tBoxCtrl.config.boxOneTitle = title;
                });
                attrs.$observe('boxTwoTitle', function(title) {
                    tBoxCtrl.config.boxTwoTitle = title;
                });
                scope.$watch('disableTransfer', function(disableTransfer){
                    tBoxCtrl.config.disableTransfer = disableTransfer;
                });
                scope.control = {
                    toggleAll: toggleAll
                };
                function toggleAll(box) {
                    if (box === 1) {
                        if (tBoxCtrl.box1) {
                            tBoxCtrl.box1.toggleAll();
                        }
                    } else {
                        if (tBoxCtrl.box2) {
                            tBoxCtrl.box2.toggleAll();
                        }
                    }
                }
            }
        }
    }
}());
(function(undefined) {
  'use strict';

  angular.module('bento.transferbox')
      .controller('bentoFlexgridTBoxController', tboxController)
      .directive('bentoFlexgridTbox', tbox)

  tboxController.$inject = ['$timeout', '$scope', '$element', 'flexGridSetUpService', '$bentoServices', '$bentoTranslate'];

  function tboxController($timeout, $scope, $element, flexGridSetUpService, $bentoServices, $bentoTranslate) {
      if (typeof wijmo === 'undefined') {
          return;
      }
      var vm = this;
      var hasInitialized = false;
      var hasPaginized = false;
      var multiSelectPanelObj;
      var columnHeaderCheckBox = undefined;
      var originalWijmoFilter;
      /**** CONFIG ***/
      vm.defaults = {
          page: 1,
          pageSize: 25,
          collectionView: undefined,
          offsetHeight: 162,
          paginationOffsetHeight: 96
      };
      vm.selectedItems = [];
      vm.searchBoxFilter;
      vm.scrollableBarControllerLeft = {};
      vm.scrollableBarControllerRight = {};
      vm.tBoxAriaLabel = {
        tboxSelectedAriaLabel: '',
        boxOneAriaLabel: '',
        boxTwoAriaLabel: ''
      }
      $scope.filter;

      $scope.ctx = {
        filterButtonHidden: false,
        groupButtonHidden: true,
        columnButtonHidden: false,
        filtersHidden: false
      };

      vm.$onInit = function() {
        var translations = $bentoTranslate.getTranslation();

        var setAriaTags = function() {
          $element[0].setAttribute('aria-labelledby', $bentoServices.generateUID());
          $element[0].setAttribute('aria-describedby', $bentoServices.generateUID());
          var el;
          el = $element[0].querySelector('.container-title');
          el.setAttribute('id', $element[0].getAttribute('aria-labelledby'));

          el = $element[0].querySelector('.container-info');
          el ? el.setAttribute('id', $element[0].getAttribute('aria-describedby')) : '';
        }
        $element[0].setAttribute('role', 'Grid');
        $timeout(function() {
          if(vm.boxOne) {
            vm.tBoxAriaLabel.tboxSelectedAriaLabel = translations.BENTO_UI_A11Y_TBOX_BOX1_LABEL;
            vm.tBoxAriaLabel.boxOneAriaLabel = translations.BENTO_UI_A11Y_TBOX_BOX1_LABEL;
            setAriaTags();
          } else {
            vm.tBoxAriaLabel.tboxSelectedAriaLabel = translations.BENTO_UI_A11Y_TBOX_BOX2_LABEL;
            vm.tBoxAriaLabel.boxTwoAriaLabel = translations.BENTO_UI_A11Y_TBOX_BOX2_LABEL;
            setAriaTags();
          }

          // make searchbox accessible - a11y
          var inputEl = $element[0].querySelector('.bento-search input');
          if(inputEl) {
            var uid = $bentoServices.generateUID();
            var label = translations.BENTO_UI_TRANSFER_BOX_BASIC_SEARCH_TEXT;
            inputEl.setAttribute('id', uid);
            vm.updateLabel(inputEl, vm.tBoxAriaLabel.tboxSelectedAriaLabel + ' ' + label);
          }

          // toggle filter aria-label change
          var el = $element[0].querySelector('.toggle-button-order button');
          if(el) {
            vm.updateLabel(el, vm.tBoxAriaLabel.tboxSelectedAriaLabel + ' ' + translations.BENTO_UI_TBOX_TOGGLE_FILTERS);
          }

          // add and remove button aria-label
          el = $element[0].querySelector('.transfer-button-order button');
          if(el) {
            var label = (vm.boxOne ? 
                        translations.BENTO_UI_A11Y_TBOX_ADD_LABEL :
                        translations.BENTO_UI_A11Y_TBOX_REMOVE_LABEL) +
                        vm.tBoxAriaLabel.tboxSelectedAriaLabel;
            vm.updateLabel(el, label);
          }
        });
      }

      vm.updateLabel = function(el, overrideText) {
        if(overrideText) {
          el.setAttribute('aria-label', overrideText);
        } else {
          var label = el.getAttribute('aria-label');
          el.setAttribute('aria-label', vm.tBoxAriaLabel.tboxSelectedAriaLabel + ' ' + label);
        }
      }

      vm.globalFilterTextChange = function () {
        if ($scope.filter) {
          $scope.filter.apply();
        }
      }
      vm.toggleFilter = function () {
        $scope.filter.showFilterIcons = !$scope.filter.showFilterIcons;
      }

      vm.filterApplied = function (filter) {
        initCustomFilterFun(filter);
      }

      vm.initFilter = function initFilter(filter) {
        $scope.filter = filter;
        initCustomFilterFun(filter);
      }

      vm.$postLink = function () {
        vm.controllerLeft = vm.scrollableBarControllerLeft;
        vm.controllerRight = vm.scrollableBarControllerRight;
      };
  
      function onRefresh(){
        if(vm.scrollableBarControllerLeft){
          vm.scrollableBarControllerLeft.refresh();
        }
        if(vm.scrollableBarControllerRight){
          vm.scrollableBarControllerRight.refresh();
        }
      }

      function initCustomFilterFun(filter) {
        var filterFun = function (item) {
          //check if item satisfies default filters
          var filCols = filter.filterColumns;
          if (!filCols) {
            filCols = filter.grid.columns.map(function (col) { return col.binding; });
          }
          for (var i = 0; i < filCols.length; i++) {
            var colBinding = filCols[i];
            var colFil = filter.getColumnFilter(colBinding);
            if (!colFil.apply(item)) {
              return false;
            }
          }
          //passes default filters now check for custom filter/filters
          //if globalFilterText does not exists then it passes filter, return true
          if (!vm.globalFilterText) {
            return true;
          }

          var searchString = vm.globalFilterText.toLowerCase();
          //ceck lif global filter text is present in any of the entries
          for (var key in item) {
            var curValue = item[key].toString().toLowerCase();
            if (curValue.indexOf(searchString) >= 0) {
              //passses global filter, return true
              return true;
            }
          }
          //failed global filter
          return false;
        };
        if (filter.grid.collectionView) {
          filter.grid.collectionView.filter = filterFun;
        }
      }
    
      //Watch config file from base
      $scope.$watch('config', function(config) {
          vm.config = angular.extend(angular.copy(vm.defaults), config);
      });
      //watch titles
      $scope.$watch('config.boxOneTitle', function(title) {
          vm.config.boxOneTitle = title
      });
      $scope.$watch('config.boxTwoTitle', function(title) {
          vm.config.boxTwoTitle = title
      });
      //flag for first transfer box grid, 
      //used in template for display left or right aligned titles and buttons
      $scope.$watch('boxOne', function(boxOne) {
          vm.boxOne = boxOne;
      });
      $scope.$on('$destroy', vm.onDestroy);
        vm.flexGrid = undefined;
        vm.togglePagination = togglePagination;
        vm.initialized = function(s, e) {
      }

      vm.itemFormatter = function(panel, r, c, cell) {
      }
      vm.transferItems = function() {
          //Seperate the row items to selected and non selected arrays

          var sourceCollection = vm.config.collectionView.sourceCollection;
          vm.selectedItems = [];
          var gridItems = [];
          var sCount = 0,
              gCount = 0;
          for (var i = 0, ttl = sourceCollection.length; i < ttl; i++) {
              var item = sourceCollection[i];
              if (item.bentoTboxSelect === true) {
                  vm.selectedItems[sCount] = item;
                  sCount++;
              } else {
                  gridItems[gCount] = item;
                  gCount++;
              }
          }
          $scope.transferItems({
              items: vm.selectedItems,
              gridData: gridItems
          });

      };
      vm.onDestroy = function() {
          if ($scope.showFilters != false &&
              vm.config &&
              vm.config.collectionView
          ) {
              vm.config.collectionView.collectionChanged.removeHandler(onCollectionChanged);
          }
      }
      //MULTI-SELECT Checkbox
      vm.CHECKBOX_INDETERMINATE = 0;
      vm.CHECKBOX_UNSELECTED = 1;
      vm.CHECKBOX_SELECTED = 2;
      vm.headerCheckBoxMode = vm.CHECKBOX_UNSELECTED;

      vm.onCheckBoxChange = function($item) {
          //if $item parameter passed, that means it's from click event in template
          if($item){
              $item.bentoTboxSelect = !$item.bentoTboxSelect;
              var childItems;
              //if $item has children
              if(vm.childItemsPath && $item[vm.childItemsPath]){
                  childItems = $item[vm.childItemsPath];
              }
              //if $item has parent
              if($item.parentItem){
                  $item.parentItem.bentoTboxSelect = $item.bentoTboxSelect;
                  childItems = $item.parentItem[vm.childItemsPath];
              }
              //if childrent items available
              if(childItems){
                  childItems.forEach(function(childItem){
                      childItem.bentoTboxSelect = $item.bentoTboxSelect;
                  });                    
              }
          }
          vm.selectedItems = vm.config.collectionView.sourceCollection.filter(function(item) {
              return (item.bentoTboxSelect === true);
          });
          
        vm.updateHeaderCheckBox();
      };

      vm.onHeaderCheckBoxChange = function() {
        var selected = false;
        if (vm.headerCheckBoxMode !== vm.CHECKBOX_SELECTED) {
          vm.headerCheckBoxMode = vm.CHECKBOX_SELECTED;
          selected = true;
        } else {
          vm.headerCheckBoxMode = vm.CHECKBOX_UNSELECTED;
          selected = false;
        }
        for (var i = 0, ttl = vm.flexGrid.rows.length; i < ttl; i++) {
          //logic for disabled checkbox
          if(!vm.flexGrid.rows[i].dataItem.disabled){
            vm.flexGrid.rows[i].dataItem.bentoTboxSelect = selected;
          }

          vm.flexGrid.rows[i].cssClass = vm.flexGrid.rows[i].dataItem.bentoTboxSelect ? 'tbox-row-selection-bg' : '';
        }

        vm.selectedItems = vm.config.collectionView.sourceCollection.filter(function(item) {
            return (item.bentoTboxSelect === true);
        });
      };

      vm.updateHeaderCheckBox = function() {
        vm.headerCheckBoxMode = vm.CHECKBOX_UNSELECTED;
        var count = 0;
        if(!vm.flexGrid){
          return;
        }
        for (var i = 0, ttl = vm.flexGrid.rows.length; i < ttl; i++) {
          if (vm.flexGrid.rows[i].dataItem.bentoTboxSelect === true) {
            count++;
          }
          vm.flexGrid.rows[i].cssClass = vm.flexGrid.rows[i].dataItem.bentoTboxSelect ? 'tbox-row-selection-bg' : '';
        }

        if (count === vm.flexGrid.rows.length && vm.flexGrid.rows.length > 0) {
          vm.headerCheckBoxMode = vm.CHECKBOX_SELECTED;
        } else if (count > 0) {
          vm.headerCheckBoxMode = vm.CHECKBOX_INDETERMINATE;
        }
      };

      vm.toggleAll = function() {
          vm.onHeaderCheckBoxChange();
      };

      vm.onFilterInput = function(boxId) {
        if(vm.columnFilter) {
          vm.columnFilter.clear();
        }

        if(vm.searchBoxFilter && vm.searchBoxFilter.length) {
          if(vm.config.collectionView.filter !== allColumnFilter) {
            originalWijmoFilter = vm.config.collectionView.filter;
            vm.config.collectionView.filter = allColumnFilter;
          }
        } else {
          vm.config.collectionView.filter = originalWijmoFilter;
        }
        vm.config.collectionView.refresh();
      };

      //listens to event to refresh grid 
      $scope.$on('bentoTransferBoxResize', function onTransferBoxResize() {
        if (vm.flexGrid) {
          vm.flexGrid.invalidate();
          (vm.scrollableBarControllerLeft && vm.scrollableBarControllerLeft.refresh) ? vm.scrollableBarControllerLeft.refresh() : '';
          (vm.scrollableBarControllerRight && vm.scrollableBarControllerRight.refresh) ? vm.scrollableBarControllerRight.refresh() : '';
        }
      });

      $scope.$watch('hidePagination', togglePagination);

      //watch for initialization of grid
      var removeFlexGridWatch = $scope.$watch(
          function() {
              return vm.flexGrid
          },
          function(grid) {
              if (!grid || hasInitialized) return;
              if (!$scope.hidePagination) {
                  setupPagination(grid);
              } else {
                  vm.config.paginationOffsetHeight = vm.defaults.paginationOffsetHeight;
              }

              // if ($scope.showFilters != false) {
              //     $scope.setupFilters(grid);
              // }
              if (typeof $scope.control === "object") {
                  $scope.control.flexGrid = grid;
              }

              if ($scope.hidePagination) {
                  grid.deferResizing = true;
              }
              updateRowHeight();
              grid.rowHeaders.columns[0].width = 40;
              hasInitialized = true;
              removeFlexGridWatch();
          }
      );

      // Init render
      // Force the grid to render when it is initialized when hidden with CSS
      var removeInitRenderWatch = $scope.$watch(
          function() {
              return $element[0].offsetWidth;
          },
          function(width) {
              if (width > 0 && vm.flexGrid) {
                  vm.flexGrid.invalidate();
                  removeInitRenderWatch();
              }
          }
      );

      $scope.$watch('desktopMode', function(desktopMode) {
          vm.desktopMode = desktopMode;
          updateRowHeight();
      });

      function updateRowHeight() {
          if (!vm.flexGrid) {
              return;
          }
          if (!!$scope.desktopMode) {
              flexGridSetUpService.updateFlexGridRowHeight(vm.flexGrid, 30, [36, 38]);
              vm.config.offsetHeight = 130;
              if ($scope.hidePagination) {
                  vm.config.offsetHeight = 150;
              }
          } else {
              flexGridSetUpService.updateFlexGridRowHeight(vm.flexGrid, 48, [48, 56]);
              vm.config.offsetHeight = 162;
          }
      }
      $scope.$watch('columnDefinitions', function(columnDefinitions) {
          vm.config.columnDefinitions = angular.copy(columnDefinitions);
          var selectColumnDefinition = {
              binding: 'bentoTboxSelect',
              header: ' ',
              visible: true,
              minWidth: 40,
              width: 40
          }
          vm.config.columnDefinitions.unshift(selectColumnDefinition);
      }, true);
      $scope.$watchCollection('gridData', function(data) {
          if (Array.isArray(data)) {
              data.forEach(function(obj) {
                  obj.bentoTboxSelect = false;
                  if(obj[$scope.childItemsPath]){
                      var childItems = obj[$scope.childItemsPath];
                      //circular reference
                      childItems.forEach(function(childItem){
                          childItem.parentItem = obj;
                          childItem.bentoTboxSelect = false;
                      });
                  }
              });
              if (vm.config.collectionView) {
                  delete vm.config.collectionView;
              }

              vm.config.collectionView = new wijmo.collections.CollectionView(data);
              vm.config.collectionView.moveCurrentToPosition(-1);

              //Set up handling for collection changed
              vm.config.collectionView.collectionChanged.addHandler(onCollectionChanged);

              //refresh to get filtered items totalItemCount
              vm.config.collectionView.refresh();
              vm.onCheckBoxChange();

              $timeout(function() {
                  if (vm.config.collectionView) {
                      vm.config.totalItems = vm.config.collectionView.totalItemCount;
                      if (!$scope.hidePagination) {
                          vm.config.collectionView.pageSize = vm.config.pageSize;
                      } else {
                          vm.config.pageSize = vm.config.collectionView.sourceCollection.length;
                          vm.config.collectionView.pageSize = vm.config.pageSize;
                      }
                      //on Transfer, keep grid page from resetting to first page, keep it the same page
                      if (vm.config.page <= 0) {
                          vm.config.page = 1;
                      }

                      var newPageCount = vm.config.collectionView.pageCount;
                      if (newPageCount < vm.config.page) {
                          vm.config.page = newPageCount;
                      }

                      vm.config.collectionView.moveToPage(vm.config.page - 1);
                  }
              });
          }
      });

      function setupPagination(flexGrid) {
          if (flexGrid && !hasPaginized) {
              $scope.$watch(function() {
                  return vm.config.page;
              }, function(page) {
                  if (flexGrid.collectionView) {
                      flexGrid.collectionView.moveToPage(page - 1);
                  }
              });

              $scope.$watch(function() {
                  return vm.config.pageSize;
              }, function(pageSize) {
                  if (flexGrid && flexGrid.collectionView) {
                      flexGrid.collectionView.pageSize = pageSize;
                  }
              });
              hasPaginized = true;
          }
      }

      function togglePagination(pagination) {
          var hidePagination = pagination || $scope.hidePagination;
          if (!hidePagination) {
              setupPagination(vm.flexGrid);
              vm.config.pageSize = vm.defaults.pageSize;
              if (vm.flexGrid && vm.flexGrid.collectionView) {
                  vm.flexGrid.collectionView.pageSize = vm.config.pageSize;
              }
              vm.config.paginationOffsetHeight = 0;
              if ($scope.desktopMode) {
                  vm.config.offsetHeight = 130;
              }
          } else {
              if (vm.config.collectionView) {
                  vm.config.pageSize = vm.config.collectionView.sourceCollection.length;
                  vm.config.collectionView.pageSize = vm.config.pageSize;
              }
              if (vm.flexGrid) {
                  vm.flexGrid.deferResizing = true;
              }
              vm.config.page = 1;
              vm.config.paginationOffsetHeight = vm.defaults.paginationOffsetHeight;
              if ($scope.desktopMode) {
                  vm.config.offsetHeight = 150;
              }
          }
      }

      //FILTER
      vm.updateFilter = function(id) {
          $scope.updateFilter(id);
      }

      function customCollectionViewFilter(item) {
        var val = null;
        var itemkey = null;

        for (var i = 0, il = vm.config.columnDefinitions.length; i < il; i++) {
            var col = vm.config.columnDefinitions[i];
            if ('dateObj' in col && col.dateObj) {
                val = formatDate(col.dateObj);
                itemkey = formatDate(item[col.binding]);
            } else if ('filterText' in col && col.filterText) {
                val = col.filterText;
                itemkey = item[col.binding];
            } else if ('selectText' in col && col.selectText) {
                val = col.selectText;
                if (val === 'All') {
                    val = undefined;
                }
                itemkey = item[col.binding];
            } else if ('comboboxObj' in col && col.comboboxObj) {
                val = col.comboboxObj.name;
                if (val === 'All') {
                    val = undefined;
                }
                itemkey = item[col.binding];
            }
            if (!val) {
                continue;
            }
            val = String(val);

            if (String(itemkey).toLowerCase().indexOf(val.toLowerCase()) < 0) {
                return false;
            }
        }

        // all passed
        return true;
    };

    function allColumnFilter(item) {
    //   var filter = (vm.searchBoxFilter) ? vm.searchBoxFilter.toLowerCase() : undefined;
    //   if (!filter) {
    //     return true;
    //   }
    //   var value;
    //   for (var key in item) {
    //     if (item.hasOwnProperty(key)) {
    //       //convert it to string
    //       value = item[key] + '';
    //       if (value.length && value.toLowerCase().indexOf(filter) > -1) {
    //         return true;
    //       }
    //     }
    //   }
    };

    //On Collection Changed, update total items to sync pagination
    function onCollectionChanged(cv) {
        //get grid's collection view total item count
        vm.config.totalItems = cv.totalItemCount;
    }
  }

  tbox.$inject = ['$timeout', '$templateCache', '$compile', '$parse'];

  function tbox($timeout, $templateCache, $compile, $parse) {
      return {
          restrict: 'AE',
          scope: {
              gridData: '=',
              config: '=',
              columnDefinitions: '=',
              desktopMode: '=?',
              boxOne: '=?',
              showFilters: '=?',
              hidePagination: '=?',
              transferItems: '&',
              control: '=',
              gridTemplateUrl: '=?',
              disableTransfer: '=?',
              childItemsPath: '=?'
          },
          controller: 'bentoFlexgridTBoxController',
          controllerAs: 'bentoFlexgridTboxCtrl',
          templateUrl: function(element, attrs) {
              return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/transfer_box/bento-flexgrid-transferbox-grid.html';
          },
          replace: true,
          link: function(scope, element, attrs, tBoxCtrl) {
              if (typeof wijmo === 'undefined') {
                  console.warn('Bento TransferBox relies on Wijmo FlexGrid, please make sure Wijmo files are included')
                  return;
              }

              //If 
              scope.$watch('gridTemplateUrl', function(tUrl) {
                  if (tUrl) {
                      var templateCache = $templateCache.get(tUrl);
                      $timeout(function() {
                          element.html(templateCache);
                          $compile(element.contents())(scope);
                      })
                  }
              });
              var filterTimeout;

              scope.control = {
                  toggleAll: tBoxCtrl.toggleAll
              };

              tBoxCtrl.onInputFocus = onInputFocus;

              scope.setupFilters = function setupFilters(grid) {
                  //Add new column header row for filters
                  var row = new wijmo.grid.Row();
                  grid.columnHeaders.rows.insert(1, row);
              }

              scope.$watch('childItemsPath',function(childItemsPath){
                  if(childItemsPath){
                      tBoxCtrl.childItemsPath = childItemsPath;
                  }
              });

              scope.updateFilter = function updateFilter(id) {

                  if (filterTimeout) {
                      $timeout.cancel(filterTimeout);
                  }
                  filterTimeout = $timeout(function() {
                      if (tBoxCtrl.config.collectionView) {
                          tBoxCtrl.config.collectionView.refresh();
                      }
                      tBoxCtrl.config.page = 1;
                      $timeout(function() {
                          var focusedID = '.transferbox-' + id;
                          setFocus(focusedID);
                      }, 100);
                  }, 300);
              }

              function onInputFocus(col, evt) {
                  var focusedID = '.transferbox-' + col.binding;
                  setFocus(focusedID);
              }

              function setFocus(focusedID) {
                  var focused = element[0].querySelector(focusedID);
                  if (focused) {
                      focused.focus();
                      var strLength = focused.value.length;
                      focused.setSelectionRange(strLength, strLength);
                  }
              }
          }
      }
  }
}());
angular.module('bento.transferbox')
	.controller('bentoFlexgridTBoxInputFilterController', tboxInputFilterController)
	.directive('bentoFlexgridTboxInputFilter', tboxInputFilter);


tboxInputFilterController.$inject = ['$timeout', '$scope', '$element', '$bentoServices']
/**
 * [tboxInputFilterController Input Filter Directive's Controller]
 * @param  {[type]} $timeout [description]
 * @param  {[type]} $scope   [description]
 * @param  {[type]} $element [description]
 * @return {[type]}          [description]
 */
function tboxInputFilterController($timeout, $scope, $element, $bentoServices) {
	var vm = this;
	var inputTimeout;

	$scope.$on('$destroy',vm.onDestroy);

	$timeout(function() {
		if (vm.bentoFlexgridTboxInputFilter && vm.bentoFlexgridTboxInputFilter.type === 'input') {
			vm.initFilter();
		}
	});
	/**
	 * [initFilter create input text field and add relevant event handling]
	 * @return {[type]} [description]
	 */
	vm.initFilter = function() {
		//DOM maninpulation in controller, but it's ok, it's a directive's controller
		//create input element
		vm.inputTextElement = document.createElement('input');
		vm.inputTextElement.type = "text";
		vm.inputTextElement.className = "form-control";
		//create input container element
		vm.inputElement = document.createElement('div');
		vm.inputElement.className = "input-filter";
		vm.inputElement.appendChild(vm.inputTextElement); //append input element into container
		vm.el = $element[0]; //get column element
		vm.eGrid = vm.el.parentElement; //get grid element
		vm.containerElement = vm.eGrid.parentElement; //get transfer box element
		vm.att = vm.el.attributes['binding']; //get binding attribute
		vm.filterContainer = vm.containerElement.querySelector('.input-filter-container');
		vm.filterContainer.appendChild(vm.inputElement); //append input container into transferbox element
		vm.inputTextElement.addEventListener('input', vm.onTextInput) //add event listener to input
		vm.inputTextElement.addEventListener('keyup', vm.onTextInput)
		vm.grid = wijmo.Control.getControl(vm.eGrid); //get grid control
		wijmo.assert(vm.grid instanceof wijmo.grid.FlexGrid);
		vm.col = vm.grid.columns.getColumn(vm.att.value); //get grid column
		wijmo.assert(vm.col instanceof wijmo.grid.Column);
		vm.grid.updatedView.addHandler(vm.resizeFilter); //add grid event handling when grid view is updated
	}


	/**
	 * [resizeFilter - Resize and position input text field to it's column header]
	 * @return {[type]} [description]
	 */
	vm.resizeFilter = function() {
		var pad = 40;
		var rc = vm.grid.columnHeaders.getCellBoundingRect(1, vm.col.index);
		var containerRect = vm.containerElement.getBoundingClientRect();
		//set input field position
		wijmo.setCss(vm.inputElement, {
			position: 'absolute',
			left: $bentoServices.isRTL() ? 'auto' : rc.left - containerRect.left - pad,
			right: $bentoServices.isRTL() ? containerRect.right - rc.right - pad : 'auto',
			top: 0,
			width: rc.width,
			height: vm.grid.columnHeaders.rows[1].renderHeight,
			borderRadius: '0px'
		});
		//set container's position
		wijmo.setCss(vm.filterContainer, {
			position: 'absolute',
			overflow: 'hidden',
			zIndex:1,
			top: rc.top - containerRect.top,
			left: $bentoServices.isRTL() ? 'auto' : pad,
			right: $bentoServices.isRTL() ? pad : 'auto',
			width: vm.grid.clientSize.width,
			height: vm.grid.columnHeaders.rows[1].renderHeight
		})
	}

	/**
	 * [onTextInput - handler for input event]
	 * @param  {[type]} e [event]
	 * @return {[type]}   [description]
	 */
	vm.onTextInput = function(e) {
		//throttle events 
		 if (inputTimeout) {
		 	$timeout.cancel(inputTimeout)
		 }
		//update two-way bound col.filterText
		$timeout(function(){
			vm.bentoFlexgridTboxInputFilterText = e.target.value;
		});
		inputTimeout = $timeout(function() {
			//let the filter in the bento-flexgrid-transferbox-grid-ng.js take it's filtering effect
			// console.log('text',vm.bentoFlexgridTboxInputFilterText)
			vm.grid.collectionView.refresh();
		 }, 200);
	}

	vm.onDestroy = function (){
		if(vm.grid){
			vm.grid.updatedView.removeHandler(vm.resizeFilter);
		}
		vm.inputTextElement.removeEventListener('input', vm.onTextInput);
		vm.inputTextElement.removeEventListener('keyup', vm.onTextInput);
	}
}

/**
 * [tboxInputFilter Directive, all functions in controller]
 * @return {[type]} [description]
 */
function tboxInputFilter() {
	return {
		restrict: 'A',
		priority: 110,
		controller: tboxInputFilterController,
		controllerAs: 'flexGridInputFilterCtrl',
		bindToController: {
			bentoFlexgridTboxInputFilter: '=',
			bentoFlexgridTboxInputFilterText: '='
		},
		link: function(scope, element, attrs, ctrl) {

		}
	}
}
(function(){
    'use strict';
    angular.module('bento.transferbox.basic',['bento.translate'])
    .component('bentoTransferbox',{
        templateUrl: '../templates/transfer_box_basic/bento-transferbox-base.html',
        bindings: {
            boxOneItemSource: '=',
            boxTwoItemSource: '=',
            columnDefinitions: '<',
            control: '=?',
            boxOneTitle: '<?',
            boxTwoTitle: '<?',
            infoShown: '<?',
            infoText: '<?',
            transferBtnTextOne: '<',
            transferBtnTextTwo: '<',
            height: '<',
            onBeforeTransfer: '&?',
            onTransfer: '&',
            uniqueKey: '<?',
            paginationInfoText: '<?',
            paginationGoText: '<?',
            paginationInfoPageText: '<?',
            searchText: '<?',
            gridTemplateUrl: '<?',
            disableTransfer: '<?',
            leftWidth: '<?'
        },
        controller: transferboxController
    });

    transferboxController.$inject = ['$timeout'];
    function transferboxController($timeout){
        var vm = this;
        var box1, box2;

        this.$doCheck = function () {
            if ( !angular.equals(vm.box1, box1)) {
                box1 = vm.box1;
                updateControl();
            }
            if ( !angular.equals(vm.box2, box2)) {
                box2 = vm.box2;
                updateControl();
            }
        }
        this.transferItemsOne = function transferItemsOne(selectedItems, remainingItems){
            var gridTwoItems = selectedItems.concat(vm.boxTwoItemSource);
            transferItems(remainingItems,gridTwoItems);
        }

        this.transferItemsTwo = function transferItemsTwo(selectedItems, remainingItems){
            var gridOneItems = selectedItems.concat(vm.boxOneItemSource);
            transferItems(gridOneItems,remainingItems);
        }

        function updateControl(){
            $timeout(function(){
                vm.control = {
                    gridOne: vm.box1,
                    gridTwo: vm.box2
                };
            });
        }

        function transferItems(gridOneItems,gridTwoItems){
            vm.boxOneItemSource = gridOneItems;
            vm.boxTwoItemSource = gridTwoItems;
            vm.onTransfer({
                gridDataOne: gridOneItems,
                gridDataTwo: gridTwoItems
            })
        }
    }
}());
(function(){
    'use strict'
    angular.module('bento.transferbox.basic')
    .component('bentoBasicTbox',{
        templateUrl: '../templates/transfer_box_basic/bento-transferbox-grid.html',
        bindings: {
            gridData: '=',
            config: '<',
            columnDefinitions: '<',
            boxOne: '<?',
            transferItems: '&',
            infoShown: '<?',
            control: '=',
            boxTitle: '<?',
            subTitle: '<?',
            gridTemplateUrl: '<?',
            disableTransfer: '<?',
            searchText: '<?',
            transferBtnText: '<?',
            uniqueKey: '<?',
            height: '<?',
            paginationInfoText: '<',
            paginationGoText: '<',
            paginationInfoPageText: '<'
        },
        controller: tboxController
    });

    tboxController.$inject = ['$element','$timeout'];
    function tboxController($element,$timeout){
            var vm = this;
            vm.control = this;
            var itemSource = undefined;
            var headerChecked = undefined;
            var headerCheckbox = $element[0].querySelector('#header-checkbox');
            var filteredData = [];
            var sortDirections = ['','asc','desc'];
            var headerPaginationHeight = 172;
            var tboxHeight = vm.height;
            vm.gridHeight =  tboxHeight - headerPaginationHeight;
            vm.tableStyle = {
                height: vm.gridHeight + 'px'
            }
            vm.colHeaderSort = {};
            vm.renderData = undefined;
            vm.uniqueKey = vm.uniqueKey || 'id';
            vm.selection = [];
            vm.hasSelection = false;
            vm.totalSelected = 0;
            vm.pagination = {
                currentPage: 1,
                pageSize: 10
            }
            vm.activeCol = undefined;
            vm.activeColDirection = '';

            this.$onInit = function(){
                this.checkbox = $element[0].querySelector('#myCheckbox');
                this.control = {
                    toggleAll: vm.toggleAll,
                    gridData: vm.gridData
                };
            }
            this.$doCheck = function () {
                if ( !angular.equals(vm.gridData, itemSource)) {
                    itemSource = vm.gridData.slice();
                    resetAll();
                    showRenderedData();
                }
                if( !angular.equals(vm.headerCheckboxModel, headerChecked)){
                    checkAll();
                    headerChecked = vm.headerCheckboxModel;
                }
                if( !angular.equals(vm.height, tboxHeight)){
                    tboxHeight = vm.height;
                    vm.gridHeight = tboxHeight - headerPaginationHeight;
                    vm.tableStyle = {
                        height: vm.gridHeight+'px'
                    }
                }
            }
            this.onPageChanged = function onPageChanged(page){
                showRenderedData();
            }
            this.onSizeChanged = function onSizeChanged(size){
                vm.pagination.currentPage = 1;
                showRenderedData();
            }
            this.onCheckboxChange = function onCheckboxChange(){
                vm.totalSelected = getSelectedCount();
                if(vm.totalSelected > 0 && vm.totalSelected !==vm.gridData.length){
                    headerCheckbox.indeterminate = true;
                    // vm.headerCheckboxModel = false;
                } else if(vm.totalSelected > 0 && vm.totalSelected === vm.gridData.length) {
                    headerCheckbox.indeterminate = false;
                    vm.headerCheckboxModel = true;
                } else {
                    headerCheckbox.indeterminate = false;
                    vm.headerCheckboxModel = false;
                }
            }
            this.transferItemsClick = function onTransferItemsClick(){
                var splitItems = getSplitItems();
                if(splitItems){
                    vm.transferItems(splitItems);
                }
            }
            this.onFilterInput = function onFilterInput(){
                $timeout(function(){
                    showRenderedData();
                },100)
            }
            this.onRowClick = function onRowClick(item){
                vm.selection[item[vm.uniqueKey]] = !vm.selection[item[vm.uniqueKey]];
                vm.onCheckboxChange()
            }
            this.onHeaderClick = function onHeaderClick(col){
                vm.activeCol = col.binding;
                // reset other sort
                for (var property in vm.colHeaderSort) {
                    if (vm.colHeaderSort.hasOwnProperty(property)) {
                        if(property !== vm.activeCol){
                            vm.colHeaderSort[property] = undefined;
                        }
                    }
                }
                if(vm.colHeaderSort[col.binding] === undefined){
                    vm.colHeaderSort[col.binding] = {
                        count: 0,
                        sortDirection: ''
                    };
                } 
                vm.colHeaderSort[col.binding].count ++;
                vm.colHeaderSort[col.binding].count = vm.colHeaderSort[col.binding].count % 3;
                vm.colHeaderSort[col.binding].sortDirection = sortDirections[vm.colHeaderSort[col.binding].count];
                showRenderedData();
            }

            function resetAll(){
                vm.selection = [];
                vm.headerCheckboxModel = false;
                headerCheckbox.indeterminate = false;
                vm.hasSelection = false;
                vm.filterValue = '';
                vm.activeCol = undefined;
                filteredData = [];
                vm.totalSelected = 0;
                vm.colHeaderSort = {};
            }

            function getSplitItems(){
                if (!vm.gridData) { return; }
                if (vm.selection.length === 0) { return; }
                var selectedItems = [];
                var remainingItems = [];
                for(var i = 0, ttl=vm.gridData.length; i < ttl; i++){
                    if(vm.selection[vm.gridData[i][vm.uniqueKey]] === true){
                        selectedItems.push(vm.gridData[i]);
                    } else {
                        remainingItems.push(vm.gridData[i]);
                    }
                }

                return {
                    selectedItems: selectedItems,
                    remainingItems: remainingItems
                }
            }
            function showRenderedData(){
                // var sortedData = ;
                var renderData = vm.gridData;
                if(vm.activeCol){
                    renderData = sortData(renderData, vm.activeCol, vm.colHeaderSort[vm.activeCol].sortDirection);
                }
                // if filtered
                if(vm.filterValue && vm.filterValue.length){
                    renderData = renderData.slice().filter(function(item){
                        var searchStr = '';
                        if(vm.columnDefinitions) {
                            vm.columnDefinitions.forEach(function(colDef){
                                if(item[colDef.binding]){
                                    searchStr += String(item[colDef.binding]).toLowerCase();
                                }
                            });
                        }
                        return searchStr.indexOf(vm.filterValue.toLowerCase()) !== -1;
                    });
                    filteredData = renderData.slice();
                } else {
                    filteredData = [];
                }
                vm.pagination.totalItems = renderData.length;
                var startIndex = (vm.pagination.currentPage - 1) * vm.pagination.pageSize;
                vm.renderData = renderData.slice().splice(startIndex, vm.pagination.pageSize);
            }
            // Multi-select - check if all items are selected
            function getSelectedCount(){
                if (!vm.gridData) { return false; }
                if (vm.selection.length === 0) { return false; }

                var count = 0;
                for(var i = 0, ttl=vm.selection.length; i < ttl; i++){
                    if(vm.selection[i] === true){
                        count ++;
                    }
                }
                if(count > 0){
                    vm.hasSelection = true;
                } else {
                    vm.hasSelection = false;
                }
                return count;
            }

            vm.toggleAll = function(){
                vm.headerCheckboxModel = !vm.headerCheckboxModel;
                headerCheckbox.indeterminate = false;
                checkAll();
            }
            function checkAll() {
                if (!vm.gridData) {return;}
                if (!vm.headerCheckboxModel) {
                    vm.selection = [];
                    vm.hasSelection = false;
                    // vm.totalSelected = 0;
                } else if (vm.filterValue && vm.filterValue.length) {
                    vm.selection = [];
                    vm.hasSelection = false;
                    if(filteredData.length){
                        vm.hasSelection = true;
                    }
                    filteredData.forEach(function(item){
                        vm.selection[item[vm.uniqueKey]] = true;
                    });
                } else {
                    if(vm.gridData.length){
                        vm.hasSelection = true;
                    }
                    vm.gridData.forEach(function(item){
                        vm.selection[item[vm.uniqueKey]] = true;
                    });
                }
                vm.totalSelected = getSelectedCount();
            }

            /** Returns a sorted copy of the data. */
            function sortData(data, colID, sortDirection){
                // return original data if sort reset
                if (!colID || !sortDirection || sortDirection === '') { return data; }
                // return a copy of the data sorted
                return heapSort(data.slice(), colID, sortDirection);
            }

            function heapSort(array, colID, sortDirection) {
                function heapify(array, index, heapSize) {
                    var left = 2 * index + 1,
                        right = 2 * index + 2,
                        largest = index;
                 
                    if (left < heapSize && (sortDirection === 'asc' ? array[left][colID] > array[index][colID] : array[left][colID] < array[index][colID])) {
                        largest = left;
                    }

                    if (right < heapSize && (sortDirection === 'asc' ? array[right][colID] > array[largest][colID] : array[right][colID] < array[largest][colID])) {
                        largest = right;
                    }
                 
                    if (largest !== index) {
                        var temp = array[index];
                        array[index] = array[largest];
                        array[largest] = temp;
                        heapify(array, largest, heapSize, colID);
                    }
                }

                function buildMaxHeap(array) {
                    for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
                        heapify(array, i, array.length);
                    }
                    return array;
                }
                
                var size = array.length,
                    temp;

                buildMaxHeap(array);

                for (var i = array.length - 1; i > 0; i -= 1) {
                    temp = array[0];
                    array[0] = array[i];
                    array[i] = temp;
                    size -= 1;
                    heapify(array, 0, size);
                }

                return array;
                
            };
        }
}());
(function (angular, undefined) {
  "use strict";

  var CHECKBOX = '-checkbox';
  var NODE_HIDDEN_PROP = '$$bentoNodeHidden';

  // Provides lazy loading to enhance initial load time
  angular.module('bento.tree', ['bento.services'])
    // Bento Tree Directive
    .directive('bentoTree', [
      '$compile',
      '$timeout',
      'treeSelection',
      'treeHelper',
      '$recursionHelper',
      function ($compile, $timeout, treeSelection, treeHelper, $recursionHelper) {

        return {
          restrict: 'A',
          scope: {
            checkboxModel: '@',
            collapsingCallback: '=', // Two way binding is needed for direct function
            // reference
            expandingCallback: '=', // Two way binding is needed for direct function
            // reference
            expandOnlyModel: '@', // Model to determine if the current node can only
            // expand and collapse
            multiSelect: '=',
            nodeChildren: '@',
            onCheckboxChange: '=', // Two way binding is needed for direct function
            // reference
            secondTreeIcon: '@',
            selectableModel: '@', // Model to determine if the node is selectable or
            // not
            selectAsCheck: '=',
            selectCallback: '=', // Two way binding is needed for direct function
            // reference
            selectModel: '@', // Selection Model
            treeCollapsed: '=',
            treeDisabled: '=', // Private API
            treeIcon: '@',
            treeId: '@',
            treeLabel: '@',
            treeModel: '=',
            treeSelectionHelper: '=?', // **Internal Use** forwarded TreeSelectionHelper
            independentCheckbox: '&', // Make checkboxes to be independent from hierachical relationships
            useCheckbox: '=',
            searchable: '&', // Flag when the tree is searchable
            navMode: '&', // Turn tree into nav mode
            showExpandCollapseAllButtons: '&', // Show "Expand/Collapse All" buttons
            treeLevel: '&' // Current node level (depth from the root)
          },
          templateUrl: function (element, attrs) {
            return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/tree/bento-tree.html'
          },
          replace: true,
          compile: function (element) {
            // Use the compile function from the RecursionHelper,
            // And return the linking function(s) which it returns
            return $recursionHelper.compile(element);
          },
          controller: 'mainTreeController',
          controllerAs: '$ctrl',
        };
      }
    ])
    // Tree selection factory
    .factory('treeSelection', function () {

      var TreeSelectionHelper = function () {
        var self = this;

        this.node = [];

        this.setRootElement = function (treeRootElement) {
          self.rootElement = treeRootElement;
        };

        this.getRootElement = function () {
          return self.rootElement;
        };

        this.getClickableNodes = function () {
          if (self.rootElement) {
            var nodes        = self.rootElement[0].querySelectorAll('.bento-tree-item-cta:not(.bento-tree-item-static)'),
                disabledNodes= Array.from(self.rootElement[0].querySelectorAll('.bento-tree-disabled .bento-tree-item-cta')),
                visibleNodes = [],
                node;


            // find out if the nodes are clickable aka visible
            for (var i = 0, len = nodes.length; i < len; i++) {
              node = nodes[i];
              if (node.offsetWidth > 0 && node.offsetHeight > 0 && disabledNodes.indexOf(node) < 0) {
                visibleNodes.push(node);
              }
            }

            return visibleNodes;
          }
        };

        this.findElement = function (array, child, label, id) {
          var flag = false;
          for (var i = array.length - 1; i >= 0; i--) {
            if ((array[i])[label] === id) {
              this.clearNodes();
              flag = true;
              if (typeof array[i].collapsed === 'undefined') {
                array[i].collapsed = false;
              }
              array[i].selected = 'selected';
              this.addToSelection(array[i]);
              break;
            } else {
              if (angular.isArray((array[i])[child])) {
                flag = this.findElement((array[i])[child], child, label, id);
                if (flag) {
                  if (typeof array[i].collapsed === 'undefined') {
                    array[i].collapsed = false;
                  }
                  break;
                }
              }
            }
          }
          return flag;
        };

        /**
         * Add a node into selection
         * @param _node
         * @returns {boolean} - Tells if the node is already in selection or not
         */
        this.addToSelection = function (_node) {
          if (!this.contains(_node)) {
            this.node.push(_node);
            return true;
          }

          return false;
        };

        this.contains = function (_node) {
          return this.node.indexOf(_node) > -1;
        };

        this.getSelection = function () {
          return this.node;
        };

        this.removeFromSelection = function (_node) {
          var index = this.node.indexOf(_node);
          this.node.splice(index, 1);
        };

        this.clearNodes = function (node, itemsProp) {

          // Clear all
          // We need to clear everything
          if (typeof node == 'undefined') {
            this.node = [];
            return;
          }

          // Clearing only the selected node and its childnNodes
          var items = node[itemsProp],
            index = this.node.indexOf(node);

          // We remove nodes
          if (index > -1) {
            this.node.splice(index, 1);
          }

          if (Array.isArray(items)) {
            for (var i = 0, len = items.length; i < len; i++) {
              self.clearNodes(items[i], itemsProp);
            }
          }
        };

        this.findSelectElement = function (node, child, label, id) {
          return this.getSelection();
        };

      };

      var getHelper = function () {
        return new TreeSelectionHelper();
      };

      return {
        getHelper: getHelper
      };
    })

    // Tree Helper factory
    .factory('treeHelper', function () {

      /**
       * Get the Boolean from a node selection
       * @param scope
       * @param node
       */
      function getSelectModelValue(scope, node) {
        if (typeof scope.selectModel === 'undefined' ||
          (typeof scope.selectModel === 'string' && scope.selectModel === '')) {
          return node._selected;
        }
        return node[scope.selectModel];
      }

      /**
       * Set the Selection Boolean to a node
       * @param scope
       * @param node
       */
      function setSelectModelValue(scope, node, value) {
        if (typeof scope.selectModel === 'undefined' ||
          (typeof scope.selectModel === 'string' && scope.selectModel === '')) {
          node._selected = value;
        } else {
          node[scope.selectModel] = value;
        }
      }

      /**
       * Search and hide nodes based on search string
       * @param {Array} nodes 
       * @param {*} labelProp 
       * @param {*} itemsProp 
       */
      function searchAndMark(search, nodes, labelProp, itemsProp) {
        var node;
        var hasSelection;
        for (var i = 0; i < nodes.length; i++) {
          node = nodes[i];
          var childrenSelected = false;
          var items = node[itemsProp];
          
          if (items && items.length) {
            childrenSelected = searchAndMark(search, items, labelProp, itemsProp);
          }

          if (!childrenSelected) {
            // None of its children is selected
            if (search && search.length > 0) {
              if (node[labelProp].toLowerCase().indexOf(search) > -1 ) {
                // Has match for this node
                node[NODE_HIDDEN_PROP] = false;
                hasSelection = true;
              } else {
                node[NODE_HIDDEN_PROP] = true;
              }
            } else {
              // Search is empty => reset
              node[NODE_HIDDEN_PROP] = false;
              hasSelection = true;
            }
          } else {
            node[NODE_HIDDEN_PROP] = false;
            hasSelection = true;
          }
        }

        return hasSelection;
      }

      /**
       * Expand Collapse node and its offspring
       * @param expand
       */
      function expandNodeAndOffspring(node, nodeChildren, expand) {
        var children;

        if (Array.isArray(node)) {
          children = node;
        } else {
          children = node[nodeChildren];
          node.collapsed = !expand;
        }

        if (Array.isArray(children)) {
          for (var i = 0, len = children.length; i < len; i++) {
            expandNodeAndOffspring(children[i], nodeChildren, expand);
          }
        }
      }

      /**
       * Check / Uncheck offspring of a node based on its status
       * @param node
       * @param nodeChildrenName
       * @param checkboxModelName
       * @param checked
       */
      function checkOffspring(node, nodeChildrenName, checkboxModelName, checked) {
        // Node is disabled don't check it's offspring
        if (node.disabled) {
          return;
        }

        //console.log('what');
        if (typeof checked !== 'undefined') {
          if (!node.hideCheckbox) {
            node[checkboxModelName] = checked;
            node._indeterminate = false;
            document.getElementById(node.$$bentoTreeId + CHECKBOX).indeterminate = false;
          }
        }

        // recursively check/uncheck the offspring of node
        if (!!node[nodeChildrenName] && node[nodeChildrenName].length > 0) {
          var hasCheckedChildren = false;
          for (var i = 0; i < node[nodeChildrenName].length; i++) {
            hasCheckedChildren = checkOffspring(
              node[nodeChildrenName][i],
              nodeChildrenName,
              checkboxModelName,
              node[checkboxModelName]) || hasCheckedChildren;
          }

          //indeterminate the current checkbox
          if (hasCheckedChildren && !node[checkboxModelName]) {
            node._indeterminate = true;
            var treeEl = document.getElementById(node.$$bentoTreeId + CHECKBOX);
            if (treeEl) {
              treeEl.indeterminate = true;
            }
          }
        }

        return node[checkboxModelName] || node._indeterminate;
      }

      /**
       * Help to check / uncheck / indeterminate check boxes on one root branch
       * @param node
       * @param nodeChildrenName
       * @param checkboxModelName
       */
      function indeterminateRoot(scope, nodeChildrenName, checkboxModelName) {
        var nodeScope = scope,
          parentScope = // walk up the scope hierarchy
          (nodeScope &&
            nodeScope.$parent &&
            nodeScope.$parent.$parent) ?
          nodeScope.$parent.$parent.$parent : undefined,
          parentNode = (parentScope && parentScope.node) ? parentScope.node : undefined;

        if (!!parentNode) {
          //check siblings and see if checked
          var siblings = parentNode[nodeChildrenName];
          var hasChecked = false;
          var hasUnchecked = false;
          var hasIndeterminate = false;
          for (var i = 0; i < siblings.length; i++) {
            var _node = siblings[i];

            // Ignore .hideCheckbox nodes
            if (_node.hideCheckbox) {
              continue;
            }

            if (_node._indeterminate) {
              hasIndeterminate = true;
            } else if (!_node[checkboxModelName]) {
              hasUnchecked = true;
            } else {
              hasChecked = true;
            }
          }

          // There are three conditions
          // 1. All siblings are checked without indeterminate
          // 2. None of the siblings are checked without indeterminate
          // 3. Some siblings are checked with indeterminate
          var checkbox = document.getElementById(parentNode.$$bentoTreeId + CHECKBOX) || {};

          // Case 1:
          if (!hasUnchecked && hasChecked && !hasIndeterminate) {
            parentNode[checkboxModelName] = true;
            checkbox.indeterminate = false;
            parentNode._indeterminate = false;
          } else
            // Case 2:
            if (hasUnchecked && !hasChecked && !hasIndeterminate) {
              parentNode[checkboxModelName] = false;
              checkbox.indeterminate = false;
              parentNode._indeterminate = false;
            } else
              // Case 3:
              if ((hasUnchecked && hasChecked) || hasIndeterminate) {
                parentNode[checkboxModelName] = false;
                parentNode._indeterminate = true;
                checkbox.indeterminate = true;
              }

          // recursive
          indeterminateRoot(parentScope, nodeChildrenName, checkboxModelName);
        }
      }

      /**
       * Get tree root element
       * @param  {element} element - current element that is part of the tree
       * @return {element} root element
       */
      function getTreeRootElement(element) {
        return el;
      }

      return {
        indeterminateRoot: indeterminateRoot,
        checkOffspring: checkOffspring,
        getSelectModelValue: getSelectModelValue,
        setSelectModelValue: setSelectModelValue,
        getTreeRootElement: getTreeRootElement,
        expandNodeAndOffspring: expandNodeAndOffspring,
        searchAndMark: searchAndMark
      };
    })
    // Main Tree Controller
    .controller('mainTreeController', [
      '$scope',
      '$element',
      'treeSelection',
      'treeHelper',
      '$timeout',
      '$bentoServices',
      function ($scope, $element, treeSelection, treeHelper, $timeout, $bentoServices) {
        var ctrl = this;

        ctrl.branchReady = false;

        $timeout(function(){
          ctrl.branchReady = true;
        }, 
          10 // give 10ms delay for each level
        );
        // treeId defines the root of this tree
        if (typeof $scope.treeSelectionHelper === 'undefined') {
          $scope.treeSelectionHelper = treeSelection.getHelper();
          $scope.treeSelectionHelper.setRootElement($element);
          $scope.treeSelectionHelper.rootCtrl = ctrl;
          // Add a root class
          $element.addClass('bento-tree-root');

          ctrl.isRoot = true;

          // Watch main data object to re-adjust the width
          $scope.$watchCollection('treeModel', function (newTreeModel) {
            // Tree model is not ready
            if (typeof newTreeModel === 'undefined') {
              return;
            }

            if(!$scope.independentCheckbox()){
              $timeout(function () {
                // Update checks
                for (var j = 0; j < $scope.treeModel.length; j++) {
                  treeHelper.checkOffspring($scope.treeModel[j], $scope.nodeChildren, $scope.checkboxModel);
                }
              });
            }
            

            processTree(newTreeModel);

            // Reset search
            ctrl.search = '';
          });
        }

        function initCollapse(treeModel) {
          var i, len, child;
          //check to see if we need to collapse by default
          if (treeModel.length > 0) {
            var children = treeModel;
            if (typeof $scope.treeCollapsed === 'undefined') {
              for (i = 0, len = children.length; i < len; i++) {
                child = children[i];
                if (typeof child.collapsed === 'undefined') {
                  child.collapsed = false;
                }
              }
            } else {
              for (i = 0, len = children.length; i < len; i++) {
                child = children[i];
                if (typeof child.collapsed === 'undefined') {
                  child.collapsed = $scope.treeCollapsed;
                  if (Array.isArray(child.items)) {
                    initCollapse(child.items);
                  }
                }
              }
            }
          }
        }

        function processTree(treeModel) {

          initCollapse(treeModel);

          /*
           performs the necessary action if the data model contains the value for selected
           */
          $timeout(function () {
            $scope.treeSelectionHelper.clearNodes();
            updateSelectionInfo(treeModel);
          });

          /**
           * Update node selection info in helper
           * @param treeNodeCollection
           */
          function updateSelectionInfo(treeNodeCollection) {
            for (var i = 0; i < treeNodeCollection.length; i++) {
              var nodeModel = treeNodeCollection[i];
              if (treeHelper.getSelectModelValue($scope, nodeModel)) {
                $scope.labelSelect(nodeModel);
                $scope.treeSelectionHelper.addToSelection(nodeModel);
              }

              if (nodeModel[$scope.nodeChildren] && Array.isArray(nodeModel[$scope.nodeChildren])) {
                updateSelectionInfo(nodeModel[$scope.nodeChildren]);
              }
            }
          }
        }

        $scope.currentLevel = typeof $scope.treeLevel() === 'undefined' ? 1 : $scope.treeLevel() + 1;

        ctrl.$postLink = function () {
          // Add level CSS class
          var treeBaseEl = $element[0].querySelector('.bento-tree-branch-base');
          var levelClassName = 'bento-tree-node-level-' + $scope.currentLevel;
          treeBaseEl.classList.add(levelClassName);

          // Add no-expand-collapse class
          if (ctrl.isRoot && $scope.navMode()) {
            $element.addClass('bento-tree-nav-mode');
          }
        };

        /**
         * Method to expand all nodes
         */
        $scope.expandAll = function () {
          treeHelper.expandNodeAndOffspring($scope.treeModel, $scope.nodeChildren, true);
        };

        /**
         * Method to collapse all nodes
         */
        $scope.collapseAll = function () {
          treeHelper.expandNodeAndOffspring($scope.treeModel, $scope.nodeChildren, false);
        };

        /**
         * Generate Tree ID on the fly and preserve previously created node ID
         * @param node
         * @returns {string|*}
         */
        $scope.getTreeId = function (node) {
          if (typeof node.$$bentoTreeId === 'undefined') {
            node.$$bentoTreeId = 'bento-tree-node-' + Math.round(Math.random() * 1000000000000);
          }
          return node.$$bentoTreeId;
        };

        /**
         * On check box change
         *
         * We need to use `ng-click` instead of `ng-chage` due to odd behaviors on IE browsers
         * where `indeterminate` state click does not count as a "change state"
         *
         * Because `ng-click` fires before the model changes it's variable, we need to update the
         * tree models when rendering is done
         *
         */
        $scope.checkboxClick = function (_node) {
          // Bypass if this node and branch is disabled
          if ($scope.treeModel.disabled || $scope.treeDisabled) {
            return;
          }

          var parentScope = this.$parent,
            node = _node || parentScope.node,
            checkbox = document.getElementById(node.$$bentoTreeId + CHECKBOX);

          // remove indeterminate
          node._indeterminate = false;
          if (checkbox) {
            checkbox.indeterminate = false;
          }

          // setting timeout here to make sure that all models are updated
          $timeout(function () {
            if(!$scope.independentCheckbox()){
              // Only check descendants and validate ancesters when it's not independent
              // check all children
              treeHelper.checkOffspring(node, $scope.nodeChildren, $scope.checkboxModel);

              // indeterminate the whole branch to check / uncheck / indeterminate checkboxes
              treeHelper.indeterminateRoot(parentScope, $scope.nodeChildren, $scope.checkboxModel);
            }

            // Fire callback
            if (!!$scope.onCheckboxChange) {
              $scope.onCheckboxChange(node);
            }
          });
        };

        /**
         * Select and de-select a node based on `multiSelect` flag
         */
        $scope.labelSelect = function (node, event) {
          // Bypass if this node and branch is disabled
          if ($scope.treeModel.disabled || $scope.treeDisabled) {
            return;
          }

          var elementNode = typeof (node) === 'undefined' ? this.node : node;

          if (typeof $scope.selectableModel !== 'undefined' &&
            typeof node[$scope.selectableModel] === 'boolean' && !node[$scope.selectableModel]
          ) {
            return;
          }

          if (!$scope.navMode()) {
            // Forward click action to the checkbox when doing select as check
            if ($scope.selectAsCheck) {
              elementNode[$scope.checkboxModel] = !elementNode[$scope.checkboxModel];
              $scope.checkboxClick(elementNode);
              return;
            } else
              // Forward a label select as tree toggle
              if ($scope.expandOnlyModel && elementNode[$scope.expandOnlyModel]) {
                $scope.toggleCollapse(elementNode);
                return;
              }
          } else if ($scope.treeSelectionHelper.contains(node)) {
            // In Nav Mode, there is deselecting so we skip
            return;
          }

          if ($scope.selectCallback && event) {
            // Fire select callback and bypass if it returns a `false`
            // This only generate callback when `labelSelect` is triggered by user
            var reply = $scope.selectCallback(elementNode, !elementNode[$scope.selectModel], event);
            // replay is `false`
            if (typeof reply === 'boolean' && !reply) {
              return;
            }
          }

          //here where we would set multi select
          var currentNode = $scope.treeSelectionHelper.getSelection();
          if($scope.multiSelect && !$scope.navMode()){
            var nodeArray = currentNode.filter(function (node) {
              if (node === elementNode) {
                treeHelper.setSelectModelValue($scope, node, false);
                return true;
              }
              return false;
            });
            if (nodeArray.length > 0) {
              treeHelper.setSelectModelValue($scope, nodeArray[0], false);
              $scope.treeSelectionHelper.removeFromSelection(elementNode);
            } else {
              treeHelper.setSelectModelValue($scope, elementNode, true);
              $scope.treeSelectionHelper.addToSelection(elementNode);
            }
          }else {
            // This is not a multiselect Tree

            angular.forEach(currentNode, function (node) {
              // Flip all selected node(s) to not selected
              treeHelper.setSelectModelValue($scope, node, false);
            });

            if ($scope.treeSelectionHelper.contains(elementNode)) {
              // Remove everything from selection
              $scope.treeSelectionHelper.clearNodes();
            } else {
              // Set the elementNode to selected then add it to selection
              treeHelper.setSelectModelValue($scope, elementNode, true);
              $scope.treeSelectionHelper.clearNodes();
              $scope.treeSelectionHelper.addToSelection(elementNode);
            }

            if($scope.navMode()){
              $scope.treeSelectionHelper.rootCtrl.search = '';
              $scope.treeSelectionHelper.rootCtrl.onSearchChange();
            }
          } 

        };

        /**
         * On tree item keyboard key press
         * @param  {event} event Keyboard event
         * @return {}
         */
        $scope.onTreeItemKeydown = function (event, node) {
          /*
           37: left
           38: top
           39: right
           40: down
           */
          switch (event.keyCode) {
            case 13:
            case 32:
              event.preventDefault();
              event.stopPropagation();
              break;
            case 37: // left
              // collapse node
              if (!node.collapsed && node.items) {
                node.collapsed = true;
                fireCollapseCallback(node);
              }
              // move up one level and focus the parent node
              else if ($scope.$parent.node) {
                $scope
                  .treeSelectionHelper
                  .getRootElement()[0]
                  .querySelector('#' + $scope.$parent.node.$$bentoTreeId + ' > .bento-tree-item-cta')
                  .focus();
              }

              event.preventDefault();
              event.stopPropagation();
              break;
            case 38: // top
              fucusToAvailableNodeWith(event.currentTarget, -1);
              event.preventDefault();
              event.stopPropagation();
              break;
            case 39: // right
              if (node.items) {
                if (node.collapsed) {
                  node.collapsed = false;
                  fireCollapseCallback(node);

                  // Auto focus the first child node
                  // Similar to Windows File Explorer
                  if (node.items.length > 0) {
                    $timeout(function () {
                      fucusToAvailableNodeWith(event.target, 1);
                    });
                  }
                } else if (node.items.length > 0) {
                  fucusToAvailableNodeWith(event.currentTarget, 1);
                }
              }
              event.preventDefault();
              event.stopPropagation();
              break;
            case 40: // down
              fucusToAvailableNodeWith(event.currentTarget, 1);
              event.preventDefault();
              event.stopPropagation();
              break;
          }
        };

        function fucusToAvailableNodeWith(currentNode, step) {
          var currentIndex, ctaArray;
          ctaArray = $scope.treeSelectionHelper.getClickableNodes();
          currentIndex = ctaArray.indexOf(currentNode);
          ctaArray[(currentIndex + ctaArray.length + step) % ctaArray.length].focus();
        }

        /**
         * Node keyboard event listener on keyup
         * @param event
         * @param node
         */
        $scope.onTreeItemKeyup = function (event, node) {
          if (event.keyCode === 13 || event.keyCode === 32) {
            $scope.labelSelect(node, event);
          }
        };

        /**
         * This method is used by the Template to get node CSS class
         * @param node
         */
        $scope.getNodeSelectionClass = function (node) {
          var css = '';

          // See if this node is selected
          if (treeHelper.getSelectModelValue($scope, node)) {
            css = 'selected';
          } else {
            css = '';
          }

          // If this node is selectable
          if (typeof $scope.selectableModel === 'undefined' ||
            typeof node[$scope.selectableModel] === 'undefined' ||
            (typeof node[$scope.selectableModel] === 'boolean' && node[$scope.selectableModel])) {
            css += ' bento-selectable';
          }

          // If this node is disabled
          if (node.disabled) {
            css += ' bento-tree-disabled';
          }

          return css;
        };

        /**
         * Expand or Collapse a branch
         */
        $scope.toggleCollapse = function (node) {
          node.collapsed = !node.collapsed;
          fireCollapseCallback(node);
        };

        ctrl.onSearchChange = function () {
          treeHelper.searchAndMark(ctrl.search.toLowerCase(), $scope.treeModel, $scope.treeLabel, $scope.nodeChildren);
        };

        function fireCollapseCallback(node) {
          if (!node.collapsed) {
            // Make sure if the callback exists
            if (typeof $scope.expandingCallback !== 'undefined' && $scope.expandingCallback) {
              $scope.expandingCallback(node);
            }
          } else {
            // Make sure if the callback exists
            if (typeof $scope.collapsingCallback !== 'undefined' && $scope.collapsingCallback) {
              $scope.collapsingCallback(node);
            }
          }
        }

        /**
         * not used at the moment
         */
        $scope.loadMore = function () {
          $scope.limitAmount += 20;
        };

        /**
         * Clean memory
         */
        $scope.$on('$destroy', function (event) {
          if (ctrl.isRoot) {
            $scope.treeSelectionHelper.clearNodes($scope.node, $scope.nodeChildren);
          }
        });
      }
    ])

    /**
     * Directive for lazy loading
     */
    .directive('lastWatch', [
      '$timeout',
      function ($timeout) {
        return {
          restrict: 'A',
          link: function (scope) {
            scope.$watch('$last', function (value) {
              if (value) {
                $timeout(function () {
                  scope.$parent.loadMore();
                });
              }
            });
          }
        };
      }
    ]);
}(window.angular));

(function(angular, undefined) {
  'use strict';

  var CHECKBOX = '-checkbox';
  var NODE_HIDDEN_PROP = '$$bentoNodeHidden';
  var LEVEL_PROP = '$$buiItemLevel';
  var INDENTATION_PADDING = '$$buiItemIndentation';
  var treeViewID = 0;
  var INDENTATION = '16';

  BentoTreeViewController.$inject = [
    '$q',
    '$scope',
    '$element',
    '$bentoKeyboard',
    '$bentoServices',
    '$sanitize'
  ];

  function BentoTreeViewController(
    $q,
    $scope,
    $element,
    $keyboard,
    $bentoServices,
    $sanitize
  ) {
    var ctrl = this;
    var parentMap;
    var btDeferred;
    var btDom;
    ctrl.$parent = $scope.$parent;
    ctrl.checkedItems = [];
    ctrl.selectedItems = [];
    ctrl.isRTL = false;
    ctrl.indentationPx = INDENTATION;
    ctrl.uid = 'buiTreeView' + treeViewID++;
    ctrl.indeterminateProp = '$' + ctrl.uid + 'Indeterminate';
    ctrl.btControl = {};
    ctrl.btColumnDefinitions = [
      {
        type: 'template',
        template: 'tree-view-default-cell-template'
      }
    ];

    ctrl.rowTemplate = 'tree-view-default-row-template';

    // Flattened tree data for UI rendering
    ctrl._itemsFlatData = [];

    ctrl.toggleCollapse = function(item) {
      item.collapsed = !item.collapsed;

      if (item.collapsed) {
        ctrl.removeDescendants(item);
        ctrl.onCollapsing({item:item});
      } else {
        ctrl.insertDescendants(item);
        ctrl.onExpanding({item: item});
      }
      return ctrl.btControl.reloadTable(true);
    };

    /**
     * Draw indentation
     */
    ctrl.getIndentation = function(row) {
      if (ctrl.isRTL) {
        return { 'padding-right': row[INDENTATION_PADDING] };
      }
      return { 'padding-left': row[INDENTATION_PADDING] };
    };

    /**
     * On init lifecycle hook
     */
    ctrl.$onInit = function() {
      // Check if this component is in RTL environment
      // Component needs to refresh
      ctrl.isRTL = $bentoServices.isRTL($element[0]);

      // Expose this main controller
      ctrl.treeViewController = this;

      // Give this comnponent a unique Class ID
      $element[0].classList.add(ctrl.uid);

      if (
        typeof ctrl.rowTemplateUrl === 'string' &&
        ctrl.rowTemplateUrl.length
      ) {
        ctrl.rowTemplate = ctrl.rowTemplateUrl;
      }

      ctrl.btOptions = {
        rowHeight: $sanitize(ctrl.rowHeight) || 30,
        colWidth: 100, // dummy and will overridden by CSS
        doNotAssignDimensions: true
      };

      btDom = $element[0].querySelector('[bento-table]');

      // Add keyboard listeners for navigations
      btDom.addEventListener('keydown', onTableKeydown);

      setRowStyles();

      setTimeout(function(){
        ctrl.onTreeViewReady();
      });
    };

    function setRowStyles() {
      // Update encapsulated Custom CSS
      var styleEl = $element[0].querySelector('style');
      var styles = [
        '.',
        ctrl.uid,
        ' .bui-tree-view-item-content {padding: ',
        (ctrl.btOptions.rowHeight - 18) * 0.5,
        'px 0;} ',
        '.',
        ctrl.uid,
        ' .bui-tree-view-expand-btn{margin-top:',
        (ctrl.btOptions.rowHeight - 30) * 0.5,
        'px;}',
        '.',
        ctrl.uid,
        ' .bento-table-row{height:',
        ctrl.btOptions.rowHeight,
        'px;}'
      ].join('');

      styleEl.innerHTML = styles;
    }

    // On keyboard keydown listner
    function onTableKeydown(e) {
      var currentRowIndex;
      var activeEl = document.activeElement;
      var nextRowIndex;
      var tabbables;
      var rowTabbableIndex;
      switch (e.keyCode) {
        case $keyboard.DOWN:
          currentRowIndex = getCurrentFocuesedRowID();
          tabbables = getRowTabbables(currentRowIndex);
          rowTabbableIndex = tabbables.indexOf(activeEl);
          nextRowIndex = currentRowIndex + 1;
          if (
            nextRowIndex < ctrl._itemsFlatData.length &&
            !isNaN(nextRowIndex)
          ) {
            focusToRowWithIndex(nextRowIndex, rowTabbableIndex);
            e.preventDefault();
          }
          break;
        case $keyboard.UP:
          currentRowIndex = getCurrentFocuesedRowID();
          tabbables = getRowTabbables(currentRowIndex);
          rowTabbableIndex = tabbables.indexOf(activeEl);
          nextRowIndex = currentRowIndex - 1;
          if (nextRowIndex >= 0 && !isNaN(nextRowIndex)) {
            focusToRowWithIndex(nextRowIndex, rowTabbableIndex);
            e.preventDefault();
          }
          break;
        case $keyboard.LEFT:
          if (ctrl.isRTL) {
            moveFocusToRight();
          } else {
            moveFocusToLeft();
          }
          e.preventDefault();
          break;
        case $keyboard.RIGHT:
          if (ctrl.isRTL) {
            moveFocusToLeft();
          } else {
            moveFocusToRight();
          }
          e.preventDefault();
          break;
        case $keyboard.HOME:
          currentRowIndex = getCurrentFocuesedRowID();
          tabbables = getRowTabbables(currentRowIndex);
          rowTabbableIndex = tabbables.indexOf(activeEl);
          focusToRowWithIndex(0, rowTabbableIndex);
          e.preventDefault();
          break;
        case $keyboard.END:
          currentRowIndex = getCurrentFocuesedRowID();
          tabbables = getRowTabbables(currentRowIndex);
          rowTabbableIndex = tabbables.indexOf(activeEl);
          focusToRowWithIndex(ctrl._itemsFlatData.length - 1, rowTabbableIndex);
          e.preventDefault();
          break;
        default:
          break;
      }
    }

    function moveFocusToLeft() {
      var currentRowIndex;
      var activeEl = document.activeElement;
      var tabbables;
      var rowTabbableIndex;
      var row;

      currentRowIndex = getCurrentFocuesedRowID();
      tabbables = getRowTabbables(currentRowIndex);
      rowTabbableIndex = tabbables.indexOf(activeEl);
      row = ctrl._itemsFlatData[currentRowIndex];
      var parent = parentMap.get(row);

      if (rowTabbableIndex === 0) {
        if (row[ctrl.nodeChildren] && !row.collapsed) {
          ctrl.toggleCollapse(row);
        }
        if (parent) {
          focusToRowWithIndex(
            ctrl._itemsFlatData.indexOf(parent),
            rowTabbableIndex
          );
        }
      } else if (rowTabbableIndex > 0) {
        tabbables[rowTabbableIndex - 1].focus();
      }
    }

    function moveFocusToRight() {
      var currentRowIndex;
      var activeEl = document.activeElement;
      var tabbables;
      var rowTabbableIndex;

      currentRowIndex = getCurrentFocuesedRowID();
      tabbables = getRowTabbables(currentRowIndex);
      rowTabbableIndex = tabbables.indexOf(activeEl);
      var currentNode = ctrl._itemsFlatData[currentRowIndex];

      if (
        rowTabbableIndex === tabbables.length - 1 &&
        currentNode[ctrl.nodeChildren]
      ) {
        if (currentNode.collapsed) {
          ctrl.toggleCollapse(currentNode).then(function() {
            focusToRowWithIndex(
              ctrl._itemsFlatData.indexOf(currentNode[ctrl.nodeChildren][0]),
              rowTabbableIndex
            );
          });
        } else {
          focusToRowWithIndex(
            ctrl._itemsFlatData.indexOf(currentNode[ctrl.nodeChildren][0]),
            rowTabbableIndex
          );
        }
      } else if (rowTabbableIndex < tabbables.length - 1) {
        tabbables[rowTabbableIndex + 1].focus();
      }
    }

    function focusToRowWithIndex(rowIndex, tabbableIndex) {
      ctrl.btControl.showRow(rowIndex, $q).then(function() {
        window.requestAnimationFrame(function() {
          setTimeout(function() {
            var tabbables = getRowTabbables(rowIndex);
            tabbables[Math.min(tabbableIndex, tabbables.length - 1)].focus();
          });
        });
      });
    }

    function getRowTabbables(rowIndex) {
      var rowEl = $element[0].querySelector(
        '.bui-tree-view-item[rel="' +
          rowIndex +
          '"] .bui-tree-view-item-content'
      );
      return $bentoServices.findTabbable(rowEl);
    }

    function getCurrentFocuesedRowID() {
      var el = document.activeElement;
      if (btDom.contains(el)) {
        while (
          !el.classList.contains('bui-tree-view-item') &&
          el.nodeName !== 'BODY'
        ) {
          el = el.parentElement;
        }
        return parseInt(el.getAttribute('rel'));
      } else {
        return Number.NaN;
      }
    }

    /**
     * Collapse all tree items
     */
    ctrl.collapseAll = function() {
      setCollapseAllState(true);
    };

    /**
     * Expand all tree items
     */
    ctrl.expandAll = function() {
      setCollapseAllState(false);
    };

    // Utilized by
    // `ctrl.collapseAll()` and `ctrl.expandAll()`
    function setCollapseAllState(doIt) {
      ctrl.treeCollapsed = doIt;
      ctrl.setTreeCollapseState(ctrl.treeModel, doIt, false);
      ctrl.refresh();
    }

    /**
     * On change lifecycle hook
     */
    ctrl.$onChanges = function(changes) {
      if (changes.treeCollapsed && ctrl.treeModel) {
        var takeItemSetting =
          typeof changes.treeCollapsed.previousValue !== 'boolean';
        ctrl.setTreeCollapseState(
          ctrl.treeModel,
          changes.treeCollapsed.currentValue,
          takeItemSetting
        );
        ctrl.refresh();
      } else if (changes.treeModel) {
        if (
          typeof ctrl.treeCollapsed === 'boolean' &&
          Array.isArray(ctrl.treeModel)
        ) {
          ctrl.setTreeCollapseState(
            ctrl.treeModel,
            ctrl.treeCollapsed,
            takeItemSetting
          );
        }
        ctrl.refresh(typeof changes.treeModel.previousValue === 'boolean');
      }
    };

    /**
     * Set the collapse states for the entire tree
     */
    ctrl.setTreeCollapseState = function(items, collapsed, takeItemSetting) {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var children = item[ctrl.nodeChildren];
        if (Array.isArray(children)) {
          if (!takeItemSetting) {
            item.collapsed = collapsed;
          }
          if (children.length) {
            ctrl.setTreeCollapseState(children, collapsed, takeItemSetting);
          }
        }
      }
    };

    /**
     * Refresh Tree View
     */
    ctrl.refresh = function(reloadBentoTable) {
      var model = ctrl.treeModel;
      reloadBentoTable = reloadBentoTable == null ? true : false;

      ctrl.btOptions = {
        rowHeight: $sanitize(ctrl.rowHeight) || 30,
        colWidth: 100, // dummy and will overridden by CSS
        doNotAssignDimensions: true
      };

      setRowStyles();

      if (model) {
        // Only refresh when there is a model presense
        ctrl.createParentMapping();
        ctrl.assignLevel();
        ctrl._itemsFlatData = [];
        for (var i = 0; i < model.length; i++) {
          var item = model[i];
          if (!item.hidden) {
            ctrl._itemsFlatData.push(item);
            ctrl.insertDescendants(item);
            ctrl.updateCheckedState(item);
          }
        }
        if (ctrl.btControl.reloadTable && reloadBentoTable) {
          // Reload table when assigned
          ctrl.btControl.reloadTable(true);
        }
        if (btDeferred) {
          // Resolve the current data when there is still a promise pending
          btDeferred.resolve(this._itemsFlatData);
          btDeferred = null;
        }
      }
    };

    /**
     * On check change
     */
    ctrl.onCheckChange = function(item) {
      if (!ctrl.independentCheckbox) {
        var parent = parentMap.get(item);
        this.updateParentCheckState(parent);

        ctrl.updateCheckedItemsArray(item);

        // Disable indeterminate
        item[ctrl.indeterminateProp] = false;

        ctrl.checkChildren(item, item[ctrl.checkboxModel]);

        // TODO: Fire callback here
        ctrl.onCheckboxChange({item:item});
      }
    };

    ctrl.updateCheckedItemsArray = function(item) {
      var itemIndex = ctrl.checkedItems.indexOf(item);
      var isChecked = item[ctrl.checkboxModel];

      if (isChecked && itemIndex === -1) {
        // If item is checked and is not in `checkedItem` array
        ctrl.checkedItems.push(item);
      } else if (!isChecked && itemIndex > -1) {
        // If item is NOT checked and is in `checkedItem` array
        ctrl.checkedItems.splice(itemIndex, 1);
      }
    };

    /**
     * Update checkbox status based on their relationships
     * This method is only used when model is updated or refreshed
     */
    ctrl.updateCheckedState = function(item) {
      if (ctrl.independentCheckbox) {
        // No need to do anything
        return;
      }

      var isChecked = item[ctrl.checkboxModel];

      if (isChecked) {
        ctrl.checkChildren(item, true);
      } else {
        var children = item[ctrl.nodeChildren];

        if (children) {
          var allChecked = true;
          var allUnChecked = true;
          var hasIndeterminate = false;

          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.hidden) {
              // We skip the check state of hidden items
              continue;
            }
            var indetermiate = ctrl.updateCheckedState(child);
            var childIsChecked = child[ctrl.checkboxModel];

            if (indetermiate) {
              hasIndeterminate = true;
            } else if (childIsChecked) {
              allUnChecked = false;
            } else if (!childIsChecked) {
              allChecked = false;
            }
          }

          if (hasIndeterminate || !(allChecked || allUnChecked)) {
            // Indeterminate state is present
            item[ctrl.indeterminateProp] = true;
            item[ctrl.checkboxModel] = false;
          } else {
            item[ctrl.indeterminateProp] = false;
            item[ctrl.checkboxModel] = allChecked;
          }

          ctrl.updateCheckedItemsArray(item);

          return false;
        } else {
          // Not indetermindate
          return false;
        }
      }
    };

    /**
     * Update parent change state
     */
    ctrl.updateParentCheckState = function(item) {
      if (!item) {
        // There is nothing to check
        return;
      }

      var allChecked = true;
      var allUnChecked = true;
      var hasIndeterminate = false;
      var children = item[ctrl.nodeChildren];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (!child.hideCheckbox) {
          var isChecked = child[ctrl.checkboxModel];
          var isIndeterminate = child[ctrl.indeterminateProp];

          if (isIndeterminate || !(allChecked || allUnChecked)) {
            hasIndeterminate = true;
            break;
          } else if (allUnChecked && allChecked) {
            allChecked = isChecked;
            allUnChecked = !isChecked;
          } else if (
            (allChecked && !isChecked) ||
            (allUnChecked && isChecked)
          ) {
            hasIndeterminate = true;
            break;
          }
        }
      }

      if (hasIndeterminate) {
        // Indeterminate state is present
        item[ctrl.indeterminateProp] = true;
        item[ctrl.checkboxModel] = false;
      } else {
        item[ctrl.indeterminateProp] = false;
        item[ctrl.checkboxModel] = allChecked;
      }

      ctrl.updateCheckedItemsArray(item);

      // Now check this item's parent
      ctrl.updateParentCheckState(parentMap.get(item));
    };

    /**
     * Check children based on the current item status
     */
    ctrl.checkChildren = function(item, state) {
      var children = item[ctrl.nodeChildren];
      if (Array.isArray(children)) {
        for (var i in children) {
          var child = children[i];
          child[ctrl.checkboxModel] = state; // Do not bubble
          ctrl.updateCheckedItemsArray(child);
          ctrl.checkChildren(child, state);
        }
      }
    };

    /**
     * Callback when Bento Table data is ready
     */
    ctrl.onBTReady = function() {
      // To add when Bento Table is ready
    };

    /**
     * Callback when user selects an item
     */
    ctrl.onItemSelect = function(item, event) {
      if (ctrl.expandOnlyModel && item[ctrl.expandOnlyModel]) {
        ctrl.toggleCollapse(item);
      } else if (ctrl.selectAsCheck) {
        item[ctrl.checkboxModel] = !item[ctrl.checkboxModel];
        ctrl.onCheckChange(item);
      } else if (item[ctrl.selectableModel] !== false) {
        var isSelected = !item[ctrl.selectModel];
        var result;
          // need to get result from user input incase they want to
          // cancel this selection
          result = ctrl.onSelect({item:item, isSelected: isSelected, event:event});

        if (result !== false) {
          // Only execute when result is undefined or `true`
          var index = ctrl.selectedItems.indexOf(item);
          item[ctrl.selectModel] = isSelected;

          if (!ctrl.multiSelect && isSelected) {
            while (ctrl.selectedItems.length) {
              ctrl.selectedItems.pop()[ctrl.selectModel] = false;
            }
          }

          if (isSelected && index < 0) {
            ctrl.selectedItems.push(item);
          } else if (!isSelected && index > -1) {
            ctrl.selectedItems.splice(index, 1);
          }
        }
      }
    };

    /**
     * Callback for Bento Table to feed tree data
     */
    ctrl.feedTreeData = function() {
      btDeferred = $q.defer();

      setTimeout(function() {
        // Create data object
        if (btDeferred && ctrl._itemsFlatData && ctrl._itemsFlatData.length) {
          btDeferred.resolve(ctrl._itemsFlatData);
          btDeferred = null;
        }
      }, 0);

      return btDeferred.promise;
    };

    /**
     * Create parent child mapping to avoid circular reference
     */
    ctrl.createParentMapping = function(parent) {
      var children;
      if (parent == null) {
        parentMap = new Map();
        children = ctrl.treeModel;
      } else if (parent[ctrl.nodeChildren]) {
        children = parent[ctrl.nodeChildren];
      }

      if (children && children.length) {
        for (var index in children) {
          var child = children[index];
          if (parent) {
            parentMap.set(child, parent);
          }
          ctrl.createParentMapping(child);
        }
      }
    };

    /**
     * Insert all descendants into an item for render
     */
    ctrl.insertDescendants = function(parent) {
      if (parent.collapsed) {
        // This node is collapsed so there is no need to insert its children
        return;
      }

      var children = parent[ctrl.nodeChildren];

      if (Array.isArray(children)) {
        // Get the index where the current parent is located in the flatArray
        // Insert its children after the index
        var index = ctrl._itemsFlatData.indexOf(parent) + 1;

        ctrl._itemsFlatData.splice.apply(
          ctrl._itemsFlatData,
          [index, 0].concat(children)
        );

        for (var childIndex in children) {
          // Do the same to each child
          ctrl.insertDescendants(children[childIndex]);
        }
      }
    };

    /**
     * Remove all descendants of the parent from the flattened array
     */
    ctrl.removeDescendants = function(item) {
      var startIndex = ctrl._itemsFlatData.indexOf(item) + 1;
      var endIndex = -1;
      var me = item;
      var parent;
      var index;
      var siblings;

      while (endIndex < 0) {
        parent = parentMap.get(me);
        siblings = parent ? parent[ctrl.nodeChildren] : ctrl.treeModel;
        index = siblings.indexOf(me) + 1;

        if (index < siblings.length) {
          // Found! There is a younger sibling
          // 1 based indexing
          endIndex = ctrl._itemsFlatData.indexOf(siblings[index]);
        } else if (parent) {
          // Nope! Need to find itemMarkers parent's younger sibling
          me = parent;
        } else {
          // This `parent` is the last parent here
          // remove the reset
          endIndex = ctrl._itemsFlatData.length;
        }
      }

      // Now we remove
      ctrl._itemsFlatData.splice(startIndex, endIndex - startIndex);
    };

    /**
     * Assign tree item level from the root (ZERO)
     * @param {treeItem} item Each tree item node
     * @param {number} level depth of this node's depth from root (ZERO)
     */
    ctrl.assignLevel = function(item, level) {
      var children = ctrl.treeModel; // default to the root array
      level = level == null ? -1 : level; // default to 0

      if (item) {
        // Get the next level of children and assign the current level to
        // the current item
        item[LEVEL_PROP] = level;
        item[INDENTATION_PADDING] = level * INDENTATION + 'px';
        children = item[ctrl.nodeChildren];
      }

      if (children && children.length) {
        // Move to the next level reccursively
        level++;
        for (var i = 0; i < children.length; i++) {
          ctrl.assignLevel(children[i], level);
        }
      }
    };
  }

  // Provides lazy loading to enhance initial load time
  angular
    .module('bento.tree.view', ['ngSanitize', 'bento.table'])
    .component('bentoTreeView', {
      bindings: {
        checkboxModel: '@',
        expandOnlyModel: '@',
        independentCheckbox: '<',
        multiSelect: '<',
        nodeChildren: '@',
        onCollapsing: '&',
        onCheckboxChange: '&',
        onExpanding: '&',
        onSelect: '&',
        onTreeViewReady: '&',
        rowHeight: '<',
        rowTemplateUrl: '@',
        secondTreeIcon: '@',
        selectModel: '@',
        selectableModel: '@',
        selectAsCheck: '<',
        showExpandCollapseAllButtons: '<',
        treeLabel: '@',
        treeModel: '<',
        treeIcon: '@',
        treeCollapsed: '=?',
        treeController: '=',
        treeViewController: '=?'
      },
      controller: BentoTreeViewController,
      controllerAs: '$treeViewCtrl',
      templateUrl: '../templates/tree-view/bento-tree-view.html'
    });
})(window.angular);

(function (window, angular, undefined) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bentoWizrd
   * @description
   *
   * # bentoWizrd
   *
   * The `bentoWizrd` directive provides directive objects to mimic off canvas menue behavior.
   *
   *   */

    // Global setting variables

  var GAP = 37;  // in pixels
  var WINDOW_RESIZE_DELAY = 300; // in milliseconds
  var MAX_STEP_BOX_WIDTH = 350; // in pixels
  var STEP_PADDING = 0;  // in pixels
  var TRANSITION_DURATION = 200; // in ms

// Define bentoUI App object
  angular.module('bento.wizard', ['ui.bootstrap', 'bento.services', 'bento.cookie', 'bento.translate'])
    .controller('wizardMainController', ['$scope', '$rootScope', '$element', '$bentoServices',
      function ($scope, $rootScope, $element, $bentoServices) {
        // initialize variables
        $scope.isRTL = $bentoServices.isRTL($element[0]);
        $scope.isLeftArrowDisabled = true;
        $scope.isRightArrowDisabled = true;

        $element.addClass('bento-wizard');

        // Add SR content HTML
        $scope.wizardDesciption = angular.element('<span tabindex="0" class="sr-only">{{\'BENTO_UI_WIZARD_DESCRIPTION\' | bentoTranslate}}</span>');

        // For a controller to control to assign the current step
        // to this wizard directive
        if (typeof $scope.currentStep === 'undefined') {
          // Default current step to 0
          $scope.currentStep = 0;
        }
        $scope.previousStep = 0;

        // Set side-arrows true by default
        $scope._useSideArrows = !!(typeof $scope.useSideArrows === 'undefined' || $scope.useSideArrows === 'true');

        // Left and Right Arrow clicks
        $scope.onLeftArrowClick = function () {
          var scrollPane = $scope.$ul[0].parentElement;
          // Can scroll the whole pane
          if ($scope.leftIndex >= $scope.displayCount) {
            $scope.leftIndex = $scope.leftIndex - $scope.displayCount;
          }
          // Scroll to 0
          else {
            $scope.leftIndex = 0;
          }

          $scope.scrollLeftTo(scrollPane, $scope.leftIndex);
          $scope.updateLeftRightArrows();
        };

        $scope.onRightArrowClick = function () {
          var scrollPane = $scope.$ul[0].parentElement;
          // Can scroll the whole pane
          if (($scope.numSteps - $scope.leftIndex - $scope.displayCount) >= $scope.displayCount) {
            $scope.leftIndex = $scope.leftIndex + $scope.displayCount;
          }
          // Scroll all the way to the right
          else {
            $scope.leftIndex = $scope.numSteps - $scope.displayCount;
          }

          $scope.scrollLeftTo(scrollPane, $scope.leftIndex);
          $scope.updateLeftRightArrows();
        };

        // Watch step disabled states
        $scope.$watchCollection(
          function () {
            var states = [],
                children;

            if ($scope.$ul) {
              children = $scope.$ul.children();
              for (var i = 0, len = children.length; i < len; i++) {
                states.push(children[i].getAttribute('disabled'));
              }
            }

            return states;
          },
          function (states) {
            var children;

            if ($scope.$ul) {
              children = $scope.$ul.children();
            }

            for (var i = 0, len = states.length; i < len; i++) {
              if (states[i]) {
                children[i].removeAttribute('tabindex');
              } else {
                children[i].setAttribute('tabindex', 0);
              }
            }
          }
        );

        // Watch step states
        $scope.$watch(function () {
          var steps      = $element[0].querySelectorAll('.bento-wizard-step'),
              step,
              // true: enabled
              // false: disabled
              // .p: previous button
              // .n: next button
              stepStates = {p: true, n: true};

          //Check previous
          if ($scope.currentStep > 0 && steps[$scope.currentStep - 1]) {
            stepStates.p = steps[$scope.currentStep - 1].getAttribute('disabled') == undefined;
          } else {
            stepStates.p = true;
          }

          //Check next
          if ($scope.currentStep < steps.length - 1 && steps[$scope.currentStep + 1]) {
            stepStates.n = steps[$scope.currentStep + 1].getAttribute('disabled') == undefined;
          } else {
            stepStates.n = true;
          }

          return stepStates;

        }, function (stepStates) {
          // Set button disabled states

          $scope.buttonNextDisabled = !stepStates.n;
          $scope.buttonPreviousDisabled = !stepStates.p;
        }, true);

        // Previous and Next button clicks
        $scope.onPreviousClick = function () {
          if ($scope.currentStep === 0) {
            return;
          }

          $scope.isUserAction = true;
          $scope.currentStep = parseInt($scope.currentStep, 10) - 1;
          // focus on the main content
          $scope.content[0].focus();
        };

        $scope.onNextClick = function () {
          if ($scope.currentStep === $scope.stepList.length - 1) {
            return;
          }

          $scope.isUserAction = true;
          $scope.currentStep = parseInt($scope.currentStep, 10) + 1;
          // focus on the main content
          $scope.content[0].focus();
        };

        // Done button click
        $scope.onDoneClick = function () {
          $scope.isUserAction = true;
          $scope.onFinish();
        };

        // A step is clicked on the top step nav
        $scope.onStepClick = function (step) {

          // ignore the step that is already selected
          if (step === $scope.currentStep) {
            return;
          }

          $scope.isUserAction = true;
          $scope.currentStep = step;
        };

      }])
    .directive('bentoWizard', [
      '$compile',
      '$timeout',
      '$window',
      '$log',
      '$bentoServices',
      function ($compile, $timeout, $window, $log, $bentoServices) {
        return {
          restrict  : 'AEC',
          replace   : false,
          scope     : {
            onChange              : '&',  // Fire onChange() when a wizard step is changed.
            onFinish              : '&',  // Fire onFinish() when the whole wizard is finished
            onCancel              : '&',  // Fire onCancel() when the "Cancel" button is clicked
            useSideArrows         : '@',  // Check if we need to use arrows
            currentStep           : '=?', // Listen to step value change
            totalStep             : '=?', // Expose the total number of steps
            demoMode              : '@',  // A mode to disable focus
            isDoneButtonDisabled  : '&',  // Expose showButtonDone
            hideDefaultButtons    : '&',  // Hide "Previous", "Next" and "Done" buttons
            hidePreviousButton    : '&',  // Hide "Previous" button
            hideNextButton        : '&',  // Hide "Next" button
            hideDoneButton        : '&',  // Hide "Done" button
            showCancelButton      : '&',  // Show "Cancel" button
            isCancelButtonDisabled: '&',  // Disable "Cancel" button
            useStickyFooter       : '@',  // Flag to show if the footer should be sticky
            stickyFooterFullWidth : '&',  // Flag to determine if the footer span to the fullwidth of the scroll. default `true`
          },
          controller: 'wizardMainController',
          link      : function (scope, element) {
            // This flag is used when a use dynamically change the currentStep and return false
            // onChange() So that the updateStep() doesn't fire in the watch
            var isCurrentSetpReset = false;
            // For windows resize
            var resizeTimeout = 0;
            // side of margin
            var marginSide = scope.isRTL? 'marginRight':'marginLeft';
            // This variable is used to make sure Wizard still has the correct width to avoid
            // IE related offsetWidth == 0 issue
            var widthCache;

            scope.el = element[0];
            scope.isUserAction = false;
            element.addClass('ng-hide');

            // Render wizard when all rendering is done
            $timeout(function () {

              // Basic rendering
              // update the step layouts the first time
              $timeout(renderStepWidth, 1);
              // need to re-render the second path in case the scroll bar showed/hided
              $timeout(renderStepWidth, 2);

              // Watch element width and render it's width
              angular.element($window).on('resize', onWindowResize);

              // localization
              var cancelButtonLabel = "{{ 'BENTO_UI_WIZARD_BUTTON_CANCEL' | bentoTranslate }}";
              var nextButtonLabel = "{{ 'BENTO_UI_WIZARD_BUTTON_NEXT' | bentoTranslate }}";
              var previousButtonLabel = "{{ 'BENTO_UI_WIZARD_BUTTON_PREVIOUS' | bentoTranslate }}";
              var doneButtonLabel = "{{ 'BENTO_UI_WIZARD_BUTTON_DONE' | bentoTranslate }}";
              var cancelButtonLabelDescription = "{{ 'BENTO_UI_WIZARD_BUTTON_CANCEL_DESCRIPTION' | bentoTranslate }}";
              var nextButtonLabelDescription = "{{ 'BENTO_UI_WIZARD_BUTTON_NEXT_DESCRIPTION' | bentoTranslate }}";
              var previousButtonLabelDescription = "{{ 'BENTO_UI_WIZARD_BUTTON_PREVIOUS_DESCRIPTION' | bentoTranslate }}";
              var doneButtonLabelDescription = "{{ 'BENTO_UI_WIZARD_BUTTON_DONE_DESCRIPTION' | bentoTranslate }}";
              var wizardFooter = angular.element(
                '<div ' + 
                (scope.useStickyFooter === 'true' ? 
                  'bento-sticky-footer show-on-element-visible="el" full-width="stickyFooterFullWidth()"' : '') + 
                'class="bento-wizard-footer"></div>');
              var customFooterElements = [];

              // Content pointers
              scope.content = angular.element(element[0].querySelector('.contents'));
              scope.contents = scope.content.children();

              // Get custom footer elements
              var customSibling = scope.content[0].nextSibling;
              while(customSibling){
                customFooterElements.push(customSibling);
                customSibling = customSibling.nextSibling;
              }

              // Add cancel button
              var buttonCancel = angular.element(
                '<button role="button" class="btn btn-cancel btn-default btn-action pull-right" ' +
                'role="button" aria-label="' + cancelButtonLabelDescription + '" ' +
                'title="' + cancelButtonLabelDescription + '"' +
                'ng-click="onCancel({step:currentStep})" ' +
                'ng-if="!hideDefaultButtons() && showCancelButton()" ' +
                'ng-disabled="isCancelButtonDisabled()"' +
                'bento-test="button-cancel"' +
                '>' +
                cancelButtonLabel +
                '</button>'
              );

              // Add previous and next buttons
              var buttonNext = angular.element(
                '<button role="button" class="btn btn-next btn-primary btn-action pull-left" ' +
                'role="button" aria-label="' + nextButtonLabelDescription + '" ' +
                'title="' + nextButtonLabelDescription + '"' +
                'ng-show="showButtonNext" ng-click="onNextClick()" ' +
                'ng-if="!hideDefaultButtons() && !hideNextButton()" ' +
                'ng-disabled="buttonNextDisabled"' +
                'bento-test="button-next"' +
                '>' +
                nextButtonLabel +
                ' <i class="bento-icon-chevron-right"></i></button>'
              );
              var buttonPrevious = angular.element(
                '<button role="button" class="btn btn-previous btn-default pull-left" ' +
                'role="button" aria-label="' + previousButtonLabelDescription + '" ' +
                'ng-show="showButtonPrevious" ng-click="onPreviousClick()" ' +
                'title="' + previousButtonLabelDescription + '"' +
                'ng-if="!hideDefaultButtons() && !hidePreviousButton()" ' +
                'ng-disabled="buttonPreviousDisabled"' +
                'bento-test="button-previous">' +
                '<i class="bento-icon-chevron-left"></i> ' +
                previousButtonLabel +
                '</button>'
              );
              var buttonDone = angular.element(
                '<button class="btn btn-primary btn-action pull-left" ' +
                'role="button" aria-label="' + doneButtonLabelDescription + '"' +
                'title="' + doneButtonLabelDescription + '"' +
                'ng-disabled="isDoneButtonDisabled()"' +
                'ng-show="showButtonDone" ng-click="onDoneClick()"' +
                'ng-if="!hideDefaultButtons() && !hideDoneButton()" ' +
                'bento-test="button-done"' +
                '>' +
                doneButtonLabel +
                '</button>'
              );
              scope.$buttonNext = buttonNext;
              scope.$buttonPrevious = buttonPrevious;
              scope.$buttonDone = buttonDone;

              // Add top left and right arrows
              var arrowLeft = angular.element(
                '<button class="wizard-arrow arrow-left"' +
                ' role="button" aria-label="Left Arrow"' +
                ' alt="Show previous step headers"' +
                ' ng-disabled="isLeftArrowDisabled"' +
                ' tabindex="-1"' +
                ' ng-click="onLeftArrowClick()">' +
                ' <i class="bento-icon-chevron-large-left"></i>' +
                '</button>'
              );
              var arrowRight = angular.element(
                '<button class="wizard-arrow arrow-right"' +
                ' role="button" aria-label="Right Arrow"' +
                ' alt="Show next step headers"' +
                ' ng-disabled="isRightArrowDisabled"' +
                ' tabindex="-1"' +
                ' ng-click="onRightArrowClick()">' +
                ' <i class="bento-icon-chevron-large-right"></i>' +
                '</button>'
              );

              scope.$arrowLeft = arrowLeft;
              scope.$arrowRight = arrowRight;

              $compile(arrowLeft)(scope);
              $compile(arrowRight)(scope);

              // Compile description
              $compile(scope.wizardDesciption)(scope);
              wizardFooter.append(buttonPrevious);
              wizardFooter.append(buttonNext);
              wizardFooter.append(buttonDone);
              wizardFooter.append(buttonCancel);

              // Compile Wizard footer
              $compile(wizardFooter)(scope);

              // Append custom buttons into footer
              for(var i=0; i<customFooterElements.length; i++){
                wizardFooter.append(customFooterElements[i]);
              }

              // POST DOM injection
              // Update model reference to be used in controller
              scope.$ul = angular.element(element[0].querySelector('.steps'));
              scope.stepList = scope.$ul.children();

              // Add the two buttons and footer to content
              scope.content.after(wizardFooter);
              scope.$ul.after(arrowLeft);
              scope.$ul.after(arrowRight);
              scope.$ul.attr('tabindex', -1);

              // Add description
              scope.$ul[0].parentElement.insertBefore(scope.wizardDesciption[0], scope.$ul[0]);

              // Add CSS class to the main container
              element.addClass('bento-wizard');

              // Assign Step Class Name with bento-wizard name spage
              scope.$ul.wrap('<div class="bento-wizard-steps" role="tablist"/>');

              processSteps();

              // Add scope.$ul keyboard listeners
              scope.$ul[0].addEventListener('keydown', function (event) {
                switch (event.keyCode) {
                  // Space & Enter
                  case 32:
                  case 13:
                    event.stopPropagation();
                    event.preventDefault();
                    break;
                }
              });

              // Add scope.$ul keyboard listeners
              scope.$ul[0].addEventListener('keyup', function (event) {
                switch (event.keyCode) {
                  // Space & Enter
                  case 32:
                  case 13:
                    onStepClick(event, true);
                    event.stopPropagation();
                    event.preventDefault();
                    break;
                  // Tab & shift-tab
                  case 9:
                  case 16:
                    var boxWidth  = scope.$ul.children()[0].offsetWidth,
                        leftCount = Math.round(scope.$ul[0].parentElement.scrollLeft / boxWidth);

                    scope.leftIndex = leftCount;
                    scope.updateLeftRightArrows();
                    break;
                }
              });

              // Add click event listeners to steps

              // init buttons
              scope.showButtonNext = (scope.stepList.length !== 1);
              scope.showButtonPrevious = false;
              scope.showButtonDone = (scope.stepList.length === 1);

              // setup content
              scope.content.attr('tabindex', -1);

              // Start to watch the currentStep variable change and
              // update wizards GUI
              scope.$watch('currentStep', function (newValue, oldValue) {
                scope.previousStep = oldValue;
                if (!isCurrentSetpReset) {
                  updateStep();
                } else {
                  isCurrentSetpReset = false;
                }
              });

              // Watch the count to the steps to see if there is anything changed
              var ulChildren = scope.$ul.children();
              scope.totalStep = ulChildren.length;

              scope.$watch(
                function () {
                  setTimeout(function () {
                    // Custom watch - gets fired for watch digest cycle but needs to be after
                    // rendering

                    // As reported on HUB issue #1
                    // https://thehub.thomsonreuters.com/thread/127898?sr=stream&ru=1145180
                    // New algorithm is implemented to reslove this issue when dynamic array had the
                    // same size when changing
                    var newUlChildren     = scope.$ul.children(),
                        i, len, hasChange = false;

                    if (ulChildren.length !== newUlChildren.length) {
                      ulChildren = newUlChildren;
                      hasChange = true;
                    } else {
                      for (i = 0, len = ulChildren.length; i < len; i++) {
                        if (ulChildren[i] !== newUlChildren[i]) {
                          ulChildren = newUlChildren;
                          hasChange = true;
                          break;
                        }
                      }
                    }

                    if (hasChange) {

                      $timeout(function () {
                        // Update step length
                        scope.totalStep = ulChildren.length;
                      });
                      

                      // Update Step List
                      updateStep();

                      // Add event listeners and classes to newly restored steps
                      processSteps();

                      // Need to re-render the width of the steps when adding or removing a step
                      renderStepWidth();
                    }

                  });

                  // return dummy
                  return 0;
                },
                function () {
                });

              // Skin steps
              function processSteps() {
                var stepHeaderHTML = '<div class="sr-only">{{\'BENTO_UI_WIZARD_STEP_NAME\' | bentoTranslate}}' +
                  '</div><div class="bento-wizard-step-count"></div>';
                // insert prefix number to a step <li> where it's not initialized
                for (var i = 0; i < scope.stepList.length; i++) {
                  var $li = angular.element(scope.stepList[i]);
                  if (!$li.hasClass('bento-wizard-step')) {
                    $li.addClass('bento-wizard-step');
                    $li.attr('role', 'tab');
                    // add counter and screen reader
                    $li.prepend($compile(angular.element(stepHeaderHTML))(scope));
                    // Add click event handler
                    $li.on('click', onStepClick);
                  }
                }
              }

              // Click function
              function onStepClick(event, target) {
                var currentTarget = target ? event.target : event.currentTarget;
                // ignore the click even if this step is disabled
                if (currentTarget.getAttribute('disabled')) {
                  return;
                }

                var index = 0;
                for (var i = 0; i < scope.stepList.length; i++) {
                  if (scope.stepList[i] === currentTarget) {
                    index = i;
                    break;
                  }
                }

                scope.onStepClick(index);
                scope.$apply();

                // Focus on the content after selection
                scope.content[0].focus();
              }

              // Show the whole module
              element.removeClass('ng-hide');
            }); // End of $timeout

            // Private function
            function updateStep() {
              var step = parseInt(scope.currentStep, 10);

              // Make sure the new step is a number
              step = isNaN(step) ? 0 : step;

              // Update the step and content references
              scope.stepList = scope.$ul.children();
              scope.contents = scope.content.children();

              // Reset currentStep if it is out of range
              if (scope.currentStep >= scope.stepList.length) {
                scope.currentStep = scope.stepList.length - 1;
              }

              // Fire event and forward step variable over
              if (typeof scope.onChange !== 'undefined' && scope.isUserAction) {
                if (scope.onChange({step: step}) === false) {
                  // Bypassed wizard update by user
                  step = scope.currentStep = scope.previousStep;
                  isCurrentSetpReset = true;
                }

                scope.isUserAction = false;
              }

              var previous$li;
              for (var i = 0; i < scope.stepList.length; i++) {
                var $li = angular.element(scope.stepList[i]);
                $li.removeClass('previous');
                if (i === step) {
                  $li.addClass('selected');
                  if (typeof previous$li !== 'undefined') {
                    previous$li.addClass('previous');
                  }
                } else {
                  $li.removeClass('selected');
                }

                previous$li = $li;
              }

              previous$li = null;

              // show & hide buttons
              scope.showButtonNext = !!((scope.stepList.length > 1) && (step < scope.stepList.length - 1));
              scope.showButtonPrevious = !!((scope.stepList.length > 1) && (step > 0));
              scope.showButtonDone = !!((scope.stepList.length === 1) || (step === scope.stepList.length - 1));

              // show & hide contents
              for (var j = 0; j < scope.contents.length; j++) {
                var $content = angular.element(scope.contents[j]);
                if (j === step) {
                  $content.removeClass('ng-hide');
                } else {
                  $content.addClass('ng-hide');
                }
              }

              updateStepContainerOffset();
            }

            // Update step location
            function updateStepContainerOffset() {
              scope.currentStep = parseInt(scope.currentStep, 10);

              if (isNaN(scope.currentStep)) {
                $log.warn('Wizard: `current-step` is not an integer ');
                scope.currentStep = 0;
              }

              // Variables to be used for calculation
              var scrollPane        = scope.$ul[0].parentElement,
                  offsetWidth       = scrollPane.offsetWidth,
                  stepArray         = scope.stepList,
                  stepWidth         = stepArray[0].offsetWidth,
                  currentSideMargin = -parseFloat(window.getComputedStyle(scope.$ul[0])[marginSide]),
                  leftOfPrevious    = (scope.currentStep > 0) ?
                    getOffsetLeft(scope.currentStep - 1,stepWidth,currentSideMargin) :
                    0,
                  rightOfNext       = (scope.currentStep < stepArray.length - 1) ?
                    getOffsetLeft(scope.currentStep + 1,stepWidth,currentSideMargin) + stepWidth:
                    0,
                  currentLeft = getOffsetLeft(scope.currentStep,stepWidth,currentSideMargin),
                  currentRight = currentLeft + stepWidth;

              // for For loop
              var stepOffsetLeft;

              // find the left index
              scope.leftIndex = 0;
              for (var i = 0; i < stepArray.length; i++) {
                stepOffsetLeft = getOffsetLeft(i,stepWidth,currentSideMargin);
                if (stepOffsetLeft <= currentSideMargin && stepOffsetLeft + stepWidth > 0) {
                  scope.leftIndex = i;
                  break;
                }
              }

              // Better UX
              // Check if the next or the previous step object is out side of the OL
              // Bring it bring if not
              if (leftOfPrevious < 0) {
                scope.leftIndex = scope.currentStep - 1;
              } else if (rightOfNext > offsetWidth) {
                scope.leftIndex = scope.currentStep + 2 - scope.displayCount;
              }

              // Again double check if the current object is in the container viewport or not
              // If not, bring it in.
              if (currentLeft < 0 && scope.leftIndex > 0) {
                scope.leftIndex = scope.currentStep;

              } else if (currentRight > offsetWidth+5  ) {
                scope.leftIndex = scope.currentStep - scope.displayCount + 1;
              }

              scope.scrollLeftTo(scope.$ul[0].parentElement, scope.leftIndex);

              scope.updateLeftRightArrows();
            }

            // get offsetLeft or a simulated offsetLeft from an element
            function getOffsetLeft(index,stepWidth,margin){
              return index * stepWidth - margin;
            }

            // Render boxes' width
            function renderStepWidth() {
              var offsetWidth = element[0].offsetWidth;
              var width;

              if(offsetWidth === 0 && widthCache){
                // IE Rendering issue
                // When inserting a new step, Wizard briefly gives offsetWidth with a ZERO
                // Setting $timeout of this method yelds a visual glitch so NO GO
                // Therefore we need to use the previous width value
                width = widthCache;
              }else{
                widthCache = width = offsetWidth - 2;
              }

              // Set the total step object to be displayed
              // in wizard viewport based on its width
              var numSteps = scope.stepList.length;
              var displayCount = (numSteps > 4) ? 4 : numSteps; // Default step count

              // Refine displayCount based on the width and numSteps
              if (width < 720 && displayCount > 2) {
                displayCount = 2;
              } else if (width < 960 && displayCount > 3) {
                displayCount = 3;
              } else if (MAX_STEP_BOX_WIDTH * displayCount + (displayCount - 1 ) * STEP_PADDING < width &&
                numSteps > displayCount) {
                displayCount = Math.ceil(width / MAX_STEP_BOX_WIDTH);
              }

              // Update displayCount for controller to use
              scope.displayCount = displayCount;
              // Add numSteps for controller to use
              scope.numSteps = numSteps;

              if (scope._useSideArrows) {
                if (displayCount < numSteps) {
                  element.addClass('side-arrows');
                  width = element[0].offsetWidth - GAP * 2
                    - 2;//side borders
                } else {
                  element.removeClass('side-arrows');
                }
              }

              // Set list container width based on the total step count
              // and their widths
              var boxWidth = (width - (displayCount - 1) * STEP_PADDING) / displayCount;
              scope.stepList = scope.$ul.children();

              //Cap the step box width
              if (numSteps == displayCount &&
                MAX_STEP_BOX_WIDTH * numSteps < width - 100 &&
                boxWidth > MAX_STEP_BOX_WIDTH
              ) {
                boxWidth = MAX_STEP_BOX_WIDTH;
              }

              scope.$ul.css('width', (scope.stepList.length * (boxWidth + STEP_PADDING)) + "px");
              scope.stepList.css('width', boxWidth + 'px');

              //Reset all height classes
              angular.element(scope.stepList).removeClass('narrow');

              //if (boxWidth > 310) {
              angular.element(scope.stepList).addClass('flat');
              scope.$arrowLeft.addClass('flat');
              scope.$arrowRight.addClass('flat');

              updateStepContainerOffset();
            }

            // Enable and Disable left and right arrows based on current
            // step position
            scope.updateLeftRightArrows = function () {

              if (typeof scope.displayCount === 'undefined') {
                return;
              }

              if (scope.leftIndex === 0) {
                scope.$arrowLeft.attr('disabled', 'disabled');
              } else {
                scope.$arrowLeft.removeAttr('disabled');
              }

              if (scope.leftIndex + scope.displayCount >= scope.numSteps) {
                scope.$arrowRight.attr('disabled', 'disabled');
              } else {
                scope.$arrowRight.removeAttr('disabled');
              }

              angular.element(scope.stepList).removeClass('most-right');

              if (element[0].offsetWidth <= scope.displayCount * MAX_STEP_BOX_WIDTH) {
                angular.element(scope.stepList[scope.leftIndex + scope.displayCount - 1]).addClass('most-right');
              }
            };

            // Scroll Animation for the header
            var initScrollLeft,
                dScrollLeft,
                scrollStartTime,
                targetScrollLeft,
                scrollRange
            ;

            scope.scrollLeftTo = function (scrollPane, toLeftIndex) {
              scrollRange = scrollPane.scrollWidth - scrollPane.offsetWidth;
              initScrollLeft = -parseFloat(window.getComputedStyle(scope.$ul[0])[marginSide]);
              targetScrollLeft = scope.$ul.children()[0].offsetWidth * toLeftIndex;
              dScrollLeft = targetScrollLeft - initScrollLeft;
              scrollStartTime = performance.now();

              if(scrollRange < 1 && dScrollLeft === 0) return;

              // RTL translate
              targetScrollLeft = scope.isRTL? scrollRange - targetScrollLeft: targetScrollLeft;

              scrollAnimate(scope.$ul[0]);
            };

            // Quad transition
            function scrollAnimate(scrollPane) {
              var dTimeRatio  = Math.pow((performance.now() - scrollStartTime) / TRANSITION_DURATION - 1, 3) + 1, // (x-1)^3 + 1
                  dScroll     = dScrollLeft * dTimeRatio;

              if (dTimeRatio > 0.999) {
                scrollPane.style[marginSide] = -initScrollLeft - dScrollLeft + 'px';
              } else {
                scrollPane.style[marginSide] = -initScrollLeft - dScroll + 'px';
                $bentoServices.rAF(function () {
                  scrollAnimate(scrollPane);
                })
              }
            }

            // Window resize function
            function onWindowResize() {
              // Set a timeout to minimize performance issue
              $timeout.cancel(resizeTimeout);
              resizeTimeout = $timeout(renderStepWidth, WINDOW_RESIZE_DELAY);
            }

            // Destroy with garbage collection
            scope.$on('$destroy', function () {
              //remove window listener
              angular.element($window).off('resize', onWindowResize);
            });

          }
        };
      }]);
})(window, window.angular);

(function(angular, undefined) {
    'use strict';

    angular
        .module('bento.progressbar', [
            'bento.services',
        ])
        .controller('BentoProgressbarController', ['$scope',
            function($scope) {
                $scope.$watch('value', function(val) {
                    $scope.dynamic = val;
                }, true)
                $scope.$watch('type', function(val) {
                    $scope.barType = val;
                }, true)
            }
        ])
        .directive('bentoProgressbar', [
            function() {
                return {
                    restrict: 'EA',
                    scope: {
                        value: '=',
                        animate: '=',
                        type: '='
                    },
                    templateUrl: '../templates/progressbar/bento-progressbar.html',
                    controller: 'BentoProgressbarController',
                    link: function(scope, element, attrs) {
                        console.warn('bento-progressbar: Warning! This directive has been deprecated. Please use uib-progressbar instead. Please see Bento 1.3.0 changelog for more info.');
                    }
                };
            }
        ])
})(window.angular);
(function (window, angular, undefined) {
  'use strict';

  var Z_INDEX = 102; // To be higher than Global Header

  angular.module('bento.append.to.parent', ['bento.services']).directive('bentoAppendToParent', [
    '$log',
    '$bentoServices',
    '$bentoPositioning',
    function ($log, $bentoServices, $bentoPositioning) {
      return {
        controller: function () {},
        link: function (scope, element, attrs) {
          /*
           * The element where 'append-to-parent' is added
           */
          var thisElement = element[0];

          var appendTo = attrs.bentoAppendToParent;
          if (appendTo.length <= 0) {
            //default it to body
            appendTo = 'body';
          }

          var appendToContainer = document.querySelector(appendTo);
          if (!appendToContainer) {
            //to make it work between site and dev
            appendTo = 'body';
            appendToContainer = document.querySelector(appendTo);
          }

          /*
           * This element holds/contains the list element (ul/ol)
           */
          var listContainerElement = element[0].querySelector('.bento-append-to-parent');
          if (!listContainerElement || listContainerElement === undefined) {
            $log.warn("bento-append-to-parent: Container class does not have 'bento-append-to-parent' class");
            return;
          } else {
            //reset it since it could be a directive with 'replace=true;'
            listContainerElement = null;
          }

          /*
           * Directive along with its used will emit 'append_to_parent_show_list' event when the list needs to be shown or hidden
           */
          scope.$on('append_to_parent_show_list', function (e, flag, id) {
            if (typeof flag !== 'boolean') {
              $log.warn("bento-append-to-parent: 'append_to_parent_show_list' flag needs to be boolean");
              return;
            }

            if (!listContainerElement) {
              listContainerElement = element[0].querySelector('.bento-append-to-parent');
            }

            if (id && listContainerElement.getAttribute('id') != id) {
              // Do nothing when the element ids don't match
              return;
            }

            if (flag) {
              //list is visible
              updateContainerPosition();
            } else {
              //list is hidden
              resetContainerPosition();
            }
          });

          window.addEventListener('resize', onWindowResize); // resize - event listener
          function onWindowResize(event) {
            if (listContainerElement && listContainerElement.style.zIndex === Z_INDEX) {
              updateContainerPosition();
            }
          }

          /*
           * 1. Append list container element to its parent (specified by append-to-parent)
           * 2. Calculate list container element's placement position when it needs to be shown
           */
          function updateContainerPosition() {
            var rect = thisElement.getBoundingClientRect();
            var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            var isRTL = $bentoServices.isRTL();
            var offset = attrs.appendToOffset ? parseFloat(attrs.appendToOffset) : 0;
            var spacingErrorMarging = 14; // give 14px for size error margining

            if (!listContainerElement) {
              listContainerElement = element[0].querySelector('.bento-append-to-parent');
            }

            // See if the list has offset and this overrides the original directive declaration
            var listOffset = listContainerElement.getAttribute('append-to-offset');
            offset = listOffset ? parseFloat(listOffset) : offset;

            // Self Awareness
            if (
              listContainerElement.offsetHeight + rect.top + rect.height + spacingErrorMarging > viewportHeight &&
              listContainerElement.offsetHeight <= rect.top
            ) {
              // There is not enough space at the bottom
              // **AND** there is enough space on the top
              $bentoPositioning.positionElement(
                thisElement,
                listContainerElement,
                appendToContainer,
                'top',
                isRTL ? 'right' : 'left',
                offset,
                attrs.autoRealign === 'true'
              );
            } else {
              // Align to top only when it fits there
              $bentoPositioning.positionElement(
                thisElement,
                listContainerElement,
                appendToContainer,
                'bottom',
                isRTL ? 'right' : 'left',
                offset,
                attrs.autoRealign === 'true'
              );
            }

            listContainerElement.style.minWidth = rect.width + 'px';
            listContainerElement.style.zIndex = Z_INDEX;
          }

          /*
           * reset all style
           */
          function resetContainerPosition() {
            // Skip this function when `listContainerElement` is not ready
            if (typeof listContainerElement === 'undefined' || !listContainerElement) {
              return;
            }

            $bentoPositioning.resetStyles(listContainerElement);

            // Put the list back to its original element
            element.append(listContainerElement);
          }

          /*
           * Remove the child when the directive is destroyed.
           * Otherwise if attached to 'body', duplicate children (zombies) will
           * be seen when the body element is inspected.
           */
          scope.$on('$destroy', function () {
            window.removeEventListener('resize', onWindowResize);
            if (listContainerElement && listContainerElement.parentNode) {
              // Remove listContainerElement if hasn't done so from viewport

              // Depends how directives are initiated, 'listContainerElement' might already
              // be removed by another directive (ex. BentoDropdownAppendToParent)
              // Reported by: @Owen Anderson on 9/25/2017
              listContainerElement.parentNode.removeChild(listContainerElement);
            }
          });
        }, //link
      }; //return
    },
  ]); //bentoAppendToBody directive
})(window, window.angular);

(function (window, angular, undefined) {

  'use strict';

  angular.module('bento.dropdown.append.to.parent', [])


   /**
   * Directive declaration
   */
    .directive('bentoDropdownAppendToParent', [
      '$timeout',
      '$bentoPositioning',
    function ($timeout, $bentoPositioning) {
      return {
        require: '^uibDropdown',
        link: function (scope, element, attrs, dropdownCtrl) {

          var listContainerElement = angular.element(element[0].querySelector('.dropdown-menu'));
          
          if(listContainerElement) {
            listContainerElement.addClass('bento-append-to-parent');
            $timeout(function(){
              if(listContainerElement){
                listContainerElement.css('min-width','');
              }
            })
            
          }

          var unwatch = scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
            if(typeof isOpen === 'boolean') {
              if (isOpen){
                listContainerElement.addClass('show');
                window.addEventListener('scroll', onWindowScroll, true);
                window.addEventListener('resize', onWindowResize);
              }else{
                listContainerElement.removeClass('show');
                $bentoPositioning.resetStyles(listContainerElement[0]);
                window.removeEventListener('scroll', onWindowScroll, true);
                window.removeEventListener('resize', onWindowResize);
              }
              scope.$emit('append_to_parent_show_list', isOpen);
            }
          });

          // Garbage collection
          element.on('$destroy',function(){
            unwatch();
            if(listContainerElement){
              var el = listContainerElement[0];
              if(el.parentNode){
                el.parentNode.removeChild(el);
                listContainerElement = null;
              }
            }
            window.removeEventListener('scroll', onWindowScroll, true);
            window.removeEventListener('resize', onWindowResize);
          });

          // Need to hide dropdown when window resizes to avoid mis-alignment
          function onWindowResize(){
            if(listContainerElement.hasClass('show')){
              $timeout(function(){
                dropdownCtrl.toggle(false);
              });
            }
          }

          // Catch events when window scrolls
          function onWindowScroll(e){
            if(listContainerElement.hasClass('show')){
              if(!e.target.contains(listContainerElement[0])){
                // Auto close when the scrolling panel doesn't contain this list
                $timeout(function(){
                  dropdownCtrl.toggle(false);
                });
              }
            }
          }
        }
    };
  }]);
})(window, window.angular);

(function (window, angular, undefined) {
  'use strict';

  angular.module('bento.alert', ['bento.services', 'bento.translate'])

    .controller('BentoAlertController', [
      '$scope',
      '$element',
      '$timeout',
      '$bentoServices',
      function ($scope, $element, $timeout, $bentoServices) {
        var controller = this;
        var clearAlertObjectTimer;
        // Access through controller
        controller.closeBentoAlert = function (alert) {

          var index = $scope.bentoAlertObject.indexOf(alert),
              a     = $element[0].querySelector('div[rel="bento-alert-' + index + '"]'),
              el
            ;

          /* Update focus */
          // Will be no more alerts
          if ($scope.bentoAlertObject.length === 1) {
            $scope.$container.attr('tabindex', '');
            if ($scope.activeElement) {
              $scope.activeElement.focus();
              $scope.activeElement = undefined;
            }
          }
          // Deleting that last alert
          else if (index === $scope.bentoAlertObject.length - 1) {
            el = $element[0].querySelector('div[rel="bento-alert-' + (index - 1) + '"] .alert > span');
          } else {
            el = $element[0].querySelector('div[rel="bento-alert-' + (index + 1) + '"] .alert > span');
          }

          // fire close callback function [BENTO-478]
          $scope.closeAlertCallback({$index: index});

          // remove the alert object from the array
          $scope.bentoAlertObject.splice(index, 1);

          if(clearAlertObjectTimer) {
            $timeout.cancel(clearAlertObjectTimer);
          }

          // A timeout event has already dismissed this alert
          // We skip everything...
          if (a && a.style) {
            a.style.height = a.offsetHeight + 'px';
            clearAlertObjectTimer = $timeout(function () {
              el ? el.focus() : 0;
            });
          }
        };

        // From Link

        var container = $element[0].querySelector('.alert-container');
        $scope.$container = angular.element(container);

        $bentoServices.loopTabbables($scope.$container);

        getFirstScrollableParent();

        $scope.$on('$destroy', function () {
          document.removeEventListener('keydown', onDocumentKeydown);
        });

        document.addEventListener('keydown', onDocumentKeydown);

        function onDocumentKeydown(event) {
          // Will react to tab only
          if (event.keyCode === 9) {
            var children = $scope.$container.children();
            if (children.length > 0) {
              if (!(container === event.target || container.contains(event.target))) {
                container.setAttribute('tabindex', '-1');
                $scope.activeElement = document.activeElement;
                container.focus();
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }

        // Keyup to listen to delete and backspace
        $element[0].addEventListener('keydown', function (event) {
          var index;
          switch (event.keyCode) {
            // DEL and BackSpace
            case 46:
            case 8:
              var alertDoms = $element[0].querySelectorAll('.bento-alert-container');
              for (var i = 0, len = alertDoms.length; i < len; i++) {
                if (alertDoms[i].contains(document.activeElement)) {
                  controller.closeBentoAlert($scope.bentoAlertObject[i]);
                  event.stopPropagation();
                  event.preventDefault();
                  break;
                }
              }
              break;
            case 38: // Up Arrow Key
              index = getCurrentAlertFocusIndex();
              setFocusToAlert(
                (index === -1) ?
                $scope.bentoAlertObject.length - 1
                  :
                (index + $scope.bentoAlertObject.length - 1) % $scope.bentoAlertObject.length);
              event.preventDefault();
              break;
            case 40: // Down Arrow Key
              index = getCurrentAlertFocusIndex();
              setFocusToAlert(
                (index === -1) ?
                  0
                  :
                (index + 1) % $scope.bentoAlertObject.length);
              event.preventDefault();
              break;
          }
        });

        function getCurrentAlertFocusIndex() {
          var alerts = $element[0].querySelectorAll('.bento-alert');
          for (var i = 0, len = alerts.length; i < len; i++) {
            if (alerts[i].contains(document.activeElement)) {
              return i;
            }
          }

          return -1;
        }

        function setFocusToAlert(index) {
          $element[0].querySelector('div[rel="bento-alert-' + index + '"] .alert > span').focus();
        }

        $scope.$watch('align', function () {
          if (!!$scope.align) {
            if ($scope.align === 'right') {
              container.className = 'alert-container right';
            } else if ($scope.align === 'left') {
              container.className = 'alert-container left';
            } else {
              container.className = 'alert-container';
            }
          }
        });

        // Find the first parent that scrolls
        function getFirstScrollableParent(domEl) {
          var style = window.getComputedStyle(document.querySelector('html'));
        }

        // Update body scrolling position
        function updateScrollingPosition(event) {
          var targetTop = 20;
          var scroll = getScroll();
          if (scroll.top < 90) {
            targetTop = 90 - scroll.top;
          }

          if (targetTop < 20) {
            targetTop = '20';
          }
          container.style.top = targetTop + 'px';
        }

      }
    ])
    .directive('bentoAlert', [
      '$bentoServices',
      function ($bentoServices) {
        return {
          restrict    : 'EA',
          controller  : 'BentoAlertController',
          controllerAs: 'bentoAlertCtrl',
          templateUrl : function (element, attrs) {
            return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/alerts/bento_alert_container.html';
          },
          scope       : {
            bentoAlertObject: '=',
            closeAlertCallback : '&bentoAlertClose',
            align           : '@'
          } //$scope
        }; //return
      } //function compile, timeout
    ])
    .directive('bentoAlertMessage', [
      '$timeout',
      '$compile',
      function ($timeout, $compile) {
        return {
          templateUrl: function (element, attrs) {
            return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/alerts/bento_alert.html';
          },
          require    : '^bentoAlert',
          replace    : true,
          scope      : {
            bentoAlertMessage     : '=',
            bentoAlertMessageIndex: '='
          },
          link       : function (scope, element, attr, controller) {
            // Original parent scope that declares Bento Alert
            var appScope = scope
                  .$parent // ng-repeat
                  .$parent // Bento Alert
                  .$parent,// App Scope
                // We need to compile the message content against the original Application scope
                message  = $compile(
                  '<span class="bento-alert-message-content">' +
                  scope.bentoAlertMessage.msg + '</span>'
                )(appScope)
              ;

            // Prepend the compile message into the alert DOM
            angular.element(element[0].querySelector('.bento-alert')).prepend(message);

            // There is a timeout
            if (typeof scope.bentoAlertMessage.timeout !== 'undefined') {
              var alertTimeout = Number(scope.bentoAlertMessage.timeout);
              // Fire the timeout

              $timeout(function () {
                controller.closeBentoAlert(scope.bentoAlertMessage);
              }, alertTimeout); //timeout
            }

            // Close Bento Alert
            scope.closeBentoAlert = function () {
              controller.closeBentoAlert(scope.bentoAlertMessage);
            };
          }
        }
      }]);

  // helper class to get document scrolling
  function getScroll() {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    return {top: top, left: left};
  }

})(window, window.angular);

function BentoScrollable(dom) {
  'use strict';
  var s = this;
  // Public
  s.dom = dom;
  s.init = init;
  s.onScroll = onScrollListener;
  s.render = render;
  s.height = height;
  s.callbackStack = [];
  // Private variables
  s._domSize = {};
  s._scrollableSize = {};
  s._bgEl = document.createElement('div');
  s.offsetTop = 0;
  s.init();
  /**
   * Public
   * setScrollable Height
   * @param containerHeight
   */
  function height(containerHeight) {
    if (typeof containerHeight !== 'undefined') {
      s.dom.style.height = [containerHeight, 'px'].join('');
    } else {
      return s.dom.offsetHeight;
    }
  }
  /**
   * Oublic
   * Render scrollable pane and scrollbar when layouts change
   * @param width
   * @param height
   */
  function render(width, height, top) {
    s.offsetTop = (typeof top !== 'undefined') ? top : s.offsetTop;
    s._scrollableSize.width = width || 1;
    s._scrollableSize.height = height;
    s._bgEl.style.height = (height+s.offsetTop) + 'px';
    // Fire scrolling event to notify scrolling change
    s.vScrollRange = height - s._domSize.height;
    var e = {
      scrollLeft: s.dom.scrollLeft,
      scrollTop: s.dom.scrollTop,
      scrollHeightRange: s.vScrollRange,
      scrollWidthRange: s.hScrollRange
    };
    // Callback functions first
    fireCallbacks(e);
  }

  // Public
  function onScrollListener(objectWithOnScroll) {
    s.callbackStack.push(objectWithOnScroll);
  }
  /**
   * Regular scroll
   * @param event
   * @private
   */
  function _onScroll(event) {
    event.scrollLeft = s.dom.scrollLeft;
    event.scrollTop = s.dom.scrollTop;
    event.scrollHeightRange = s.dom.scrollHeight - s.dom.offsetHeight;
    event.scrollWidthRange = s.dom.scrollWidth - s.dom.offsetWidth;
    // Callback functions first
    fireCallbacks(event);
  }
  /**
   * batch fire callback functions
   * @param event
   */
  function fireCallbacks(event) {
    for (var i = 0; i < s.callbackStack.length; i++) {
      s.callbackStack[i](event);
    }
  }
  /**
   * Initialize scrollable
   */
  function init() {
    s.dom.insertBefore(s._bgEl, s.dom.firstElementChild);
    s._bgEl.className = 'bento-scrollable-bg';
    s._domSize.width = s.dom.offsetWidth;
    s._domSize.height = s.dom.offsetHeight;
    s.dom.classList.add('bento-scrollable');
    
    // Add wheel or scroll events
    s.dom.addEventListener('scroll', _onScroll);

    // Window resize
    window.addEventListener('resize', function (event) {
      // No need to resize since the scrollable is not even visible
      // no need to render
      if (s.dom.offsetWidth === 0 || s.dom.offsetHeight === 0) {
        return;
      }
      if (s._domSize.width !== s.dom.offsetWidth || s._domSize.height !==
        s.dom.offsetHeight) {
        s._domSize.width = s.dom.offsetWidth;
        s._domSize.height = s.dom.offsetHeight;
        render(s._scrollableSize.width, s._scrollableSize.height);
      }
    });
  }
}

function BentoTableCell(parent, isHeader) {
  var cell = this;
  cell.dom = document.createElement('DIV');
  cell.dom.className = 'bento-table-cell';
  cell.parent = parent;
  cell.dom.cell = this;
  cell.html = setHtml;
  cell.setTop = setTop;
  cell.setBottom = setBottom;
  cell.setLeft = setLeft;
  cell.setRight = setRight;
  cell.getWidth = getWidth;
  cell.setWidth = setWidth;
  cell.destroy = destroy;
  cell.setIndex = setIndex;
  cell.addClass = addClass;
  cell.removeClass = removeClass;
  cell.hasClass = hasClass;
  cell.setType = setType;
  cell.getType = getType;
  cell.setData = setData;
  cell.getData = getData;

  // Private
  var headerPlate;
  var headerContent;
  var type;
  var data;

  init();

  // Private
  var _classes = [cell.dom.className];

  function setData(d) {
    data = d;
  }

  function getData() {
    return data;
  }

  function setType(t) {
    if (type) {
      cell.removeClass(type);
    }
    type = t;
    cell.addClass(type);
  }

  function getType() {
    return type;
  }

  function addClass(className) {
    if (_classes.indexOf(className) < 0) {
      _classes.push(className);
      cell.dom.className = _classes.join(' ');
    }
  }

  function hasClass(className) {
    return _classes.indexOf(className) > -1
  }

  function removeClass(className) {
    var index = _classes.indexOf(className);
    if (index > -1) {
      _classes.splice(index, 1);
      cell.dom.className = _classes.join(' ');
    }
  }


  function setHtml(html) {
    if (isHeader && html) {
      if (typeof html === 'string' || typeof html === 'number') {
        headerContent.innerHTML = html;
      } else if(html) {
        headerContent.innerHTML = '';
        headerContent.appendChild(html);
      }
    } else if (html) {
      if (typeof html === 'string' || typeof html === 'number') {
        cell.dom.innerHTML = html;
      } else {
        cell.dom.innerHTML = '';
        cell.dom.appendChild(html);
      }
    } else{
      cell.dom.innerHTML = '';
    }
  }

  function setIndex(col, row) {
    cell.col = col;
    cell.row = row;
  }

  function setTop(topCell) {
    cell.top = topCell;
  }

  function setBottom(bottomCell) {
    cell.bottom = bottomCell;
  }

  function setLeft(leftCell) {
    cell.left = leftCell;
  }

  function setRight(rightCell) {
    cell.right = rightCell;
  }

  function getWidth() {
    return cell.dom.offsetWidth;
  }

  function setWidth(width) {
    cell.dom.style.width = width + 'px';
  }

  function destroy() {
    delete cell.dom;
    cell.top = null;
    cell.bottom = null;
    cell.left = null;
    cell.right = null;
    cell.parent = null;

    //AngularJS code
    if(data && data.scope){
      // Destroy NG code to prevent NG related memory leak
      data.scope.$destroy();
    }

    data = null;
  }

  function init() {
    if (isHeader) {
      headerPlate = document.createElement('DIV');
      headerPlate.className = 'bt-header-cell-plate';
      headerContent = document.createElement('DIV');
      cell.dom.appendChild(headerContent);
      cell.dom.appendChild(headerPlate);
    }
  }
}
var BentoTableCore;

(function() {
  var ROW_CACHE_COUNT = 6;
  BentoTableCore = _BentoTableCore;
  _BentoTableCore.prototype.addColumn = addColumn;
  _BentoTableCore.prototype.addFrozenRow = addFrozenRow;
  _BentoTableCore.prototype.addNewColumn = addNewColumn;
  _BentoTableCore.prototype.addRow = addRow;
  _BentoTableCore.prototype.adjustColRowAllocation = adjustColRowAllocation;
  _BentoTableCore.prototype.calcGridColSizeArray = calcGridColSizeArray;
  _BentoTableCore.prototype.calcGridRowSizeArray = calcGridRowSizeArray;
  _BentoTableCore.prototype.deselectRow = deselectRow; // number
  _BentoTableCore.prototype.deselectFrozenRow = deselectFrozenRow; // number
  _BentoTableCore.prototype.fastForwardCol = fastForwardCol;
  _BentoTableCore.prototype.fastForwardRow = fastForwardRow;
  _BentoTableCore.prototype.fireCellRenderRequestCallbackWithArray = fireCellRenderRequestCallbackWithArray;
  _BentoTableCore.prototype.getColSizes = getColSizes;
  _BentoTableCore.prototype.getFirstRow = getFirstRow;
  _BentoTableCore.prototype.getLastRow = getLastRow;
  _BentoTableCore.prototype.getNumRows = getNumRows;
  _BentoTableCore.prototype.getRowSizes = getRowSizes;
  _BentoTableCore.prototype.getTableHeight = getTableHeight;
  _BentoTableCore.prototype.getTableWidth = getTableWidth;
  _BentoTableCore.prototype.init = init;
  _BentoTableCore.prototype.linkRows = linkRows;
  _BentoTableCore.prototype.onHeaderClick = onHeaderClick; // event
  _BentoTableCore.prototype.onRowClick = onRowClick; // event
  _BentoTableCore.prototype.onScrollAtBottom = onScrollAtBottom; // event
  _BentoTableCore.prototype.pushRow = pushRow;
  _BentoTableCore.prototype.refreshScrollBars = refreshScrollBars;
  _BentoTableCore.prototype.removeColumn = removeColumn;
  _BentoTableCore.prototype.removeLastColumn = removeLastColumn;
  _BentoTableCore.prototype.removeLastRow = removeLastRow;
  _BentoTableCore.prototype.removeRow = removeRow;
  _BentoTableCore.prototype.removeFrozenRow = removeFrozenRow;
  _BentoTableCore.prototype.render = render;
  _BentoTableCore.prototype.renderHeaderCell = renderHeaderCell;
  _BentoTableCore.prototype.requestCellContent = requestCellContent;
  _BentoTableCore.prototype.requestHeaderContent = requestHeaderContent;
  _BentoTableCore.prototype.requestFrozenCellContent = requestFrozenCellContent;
  _BentoTableCore.prototype.reset = reset;
  _BentoTableCore.prototype.rewindCol = rewindCol;
  _BentoTableCore.prototype.rewindRow = rewindRow;
  _BentoTableCore.prototype.scrollToRowIndex = scrollToRowIndex; // number
  _BentoTableCore.prototype.selectRow = selectRow; // number
  _BentoTableCore.prototype.selectFrozenRow = selectFrozenRow; // number
  _BentoTableCore.prototype.setColSizes = setColSizes;
  _BentoTableCore.prototype.setColumnWidth = setColumnWidth; // number
  _BentoTableCore.prototype.setGridSize = setGridSize;
  _BentoTableCore.prototype.setRowHeight = setRowHeight; // number
  _BentoTableCore.prototype.setRowSizes = setRowSizes;
  _BentoTableCore.prototype.toggleRow = toggleRow; // number
  _BentoTableCore.prototype.toggleFrozenRow = toggleFrozenRow; // number
  _BentoTableCore.prototype.unshiftRow = unshiftRow;
  _BentoTableCore.prototype.updateRowWithIndex = updateRowWithIndex;

  // Private
  _BentoTableCore.prototype._headerCellClick = _headerCellClick;
  _BentoTableCore.prototype._onHeaderColumnResize = _onHeaderColumnResize;
  _BentoTableCore.prototype._onRowClick = _onRowClick;
  _BentoTableCore.prototype._onScroll = _onScroll;

  /**
   * Constructore
   * @param dom
   * @param options
   * @private
   */
  function _BentoTableCore(dom, options) {
    var self = this;
    // API

    // row and column size reference array
    /* 'this.rowSizes' is an array where each element is an array and represents the following
     * ----------------
     * 0. Row Height
     * 1. Total Height includeing this row
     * 2. (Bool) selected toggle
     *
     */

    this.rowSizes = [];
    this.frozenRowSizes = [];
    this.colSizes = [];
    this.ready = false;

    // Default values
    this.options = {
      rowHeight: options.rowHeight || 30,
      colWidth: options.colWidth || 100,
      border: options.border || 1,
      header: options.header || { resize: false },
      autoHeight: options.autoHeight,
      doNotAssignDimensions: options.doNotAssignDimensions,
      scope: options.scope
    };

    // private variable declaration
    this._currentHIndex = 0;
    this._currentVIndex = 0;
    this._dom = dom;
    this._domWidth = 0.0;
    this._headerClickCallbackStack = [];
    this._headerHeight = 0;
    this._requestCellContentCallback = null;
    this._requestFrozenCellContentCallback = null;
    this._requestHeaderContentCallback = null;
    this._rowClickCallbackStack = [];
    this._rows = [];
    this._scrollLeft = 0.0;
    this._scrollTop = 0.0;
    this._translateTop = 0;
    this._translateLeft = 0;
    this._animatingFrameID = 0;

    // Creating sub components
    this.header = new BentoTableHeader(
      this.options.colWidth,
      this.options.rowHeight,
      this.options.header
    );
    this.scrollable = new BentoScrollable(this._dom);
    this.pane = document.createElement('DIV');
    this.pane.className = 'bento-table-inner';
    this._dom.appendChild(this.pane);
    this._dom.appendChild(this.header.dom);
    this.scrollable.onScroll(function(event) {
      self._onScroll(event);
    });

    this.isRendering = false;
  }

  // Render Header Cell
  function renderHeaderCell(headerCell, colObj, scope, compile) {
    this.header.renderCell(headerCell, colObj, scope, compile);
  }

  /**
   * Reset table content without distroying column definitions
   */
  function reset() {
    this.rowSizes = [];
    this.header.reset();
    for (var i = 0, len = this._rows.length; i < len; i++) {
      this._rows[i].clear();
    }
  }

  /**
   * Add a frozen row object
   */
  function addFrozenRow() {
    if (this.header) {
      this.header.addFrozenRow();
    }
  }

  /**
   * Remove a frozen row object
   */
  function removeFrozenRow(index) {
    if (this.header) {
      this.header.removeFrozenRow(index);
    }
  }

  /**
   * Adding scroll at bottom callback
   * @param callback
   */
  function onScrollAtBottom(callback) {
    if (typeof this._scrollAtBottomCallbacks === 'undefined') {
      this._scrollAtBottomCallbacks = [];
    }

    // To avoid adding the same callback instance
    if (this._scrollAtBottomCallbacks.indexOf(callback) > -1) {
      return;
    }

    this._scrollAtBottomCallbacks.push(callback);
  }

  /**
   * Scroll to a given row
   * @param {any} row
   */
  function scrollToRowIndex(rowIndex, $q) {
    var rowSize = this.rowSizes[rowIndex];
    var rowLocation = rowSize[1];
    var rowBottom = rowSize[0] + rowLocation;
    var scrollTop = this._dom.scrollTop;
    var offsetHeight = this._dom.offsetHeight;
    var table = this;

    this._renderReadyDefer = $q.defer();

    if (rowLocation < scrollTop) {
      this._dom.scrollTop = rowLocation;
    } else if (rowBottom > scrollTop + offsetHeight) {
      this._dom.scrollTop = rowBottom - offsetHeight;
    } else {
      setTimeout(function() {
        table._renderReadyDefer.resolve();
        table._renderReadyDefer = null;
      });
    }

    return this._renderReadyDefer.promise;
  }

  /**
   * Set Column width
   * @param col - Could be either integer to arary
   * @param width - Width to the given colIndex from `col` can be array
   */
  function setColumnWidth(colData, widthData) {
    var col,
      width,
      smallestCol = this.colSizes.length;

    if (!Array.isArray(colData)) {
      colData = [colData];
      widthData = [widthData];
    }

    for (var i = 0, len = colData.length; i < len; i++) {
      col = colData[i];
      width = widthData[i];

      if (col < smallestCol) {
        smallestCol = col;
      }

      if (this.colSizes[col]) {
        var cell = this.getFirstRow().getFirstCell();
        var fCCell = cell,
          fRCell;
        do {
          cell = cell.right;
          if (cell.col == col) {
            fRCell = cell;
            // Set width to all cell in the same column
            do {
              if (!this.options.doNotAssignDimensions) {
                cell.dom.style.width = width + 'px';
              }

              cell = cell.bottom;
            } while (cell !== fRCell);

            // update column width index
            this.colSizes[col][0] = width;
          }
        } while (cell !== fCCell);
      }
    }

    this.calcGridColSizeArray(smallestCol);
    this.render();
  }

  function updateCellCSS(cell) {
    if (cell.col === 0) {
      cell.addClass('bt-row-head');
    } else {
      cell.removeClass('bt-row-head');
    }
  }

  function setRowHeight(rowIndex, height) {
    if (this.rowSizes[rowIndex]) {
      this.rowSizes[rowIndex][0] = height;
      this.calcGridRowSizeArray(rowIndex);
      //Find the row and adjust its height if it's in viewport
      var row;
      for (var i = 0; i < this._rows; i++) {
        row = this._rows[i];
        if (row.row === row) {
          row.dom.style.height = height + 'px';
        }
      }
      this.render();
    }
  }

  function addColumn(col, count, width) {
    for (var i = 0; i < (count || 1); i++) {
      this.colSizes.splice(col, 0, [width || this.options.colWidth, 0]);
    }
    this.calcGridColSizeArray(col);
    this.render();
  }

  function addRow(row, count, height) {
    for (var i = 0; i < (count || 1); i++) {
      this.rowSizes.splice(row, 0, [height || this.options.rowHeight, 0]);
    }
    this.calcGridRowSizeArray(row);
    this.render();
  }

  function removeRow(row, count) {
    this.rowSizes.splice(row, count || 1);
    this.calcGridRowSizeArray(row);
    this.render();
  }

  function removeColumn(col, count) {
    this.colSizes.splice(col, count || 1);
    this.calcGridColSizeArray(col);
    this.render();
  }

  function calcGridRowSizeArray(index, isFrozen) {
    var array = isFrozen ? this.frozenRowSizes : this.rowSizes;
    var height = index === 0 ? 0 : array[index - 1][1];
    var size = array.length;
    for (var i = index; i < size; i++) {
      if (i > 0) {
        height += array[i - 1][0];
      }
      array[i][1] = height;
    }
  }

  function calcGridColSizeArray(index) {
    var width;
    var size = this.colSizes.length;
    for (var i = index; i < size; i++) {
      if (i > 0) {
        var lastCol = this.colSizes[i - 1];
        width = lastCol[1] + lastCol[0];
      } else {
        width = 0;
      }
      this.colSizes[i][1] = width;
    }
  }

  function requestCellContent(callback) {
    this._requestCellContentCallback = callback;
  }

  function requestHeaderContent(callback) {
    this._requestHeaderContentCallback = callback;
  }

  function requestFrozenCellContent(callback) {
    this._requestFrozenCellContentCallback = callback;
  }

  function getColSizes() {
    return this.colSizes;
  }

  function setColSizes(array) {
    this.colSizes = array;
  }

  function getRowSizes() {
    return this.rowSizes;
  }

  function setRowSizes(array) {
    this.rowSizes = array;
  }

  function _onScroll(event) {
    cancelAnimationFrame(this._animatingFrameID);

    this._animatingFrameID = requestAnimationFrame(
      function() {
        if (this.isRendering) {
          // Browser might be busy rendering previous scroll
          // Skip!!
          return;
        }

        this.isRendering = true;

        var index, vIndex, hIndex, fIndex;
        var dHIndex = 0,
          dVIndex = 0,
          cWidth = 0,
          i,
          j,
          len;
        var renderStack = [],
          headerRenderStack = [],
          freezeRenderStack = [];
        var cSize = this.getFirstRow().getNumCells(),
          rSize = this.getNumRows(),
          dataRowSize = this.rowSizes.length,
          scrollTop = event.scrollTop,
          cell,
          hCell;

        // Check if need to fire scroll at bottom or not
        if (
          this._scrollAtBottomCallbacks &&
          event.scrollHeightRange - event.scrollTop < 500
        ) {
          for (
            i = 0, len = this._scrollAtBottomCallbacks.length;
            i < len;
            i++
          ) {
            this._scrollAtBottomCallbacks[i](event);
          }
        }

        // H Scroll
        if (this._scrollLeft !== event.scrollLeft) {
          this._scrollLeft = event.scrollLeft;
          index = bSearchIndexByScroll(this.colSizes, event.scrollLeft);
          if (index + cSize >= this.colSizes.length) {
            index = this.colSizes.length - cSize;
          }
          dHIndex = index - this._currentHIndex;
          this._currentHIndex = index;

          this._translateLeft = this.colSizes[this._currentHIndex][1];
        }

        if (event.scrollHeightRange < scrollTop) {
          // To prevent scrollTop
          scrollTop = event.scrollHeightRange;
        }

        // V Scroll
        if (this._scrollTop !== scrollTop && dataRowSize) {
          this._scrollTop = scrollTop;
          index = Math.max(
            bSearchIndexByScroll(this.rowSizes, scrollTop) - 3,
            0
          );

          if (index + rSize >= dataRowSize) {
            index = dataRowSize - rSize;
          }
          dVIndex = index - this._currentVIndex;
          this._currentVIndex = index;
          this._translateTop = this.rowSizes[this._currentVIndex][1];
        }

        // Use `transform` to improve performance
        if (this._headerHeight > 10) {
          this.header.dom.style.transform = 'translate(0, ' + scrollTop + 'px)';
        }
        if (cSize > 1) {
          this.pane.style.transform =
            'translate(' +
            this._translateLeft +
            'px, ' +
            (this._translateTop + this._headerHeight) +
            'px)';
        } else {
          this.pane.style.transform =
            'translateY(' + (this._translateTop + this._headerHeight) + 'px)';
        }

        //Total this.render
        if (Math.abs(dHIndex) > cSize || Math.abs(dVIndex) > rSize) {
          hCell = this.header.row.getFirstCell();
          cell = this.getFirstRow().getFirstCell();
          for (i = 0; i < rSize; i++) {
            vIndex = this._currentVIndex + i;
            if (vIndex < this.rowSizes.length) {
              this.updateRowWithIndex(cell.parent, vIndex);
              for (j = 0; j < cSize; j++) {
                hIndex = this._currentHIndex + j;
                cWidth = this.colSizes[hIndex]
                  ? [this.colSizes[hIndex][0], 'px'].join('')
                  : '';
                if (hIndex < this.colSizes.length) {
                  cell.setIndex(hIndex, vIndex);
                  if (!this.options.doNotAssignDimensions) {
                    cell.dom.style.width = cWidth;
                  }
                  renderStack.push(cell);
                }

                // Only execute once
                if (i === 0 && hIndex < this.colSizes.length) {
                  hCell.setIndex(hIndex, 0);
                  if (!this.options.doNotAssignDimensions) {
                    hCell.dom.style.width = cWidth;
                  }
                  headerRenderStack.push(hCell);
                  __getFreezeCellRenderStackFromHeader(
                    freezeRenderStack,
                    hCell,
                    cWidth
                  );
                }

                hCell = hCell.right;
                cell = cell.right;
              }
            } else {
              for (j = 0; j < cSize; j++) {
                cell.html('');
                cell = cell.right;
              }
            }
            cell = cell.bottom;
          }
        } else {
          // horizontal Scrolling
          //FF
          if (dHIndex > 0) {
            // Get first cell
            hCell = this.header.row.getFirstCell();
            cell = this.getFirstRow().getFirstCell();
            hIndex = this._currentHIndex + cSize - dHIndex;
            // Column
            for (i = 0; i < dHIndex; i++) {
              index = hIndex + i;
              cWidth = this.colSizes[index]
                ? [this.colSizes[index][0], 'px'].join('')
                : null;
              // Row
              for (j = 0; j < rSize; j++) {
                if (
                  index < this.colSizes.length &&
                  cell.row < this.rowSizes.length
                ) {
                  cell.setIndex(index, cell.row);
                  if (!this.options.doNotAssignDimensions) {
                    cell.dom.style.width = cWidth;
                  }
                  renderStack.push(cell);
                } else {
                  cell.html('');
                }
                cell = cell.bottom;
              }
              if (index < this.colSizes.length) {
                hCell.setIndex(index, 0);
                if (!this.options.doNotAssignDimensions) {
                  hCell.dom.style.width = cWidth;
                }
                headerRenderStack.push(hCell);
                __getFreezeCellRenderStackFromHeader(
                  freezeRenderStack,
                  hCell,
                  cWidth
                );
              }

              cell = cell.right;
              hCell = hCell.right;
              this.fastForwardCol();
            }
          }
          //RW
          else if (dHIndex < 0) {
            //get first row last Cell
            hCell = this.header.row.getLastCell();
            cell = this.getFirstRow().getLastCell();
            hIndex = this._currentHIndex - dHIndex;
            // Column
            for (i = -1; i >= dHIndex; i--) {
              index = hIndex + i;
              cWidth = this.colSizes[index][0] + 'px';
              // Row
              for (j = 0; j < rSize; j++) {
                if (cell.row < this.rowSizes.length) {
                  cell.setIndex(index, cell.row);
                  if (!this.options.doNotAssignDimensions) {
                    cell.dom.style.width = cWidth;
                  }
                  renderStack.push(cell);
                }
                cell = cell.bottom;
              }
              hCell.setIndex(index, 0);
              if (!this.options.doNotAssignDimensions) {
                hCell.dom.style.width = cWidth;
              }
              headerRenderStack.push(hCell);
              __getFreezeCellRenderStackFromHeader(
                freezeRenderStack,
                hCell,
                cWidth
              );

              hCell = hCell.left;
              cell = cell.left;
              this.rewindCol();
            }
          }

          // Vertical Scrolling
          //FF
          if (dVIndex > 0) {
            // Get first cell
            cell = this.getFirstRow().getFirstCell();
            vIndex = this._currentVIndex + rSize - dVIndex;
            // Row
            for (i = 0; i < dVIndex; i++) {
              index = vIndex + i;
              if (
                index < this.rowSizes.length &&
                cell.col < this.colSizes.length
              ) {
                this.updateRowWithIndex(cell.parent, index);
                // Column
                for (j = 0; j < cSize; j++) {
                  if (cell.col < this.colSizes.length) {
                    cell.setIndex(cell.col, index);
                    if (renderStack.indexOf(cell) === -1) {
                      renderStack.push(cell);
                    }
                  }
                  cell = cell.right;
                }
                cell = cell.bottom;
              }
              this.fastForwardRow();
            }
          }
          //RW
          else if (dVIndex < 0) {
            //get first row last Cell
            cell = this.getLastRow().getFirstCell();
            vIndex = this._currentVIndex - dVIndex;
            // Row
            for (i = -1; i >= dVIndex; i--) {
              index = vIndex + i;
              this.updateRowWithIndex(cell.parent, index);
              // Column
              for (j = 0; j < cSize; j++) {
                if (cell.col < this.colSizes.length) {
                  cell.setIndex(cell.col, index);
                  if (renderStack.indexOf(cell) === -1) {
                    renderStack.push(cell);
                  }
                }
                cell = cell.right;
              }
              cell = cell.top;
              this.rewindRow();
            }
          }
        } // End of main if statement

        // callback for cell this.rendering
        this.fireCellRenderRequestCallbackWithArray(
          renderStack,
          headerRenderStack,
          freezeRenderStack
        );
        renderStack = null;
        headerRenderStack = null;
        freezeRenderStack = null;
        this.isRendering = false;

        if (this._renderReadyDefer) {
          var table = this;
          setTimeout(function() {
            table._renderReadyDefer.resolve();
            table._renderReadyDefer = null;
          });
        }
      }.bind(this)
    );
  }

  /**
   * Get a render stack for frozen column using a header cell as a column reference
   * @param hCell
   * @param cWidth
   * @private
   */
  function __getFreezeCellRenderStackFromHeader(
    freezeRenderStack,
    hCell,
    cWidth
  ) {
    if (hCell === hCell.top) {
      return;
    }

    var fIndex = 0,
      fCell;

    fCell = hCell.bottom;
    while (fCell !== hCell) {
      fCell.setIndex(hCell.col, fIndex);
      if (!this.options.doNotAssignDimensions) {
        fCell.dom.style.width = cWidth;
      }
      freezeRenderStack.push(fCell);
      // next frozen cell in this column
      fCell = fCell.bottom;
      fIndex++;
    }
  }

  function updateRowWithIndex(row, index) {
    var newHeight = this.rowSizes[index][0];
    var newHeightPx = this.rowSizes[index][0] + 'px';
    if (this.options.doNotAssignDimensions) {
      if (newHeight === this.options.rowHeight) {
        if (row.dom.style.height.length) {
          // remove row height
          row.dom.style.height = '';
        }
      } else {
        row.dom.style.height = newHeightPx;
      }
    } else if (row.dom.style.height !== newHeightPx) {
      row.dom.style.height = newHeightPx;
    }

    // set row index
    row.setRow(index);
  }

  function fireCellRenderRequestCallbackWithArray(arr, headerArr, frozenArr) {
    var i, len, cell;
    for (i = 0, len = arr.length; i < len; i++) {
      cell = arr[i];
      cell.parent.addClass('dirty');
      updateCellCSS(cell);
      this._requestCellContentCallback(cell);
    }

    for (i = 0, len = headerArr.length; i < len; i++) {
      cell = headerArr[i];
      updateCellCSS(cell);
      this._requestHeaderContentCallback(cell);
    }

    for (i = 0, len = frozenArr.length; i < len; i++) {
      cell = frozenArr[i];
      cell.parent.addClass('dirty');
      updateCellCSS(cell);
      this._requestFrozenCellContentCallback(frozenArr[i]);
    }
    if (!this.options.scope.$root.$$phase) {
      this.options.scope.$digest();
    }
  }

  /**
   * Find the index of an array from its scroll
   * @param arr
   * @param scroll
   * @returns (int)
   */
  function bSearchIndexByScroll(arr, scroll) {
    if (scroll <= 0 || arr.length === 0) {
      return 0;
    }

    // Using three pivot points
    var lP = 0,
      rP = arr.length - 1,
      cR,
      notFound = true;

    while (notFound) {
      cR = Math.floor((lP + rP) * 0.5);
      //Compare cR
      if (arr[cR][1] < scroll) {
        if (arr[cR][1] + arr[cR][0] >= scroll) {
          notFound = false;
        } else if(cR === lP){
          // There seems to be a case where data is updated before the scrollHeight
          // where the last row's bottom is still way smaller than scroll
          // so we take the index of the last row for this and terminate the loop
          // to avoid infinit looping
          cR = rP;
          notFound = false;
        } else  {
          lP = cR;
        }
      } else {
        rP = cR;
      }
    }
    return cR;
  }

  function setGridSize(row, col, data) {
    var height,
      width,
      h = this.options.rowHeight,
      w = this.options.colWidth;

    // Do row size refresh
    this.rowSizes = [];
    if (data) {
      for (var i = 0; i < row; i++) {
        this.rowSizes[i] = [data[i].rowHeight || h];
      }
    } else {
      for (var i = 0; i < row; i++) {
        this.rowSizes[i] = [h];
      }
    }
    this.calcGridRowSizeArray(0);

    // Add new col indexes
    if (col > this.colSizes.length) {
      for (var j = this.colSizes.length; j < col; j++) {
        if (j > 0) {
          var lastColumn = this.colSizes[j - 1];
          width = lastColumn[0] + lastColumn[1];
        } else {
          width = 0;
        }
        this.colSizes.push([w, width]);
      }
    }
    // Slice the current array to match with the new col count
    else if (col < this.colSizes.length) {
      this.colSizes = this.colSizes.slice(0, col);
    }
  }

  function refreshScrollBars() {
    this.scrollable.render(
      this.colSizes.length ? this.colSizes[this.colSizes.length - 1][1] : 0,
      this.rowSizes.length ? this.rowSizes[this.rowSizes.length - 1][1] : 0,
      this.header.dom.offsetHeight
    );
  }

  function render(deepRender, doNotCleanCells) {
    this.adjustColRowAllocation();

    var cSize = this.getFirstRow().getNumCells(),
      rSize = this.getNumRows(),
      cWidth,
      cell,
      hCell,
      hIndex,
      vIndex,
      i,
      j,
      len,
      renderStack = [],
      headerRenderStack = [],
      freezeRenderStack = [];
    if (deepRender) {
      this.calcGridRowSizeArray(0);
    }

    if (this.options.autoHeight) {
      if (rSize < this.rowSizes.length) {
        var newRow;
        for (i = 0, len = this.rowSizes.length - rSize; i < len; i++) {
          newRow = new BentoTableRow(
            cSize,
            this.options.colWidth,
            this.options.rowHeight,
            null,
            null,
            this.options
          );
          this.pushRow(newRow, true);
        }

        rSize = this.rowSizes.length;
      }

      // resize table

      var newHeight =
        (this.rowSizes.length
          ? this.rowSizes[this.rowSizes.length - 1][1]
          : 0) + this.header.dom.offsetHeight;
      this._dom.style.height = newHeight + 'px';
      this.scrollable.height(newHeight);

      //need to set the parent height
      this._dom.parentElement.style.position = 'relative';
      this._dom.parentElement.style.height = newHeight + 'px';
    }

    this._domWidth = this._dom.offsetWidth;

    //Total this.render
    cell = this.getFirstRow().getFirstCell();
    hCell = this.header.row.getFirstCell();

    for (i = 0; i < rSize; i++) {
      vIndex = this._currentVIndex + i;
      // out of boundary check
      if (vIndex < this.rowSizes.length) {
        this.updateRowWithIndex(cell.parent, vIndex);
        for (j = 0; j < cSize; j++) {
          // out of boundary check
          hIndex = this._currentHIndex + j;
          if (hIndex >= this.colSizes.length) {
          } else {
            cWidth = this.colSizes[hIndex][0] + 'px';
            cell.setIndex(hIndex, vIndex);
            if (!this.options.doNotAssignDimensions) {
              cell.dom.style.width = cWidth;
            }
            renderStack.push(cell);
          }
          cell = cell.right;

          // Only execute once
          if (i === 0 && hIndex < this.colSizes.length) {
            hCell.setIndex(hIndex, 0);
            if (!this.options.doNotAssignDimensions) {
              hCell.dom.style.width = cWidth;
            }
            headerRenderStack.push(hCell);
            __getFreezeCellRenderStackFromHeader(
              freezeRenderStack,
              hCell,
              cWidth
            );

            hCell = hCell.right;
          }
        }
      } else if (!doNotCleanCells) {
        // Erase the empty cells
        for (j = 0; j < cSize; j++) {
          if (j === 0) {
            cell.parent.clearClasses();
          }

          cell.html('');
          cell = cell.right;
        }
      }
      cell = cell.bottom;
    }

    this._headerHeight = this.header.dom.offsetHeight;

    this.refreshScrollBars();
    this.fireCellRenderRequestCallbackWithArray(
      renderStack,
      headerRenderStack,
      freezeRenderStack
    );
    renderStack = null;
    headerRenderStack = null;
    freezeRenderStack = null;
  }

  function getTableWidth() {
    return this.colSizes.reduce(function(a, b) {
      return a + b;
    });
  }

  function getTableHeight() {
    return this.rowSizes.reduce(function(a, b) {
      return a + b;
    });
  }

  /**
   * Row and Column rotations
   */
  function fastForwardRow() {
    this.pushRow(this.getFirstRow());
  }

  function rewindRow() {
    this.unshiftRow(this.getLastRow());
  }

  function fastForwardCol() {
    var row, i, len, hCell, fCell;
    for (i = 0, len = this._rows.length; i < len; i++) {
      row = this._rows[i];
      row.push(row.getFirstCell());
    }

    // header
    hCell = this.header.row.getFirstCell();
    this.header.row.push(hCell);

    // Frozen rows
    fCell = hCell.bottom;
    while (fCell !== hCell) {
      fCell.parent.push(fCell);
      fCell = fCell.bottom;
    }
  }

  function rewindCol() {
    var row, i, len, hCell, fCell;
    for (i = 0, len = this._rows.length; i < len; i++) {
      row = this._rows[i];
      row.unshift(row.getLastCell());
    }

    //header
    hCell = this.header.row.getLastCell();
    this.header.row.unshift(hCell);

    // Frozen rows
    fCell = hCell.bottom;
    while (fCell !== hCell) {
      fCell.parent.unshift(fCell);
      fCell = fCell.bottom;
    }
  }

  function getFirstRow() {
    return this.pane.firstElementChild.row;
  }

  function getLastRow() {
    return this.pane.lastElementChild.row;
  }

  /**
   * Column and row operations
   */
  function pushRow(row, isNew) {
    if (isNew) {
      this.linkRows(row);
      var table = this;
      row.dom.addEventListener('click', function(event) {
        event.row = row;
        table._onRowClick(event);
      });
    }
    this.pane.appendChild(row.dom);
  }

  function unshiftRow(row, isNew) {
    if (isNew) {
      this.linkRows(row);
    }
    this.pane.insertBefore(row.dom, this.pane.firstChild);
  }

  function getNumRows() {
    return this._rows.length;
  }

  /**
   * Remove the last row from Pane in DOM order
   */
  function removeLastRow() {
    var row = this.getLastRow();
    this._rows.splice(this._rows.indexOf(row), 1);
    row.destroy();
  }

  function removeLastColumn() {
    for (var i = 0; i < this._rows; i++) {
      this._rows[i].removeLastCell();
    }
  }

  function addNewColumn() {
    var fCell, cell, lCell;
    for (var i = 0; i < this._rows.length; i++) {
      cell = new BentoTableCell(this._rows[i]);
      if (typeof fCell === 'undefined') {
        fCell = cell;
      }

      if (lCell) {
        lCell.setBottom(cell);
        cell.setTop(lCell);
      }
      this._rows[i].push(cell, true);
      lCell = cell;
    }

    fCell.setTop(cell);
    cell.setBottom(fCell);
  }

  function onHeaderClick(callback) {
    this._headerClickCallbackStack.push(callback);
  }

  function _headerCellClick(event) {
    event.cell = event.currentTarget.cell;
    for (var i = 0, len = this._headerClickCallbackStack.length; i < len; i++) {
      this._headerClickCallbackStack[i](event);
    }
  }

  function onRowClick(callback) {
    this.header.onRowClick(callback);
    this._rowClickCallbackStack.push(callback);
  }

  // Fire RowClick callback functions
  function _onRowClick(event) {
    this._rowClickCallbackStack.forEach(function(callback) {
      var row = event.currentTarget.row;
      event.rowIndex = row.row;
      event.row = row;
      callback(event);
    });
  }

  function deselectRow(rowIndex, isFrozen) {
    var rows = isFrozen ? this.header.frozenRows : this._rows;
    var rowSizes = isFrozen ? this.frozenRowSizes : this.rowSizes;
    if (rowIndex < rowSizes.length) {
      // update index
      // Find and update row is it presents in the viewport
      for (var i = 0, len = rows.length; i < len; i++) {
        if (rows[i].row === rowIndex) {
          rows[i].removeClass('bt-row-selected');
          break;
        }
      }
    }
  }

  function selectRow(rowIndex, isFrozen) {
    var rows = isFrozen ? this.header.frozenRows : this._rows;
    var rowSizes = isFrozen ? this.frozenRowSizes : this.rowSizes;
    if (rowIndex < rowSizes.length)
      // update index

      // Find and update row is it presents in the viewport
      for (var i = 0, len = rows.length; i < len; i++) {
        if (rows[i].row === rowIndex) {
          rows[i].addClass('bt-row-selected');
          break;
        }
      }
  }

  function toggleRow(rowIndex, isFrozen) {
    var rows = isFrozen ? this.header.frozenRows : this._rows;
    var rowSizes = isFrozen ? this.frozenRowSizes : this.rowSizes;

    if (rowIndex < rowSizes.length) {
      // Find and update row is it presents in the viewport
      for (var i = 0, len = rows.length; i < len; i++) {
        if (rows[i].row === rowIndex) {
          return rows[i].toggleClass('bt-row-selected');
          break;
        }
      }
    }
  }

  function deselectFrozenRow(rowDom) {
    rowDom.row.removeClass('bt-row-selected');
  }

  function selectFrozenRow(rowDom) {
    rowDom.row.addClass('bt-row-selected');
  }

  function toggleFrozenRow(rowDom) {
    rowDom.row.toggleClass('bt-row-selected');
  }

  // Resize column
  function _onHeaderColumnResize(event) {
    this.setColumnWidth(event.col, event.width);
  }

  /**
   * Link all cells in current row with other cells that are in the same column
   * @param row
   */
  function linkRows(row) {
    this._rows.push(row);
    if (this._rows.length > 1) {
      var fRow = this.getFirstRow();
      var lRow = this.getLastRow();
      var numCol = fRow.getNumCells();
      var cell, fCell, lCell;

      for (var i = 0; i < numCol; i++) {
        cell = row.getNthCell(i);
        fCell = fRow.getNthCell(i);
        lCell = lRow.getNthCell(i);

        fCell.setTop(cell);
        lCell.setBottom(cell);
        cell.setTop(lCell);
        cell.setBottom(fCell);
      }
    }
  }

  function adjustColRowAllocation() {
    var table = this;
    var numRows = this.getNumRows();
    var numCols = numRows === 0 ? 1 : this.getFirstRow().getNumCells();
    var maxNumRows =
      Math.ceil(this._dom.offsetHeight / this.options.rowHeight) +
      ROW_CACHE_COUNT;
    var maxNumCols =
      Math.ceil(this._dom.offsetWidth / this.options.colWidth) + 3;
    var targetNumRows =
      this.rowSizes.length > numRows && this.rowSizes.length > maxNumRows
        ? maxNumRows
        : this.rowSizes.length;
    var targetNumCols =
      this.colSizes.length > numCols && this.colSizes.length > maxNumCols
        ? maxNumCols
        : this.colSizes.length;
    var row;

    if (numRows === 0 && numRows === targetNumRows) {
      // There is still no data, we do nothing
      return;
    }

    // Process rows
    if (targetNumRows > numRows) {
      // Need to add rows
      var dNumRows = targetNumRows - numRows;
      for (var i = 0; i < dNumRows; i++) {
        row = new BentoTableRow(
          numCols,
          this.options.colWidth,
          this.options.rowHeight,
          null,
          null,
          this.options
        );
        //row.setClassName(isOddRow? 'odd' : 'even');
        this.pushRow(row, true);
      }
    } else if (targetNumRows < numRows) {
      // Need to remove rows
      var dNumRows = numRows - targetNumRows;
      for (i = 0; i < dNumRows; i++) {
        this.removeLastRow();
      }
    }

    // Process columns
    if (targetNumCols > numCols) {
      // Need to add Cols
      var dNumCols = targetNumCols - numCols;
      for (var i = 0; i < dNumCols; i++) {
        this.addNewColumn();
      }
    } else if (targetNumCols < numCols) {
      // Need to remove Cols
      var dNumCols = numCols - targetNumCols;
      for (i = 0; i < dNumCols; i++) {
        this.removeLastColumn();
      }
    }

    // Update header columns
    this.header.setNumColumns(targetNumCols, function(e) {
      table._headerCellClick(e);
    });
    this.header.onColumnResize(this._onHeaderColumnResize.bind(this));
  }

  /**
   * Initialize Table
   */
  function init() {
    var table = this;

    this.ready = true;
  }
})();

var BentoTableHelper;

(function() {
  "use strict";

  // Public API
  BentoTableHelper = _BentoTableHelper;
  BentoTableHelper.prototype.applyTableOptions = applyTableOptions;
  BentoTableHelper.prototype.concatData = concatData;
  BentoTableHelper.prototype.getDataForRender = getDataForRender;
  BentoTableHelper.prototype.freezeRow = freezeRow;
  BentoTableHelper.prototype.getCellByIndex = getCellByIndex;
  BentoTableHelper.prototype.getColumnByIndex = getColumnByIndex;
  BentoTableHelper.prototype.getDataColunmIndex = getDataColunmIndex;
  BentoTableHelper.prototype.getNumCols = getNumCols;
  BentoTableHelper.prototype.getNumRows = getNumRows;
  BentoTableHelper.prototype.getRowByIndex = getRowByIndex;
  BentoTableHelper.prototype.init = init;
  BentoTableHelper.prototype.parseColumnDefinitions = parseColumnDefinitions;
  BentoTableHelper.prototype.removeColumnIndex = removeColumnIndex;
  BentoTableHelper.prototype.removeFrozenRecords = removeFrozenRecords;
  BentoTableHelper.prototype.renderCell = renderCell;
  BentoTableHelper.prototype.renderCellDefault = renderCellDefault;
  BentoTableHelper.prototype.renderFrozenCell = renderFrozenCell;
  BentoTableHelper.prototype.reset = reset;
  BentoTableHelper.prototype.sort = sort;
  BentoTableHelper.prototype.onRowClick = onRowClick;
  BentoTableHelper.prototype.unfreezeRow = unfreezeRow;
  BentoTableHelper.prototype.updateObjectsForRender = updateObjectsForRender;
  BentoTableHelper.prototype.fireRowClickCallbacks = fireRowClickCallbacks;

  // Private API
  BentoTableHelper.prototype._prepSort = _prepSort;

  function _BentoTableHelper(data, bentoTable, options, scope, compile, attrs) {
    var helper = this;
    // Class variables
    this._columnIndexRefArray = null;
    this._sorter = new BentoTableSort(bentoTable);

    // local variables
    this._cColumn = null;
    this._scope = scope;
    this._options = options;
    this._compile = compile;
    this._attrs = attrs;
    this._cColumnTemplate = null;
    this._columnTemplateStack = [];
    this._columnTypeObjs = {
      number: new BentoTableNumberColumn(),
      default: new BentoTableDefaultColumn(),
      checkbox: new BentoTableCheckBoxColumn()
    };

    this._table = bentoTable;
    this._cellObj = null;
    this._rowObj = null;
    this._data = data;
    this._frozenRows = [];

    this._colWidthArray = [];
    this._colIndexArray = [];

    this._rowClickCallbacks = [];

    this._table.onRowClick(function(event) {
      helper.fireRowClickCallbacks(event);
    });
  }

  /**
   * Initialization
   */
  function init(colOffset) {
    this._colOffset = colOffset ? colOffset : 0;
    this.parseColumnDefinitions(this._data.columns);
  }

  /**
   * Get ordered data for render
   * @returns {*}
   */
  function getDataForRender() {
    return this._data.data;
  }

  /**
   * Reset helper
   */
  function reset() {
    this._cellObj = null;
    this._frozenRows = [];
    this._rowObj = null;
  }

  /**
   * Public function to add table row clicks
   * @param callback
   */
  function onRowClick(callback) {
    this._rowClickCallbacks.push(callback);
  }

  function fireRowClickCallbacks(event) {
    for (var i = 0, len = this._rowClickCallbacks.length; i < len; i++) {
      this._rowClickCallbacks[i](event);
    }
  }

  /**
   * Concat two data arrays then return the new array
   * @param mainData
   * @param newData
   */
  function concatData(mainData, newData) {
    return (this._data.data = mainData.concat(newData));
  }

  /**
   * Remove frozen records from sourceData
   * IMPORTANT: sourceData needs to be sourced by tableCol
   * @param sourceData (array)
   * @param tableCol (number)
   */
  function removeFrozenRecords(sourceData, tableCol, desc) {
    var col = this._data.columns[this.getDataColunmIndex(tableCol)].name,
      fRow,
      dRow,
      index,
      val;
    // find the approx index for the match
    for (var i = 0, len = this._frozenRows.length; i < len; i++) {
      fRow = this._frozenRows[i];
      val = fRow[col];
      // Find the index to be removed
      index = this._sorter.findIndex(
        sourceData,
        function(l, r) {
          if (desc) {
            return l[col] >= val && val >= r[col];
          } else {
            return l[col] <= val && val <= r[col];
          }
        },
        function(f, l) {
          if (desc) {
            return f[col] < val || val < l[col];
          } else {
            return l[col] < val || val < f[col];
          }
        },
        true
      );

      // search linearly for the exact matching data since there might be multiple rows with the same col value
      while ((dRow = sourceData[index]) && fRow[col] === dRow[col]) {
        //found matching

        if (isEqual(fRow, dRow)) {
          fRow["__btDataIndex"] = index;
          sourceData.splice(index, 1);
          break;
        }
        index++;
      }
    }

    return sourceData;
  }

  // Check if two arrays are equal based on numbered indexes
  function isEqual(a, b) {
    var equal = true;
    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i] !== b[i]) {
        equal = false;
        break;
      }
    }

    return equal;
  }

  /**
   * Freeze a row
   * @param row - row data object
   * @param noRender - do not render
   * @param mainData - (Array optional)
   */
  function freezeRow(row, noRender, mainData) {
    if (this._frozenRows.indexOf(row) > -1) {
      console.warn("Bento Table: This row is already frozen.");
      return;
    }

    // Remove row from base data
    var dataArray = mainData || this._data.data,
      index = dataArray.indexOf(row);
    dataArray.splice(index, 1);

    // Add a bookmark as the position in Data
    row["__btDataIndex"] = index;

    // Add row to the frozen row
    this._frozenRows.push(row);
    this._table.addFrozenRow();

    // Remove and add row size from rowSizes to frozenRowSizes in BentoTable
    this._table.frozenRowSizes.push(this._table.rowSizes.splice(index, 1)[0]);

    // Calculate row size indexes
    this._table.calcGridRowSizeArray(0, true);
    this._table.calcGridRowSizeArray(index);

    // Will render
    if (!noRender) {
      // Sort if necessary before rendering
      if (typeof this._sortedDataColIndex !== "undefined") {
        var col = this._sortedDataColIndex;
        var data;
        if (this._sortedDesc) {
          //frozen rows
          data = this._sorter.sort(
            this._frozenRows,
            this._table.frozenRowSizes,
            function(a, b) {
              return a[col] < b[col];
            }
          );
        } else {
          //frozen rows
          data = this._sorter.sort(
            this._frozenRows,
            this._table.frozenRowSizes,
            function(a, b) {
              return a[col] > b[col];
            }
          );
        }

        this._frozenRows = data.rows;
        this._table.frozenRowSizes = data.rowSizes;
      }

      this._table.render();
      this._table.refreshScrollBars();
    }
  }

  /**
   * Unfreeze a row
   * @param row - row data object
   * @param mainData - (Array optional)
   */
  function unfreezeRow(row, noRender, mainData) {
    // Remove frozen row
    var index,
      rowSize,
      dataArray = mainData || this._data.data;
    index = this._frozenRows.indexOf(row);

    // The row doesn't exit in the frozen area
    if (index < 0) {
      console.warn("Bento Table: This row is already unfrozen.");
      return;
    }

    this._frozenRows.splice(index, 1);
    this._table.removeFrozenRow(index);
    rowSize = this._table.frozenRowSizes.splice(index, 1)[0];

    // Add back to data
    // Condition 1: check if there is a sort -> use b-search to insert
    // Condition 2: No Sort

    //[Condition 1]
    if (typeof this._sortedDataColIndex !== "undefined") {
      var col = this._sortedDataColIndex;
      // Descending
      if (this._sortedDesc) {
        index = this._sorter.findIndex(
          dataArray,
          function(a, b) {
            return a[col] >= row[col] && row[col] >= b[col];
          },
          function(a, b) {
            // too small
            if (row[col] > a[col]) {
              return -1;
            }
            // too big
            else if (row[col] < b[col]) {
              return 1;
            } else {
              return 0;
            }
          }
        );
      }
      // Ascending
      else {
        index = this._sorter.findIndex(
          dataArray,
          function(a, b) {
            return a[col] <= row[col] && row[col] <= b[col];
          },
          function(a, b) {
            // too small
            if (row[col] < a[col]) {
              return -1;
            }
            // too big
            else if (row[col] > b[col]) {
              return 1;
            } else {
              return 0;
            }
          }
        );
      }
    }
    // [Condition 2]
    // insert the row back to its original location in the data array
    // no need to worry about the sorting for now because it'll be resorted
    else if (typeof row["__btDataIndex"] !== "undefined") {
      index = row["__btDataIndex"];
    } else {
      index = 0;
    }

    delete row["__btDataIndex"];
    // Insert the row back and update the rowSize
    dataArray.splice(index, 0, row);
    this._table.rowSizes.splice(index, 0, rowSize);

    // Calculate row size indexes
    this._table.calcGridRowSizeArray(0, true);
    this._table.calcGridRowSizeArray(index);

    if (!noRender) {
      this._table.render();
      this._table.refreshScrollBars();
    }
  }

  /**
   * Renders an object to BentoCell
   * @param cell - (BentoCell) cell to be rendered
   *
   * This will be overridden based on the type of the object
   */
  function renderCell(cell) {
    if (this.updateObjectsForRender(cell, false)) {
      this.renderCellDefault(cell);
      cell.parent.applyClasses();
    }
  }

  /**
   * Render a frozen cell from frozen row array
   * @param cell
   */
  function renderFrozenCell(cell) {
    if (this.updateObjectsForRender(cell, true)) {
      this.renderCellDefault(cell);
      cell.parent.applyClasses();
    }
  }

  /**
   * Most default cell dom rendering based on template and other column types
   * @param cell
   */
  function renderCellDefault(cell) {
    if (this._cColumn.type === "template" && !!this._cColumn.template) {
      this._cColumnTemplate = this._columnTemplateStack[this._cColumn.template];
      // Create custom template the first time
      if (typeof this._cColumnTemplate === "undefined") {
        this._cColumnTemplate = new BentoTableCellTemplateColumn(
          this._scope,
          this._compile,
          this._attrs.bentoTable
        );
        this._cColumnTemplate.setTemplate(
          document.getElementById(this._cColumn.template).textContent
        );
        this._columnTemplateStack[
          this._cColumn.template
        ] = this._cColumnTemplate;
      }
      //use template to render
      this._cColumnTemplate.applyContentToCell(
        this._cellObj,
        cell,
        this._rowObj
      );
    } else if (
      !!this._cColumn.type &&
      this._columnTypeObjs[this._cColumn.type]
    ) {
      this._columnTypeObjs[this._cColumn.type].applyContentToCell(
        this._cellObj,
        cell
      );
    } else {
      this._columnTypeObjs.default.applyContentToCell(this._cellObj, cell);
    }
  }

  /**
   * Prepare objects for cell render
   * @param cell
   * @param isFrozen
   * @returns {boolean} - OK to render
   */
  function updateObjectsForRender(cell, isFrozen) {
    var col = cell.col;
    if ((this._cColumn = this.getColumnByIndex(col))) {
      this._rowObj = this.getRowByIndex(cell.row, isFrozen);
      this._cellObj = this.getCellByIndex(cell.row, this._cColumn, isFrozen);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Sort data based on the colIndex and order
   * @param colIndex (number)
   * @param desc (bool)
   * @param isInfiniteScroll (bool)
   */
  function sort(colName, desc, isInfiniteScroll) {
    var col = colName,
      data,
      frozenData;
    this._prepSort(col, desc);
    // descending sort
    if (desc) {
      if (!isInfiniteScroll) {
        data = this._sorter.sort(
          this._data.data,
          this._table.rowSizes,
          function(a, b) {
            return a[col] < b[col];
          }
        );
      }

      //frozen rows
      frozenData = this._sorter.sort(
        this._frozenRows,
        this._table.frozenRowSizes,
        function(a, b) {
          return a[col] < b[col];
        }
      );
    }
    // ascending sort
    else {
      if (!isInfiniteScroll) {
        data = this._sorter.sort(
          this._data.data,
          this._table.rowSizes,
          function(a, b) {
            return a[col] > b[col];
          }
        );
      }

      //frozen rows
      frozenData = this._sorter.sort(
        this._frozenRows,
        this._table.frozenRowSizes,
        function(a, b) {
          return a[col] > b[col];
        }
      );
    }

    if (!isInfiniteScroll) {
      this._data.data = data.rows;
      this._table.rowSizes = data.rowSizes;
    } else {
      this._data.data = [];
      this._table.rowSizes = [];
    }

    this._frozenRows = frozenData.rows;
    this._table.frozenRowSizes = frozenData.rowSizes;
  }

  /**
   * Prepare for sorting
   * This function will store sorting config for later use this function needs to be called
   * everytime when a sort is fired, even it is an override function
   * Will be used by the follow functions:
   *  - unfreezeRow
   *
   * @param col
   * @param desc
   * @private
   */
  function _prepSort(col, desc) {
    this._sortedDataColIndex = col;
    this._sortedDesc = desc;
  }

  /**
   * Get a row data array by row index
   * @param rowIndex
   * @returns {*} - row data array
   */
  function getRowByIndex(rowIndex, isFrozen) {
    return isFrozen ? this._frozenRows[rowIndex] : this._data.data[rowIndex];
  }

  /**
   * Get Column object based on the table column index
   * @param colIndex
   * @returns {*}
   */
  function getColumnByIndex(colIndex) {
    return this._data.columns[this._columnIndexRefArray[colIndex]];
  }

  /**
   * Get a cell data object from Table row and column indexes
   * @param rowIndex
   * @param colIndex
   * @returns {*}
   */
  function getCellByIndex(rowIndex, columnObj, isFrozen) {
    return columnObj.name
      ? this.getRowByIndex(rowIndex, isFrozen)[columnObj.name]
      : this.getRowByIndex(rowIndex, isFrozen);
  }

  /**
   * Get total rows for table to render
   * @returns {number}
   */
  function getNumRows() {
    return this._data.data.length;
  }

  /**
   * Gets the total number of columns that should be rendered
   * @returns {number}
   */
  function getNumCols() {
    return this._columnIndexRefArray.length;
  }

  /**
   * Remove Column index from reference
   * @param colIndex
   */
  function removeColumnIndex(colIndex) {
    var index = this._columnIndexRefArray.indexOf(colIndex);
    if (index > -1) {
      this._columnIndexRefArray.splice(index, 1);
    }
  }

  /**
   * Return an original column index from the table index
   * @param tableColumnIndex
   * @returns {number}
   */
  function getDataColunmIndex(tableColumnIndex) {
    return this._columnIndexRefArray[tableColumnIndex];
  }

  /**
   * Apply options to table
   */
  function applyTableOptions() {
    // Update initial column width
    this._table.setColumnWidth(this._colIndexArray, this._colWidthArray);

    this._colIndexArray = null;
    this._colWidthArray = null;

    delete this._colIndexArray;
    delete this._colWidthArray;
  }

  /**
   * Parse columns based on the `hide` prameters
   * @param columns
   */
  function parseColumnDefinitions(columns) {
    this._columnIndexRefArray = [];
    var colDef, i, len;
    var offsetColWidth = this._options.rowSelectColumnWidth
      ? this._options.rowSelectColumnWidth
      : 40;

    if (this._colOffset > 0) {
      for (i = 0, len = this._colOffset; i < len; i++) {
        this._colIndexArray.push(0); // spacer
        this._colWidthArray.push(offsetColWidth); // default
        this._columnIndexRefArray.push(0);
      }
    }

    for (i = 0, len = columns.length; i < len; i++) {
      colDef = columns[i];
      if (colDef.hide !== true) {
        if (colDef.width && colDef.width > 0) {
          this._colIndexArray.push(this._columnIndexRefArray.length);
          this._colWidthArray.push(colDef.width);
        }
        this._columnIndexRefArray.push(i);
      }
    }
  }
})();

var bentoTableApp = bentoTableApp;

(function(angular){

  bentoTableApp = bentoTableApp || angular.module('bento.table',[]);

  bentoTableApp
    .factory('tableFacotry', function(){
      return{
        /**
         * Build sort object for the controller to use
         * @param sortAttr
         * @param header
         *
         * sortAttr needs to be either a Boolean or an Object
         *
         * Boolean: decides if all the columns are sortable or not
         *
         * Object:
         *    -
         *
         */
        buildSortOptions : function(sortAttr, header){

          if(typeof header != 'undefined' && header) {

            var sortOptions = [];
            var noSortArray = [];
            var initSort = {
              column : -1,
              direction: 'asc'
            };


            //Get the noSort reference ready
            if(typeof sortAttr.noSort != 'undefined'){
              var noSortData = sortAttr.noSort.splice(',');
              for(var i = 0; i < noSortData.length; i++){
                noSortArray[parseInt(noSortData[i])] = true;
              }
            }

            //See if there is an initial sort value specified
            if(typeof sortAttr.initSort != 'undefined'){
              initSort.column = parseInt(sortAttr.initSort.column);
              initSort.direction = (sortAttr.initSort.direction == 'desc') ? 'desc' : 'asc';
            }

            //Construct the confuguration
            for(var i = 0; i < header.length; i++) {
              var option = {};

              if (typeof sortAttr == 'boolean') {
                option.sortable = sortAttr;
              } else if (typeof sortAttr == 'object') {
                option.sortable = (noSortArray[i] === true) ? false : true;
              } else {
                option.sortable = true;
              }

              sortOptionspush(option);

            }

            return {
              initSort : iniSort,
              options  : sortOptions
            };

          }
        }
      }

    });

})(window.angular);

/**
 * Constructor
 * @param data
 * @param bentoTable
 * @param options
 * @param scope
 * @param $compile
 * @param attrs
 * @private
 */
function BentoTableGroupingHelper(data, bentoTable, options, scope, $compile, attrs) {
  BentoTableHelper.apply(this, arguments);
  var helper = this;

  // Variables
  this._groupingArray = null; // Array to sort groups in group hierarchy
  this._rowRefArray = null; // Main reference to show what is in the table viewport in order
  this._groupColName = null;  // Column index that is actually grouping the whole table
  this._table = bentoTable; // table reference to (BentoTable) object
  this._dataSize = this._data.data.length;
  this._rowPropertyMap = null // Row property map
  this._rowPropertyRefArray = null; // Fallback: Reference to link row and its properties
  this._rowPropertyArray = null; // Fallback: Refernce to row properties defined by `this._rowPropertyRefArray`

  this._table.onRowClick(function (event) {
    helper._onRowClick(event)
  });

  // Private constant label variables
  var uid = [Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)].join('');
  this._labelBTDataIndex = ['__btDataIndex', uid].join('');
  this._labelBTGroupParent = ['_btGroupParent', uid].join('');
  this._labelBTRowRefDataIndex = ['__btRowRefDataIndex', uid].join('');
  this._labelBTGroupMember = ['_btGroupMember', uid].join('');
}

(function (undefined) {
  'use strict';
  // Inherit from BentoTableHelper
  BentoTableGroupingHelper.prototype = Object.create(BentoTableHelper.prototype);
  BentoTableGroupingHelper.prototype.constructor = BentoTableGroupingHelper;

  //Method Overrides
  BentoTableGroupingHelper.prototype.getRowByIndex = getRowByIndex;
  BentoTableGroupingHelper.prototype.getCellByIndex = getCellByIndex;
  BentoTableGroupingHelper.prototype.getDataForRender = getDataForRender;
  BentoTableGroupingHelper.prototype.getNumRows = getNumRows;
  BentoTableGroupingHelper.prototype.renderCell = renderCell;
  BentoTableGroupingHelper.prototype.concatData = concatData;
  BentoTableGroupingHelper.prototype.sort = sort;
  BentoTableGroupingHelper.prototype.freezeRow = freezeRow;
  BentoTableGroupingHelper.prototype.unfreezeRow = unfreezeRow;
  BentoTableGroupingHelper.prototype.fireRowClickCallbacks = fireRowClickCallbacks;
  BentoTableGroupingHelper.prototype.getParentVariableName = getParentVariableName;

  //New Method
  BentoTableGroupingHelper.prototype.setGrouping = setGrouping;
  BentoTableGroupingHelper.prototype.expandRow = expandRow;
  BentoTableGroupingHelper.prototype.collapseRow = collapseRow;
  BentoTableGroupingHelper.prototype.getRowProperty = getRowProperty;
  BentoTableGroupingHelper.prototype.setRowProperty = setRowProperty;
  BentoTableGroupingHelper.prototype.deleteRowProperty = deleteRowProperty;

  //Private Methods
  BentoTableGroupingHelper.prototype._buildRowRefArray = _buildRowRefArray;
  BentoTableGroupingHelper.prototype._onRowClick = _onRowClick;

  /**
   * Expose group parent variable for other helpers to use
   * @returns {string|*|BentoTableGroupingHelper._labelBTGroupParent}
   */
  function getParentVariableName() {
    return this._labelBTGroupParent;
  }

  /**
   * Freeze a row and it needs to be a group-member
   * @param row
   * @param noRender - do not render
   * @param mainData - (Array optional)
   */
  function freezeRow(row, noRender) {
    if (typeof row === 'object') {
      if (this._frozenRows.indexOf(row) > -1) {
        console.warn('Bento Table: This row is already frozen.');
        return;
      }

      this._frozenRows.push(row);

      // Remove row from base data
      var
        index
        ;

      if (this.getRowProperty(row, this._labelBTGroupParent)) {
        this.setRowProperty(
          row, this._labelBTDataIndex,
          this.getRowProperty(row, this._labelBTGroupParent).removeMember(row, this._labelBTGroupParent));
      } else {
        index = this._groupingArray.indexOf(row);
        this._groupingArray.splice(index, 1);
        this.setRowProperty(row, this._labelBTDataIndex, index);
        this.setRowProperty(row, this._labelBTRowRefDataIndex, this._rowRefArray.indexOf(row));
      }

      index = this._rowRefArray.indexOf(row);
      this._table.addFrozenRow();

      this._rowRefArray.splice(index, 1);
      this._table.removeRow(index, 1);

      // TODO: update the sizes

    } else {
      console.warn('Bento Table: Can not freeze a group.');
    }
  }

  /**
   * Unfreeze a row and put it back to the group
   * @param row
   */
  function unfreezeRow(row) {
    if (this._frozenRows.indexOf(row) === -1) {
      console.warn('Bento Table: this row is not frozen.')
      return;
    }

    var index, col, rowCol;
    // This row is part of a group
    if (this.getRowProperty(row, this._labelBTGroupParent)) {

      var group = this.getRowProperty(row, this._labelBTGroupParent);

      if (typeof this._sortedDataColIndex !== 'undefined') {
        col = this._sortedDataColIndex;
        rowCol = this.getRowProperty(row, col);
        if (this._sortedDesc) {
          index = this._sorter.findIndex(
            group.members,
            function (a, b) {
              return this.getRowProperty(a, col) >= rowCol && rowCol >= this.getRowProperty(b, col);
            },
            function (a, b) {
              if (this.getRowProperty(a, col) < rowCol) {
                return -1;
              }
              if (this.getRowProperty(b, col) > rowCol) {
                return 1;
              }
              return 0;
            }
          );
        } else {
          index = this._sorter.findIndex(
            group.members,
            function (a, b) {
              return this.getRowProperty(a, col) <= rowCol && rowCol <= this.getRowProperty(b, col);
            },
            function (a, b) {
              if (this.getRowProperty(a, col) > rowCol) {
                return -1;
              }
              if (this.getRowProperty(b, col) < rowCol) {
                return 1;
              }
              return 0;
            }
          );
        }
        group.addMember(row, index, this._labelBTGroupParent, this);
      } else {
        // not sorted
        group.addMember(
          row,
          this.getRowProperty(row, this._labelBTDataIndex),
          this._labelBTGroupParent,
          this);
      }

      this._buildRowRefArray();

      if (group.isExpanded) {
        index = this._rowRefArray.indexOf(group);
        this._table.addRow(index == 0 ? 0 : index - 1, 1);
      } else {
        this._table.render();
      }
    }
    else {

      // This is an independent row
      if (typeof this._sortedDataColIndex !== 'undefined') {

        col = this._sortedDataColIndex;
        rowCol = this.getRowProperty(row, col);
        if (this._sortedDesc) {
          index = this._sorter.findIndex(
            this._groupingArray,
            function (a, b) {
              if (a instanceof BentoTableGroupingRow) {
                a = (a.row) ? this.getRowProperty(a.row, col) : a.name;
              } else {
                a = this.getRowProperty(a, col);
              }
              if (b instanceof BentoTableGroupingRow) {
                b = (b.row) ? this.getRowProperty(b.row, col) : b.name;
              } else {
                b = this.getRowProperty(b, col);
              }
              return a >= rowCol && rowCol >= b;
            },
            function (a, b) {
              if (a instanceof BentoTableGroupingRow) {
                a = (a.row) ? this.getRowProperty(a.row, col) : a.name;
              } else {
                a = this.getRowProperty(a, col);
              }
              if (b instanceof BentoTableGroupingRow) {
                b = (b.row) ? this.getRowProperty(b.row, col) : b.name;
              } else {
                b = this.getRowProperty(b, col)
              }

              if (a < rowCol) {
                return -1;
              }
              if (b > rowCol) {
                return 1;
              }
              return 0;
            }
          );
        } else {
          index = this._sorter.findIndex(
            this._groupingArray,
            function (a, b) {
              if (a instanceof BentoTableGroupingRow) {
                a = (a.row) ? this.getRowProperty(a.row, col) : a.name;
              } else {
                a = this.getRowProperty(a, col);
              }
              if (b instanceof BentoTableGroupingRow) {
                b = (b.row) ? this.getRowProperty(b.row, col) : b.name;
              } else {
                b = this.getRowProperty(b, col)
              }
              return a <= rowCol && rowCol <= b;
            },
            function (a, b) {
              if (a instanceof BentoTableGroupingRow) {
                a = (a.row) ? this.getRowProperty(a.row, col) : a.name;
              } else {
                a = this.getRowProperty(a, col);
              }

              if (b instanceof BentoTableGroupingRow) {
                b = (b.row) ? this.getRowProperty(b.row, col) : b.name;
              } else {
                b = this.getRowProperty(b, col)
              }

              if (a > rowCol) {
                return -1;
              }
              if (b < rowCol) {
                return 1;
              }
              return 0;
            }
          );
        }
        this._groupingArray.splice(index, 0, row);
      } else {
        // not sorted
        var rowProp = this.getRowProperty(row, this._labelBTRowRefDataIndex);
        index = rowProp ? rowProp : 0;
        this._groupingArray.splice(rowProp, 0, row);
      }

      this._buildRowRefArray();
      // insert this row back to refArray
      this._table.addRow(index, 1);
    }

    this.deleteRowProperty(row, this._labelBTDataIndex);
    this.deleteRowProperty(row, this._labelBTRowRefDataIndex);

    this._frozenRows.splice(this._frozenRows.indexOf(row), 1);
    this._table.removeFrozenRow();
    this._table.render();
    this._table.refreshScrollBars();
  }

  /**
   * Concat new data to the main data
   * @param data
   * @param newData
   * @returns {*}
   */
  function concatData(mainData, newData) {
    //We need to update _groupingArray and _rowRefArray with new rows
    // Grouping process
    this._data.data = mainData.concat(newData);
    this.setGrouping(this._data.data, this._options.group.by, this._options.group.expanded, this._options.group.referencingTo);
    return this._data.data;
  }

  /**
   * Fires row click
   * @param event
   * @private
   */
  function fireRowClickCallbacks(event) {
    // Find current col of clicked row

    // We do not fire row click even on group header rows
    var colIndex = __findColFromRowClick(event);
    if (colIndex === false || (event.row.hasClass('bt-group') && colIndex >= this._colOffset)) {
      return;
    }

    BentoTableHelper.prototype.fireRowClickCallbacks.call(this, event);
  }

  /**
   * Helper function to find the col index that is clicked on a row
   * @param event
   */
  function __findColFromRowClick(event) {
    var obj = event.target;
    while (obj && typeof obj.cell === 'undefined') {
      obj = obj.parentElement;
    }

    return obj ? obj.cell.col : false;
  }

  /**
   * Returns a data array for render (override)
   * @returns {*}
   */
  function getDataForRender() {
    return this._rowRefArray;
  }

  /**
   * Handles events when a row is clicked
   * @param event
   */
  function _onRowClick(event) {
    // we do not expand or collapse row if clicked col is in the column offset indexes
    var colIndex = __findColFromRowClick(event);
    if (colIndex === false || (__findColFromRowClick(event) < this._colOffset)) {
      return
    }

    var row = event.row;

    // This row needs to be a group header
    // AND the first column is clicked
    if (row.hasClass('bt-group')) {
      // Expand and Collapse Row for row grouping
      row.toggleClass('bt-group-expanded');
      if (row.hasClass('bt-group-expanded')) {
        this.expandRow(event.rowIndex);
      } else {
        this.collapseRow(event.rowIndex);
      }
    }

    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Renders an object to BentoCell
   * @param cell - (BentoCell) cell to be rendered
   *
   * This will be overridden based on the type of the object
   */
  function renderCell(cell) {
    this.updateObjectsForRender(cell, false);
    if (this._rowObj instanceof BentoTableGroupingRow) {
      // clear
      if (cell.col - this._colOffset === 0) {
        cell.parent.removeClass('bt-group-member', true);
        cell.parent.addClass('bt-group', true);

        cell.addClass('bt-group-row-head', true);
        if (this._rowObj.isExpanded) {
          cell.parent.addClass('bt-group-expanded', true);
        }
        if (this._rowObj.row) {
          cell.parent.addClass('bt-group-leader', true);
          this.renderCellDefault(cell);
        } else {
          cell.html(this._rowObj.name);
        }
      } else {

        cell.removeClass('bt-row-head', true);
        // only render for group leader row
        if (this._rowObj.row) {
          this.renderCellDefault(cell);
        }
      }
    } else {
      cell.parent.removeClass('bt-group', true);
      cell.parent.removeClass('bt-group-expanded', true);
      cell.parent.removeClass('bt-group-leader', true);
      try {
        if (this.getRowProperty(this._rowObj, this._labelBTGroupMember)) {
          cell.parent.addClass('bt-group-member', true);
          if (cell.col - this._colOffset === 0) {
            cell.addClass('bt-group-row-head', true);
          } else {
            cell.removeClass('bt-group-row-head', true);
          }
        } else {
          if (cell.col - this._colOffset === 0) {
            cell.parent.removeClass('bt-group-member', true);
          }
        }
      } catch (e) {
        console.error(e);
      }
      this.renderCellDefault(cell);
    }

    cell.parent.applyClasses();
  }

  /**
   * Sort the current grouped table
   * @param this._sorter - (BentoTableSort) object
   * @param colName - (number) column index that needs to be sorted
   * @param desc - (bool) Descending
   */
  function sort(colName, desc) {
    var cIndex = colName;
    var i, len, group;
    this._prepSort(colName, desc);
    // descending sort
    if (desc) {
      // sort grouping array
      this._groupingArray = this._sorter.sort(this._groupingArray, null, function (a, b) {

        if (a instanceof BentoTableGroupingRow) {
          a = (a.row) ? a.row[cIndex] : a.name;
        } else {
          a = a[cIndex]
        }

        if (b instanceof BentoTableGroupingRow) {
          b = (b.row) ? b.row[cIndex] : b.name;
        } else {
          b = b[cIndex]
        }

        return a < b;
      }).rows;

      // sort the members in each group
      for (i = 0, len = this._groupingArray.length; i < len; i++) {
        group = this._groupingArray[i];
        if (group instanceof BentoTableGroupingRow) {
          group.members = this._sorter.sort(group.members, null, function (a, b) {
            return a[cIndex] < b[cIndex];
          }).rows;
        }
      }

    }
    // ascending sort
    else {
      // sort grouping array
      this._groupingArray = this._sorter.sort(this._groupingArray, null, function (a, b) {

        if (a instanceof BentoTableGroupingRow) {
          a = (a.row) ? a.row[cIndex] : a.name;
        } else {
          a = a[cIndex]
        }

        if (b instanceof BentoTableGroupingRow) {
          b = (b.row) ? b.row[cIndex] : b.name;
        } else {
          b = b[cIndex]
        }

        return a > b;
      }).rows;

      // sort the members in each group
      for (i = 0, len = this._groupingArray.length; i < len; i++) {
        group = this._groupingArray[i];
        if (group instanceof BentoTableGroupingRow) {
          group.members = this._sorter.sort(group.members, null, function (a, b) {
            return a[cIndex] > b[cIndex];
          }).rows;
        }
      }
    }

    // Rebuild `rowRefArray` for redering
    this._buildRowRefArray();
  }

  /**
   * Get cell by given row and column indexes
   * @param col
   * @param rowIndex
   * @returns {BentoTableGroupingRow || cell || null}
   */
  function getCellByIndex(rowIndex, col, isFrozen) {
    var row = isFrozen ? this._frozenRows[rowIndex] : this._rowRefArray[rowIndex];

    if (row instanceof BentoTableGroupingRow) {
      if (row.row) {
        return row.row[col.name];
      } else {
        if (col === 0) {
          return row.name;
        } else {
          return null;
        }
      }
    } else {
      try {
        return row[col.name];
      } catch (e) {
        console.error(e);
      }
    }
  }

  /**
   * Expand a row
   * @param rowIndex
   *
   * rowIndex has to reference to a BentoTableGroupingRow
   */
  function expandRow(rowIndex) {
    var group = this._rowRefArray[rowIndex];
    if (group instanceof BentoTableGroupingRow && !group.isExpanded) {
      var i,
          length = group.members.length;
      group.isExpanded = true;

      for (i = 0; i < length; i++) {
        this._rowRefArray.splice(rowIndex + 1 + i, 0, group.members[i]);
      }

      this._table.addRow(rowIndex, length);
    }
  }

  /**
   * Collapse a row
   * @param rowIndex
   *
   * rowIndex has to reference to a BentoTableGroupingRow
   */
  function collapseRow(rowIndex) {
    var group = this._rowRefArray[rowIndex];
    if (group instanceof BentoTableGroupingRow && group.isExpanded) {
      var i,
          length = group.members.length;
      group.isExpanded = false;
      for (i = 0; i < length; i++) {
        this._rowRefArray.splice(rowIndex + 1, 1);
      }

      this._table.removeRow(rowIndex, length);
    }
  }

  /**
   * Setup grouping references and indexes
   * @param groupBy - (number) Column Index
   * @param isExpanded - (bool) Check if all groups are expanded or not
   * @param groupedByColumnContent - (bool) check if grouping is based on who column content is
   * @param groupFlag
   *
   * We do one group for now
   */
  function setGrouping(sourceData, groupBy, isExpanded, referencingTo) {
    var tempArray = [], groupByObj, type, i, length, row;
    this._groupColName = groupBy;

    // Determine browser support for Map
    if (Map) {;
      this._rowPropertyMap = new Map();
    }
    // IE10 and lower
    else {
      this._rowPropertyRefArray = [];
      this._rowPropertyArray = [];
    }

    this._groupingArray = [];

    // Grouping
    length = sourceData.length;

    // There is parent / child relationship
    if (typeof referencingTo !== 'undefined') {
      /*
       Logic: 3 step approach
       1. Create an array with all children rows categorized by parent referencingTo parameter
       2. Create an array with all isolated rows
       3. Combine the two array with parent-child relationship
       */
      var childrenArray = [];
      var childArray;
      // Separate children and parent-to-bes
      for (i = 0; i < length; i++) {
        row = sourceData[i];
        groupByObj = row[this._groupColName];
        type = typeof groupByObj;

        if ((type === 'number') || (type === 'string' && groupByObj.length > 0)) {
          childArray = childrenArray[groupByObj];
          if (typeof childArray === 'undefined') {
            childArray = [];
            childrenArray[groupByObj] = childArray;
          }
          // Mark this row as a member
          this.setRowProperty(row, this._labelBTGroupMember, true);
          childArray.push(row);
        } else {
          tempArray.push(row);
        }
      }

      // Combine the two arrays
      var childrenGroup;
      for (i = 0, length = tempArray.length; i < length; i++) {
        row = tempArray[i];
        if (childrenArray[row[referencingTo]]) {
          childrenGroup = childrenArray[row[referencingTo]];
          childrenGroup['_tempGroupLeader'] = true;
          childrenGroup['_leader'] = row;
          this.setRowProperty(row, '_btGroup', true);
          tempArray[i] = childrenGroup;
        }
      }
    }
    else {
      for (i = 0; i < length; i++) {
        row = sourceData[i];
        groupByObj = row[this._groupColName];
        if (typeof tempArray[groupByObj] === 'undefined') {
          tempArray[groupByObj] = [];
          tempArray[groupByObj]['_tempGroupLeader'] = true;
        }
        this.setRowProperty(row, this._labelBTGroupMember, true);
        tempArray[groupByObj].push(row);
      }
    }

    // Put Grouping to index
    var group, groupArr;
    for (var key in tempArray) {
      groupArr = tempArray[key];
      if (Array.isArray(groupArr) && groupArr['_tempGroupLeader']) {
        group = new BentoTableGroupingRow(key, isExpanded);
        group.addMembers(tempArray[key], this._labelBTGroupParent, this);
        if (groupArr['_leader']) {
          group.row = groupArr['_leader'];
        }
      } else {
        // There is no children
        group = groupArr;
      }
      // Using array since it's faster than Object referencing
      this._groupingArray.push(group);
    }

    // Build RefArray
    this._buildRowRefArray();

    // Remove column index that's been grouped by
    this.removeColumnIndex(groupBy);
  }

  /**
   * Get number of rows
   * @returns {number}
   */
  function getNumRows() {
    //check if row is changed
    if (this._dataSize !== this._data.data.length) {
      // update reference array

      this._dataSize = this._data.data.length;
    }

    return this._rowRefArray.length;
  }

  /**
   * Return row object from Data by new rowNumber
   * @param rowNum (number)
   */
  function getRowByIndex(rowIndex, isFrozen) {
    return isFrozen ? this._frozenRows[rowIndex] : this._rowRefArray[rowIndex];
  }

  /**
   * Get property of a row
   * @param row
   * @param label
   * @returns {*}
   */
  function getRowProperty(row, label) {
    var prop;
    prop = Map ?
      this._rowPropertyMap.get(row)
      : this._rowPropertyArray[
      this._rowPropertyRefArray.indexOf(row)
      ];

    if (prop) {
      return prop[label];
    }
    return prop;
  }

  /**
   * Set proerty of a row
   * @param row
   * @param label
   * @param value
   */
  function setRowProperty(row, label, value) {

    if (Map) {
      var prop;
      if (!this._rowPropertyMap.has(row)) {
        prop = {};
        this._rowPropertyMap.set(row, prop);
      } else {
        prop = this._rowPropertyMap.get(row);
      }
      prop[label] = value
      return;
    }

    // Fallback for IE10 and lower
    var index = this._rowPropertyRefArray.indexOf(row);
    if (index == -1) {
      index = this._rowPropertyRefArray.length;
      this._rowPropertyRefArray.push(row);
      this._rowPropertyArray[index] = {};
    }
    this._rowPropertyArray[index][label] = value;
  }

  /**
   * Delete a row property
   * @param row
   * @param label
   */
  function deleteRowProperty(row, label) {
    if (Map) {
      delete this._rowPropertyMap.get(row)[label];
    }
    // Fallback: IE10 and lower
    else {
      delete this._rowPropertyArray[
        this._rowPropertyRefArray.indexOf(row)
        ][label];
    }

  }

  // Private functions
  /**
   * Build this._rowRefArray for table rendering
   */
  function _buildRowRefArray() {
    this._rowRefArray = [];

    for (var i = 0, length = this._groupingArray.length, group; i < length; i++) {
      group = this._groupingArray[i];
      this._rowRefArray.push(group);
      if (group.isExpanded) {
        for (var j = 0, lengthJ = group.members.length; j < lengthJ; j++) {
          this._rowRefArray.push(group.members[j]);
        }
      }
    }
  }
})();

var BentoTableGroupingRow;

(function () {
  'use strict';

  BentoTableGroupingRow = b;
  b.prototype.addMember = addMember;
  b.prototype.addMembers = addMembers;
  b.prototype.removeMember = removeMember;

  /**
   * Constructor
   * @param name
   * @param isExpanded
   */
  function b(name, isExpanded) {
    this.name = name;
    this.members = [];
    this.isExpanded = isExpanded;
    this.row = null; // init row
  }

  /**
   * Removing a member from this group
   * @param member
   * @returns {boolean}
   */
  function removeMember(member, parentLabel) {
    var index = this.members.indexOf(member);

    if (index > -1) {
      this.members.splice(index, 1);
      return index;
    } else {
      return false;
    }
  }

  /**
   * Adding a member to this group
   * @param member (*)
   */
  function addMember(member, index, parentLabel, tableGroupHelper) {
    tableGroupHelper.setRowProperty(member, parentLabel, this);
    if (typeof index !== 'undefined') {
      // Put the member back to `index` position in this group
      this.members.splice(index, 0, member);
    } else {
      this.members.push(member);
    }
  }

  /**
   * Adding multiple members to this group
   * @param members (array)
   */
  function addMembers(members, parentLabel, tableGroupHelper) {
    for (var i = 0, len = members.length; i < len; i++) {
      tableGroupHelper.setRowProperty(members[i], parentLabel, this);
    }
    this.members = this.members.concat(members)
  }
})();



function BentoTableHeader(width, height, options) {
  'use strict';

  var h = this;

  // API
  h.setNumColumns = setNumColumns;
  h.reset = reset;
  h.renderCell = renderCell;
  h.onColumnResize = onColumnResize;
  h.removeFrozenRow = removeFrozenRow;
  h.addFrozenRow = addFrozenRow;
  h.onRowClick = onRowClick;
  h.frozenRows = [];
  this.options = options;

  init();

  var resizeBar;
  var _columnResizeCallbackStack = [];
  var _rowClickCallback = [];
  var isResizing = false;

  /**
   * Remove header classes and frozen rows
   */
  function reset(){
    this.frozenRows.forEach(function(row){
      row.remove();
    });
    h.row.removeClass('bt-row-selected');

    var fCell = h.row.getFirstCell();
    var tempCell = fCell;

    do{
      tempCell.top = tempCell.bottom = tempCell;
      tempCell = tempCell.right;
    }
    while(tempCell !== fCell)
  }

  /**
   * Append row click callback to stack
   * @param callback
   */
  function onRowClick(callback) {
    _rowClickCallback.push(callback);
  }

  function _onRowClick(event) {
    var i, len,
        rows = h.dom.querySelectorAll('.bt-frozen-row');
    ;
    event.isFrozen = true;

    for (i = 0, len = rows.length; i < len; i++) {
      if (rows.item(i) === event.currentTarget) {
        event.rowIndex = i;
        break;
      }
    }

    for (i = 0, len = _rowClickCallback.length; i < len; i++) {
      _rowClickCallback[i](event);
    }
  }

  /**
   * Render a header cell
   * @param headerCell
   * @param colOffset
   */
  function renderCell(headerCell, colObj,scope,compile) {

    headerCell.html(colObj.label);

    /* IE issue with the cache */
    /*if(typeof this._headerCellCache === 'undefined'){
      this._headerCellCache = [];
    }

    if(this._headerCellCache[headerCell.col]){
      console.log('doing cache', this._headerCellCache[headerCell.col]);
      headerCell.html(this._headerCellCache[headerCell.col][0]);
    }else{
      var cellDOM = angular.element(['<div>',colObj.label,'</div>'].join(''));
      compile(cellDOM)(scope);
      this._headerCellCache[headerCell.col] = cellDOM;
      headerCell.html(cellDOM[0]);
    }*/
  }

  /**
   * Remove a frozen row
   */
  function removeFrozenRow(index) {
    var index = index ? index : 0;
    // Remove only when there is at least one frozen row
    var rows = h.dom.querySelectorAll('.bt-frozen-row'),
        rowToRemove = rows[index];
    if (rowToRemove) {
      h.frozenRows.splice(index,1);
      rowToRemove.parentElement.removeChild(rowToRemove);
      rowToRemove.removeEventListener('click', _onRowClick);
      // According to BentoTableRow API
      // destroy() will relinke the top and bottom cells
      rowToRemove.row.destroy();

      for(var i=index,len= h.frozenRows.length; i<len; i++){
        h.frozenRows[i].row = i;
      }
    }
  }

  /**
   * Add a frozen row
   */
  function addFrozenRow() {
    var numCol = h.row.dom.childElementCount;
    var newRow = new BentoTableRow(numCol, width, height, null, null, this.options);
    newRow.addClass('bt-frozen-row');
    newRow.dom.addEventListener('click', _onRowClick);

    // Add row DOM
    h.dom.appendChild(newRow.dom);

    newRow.row = h.frozenRows.length;
    h.frozenRows.push(newRow);

    // Link row
    var headerCells = h.row.dom.children;
    var rowCells = newRow.dom.children;
    for (var i = 0, len = headerCells.length, hCell, rCell; i < len; i++) {
      hCell = headerCells[i].cell;
      rCell = rowCells[i].cell;
      hCell.top.bottom = rCell;
      rCell.top = hCell.top;
      hCell.top = rCell;
      rCell.bottom = hCell;
    }
  }

  /**
   * Set number of columns for this header
   * @param num
   * @param clickCallback
   */
  function setNumColumns(num, clickCallback) {
    if (typeof h.row === 'undefined') {
      h.row = new BentoTableRow(num, width, height, clickHijack(clickCallback), true, this.options); // start with one cell
      h.dom.appendChild(h.row.dom);

      // Add touch down events
      var cells = h.row.dom.children,
          cellDom;
      for (var i = 0; i < cells.length; i++) {
        cellDom = cells[i];
        cellDom.addEventListener('touchstart', onCellMouseDown);
        cellDom.addEventListener('mousedown', onCellMouseDown);
        cellDom.cell.top = cellDom.cell;
        cellDom.cell.bottom = cellDom.cell;
      }
    }
    else {
      var dCount = num - h.row.getNumCells();
      var cell;
      if (dCount > 0) {
        for (var i = 0; i < dCount; i++) {
          cell = new BentoTableCell(h.row, true);
          cell.dom.addEventListener('touchstart', onCellMouseDown);
          cell.dom.addEventListener('mousedown', onCellMouseDown);
          cell.top = cell;
          cell.bottom = cell;
          h.row.push(cell, true, clickHijack(clickCallback));
        }
      } else if (dCount < 0){
        // need to remove header cells
        for (var i = dCount; i > 0; i--) {
          h.row.removeLastCell();
        }
      }
    }
  }

  /**
   * Hijack Header callbacks
   * @param callback
   * @returns {Function}
   */
  function clickHijack(callback) {
    if (callback) {
      return function (event) {
        // It was a resizing
        // no need to fire callback
        if (isResizing) {
          isResizing = false;
        } else {
          callback(event)
        }
      }
    }
  }

  function onColumnResize(callback) {
    if(_columnResizeCallbackStack.indexOf(callback) < 0){
      _columnResizeCallbackStack.push(callback);
    }
  }

  // Event Listeners
  var oldX, dX, localX, cellX;
  var cellBoundry, cellRightBound, resizingCol;

  function onCellMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    resizingCol = event.currentTarget; // Type: Cell.dom
    cellBoundry = resizingCol.getBoundingClientRect();
    cellRightBound = cellBoundry.left + cellBoundry.width;

    //Check if user click the most right 8px of this header cell
    if (event.pageX > cellRightBound - 8 && event.pageX <= cellRightBound && h.options.resize) {
      window.addEventListener('touchmove', onHeaderMouseMouse);
      window.addEventListener('mousemove', onHeaderMouseMouse);
      window.addEventListener('touchend', onHeaderMouseUp);
      window.addEventListener('mouseup', onHeaderMouseUp);
      oldX = event.pageX;
      dX = true;
    }
  }

  function onHeaderMouseMouse(event) {
    cellX = event.pageX - cellBoundry.left;
    // not allowing the cell to be 50px or less wide
    if (cellX < 50) {
      return;
    }

    dX = event.pageX - oldX;
    oldX = event.pageX;
    //show bar
    if (resizeBar.style.display === 'none') {
      resizeBar.style.display = 'block';
      h.dom.setAttribute('data-resizing', '1');
    }

    localX = resizingCol.offsetLeft + cellX;
    resizeBar.style.left = localX;

    event.preventDefault();
    event.stopPropagation();
  }

  function onHeaderMouseUp(event) {
    event.preventDefault();
    event.stopPropagation();

    // Fire resize callback
    if (typeof dX === 'number') {
      var width = resizeBar.offsetLeft - resizingCol.offsetLeft;

      resizingCol.style.width = width + 'px';

      _columnResizeCallbackStack.forEach(function (callback) {
        event.col = resizingCol.cell.col;
        event.width = width;
        callback(event);
      });
      isResizing = true;

      // Reset resizing flag in a moment
      setTimeout(function () {
        isResizing = false
      }, 100);
    }

    resizeBar.style.display = 'none';
    h.dom.removeAttribute('data-resizing');
    // Remove all listeners excpet mousedown & touchstart
    window.removeEventListener('touchmove', onHeaderMouseMouse);
    window.removeEventListener('mousemove', onHeaderMouseMouse);
    window.removeEventListener('touchend', onHeaderMouseUp);
    window.removeEventListener('mouseup', onHeaderMouseUp);
  }

  // initilization
  function init() {
    h.dom = document.createElement('DIV');
    h.dom.className = 'bento-table-header';

    if (h.options.resize) {
      resizeBar = document.createElement('DIV');
      resizeBar.className = 'bt-header-resize-bar';
      resizeBar.style.display = 'none';
      h.dom.appendChild(resizeBar);
      h.dom.className += ' bt-header-is-resizable';
    }
  }

}
(function() {
  var bentoTableApp = angular.module("bento.table", []);

  bentoTableApp
    .controller("bentoTableController", [
      "$scope",
      "$element",
      "$log",
      function($scope, $element, $log) {
      }
    ])
    .directive("bentoTable", [
      "$compile",
      "$log",
      "$timeout",
      '$q',
      function($compile, $log, $timeout, $q) {
        return {
          restrict: "A",
          scope: false,
          replace: true, //
          template: [
            '<div class="bento-table">',
            ' <div class="bento-table-body">',
            " </div>",
            "</div>"
          ].join("\n"),
          controller: "bentoTableController",
          link: function(scope, element, attrs, ctrl) {
            // Init
            var data = { data: [] },
              body,
              table,
              tableHelper,
              tableRowSelectHelper,
              getSourceData,
              options,
              initialLoad = true,
              state = {},
              colOffset = 0,
              loadingDefer,
              isReload = false,
              windowResizeTimeout = 0
              ;

            var localScope = scope.$new(false); // inherit from parent
            var control;

            localScope.freezeRow = freezeRow;
            localScope.unfreezeRow = unfreezeRow;

            if (typeof attrs.columnDefinitions === "undefined") {
              $log.error(
                'Bento Table: Parameter "column-definitions" is missing.'
              );
              return;
            }

            data.columns = scope.$eval(attrs.columnDefinitions);

            // Pulic controls
            if (typeof attrs.bentoTableControl !== "undefined") {
              control = scope.$eval(attrs.bentoTableControl);
              control.freezeRow = freezeRow;
              control.unfreezeRow = unfreezeRow;
              control.reloadTable = reloadTable;
              control.showRow = showRow;
            }

            // Check basic parameters
            if (typeof attrs.sourceDataCallback === "undefined") {
              $log.error(
                'Bento Table: Parameter of "source-data-callback" is missing.'
              );
              return;
            }

            getSourceData = scope.$eval(attrs.sourceDataCallback);

            if (typeof getSourceData !== "function") {
              $log.error(
                "Bento Table: Type of parameter variable `" +
                  attrs.sourceDataCallback +
                  "` is incorrect. It needs to be `function(){return promise}`"
              );
              return;
            }

            init();

            ctrl.$onDestroy = function(){
              // Remove Window resize listener
              window.removeEventListener('resize', onWindowResize);
            }

            window.addEventListener('resize', onWindowResize);

            function onWindowResize(event){
              clearTimeout(windowResizeTimeout);

              windowResizeTimeout = setTimeout(function(){
                // Debounce 
                requestAnimationFrame(function(){
                  table.render(false, true);
                });
              },100);
            }

            // Get first set of data
            getSourceData(
              state.currentPage,
              state.recordsPerPage,
              state.sortKey,
              state.sortDirection
            ).then(getDataSuccess, getDataFail);

            // Reload table
            function reloadTable(softReload) {
              data.data = [];
              isReload = !softReload;
              loadingDefer = $q.defer();
              getSourceData(
                state.currentPage,
                state.recordsPerPage,
                state.sortKey,
                state.sortDirection
              ).then(getDataSuccess, getDataFail);

              return loadingDefer.promise;
            }

            // Freeze a row
            function freezeRow(row) {
              tableHelper.freezeRow(row);
            }

            // Unfreeze a row
            function unfreezeRow(row) {
              tableHelper.unfreezeRow(row);
            }

            // Show a row
            function showRow(rowIndex, $q){
              return table.scrollToRowIndex(rowIndex, $q);
            }

            function getDataSuccess(newData) {
              // Data is not ready
              //              if (typeof newData === 'undefined' || newData.length === 0) {
              //                $log.error('Bento Table: Provided source data is either undefined or empty.');
              //                return;
              //              }

              if (isReload) {
                tableHelper.reset();
                table.reset();
                if (tableRowSelectHelper) {
                  tableRowSelectHelper.clear();
                }
              }

              data.data = tableHelper.concatData(data.data, newData);

              if (table.ready) {
                prepareData();
              }

              // fire dataready callback
              if (!!attrs.sourceDataReadyCallback) {
                var cb = scope.$eval(attrs.sourceDataReadyCallback);
                if (cb) {
                  cb();
                }
              }

              isReload = false;
            }

            function prepareData() {
              var numCols;

              numCols = tableHelper.getNumCols();

              table.setGridSize(tableHelper.getNumRows(), numCols, data.data);

              // Fire selected row getter
              if (tableRowSelectHelper) {
                if (attrs.getSelectedRows) {
                  var getSelectedRows = scope.$eval(attrs.getSelectedRows);
                  getSelectedRows().then(function(selectedRowsObj) {
                    tableRowSelectHelper.preSelectRows(
                      table,
                      tableHelper.getDataForRender(),
                      selectedRowsObj.data,
                      selectedRowsObj.key
                    );

                    table.render(!isReload);
                    // fire selection callback
                    fireRowSelectCallback();
                  });
                }
              }

              if (
                !options.infiniteScroll &&
                state.sortKey &&
                state.sortDirection
              ) {
                tableHelper.sort(
                  state.sortKey,
                  state.sortDirection === "desc",
                  options.infiniteScroll
                );
                table.calcGridRowSizeArray(0);
              }

              table.render(!isReload, true);

              if (initialLoad) {
                // This includes table.render();
                tableHelper.applyTableOptions();
                initialLoad = null;
              }

              if(loadingDefer){
                loadingDefer.resolve();
                loadingDefer = null;
              }
            }

            function getDataFail(message) {
              $log.warn(message);
            }

            /*Header*/

            var _col = 0;
            var colSort = [];
            var colObj;
            table.requestHeaderContent(function(headerCell) {
              if (tableRowSelectHelper && headerCell.col === 0) {
                tableRowSelectHelper.renderCell(headerCell);
              } else {
                renderHeader(headerCell);
              }
            });

            function renderHeader(headerCell) {
              _col = headerCell.col;
              colObj = tableHelper.getColumnByIndex(_col);

              if (colObj) {
                table.renderHeaderCell(
                  headerCell,
                  colObj,
                  localScope,
                  $compile
                );
                if (colSort[_col] === 1) {
                  headerCell.dom.setAttribute("data-sort", "bt-sort-asc");
                } else if (colSort[_col] === 2) {
                  headerCell.dom.setAttribute("data-sort", "bt-sort-desc");
                } else {
                  headerCell.dom.removeAttribute("data-sort");
                }
              } else {
                headerCell.dom.removeAttribute("data-sort");
                headerCell.dom.innerHTML = "";
              }
            }

            //header click and sorting
            table.onHeaderClick(function(event) {
              var cell = event.cell, // type: BentoCell in Header
                col = cell.col,
                column,
                desc = false;
              // Bypass
              if (tableRowSelectHelper && col === 0) {
                var row = cell.parent,
                  selectedClass = "bt-row-selected";
                row.toggleClass(selectedClass);

                if (row.hasClass(selectedClass)) {
                  tableRowSelectHelper.addRows(tableHelper.getDataForRender());
                } else {
                  tableRowSelectHelper.deselectAllRows(
                    tableHelper.getDataForRender()
                  );
                }

                table.render();

                fireRowSelectCallback();

                return;
              }

              column = tableHelper.getColumnByIndex(col);

              // Check and sort the current clicked column
              if (column.sort || typeof column.sort === "undefined") {
                // Other normal sorting
                if (cell.dom.getAttribute("data-sort") === "bt-sort-asc") {
                  removeSortingClass(cell);
                  cell.dom.setAttribute("data-sort", "bt-sort-desc");
                  tableHelper.sort(column.name, true, options.infiniteScroll);
                  colSort = [];
                  colSort[col] = 2; //Desc
                  state.sortKey = column.name;
                  state.sortDirection = "desc";
                  desc = true;
                } else {
                  removeSortingClass(cell);
                  cell.dom.setAttribute("data-sort", "bt-sort-asc");
                  tableHelper.sort(column.name, false, options.infiniteScroll);
                  colSort = [];
                  colSort[col] = 1; //Asc
                  state.sortKey = column.name;
                  state.sortDirection = "asc";
                }

                if (options.infiniteScroll) {
                  // Need to request a new set of data
                  data.data = [];
                  state.currentPage = 0;
                  getSourceData(
                    state.currentPage,
                    state.recordsPerPage,
                    state.sortKey,
                    state.sortDirection
                  ).then(function(data) {
                    //Find and remove record(s) that is(are) frozen
                    data = tableHelper.removeFrozenRecords(data, col, desc);
                    getDataSuccess(data);
                  }, getDataFail);
                } else {
                  // Render table (Deep Render Mode)
                  table.render(true);
                  scope.$apply();
                }
              }
            });

            // clean sorting class names
            function removeSortingClass(cell) {
              var fCell = cell;
              do {
                cell.dom.setAttribute("data-sort", "");
                cell = cell.right;
              } while (cell !== fCell);
            }

            /*
             Frozen Cell
             */
            table.requestFrozenCellContent(function(cell) {
              if (tableRowSelectHelper && cell.col === 0) {
                var row = tableHelper.getRowByIndex(cell.row, true);
                tableRowSelectHelper.renderCell(cell);
                if (row && row[tableRowSelectHelper._selectedLabel]) {
                  cell.parent.addClass("bt-row-selected", true);
                } else {
                  cell.parent.removeClass("bt-row-selected", true);
                }
              } else {
                tableHelper.renderFrozenCell(cell);
              }
            });

            /*
             Cell
             */

            table.requestCellContent(function(cell) {
              if (tableRowSelectHelper && cell.col === 0) {
                var row = tableHelper.getRowByIndex(cell.row);
                tableRowSelectHelper.renderCell(cell);

                if (row[tableRowSelectHelper._selectedLabel]) {
                  cell.parent.addClass("bt-row-selected", true);
                  cell.parent.removeClass("bt-row-indeterminate", true);
                } else if (row[tableRowSelectHelper._indeterminateLabel]) {
                  cell.parent.removeClass("bt-row-selected", true);
                  cell.parent.addClass("bt-row-indeterminate", true);
                } else {
                  cell.parent.removeClass("bt-row-selected", true);
                  cell.parent.removeClass("bt-row-indeterminate", true);
                }
              } else {
                tableHelper.renderCell(cell);
              }
            });

            var onRowClickCallback = scope.$eval(attrs.rowClick);

            // On row click
            function onRowClick(event) {
              var row = tableHelper.getRowByIndex(
                  event.rowIndex,
                  event.isFrozen
                ),
                isSelected;

              if (
                tableRowSelectHelper &&
                event.target.className === "bt-check-box"
              ) {
                if (!tableRowSelectHelper.isRowSelected(row)) {
                  tableRowSelectHelper.add(row, true);
                } else {
                  tableRowSelectHelper.remove(row, true);
                  table.header.dom
                    .querySelector(".bento-table-row")
                    .row.removeClass("bt-row-selected");
                }

                $timeout(function() {
                  table.render();
                });

                fireRowSelectCallback();
              }

              /**
               * Fire callback and return the original row object or BentoTableRow object
               */
              if (onRowClickCallback) {
                onRowClickCallback(row);
              }
            }

            // Fire select row callback
            function fireRowSelectCallback() {
              if (attrs.sourceDataSelectCallback) {
                scope.$eval(attrs.sourceDataSelectCallback)(
                  tableRowSelectHelper.getSelection()
                );
              }
            }

            function init() {
              body = element[0].querySelector(".bento-table-body");
              options = !!attrs.options
                ? scope.$eval(attrs.options)
                : { rowHeight: 30, colWidth: 150 };
              state.currentPage = 0;
              state.recordsPerPage = options.recordsPerPage || 50;

              options.scope = scope;

              table = new BentoTable(body, options);

              // initialize row selection
              if (options.rowSelect) {
                tableRowSelectHelper = new BentoTableRowSelectHelper(table);
                colOffset += tableRowSelectHelper.colOffset;
              }

              // Getting helper
              if (typeof tableHelper === "undefined") {
                if (options.group) {
                  // Grouping table helper
                  tableHelper = new BentoTableGroupingHelper(
                    data,
                    table,
                    options,
                    localScope,
                    $compile,
                    attrs
                  );
                } else {
                  // Default table helper
                  tableHelper = new BentoTableHelper(
                    data,
                    table,
                    options,
                    localScope,
                    $compile,
                    attrs
                  );
                }
                tableHelper.init(colOffset);
                tableHelper.onRowClick(onRowClick);
              }

              if (options.rowSelect) {
                tableRowSelectHelper.addHelper(tableHelper);
              }

              // infinite scroll initialization
              if (options.infiniteScroll) {
                var promise;
                table.onScrollAtBottom(function(event) {
                  if (!promise) {
                    var newPage = state.currentPage + 1;
                    promise = getSourceData(
                      newPage,
                      state.recordsPerPage,
                      state.sortKey,
                      state.sortDirection
                    );
                    promise.then(function(data) {
                      state.currentPage = newPage;
                      getDataSuccess(data);
                      promise = null;
                    }, getDataFail);
                  }
                });
              }

              // Make sure when the table is ready
              var tableInitWatch = scope.$watch(
                function() {
                  return { height: body.offsetHeight, width: body.offsetWidth };
                },
                function(size) {
                  if (size.height > 0 && size.width > 0) {
                    table.init();

                    if (data.data.length > 0) {
                      prepareData();
                    }
                    // release one time watch
                    tableInitWatch();
                  }
                },
                true // need to deepwatch this object
              );
            }
          }
        };
      }
    ]);
})();

function BentoTableRowSelectHelper(table, tableHelper) {
  var uid = Math.round(Math.random() * 100000000);
  this.colOffset = 1;
  this._selection = [];
  this._table = table;
  this._selectedLabel = '_btSelectedRow' + uid;
  this._indeterminateLabel = '_btSelectIndeterminate' + uid;
  this._tableHelper = tableHelper;
}

(function () {
  BentoTableRowSelectHelper.prototype.renderCell = renderCell;
  BentoTableRowSelectHelper.prototype.add = add;
  BentoTableRowSelectHelper.prototype.addHelper = addHelper;
  BentoTableRowSelectHelper.prototype.remove = remove;
  BentoTableRowSelectHelper.prototype.clear = clear;
  BentoTableRowSelectHelper.prototype.addRows = addRows;
  BentoTableRowSelectHelper.prototype.getSelection = getSelection;
  BentoTableRowSelectHelper.prototype.isRowSelected = isRowSelected;
  BentoTableRowSelectHelper.prototype.deselectAllRows = deselectAllRows;
  BentoTableRowSelectHelper.prototype.preSelectRows = preSelectRows;

  /**
   * Help to check if a row is selected or not
   * @param row
   * @returns {*}
   */
  function isRowSelected(row) {
    return row[this._selectedLabel];
  }

  /**
   * Add a table helper to reference it's functions
   * @param tableHelper
   */
  function addHelper(tableHelper) {
    this._tableHelper = tableHelper;
  }

  /**
   *
   * @param table (BentoTable) - BentoTable instance for rendering
   * @param dataArray (array) - Original Data array
   * @param selectedDataArray (array) - Selected rows in array
   * @param keyToCompare (object) - Unique key to compare the arrays
   */
  function preSelectRows(table, dataArray, selectedDataArray, keyToCompare) {

    if (
      typeof selectedDataArray === 'undefined' ||
      typeof keyToCompare === 'undefined' || !Array.isArray(selectedDataArray)
    ) {
      console.warn(
        'BentoTable: Getter `getSelectedRows` mis-formed.',
        '{key: (string)|(number), data: (array)}');
      return;
    }

    // Find and add selected row(s)
    var key, i, j, iLen, jLen, row;
    for (i = 0, iLen = selectedDataArray.length; i < iLen; i++) {
      key = selectedDataArray[i][keyToCompare];

      for (j = 0, jLen = dataArray.length; j < jLen; j++) {
        row = dataArray[j];
        if (row[keyToCompare] == key) {
          this.add(dataArray[j]);

          // Update table rendering flag for row selections
          table.rowSizes[j][2] = true;
          break;
        }
      }
    }
  }

  /**
   * Get a copy of the current selection
   * @returns {Array}
   */
  function getSelection() {
    var newArr = [];
    for (var i = 0, len = this._selection.length; i < len; i++) {
      newArr.push(this._selection[i]);
    }
    return newArr;
  }

  /**
   * Select all rows in the table
   */
  function addRows(rows) {
    var i, len;

    var row;
    for (i = 0, len = rows.length; i < len; i++) {
      row = rows[i];
      this.add(row);
    }
  }

  /**
   * Deselect all row
   */
  function deselectAllRows(rows) {
    var i, len;
    for (i = 0, len = rows.length; i < len; i++) {
      this.remove(rows[i]);
    }

    this._selection = [];
  }

  /**
   * Add row to selection
   * @param row
   */
  function add(row, checkParent) {
    row[this._selectedLabel] = true;
    if (row instanceof BentoTableGroupingRow) {
      for (var i = 0, len = row.members.length; i < len; i++) {
        this.add(row.members[i]);
      }
      __checkGroupSelectionStates(row, this);
    } else {
      if (this._selection.indexOf(row) === -1) {
        this._selection.push(row);
      }

      if (checkParent && this._tableHelper instanceof BentoTableGroupingHelper) {
        __checkGroupSelectionStates(
          this._tableHelper.getRowProperty(row, this._tableHelper.getParentVariableName())
          ,
          this);
      }
    }
  }

  /**
   * Check if a group is fully checked or not
   * @param btGroup
   * @private
   */
  function __checkGroupSelectionStates(btGroup, self) {

    var allSelected = true;
    var noneSelected = true;
    btGroup.members.forEach(function (item, i) {
      if (item[self._selectedLabel]) {
        noneSelected = false;
      } else {
        allSelected = false;
      }
    });

    if (allSelected) {
      btGroup[self._selectedLabel] = true;
      delete btGroup[self._indeterminateLabel];
    } else if (noneSelected) {

      delete btGroup[self._indeterminateLabel];
      delete btGroup[self._selectedLabel];
    } else {
      delete btGroup[self._selectedLabel];
      btGroup[self._indeterminateLabel] = true;
    }
  }

  /**
   * Remove a row from selection
   * @param row
   */
  function remove(row, checkParent) {
    var index = this._selection.indexOf(row);

    delete row[this._selectedLabel];

    if (row instanceof BentoTableGroupingRow) {
      for (var i = 0, len = row.members.length; i < len; i++) {
        this.remove(row.members[i]);
      }
      __checkGroupSelectionStates(row, this);
    } else {
      if (index > -1) {
        this._selection.splice(this._selection.indexOf(row), 1);
      }

      // Check group selection states
      if (checkParent && this._tableHelper instanceof BentoTableGroupingHelper) {
        __checkGroupSelectionStates(
          this._tableHelper.getRowProperty(row, this._tableHelper.getParentVariableName())
          , this);
      }
    }

  }

  /**
   * Remove all selection
   * @returns {Array}
   */
  function clear() {
    for (i = 0, len = this._selection.length; i < len; i++) {
      delete this._selection[i][this._selectedLabel];
    }
    return this._selection = [];
  }

  /**
   * Render selection cell
   * @param cell
   */
  function renderCell(cell) {
    cell.html('<div class="bt-check-box"></div>');
  }

})();
var BentoTableRow;

(function() {
  BentoTableRow = Row;
  Row.prototype.push = push;
  Row.prototype.unshift = unshift;
  Row.prototype.getFirstCell = getFirstCell;
  Row.prototype.getLastCell = getLastCell;
  Row.prototype.getNthCell = getNthCell;
  Row.prototype.getNumCells = getNumCells;
  Row.prototype.destroy = destroy;
  Row.prototype.setRow = setRowIndex;
  Row.prototype.remove = remove;
  Row.prototype.removeLastCell = removeLastCell;
  Row.prototype.addClass = addClass;
  Row.prototype.hasClass = hasClass;
  Row.prototype.removeClass = removeClass;
  Row.prototype.applyClasses = applyClasses;
  Row.prototype.clearClasses = clearClasses;
  Row.prototype.toggleClass = toggleClass;
  Row.prototype.setLinkages = setLinkages;
  Row.prototype.clear = clear;

  Object.defineProperty(Row.prototype, "isFrozen", { get: isFrozen });

  // Private
  Row.prototype._init = init;

  /**
   * Constructer
   * @param initNumColumns
   * @param width
   * @param height
   * @param cellClickCallback
   * @param isHeader
   * @constructor
   */
  function Row(initNumColumns, width, height, cellClickCallback, isHeader, tableOptions) {
    var row = this;
    this._dom = document.createElement("DIV");
    this._dom.row = this;
    // Private
    this._classes = [""];
    this._changed = false;
    this.initNumColumns = initNumColumns;
    this.width = width;
    this.height = height;
    this.cellClickCallback = cellClickCallback;
    this.isHeader = isHeader;
    this.tableOptions = tableOptions;

    Object.defineProperty(this,'dom',{
      set: function(v){
        console.log('trying to set', v);
      },
      get: function(){
        return row._dom;
      }
    });

    this._init();
  }

  function clear() {
    this._classes = [];
    this.addClass("bento-table-row");
    var children = this._dom.children;
    for (var i = 0, len = children.length; i < len; i++) {
      children[i].innerHTML = "";
    }
  }

  /**
   * Remove row from the parent element
   */
  function remove() {
    if (this._dom.parentElement) {
      this._dom.parentElement.removeChild(this._dom);
    }
  }

  /**
   * Check if this row is frozen or not
   * @returns {*}
   */
  function isFrozen() {
    return this.hasClass("bt-frozen-row");
  }

  /**
   * Toggles a class name on and off
   * @param className
   * @returns {boolean} to tell either the class is applied or not
   */
  function toggleClass(className) {
    if (this.hasClass(className)) {
      this.removeClass(className);
      return false;
    } else {
      this.addClass(className);
      return true;
    }
  }

  /**
   * Add a CSS Class to this row
   * @param className
   * @param doNotApply - do not apply the new class to the actual element
   */
  function addClass(className, doNotApply) {
    if (this._classes.indexOf(className) < 0) {
      this._classes.push(className);
      if (doNotApply) {
        this._changed = true;
        return;
      }
      this._dom.className = this._classes.join(" ");
    }
  }

  /**
   * Check if this row has a given class
   * @param className
   * @returns {boolean}
   */
  function hasClass(className) {
    return this._classes.indexOf(className) > -1;
  }

  /**
   * Remove a CSS class from this row
   * @param className
   * @param doNotApply - do not apply the new class to the actual element
   */
  function removeClass(className, doNotApply) {
    var index = this._classes.indexOf(className);
    if (index > -1) {
      this._classes.splice(index, 1);
      if (doNotApply) {
        this._changed = true;
        return;
      }
      this._dom.className = this._classes.join(" ");
    }
  }

  /**
   * Clear all CSS classes
   * @param doNotApply - do not apply the new class to the actual element
   */
  function clearClasses(doNotApply) {
    this._classes = [this._classes[0]];

    if (doNotApply) {
      this._changed = true;
      return;
    }
    this._dom.className = this._classes[0];
  }

  /**
   * Apply all CSS classes to the element at once
   */
  function applyClasses() {
    if (this._changed) {
      this._changed = false;
      this._dom.className = this._classes.join(" ");
    }
  }

  /**
   * Push a cell to this row and link it
   * @param cell
   * @param isNew
   * @param callback
   */
  function push(cell, isNew, callback) {
    this.setLinkages(cell, isNew);
    this._dom.appendChild(cell.dom);

    if (callback) {
      cell.dom.addEventListener("click", callback);
    }
  }

  /**
   * Set row index
   * @param index
   */
  function setRowIndex(index) {
    this.row = index;
  }

  /**
   * Unshift a cell to this row
   * @param cell
   * @param isNew
   */
  function unshift(cell, isNew) {
    this.setLinkages(cell, isNew);
    this._dom.insertBefore(cell.dom, this._dom.firstChild);
  }

  /**
   * Gets the first DOM cell from the current row
   * @returns {BentoTableCell}
   */
  function getFirstCell() {
    return this._dom.firstElementChild.cell;
  }

  /**
   * Gets the last DOM cell from the current row
   * @returns (BentoTableCell)
   */
  function getLastCell() {
    return this._dom.lastElementChild.cell;
  }

  /**
   * Get's the (n)th cell from the current row
   * @param index
   * @returns {BentoTableCell}
   */
  function getNthCell(index) {
    return this._dom.children[index].cell;
  }

  /**
   * Get the total number of cells in this row
   * @returns {Number}
   */
  function getNumCells() {
    return this._dom.childElementCount;
  }

  /**
   * Destroy this row
   */
  function destroy() {
    var child;
    // delete children
    while (this._dom.childElementCount > 0) {
      child = this._dom.firstElementChild.cell;

      if (child.top) {
        child.top.setBottom(child.bottom);
      }

      if (child.bottom) {
        child.bottom.setTop(child.top);
      }
      this._dom.removeChild(child.dom);
      child.destroy();
    }
    child = null;
    this.remove();
    delete this._dom;
  }

  function removeLastCell() {
    var cell = this.getLastCell();
    cell.removeEventListener(this.cellClickCallback);
    if (cell.left) {
      cell.left.setRight(cell.right);
    }

    if (cell.right) {
      cell.right.setLeft(cell.left);
    }

    this._dom.removeChild(cell.dom);
    cell.destroy();
  }

  function init() {
    var cell, i, len;

    for (i = 0; i < this.initNumColumns; i++) {
      cell = new BentoTableCell(this, this.isHeader);
      if (!this.tableOptions.doNotAssignDimensions && this.width) {
        cell.dom.style.width = this.width + "px";
      }
      this.push(cell, true, this.cellClickCallback);
    }

    var children = this._dom.children;
    for (i = 0, len = children.length; i < len; i++) {
      cell = children[i].cell;
    }

    if (this.height && (!this.tableOptions || (!this.tableOptions.doNotAssignDimensions))) {
      this._dom.style.height = this.height + "px";
    }

    this._classes.pop();
    this.addClass("bento-table-row");
  }

  /**
   * Set linkages to all cells with a new cell
   * @param cell - Cell object
   * @param isNew - Tell is cell is a new object
   */
  function setLinkages(cell, isNew) {
    if (isNew) {
      if (this._dom.childElementCount > 0 && isNew) {
        var fCell = this.getFirstCell();
        var lCell = this.getLastCell();

        fCell.setLeft(cell);
        lCell.setRight(cell);
        cell.setLeft(lCell);
        cell.setRight(fCell);
      } else {
        // This is the only cell in a row
        // linking to itself
        cell.setLeft(cell);
        cell.setRight(cell);
      }
    }
  }
})();

function BentoTableSort(table) {
  var bh = this;
  var btRowArray;
  bh.sort = heapSort;
  bh.findIndex = findIndex;

  /**
   * Find the index of an object within a sorted array
   * @param arr
   * @param isBetween - (bool)
   * @param outOfBound - number of index when found otherwise false
   * @returns {*}
   */
  function findIndex(arr, isBetween, outOfBound, outOfBoundAsNotFound) {
    var left = 0,
        right = arr.length - 1,
        middle = Math.floor((left + right) * 0.5),
        bound = outOfBound(arr[left], arr[right]);
      ;

    if (outOfBoundAsNotFound && bound) {
      return -1;
    } else if (bound === -1 || bound === 1) {
      return bound > 0 ? arr.length : 0;
    }

    while (left !== middle) {
      if (isBetween(arr[left], arr[middle])) {
        right = middle;
      } else {
        left = middle;
      }
      middle = Math.floor((left + right) * 0.5);
    }
    return left + 1;
  }

  /**
   * Sort an array based a column (index : col)
   * @param arr
   * @param col
   *
   * Using BlockSort
   * http://en.wikipedia.org/wiki/Block_sort
   */

  /**
   * Finds the correct place of given element in given max heap.
   *
   * @private
   * @param {Array} array Array.
   * @param {Number} index Index of the element which palce in
   * the max heap should be found.
   * @param {Number} heapSize Size of the heap.
   * @param {function} cmp Comparison function.
   */
  function heapify(array, btRowArray, index, heapSize, cmp) {
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    var largest = index;
    if (left < heapSize && cmp(array[left], array[index]) > 0) {
      largest = left;
    }
    if (right < heapSize && cmp(array[right], array[largest]) > 0) {
      largest = right;
    }
    if (largest !== index) {
      var temp = array[index];
      var temp2 = btRowArray[index];
      array[index] = array[largest];
      btRowArray[index] = btRowArray[largest];
      array[largest] = temp;
      btRowArray[largest] = temp2;
      heapify(array, btRowArray, largest, heapSize, cmp);
    }
  }

  /**
   * Builds max heap from given array.
   *
   * @private
   * @param {Array} array Array which should be turned into max heap.
   * @param {function} cmp Comparison function.
   * @return {Array} array Array turned into max heap.
   */
  function buildMaxHeap(array, btRowArray, cmp) {
    for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
      heapify(array, btRowArray, i, array.length, cmp);
    }
    return array;
  }

  /**
   * Heapsort. Turns the input array into max
   * heap and after that sorts it.<br><br>
   * Time complexity: O(N log N).
   *
   * @example
   *
   * var sort = require('path-to-algorithms/src' +
   * '/sorting/heapsort').heapSort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @module sorting/heapsort
   * @param {Array} array Input array.
   * @param {Function} cmp Optional. A function that defines an
   * alternative sort order. The function should return a negative,
   * zero, or positive value, depending on the arguments.
   * @return {Object} Sorted array.
   */
  function heapSort(array, rowArray, cmp) {
    cmp = cmp || comparator;
    var size = array.length;
    var temp, temp2;
    btRowArray = rowArray? rowArray:[];

    buildMaxHeap(array, btRowArray, cmp);
    for (var i = array.length - 1; i > 0; i -= 1) {
      temp = array[0];
      temp2 = btRowArray[0];
      array[0] = array[i];
      btRowArray[0] = btRowArray[i];
      array[i] = temp;
      btRowArray[i] = temp2;
      size -= 1;
      heapify(array, btRowArray, 0, size, cmp);
    }

    return {rows: array, rowSizes: btRowArray};
  }

  function comparator(a, b) {
    return a - b;
  }

}
var BentoTable;

(function(){

  BentoTable = _BentoTable;
  _BentoTable.prototype = Object.create(BentoTableCore.prototype);
  _BentoTable.prototype.constructor = _BentoTable;

  function _BentoTable(dom, options){
    BentoTableCore.apply(this,arguments);
  }
})();



var BentoTableDefaultColumn;

(function(){

  'user strict';
  BentoTableDefaultColumn = _BentoTableDefaultColumn;
  BentoTableDefaultColumn.prototype.applyContentToCell = applyContentToCell;
  BentoTableDefaultColumn.prototype.applyContentToCellWithType = applyContentToCellWithType;

  // Constructor
  function _BentoTableDefaultColumn(){
  }

  /**
   * Apply HTML content to a BentoCell object
   * @param content
   * @param cell
   */
  function applyContentToCell(content, cell){
    applyContentToCellWithType(content, cell, 'bt-cell-default');
  }

  /**
   * Apply HTML content to a BentoCell object with a unique type
   * @param content
   * @param cell
   * @param type
   */
  function applyContentToCellWithType(content, cell, type){
    if(type){
      cell.setType(type);
    }
    cell.html(content);
  }
})();

var BentoTableCellTemplateColumn;

(function() {
  BentoTableCellTemplateColumn = btCellTemplate;
  btCellTemplate.prototype = Object.create(BentoTableDefaultColumn.prototype);
  btCellTemplate.prototype.constructor = btCellTemplate;

  // Override
  btCellTemplate.prototype.applyContentToCell = applyContentToCell;
  btCellTemplate.prototype.setTemplate = setTemplate;

  /**
   * Constructor
   * @param scope
   * @param compile
   * @param dataName
   */
  function btCellTemplate(scope, compile, dataName) {
    BentoTableDefaultColumn.apply(this, arguments);
    this._scope = scope;
    this._compile = compile;
    this._dataName = dataName;
    this._template = null;
  }

  /**
   * Set Template of this column
   * @param tpl
   */
  function setTemplate(tpl) {
    if (typeof tpl === 'string') {
      this._template = tpl;
    } else {
      var tmp = document.createElement('div');
      tmp.appendChild(tpl);
      this._template = tmp.innerHTML;
      tmp = null;
    }
  }

  /**
   * Override on Apply content to Cell
   * @param content
   * @param cell
   * @param item
   */
  function applyContentToCell(content, cell, row) {
    if (cell.rowData === row) {
      // We are trying to re-render this cell
      // therefore skip
      return;
    }

    var cellData = cell.getData();
    var data = cellData || {
      // Inherit from the parent scope
      scope: this._scope.$new()
    };

    data.scope.$row = row;
    data.scope.$item = content;
    data.scope.$index = cell.row;

    if (!cellData) {
      // First time cell render
      data.element = this._compile(this._template)(data.scope);
      // Keep reference
      cell.setData(data);

      // Content has to be true or false
      this.applyContentToCellWithType(
        data.element[0],
        cell,
        'bt-cell-template'
      );
    }
    cell.rowData = row;
  }
})();

var BentoTableCheckBoxColumn;

(function(){
  BentoTableCheckBoxColumn = _BTCheckBoxColumn;
  BentoTableCheckBoxColumn.prototype = Object.create(BentoTableDefaultColumn.prototype);
  BentoTableCheckBoxColumn.prototype.constructor = BentoTableCheckBoxColumn;
  // Methods
  BentoTableCheckBoxColumn.prototype.applyContentToCell = applyContentToCell;

  function _BTCheckBoxColumn(){
    BentoTableDefaultColumn.apply(this, arguments);

    var col = this;
    // Override
    col.applyContentToCell = applyContentToCell;
  }

  function applyContentToCell(content, cell){
    // Content has to be true or false
    this.applyContentToCellWithType(content,cell,'bt-checkbox-cell');
  }

})();
function BentoTableNumberColumn(){
  BentoTableNumberColumn.prototype = new BentoTableDefaultColumn();
  BentoTableDefaultColumn.apply(this, arguments);

  var col = this;
  // Override
  col.applyContentToCell = applyContentToCell;

  function applyContentToCell(content, cell){
    col.applyContentToCellWithType(content,cell,'bt-number-cell');
  }

}
(function (angular, window, undefined) {
  "use strict";

  angular.module('bento.uib.datepicker.addon', [])
    /**
     * uib-datepicker-popup-wrap Addon
     */
    .directive('uibDatepickerPopupWrap',
      [
        '$timeout',
        function ($timeout) {
          return {
            scope: false,
            priority: -1,
            link: function(scope,element){
              var timeoutPromise,
                  $previousSibling = angular.element(element[0].previousSibling),
                  $body = angular.element(document.body);

              // Detection and placement
              detectViewport();

              // Add/Remove window listener
              window.addEventListener('resize',onWindowResize);
              scope.$on('$destroy',function(){
                $timeout.cancel(timeoutPromise);
                window.removeEventListener('resize',onWindowResize);
              });

              function onWindowResize(){
                $timeout.cancel(timeoutPromise);
                timeoutPromise = $timeout(detectViewport,100);
              }

              function detectViewport(){
                var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                if(vw < 601){
                  $body.prepend(element);
                  element.addClass('uib-datepicker-fixed');
                }else{
                  $previousSibling.after(element);
                  element.removeClass('uib-datepicker-fixed');
                }
              }
            }
          }
        }
      ]);

})(angular, window);
(function(angular, undefined) {
    'use strict';

    angular
        .module('bento.universeFilter', [
            'bento.services',
            'ngSanitize'
        ])
        .directive('bentoUniverseFilterDropdown', bentoUniverseFilterDropdown)
        .directive('bentoUniverseFilterEllipsis', bentoUniverseFilterEllipsis)
        .controller('bentoUniverseFilterDropdownController', bentoUniverseFilterDropdownController);

    bentoUniverseFilterDropdown.$inject = ['$timeout', '$compile', '$window'];

    function bentoUniverseFilterDropdown($timeout, $compile, $window) {
        return {
            restrict: 'EA',
            require: ['ngModel', 'bentoUniverseFilterDropdown'],
            scope: {
                onBackBtnClick: '&?',
                backBtnDisabled: '=?',
                onFilterItemChanged: '&?',
                selectText: '=?'
            },
            controller: 'bentoUniverseFilterDropdownController',
            controllerAs: 'bentoUniverseFilterCtrl',
            templateUrl: function(element, attrs) {
                return angular.isDefined(attrs.templateUrl) ? attrs.templateUrl : '../templates/universe_filter/bento-universe-filter-dropdown.html';
            },
            compile: function(tElem, tAttrs) {
                return {
                    post: postLink,
                }

                function postLink(scope, element, attrs, ctrl) {
                    // Get Model Controller
                    var ngModelCtrl = ctrl[0];
                    // Get Filter Controller
                    var filterCtrl = ctrl[1];
                    // Keep track of selected items
                    var selectedItems = [];

                    //watch ngModelCtrl
                    scope.$watch(function() {
                        return ngModelCtrl.$modelValue;
                    }, onModelChange, true);

                    // watch back button disabled toggle
                    scope.$watch('backBtnDisabled', onBackBtnDisabled);
                    // back button click handler
                    filterCtrl.onBackButtonClick = function($event) {
                        scope.onBackBtnClick();
                    }
                    // keep track in template if there is back button
                    if (attrs.onBackBtnClick) {
                        filterCtrl.hasBackBtn = true;
                    }
                    // back button is disabled handler
                    function onBackBtnDisabled(newValue) {
                        filterCtrl.backButtonDisabled = newValue;
                    }

                    //model changed
                    function onModelChange(newValue, oldValue) {
                        if (newValue) {
                            if(newValue !== oldValue){
                                var selectedItem = checkForSelectedItems(newValue);
                                if(selectedItem){
                                    scope.onFilterItemChanged({filterItems:newValue,selectedItem:selectedItem});
                                }
                            }
                            filterCtrl.filterItems = newValue;
                        }
                    }
                    /**
                     * Check to see which item is currently selected
                     */
                    function checkForSelectedItems(items){
                        var selectedItem;
                        for(var i=0,ttl=items.length;i<ttl;i++){
                            if(selectedItems[i]){
                                if(String(selectedItems[i]) !== String(items[i].selectedName)){
                                    selectedItem = items[i];
                                    selectedItems[i] = items[i].selectedName;
                                    break;
                                }
                                selectedItems[i] = items[i].selectedName;
                            } else if(items[i].selectedName){
                                selectedItem = items[i];
                                selectedItems[i] = items[i].selectedName;
                                break;
                            } else {
                                selectedItems[i] = items[i].selectedName;
                            }
                        }
                        return selectedItem;
                    }
                    //Window resize
                    angular.element($window).bind('resize', onWindowResize);
                    scope.$watch(getElementWidth, onWindowResize);

                    function getElementWidth() {
                        return element[0].offsetWidth;
                    }

                    function onWindowResize() {
                        $timeout(function() {
                            // Close any dropdown on resize
                            if(filterCtrl.isOpen && filterCtrl.isOpen.length){
                                for(var i = 0,ttl = filterCtrl.isOpen.length;i<ttl;i++){
                                    filterCtrl.isOpen[i] = false;
                                }
                            }
                            // check for ellipsis
                            filterCtrl.checkTextOverflow();
                        });
                    }

                    //Destroy
                    scope.$on('$destroy', onDestroy);
                    element.on('$destroy', onDestroy);

                    function onDestroy() {
                        angular.element($window).unbind('resize', onWindowResize);
                    }
                }
            }
        };
    }

    bentoUniverseFilterDropdownController.$inject = ['$scope', '$element', '$attrs','$uibModal', '$timeout', '$bentoServices'];

    function bentoUniverseFilterDropdownController($scope, $element, $attrs, $uibModal, $timeout, $bentoServices) {
        var vm = this;
        vm.alignPosition = '';
        vm.isOpen = [];
        var adjustTimer;
        var openIndex = -1;

        vm.selectText = $scope.selectText || 'Select';
        // get dropdown append to element
        vm.appendToElement = angular.element($element[0].querySelector('.bento-uni-filter'));
        // add class to template if last dropdown is open
        vm.isLastOpen = function(entry) {
            var classAlign = vm.isRTL ? 'align-left' : 'align-right';
            if(vm.isOpen && vm.isOpen.length){
                var lastIndex = vm.isOpen.length - 1;
                return vm.isOpen[lastIndex] ? classAlign:'';
            }
        }
        vm.checkTextOverflow = checkTextOverflow;
        function checkTextOverflow() {
            $scope.$broadcast('bentoUniverFilterCheckEllipsis');
        }

        // $scope.$on('$includeContentLoaded', function() {
        //     // if(adjustTimer){
        //     //     $timeout.cancel(adjustTimer);
        //     // }
        //     // adjustTimer = $timeout(function(){
        //     //     adjustDropdownMenu();
        //     // });
        // });

        $scope.$watchCollection('bentoUniverseFilterCtrl.isOpen',isDropdownOpen);
        $scope.$on('bentoUniverseFilterRefresh', function(){
            adjustDropdownMenu();
        });
        $scope.$watch(function () {
            return $bentoServices.isRTL();
        }, function (nv) {
          if(nv !== null || nv !== undefined) {
            vm.isRTL = nv;
          }
        });
        
        function isDropdownOpen(isOpen){

            openIndex = -1;
            isOpen.forEach(function(item,$index){
                if(item === true){
                    if(adjustTimer){
                        $timeout.cancel(adjustTimer);
                    }
                    openIndex = $index;
                    adjustTimer = $timeout(function(){
                        adjustDropdownMenu();
                    });
                }
            })
        }
        // adjust position of dropdown menu
        function adjustDropdownMenu(){
            vm.alignPosition = '';
            // grab all dropdown elements that are open, usually the previous one closing and the new
            // one opening
            var dropdownElementArr = $element[0].querySelectorAll('.bento-uni-filter_dropdown-menu');
            // get the last item in the array, as that will be the one about to open
            var dropdownElement = dropdownElementArr[dropdownElementArr.length - 1];
            // display it first to be able to get dimensions
            var buttonElement = $element[0].querySelectorAll('.bento-uni-filter_item')[openIndex];
            if(!dropdownElement || !buttonElement){
                return;
            }
            dropdownElement.style.display = 'block';
            // get dimensions of dropdown
            var ddRect = dropdownElement.getBoundingClientRect();
            // get dimensions of filter
            var filtRect = $element[0].getBoundingClientRect();
            // get dimensions of button
            var buttonRect = buttonElement.getBoundingClientRect();
            // set min-width of dropdown element to width of button
            dropdownElement.style.minWidth = (Math.floor(buttonRect.width)+2)+'px';
            if(vm.isRTL) {
              dropdownElement.style.textAlign = 'right';
              // find the total client width and subtract element's width
              var widthToExclude = document.body.clientWidth - filtRect.width;

              var ddElementRight = parseInt(dropdownElement.style.right);

              // if dropdownElement.style.right is invalid, set it ddElementRight
              var computedRightVal = isNaN(ddElementRight) ? widthToExclude: ddElementRight;

              dropdownElement.style.right = ((computedRightVal - widthToExclude) - 2) + 'px';
            } else {
                dropdownElement.style.textAlign = 'left';
                dropdownElement.style.right = 'auto';
            }
            // check if dropdown width is wider than filter width,
            // if so then make full-width            
            if(ddRect.width > (filtRect.width-30)){
                vm.alignPosition = 'full';
            } 
            // check if right border of dropdown menu hits right border of filter
            // if right border overflows, then shift dropdown menu to the left
            else if((ddRect.width + buttonRect.left) - (filtRect.width + filtRect.left) >=0){
                // check if too wide
                vm.alignPosition = vm.isRTL ? 'left' : 'right';
            } 
        }

    }

    // directive to show tooltip only when there is ellipsis
    bentoUniverseFilterEllipsis.$inject = ['$sanitize'];

    function bentoUniverseFilterEllipsis($sanitize) {
        return {
            restrict: 'EA',
            scope: {
                bentoEllipsisText: '='
            },
            compile: function(tElem, tAttrs) {
                return {
                    post: postLink,
                }

                function postLink(scope, element) {
                    scope.$watch('bentoEllipsisText', checkEllipsis);
                    scope.$on('bentoUniverFilterCheckEllipsis', checkEllipsis);

                    function checkEllipsis() {
                        var txtElem = element[0];
                        var str = scope.bentoEllipsisText;
                        txtElem.innerHTML = $sanitize(str);
                        txtElem.style.pointerEvents = "";
                        if ((txtElem.offsetWidth) > txtElem.scrollWidth){
                            //disable tooltip if full display of label
                            txtElem.style.pointerEvents = "none";
                        }
                    }
                }
            }
        }
    }    
})(window.angular);
(function(angular, undefined) {
  'use strict';

  angular
    .module('bento.universeFilter')
    .directive('bentoUniverseFilterDropdownMenu', bentoUniverseFilterDropdownMenu)
    .controller('bentoUniverseFilterDropdownMenuController', bentoUniverseFilterDropdownMenuController);

  bentoUniverseFilterDropdownMenu.$inject = ['$timeout', '$compile', '$window', '$controller', '$parse'];

  function bentoUniverseFilterDropdownMenu($timeout, $compile, $window, $controller, $parse) {
    return {
      restrict: 'EA',
      scope: true,
      bindToController: {
        filterItem: '=',
        isOpen: '=?'
      },
      controller: 'bentoUniverseFilterDropdownMenuController',
      controllerAs: 'bentoUniFilterItemCtrl',
      link: linkFunc
    }
    function linkFunc(scope, element, attrs, ctrl) {
      var lastActiveElement;
      scope.$watch('bentoUniFilterItemCtrl.isOpen',function(isOpen){
        if(isOpen === true){
          lastActiveElement = document.activeElement;
          element[0].focus();
        }
      });
    }
  }
  bentoUniverseFilterDropdownMenuController.$inject = ['$scope', '$element', '$attrs', '$timeout'];
  function bentoUniverseFilterDropdownMenuController($scope, $element, $attrs, $timeout) {
    var vm = this;

    vm.selectItem = function(item){
      vm.filterItem.selectedName= item.name;
      vm.close();
    }
    vm.close = function(){
      vm.isOpen = false;
    }
  }
})(window.angular);
(function (angular, window, undefined) {
  'use strict';

  angular.module('bento.uib.timepicker.addon', [])
    .directive('uibTimepicker',['$bentoServices', function ($bentoServices) {
      return {
        require: 'uibTimepicker',
        link   : function (scope, element, attrs, ctrl) {
          var isRTL = $bentoServices.isRTL();
          var hourInput = element[0].querySelector('.hours input');
          var minuteInput = element[0].querySelector('.minutes input');
          var hasFocus = false;
          var KEYBOARD_LEFT = 37;
          var KEYBOARD_RIGHT = 39;
          var SELECTION_START_INDEX = 0;
          var SELECTION_END_INDEX = 2;
          var amPmButton;

          element[0].setAttribute('tabindex', '-1');
          element[0].classList.add('bento-timepicker');


          setTimeout(function () {
            // Second input and amPmInput are sometimes redered after two digest cycles
            var secondInput = element[0].querySelector('.seconds input');
            amPmButton = element[0].querySelector('.am-pm button');

            // Check if this component is RTL
            if(isRTL){
              // Swap hour, minute and seconds
              var trElArray = element[0].querySelectorAll('tr');
              for(var i=0, len=trElArray.length; i<len; i++){
                reorderColumnsForRtl(trElArray[i]);
              }

              // Flip selection indexes
              SELECTION_START_INDEX = 2;
              SELECTION_END_INDEX = 0;
            }




            // Add keyboard listeners to input fields and button
            hourInput.addEventListener('keydown', function (e) {
              var input = e.currentTarget;

              if(isRTL && e.keyCode === KEYBOARD_LEFT
                && input.selectionStart === SELECTION_START_INDEX
                && input.selectionEnd === SELECTION_START_INDEX){
                // Focus on meridian button in RTL mode
                amPmButton.focus();
              }else if (e.keyCode === KEYBOARD_RIGHT
                && input.selectionStart === SELECTION_END_INDEX
                && input.selectionEnd === SELECTION_END_INDEX) {
                focusAndSelect(minuteInput);
                e.preventDefault();
              }
            });

            minuteInput.addEventListener('keydown', function (e) {
              var input = e.currentTarget;

              if (e.keyCode === KEYBOARD_RIGHT
                && input.selectionStart === SELECTION_END_INDEX
                && input.selectionEnd === SELECTION_END_INDEX) {
                if (secondInput.offsetParent) {
                  focusAndSelect(secondInput);
                  e.preventDefault();
                }

              }

              if (e.keyCode === KEYBOARD_LEFT
                && input.selectionStart === SELECTION_START_INDEX
                && input.selectionEnd === SELECTION_START_INDEX) {
                focusAndSelect(hourInput);
                e.preventDefault();
              }
            });

            if (secondInput.offsetParent) {
              secondInput.addEventListener('keydown', function (e) {
                var input = e.currentTarget;
                if (e.keyCode === KEYBOARD_LEFT
                  && input.selectionStart === SELECTION_START_INDEX
                  && input.selectionEnd === SELECTION_START_INDEX) {
                  focusAndSelect(minuteInput);
                  e.preventDefault();
                } else if ( !isRTL && e.keyCode === KEYBOARD_RIGHT
                  && input.selectionStart === SELECTION_END_INDEX
                  && input.selectionEnd === SELECTION_END_INDEX
                  && amPmButton.offsetParent) {
                  amPmButton.focus();
                }
              });
            }
            if (amPmButton.offsetParent) {
              amPmButton.addEventListener('keydown', function (e) {
                if(isRTL && e.keyCode === KEYBOARD_RIGHT){
                  // Focus on hour in RTL
                  focusAndSelect(hourInput);
                }else if (!isRTL && e.keyCode === KEYBOARD_LEFT) {
                  if (secondInput.offsetParent) {
                    focusAndSelect(secondInput);
                  } else {
                    focusAndSelect(minuteInput);
                  }
                  e.preventDefault();
                } else if (e.keyCode === 38 || e.keyCode === 40) {
                  amPmButton.click();
                  e.preventDefault();
                }
              })
            }
          });

          // Add focus events
          element[0].addEventListener('focusin', function (e) {

            if (!attrs.disabled && !attrs.readonly) {
              if (!hasFocus) {
                hasFocus = true;
                element[0].classList.add('has-focus');
              }

              if (document.activeElement === element[0]) {
                if(isRTL && amPmButton){
                  amPmButton.focus()
                }else{
                  focusAndSelect(hourInput);
                }
              }
            }
          });

          element[0].addEventListener('focusout', function (e) {
            if (!element[0].contains(document.activeElement)) {
              hasFocus = false;
              element[0].classList.remove('has-focus');
            }
          });

        }
      }
    }]);

  /**
   * Reorder <TR> elements to work with RTL
   * From: 1 2 3 4 5 6
   * To:   5 4 3 2 1 6
   *
   * Where:
   * 1 - Hour
   * 2 - Minute Spacer
   * 3 - Minute
   * 4 - Second Spacer
   * 5 - Second
   * 6 - Meridian Toggle Button
   *
   * @param trEl
   */
  function reorderColumnsForRtl(trEl){
    var lastChild = trEl.lastElementChild;
    var firstChild = trEl.firstElementChild;
    for(var i=0; i<4; i++){
      trEl.insertBefore(firstChild,lastChild);
      lastChild = firstChild;
      firstChild = trEl.firstElementChild;
    }
  }

  function focusAndSelect(inputEl) {
    inputEl.focus();
    inputEl.setSelectionRange(0, 2);
  }

})(angular, window);

(function (angular, undefined) {
  'use strict';
  var bentoServices;
  var timeout;
  var parse;
  angular.module('bento.sticky.footer', []).directive('bentoStickyFooter', [
    '$bentoServices',
    '$timeout',
    '$parse',
    function ($bentoServices, $timeout, $parse) {
      bentoServices = $bentoServices;
      timeout = $timeout;
      parse = $parse;
      return {
        restrict: 'A',
        link: BentoStickyFooterLink,
      };
    },
  ]);

  function BentoStickyFooterLink(scope, element, attrs) {
    var el = element[0];
    var scrollParentEl;
    var scrollbarWidth = bentoServices.getScrollbarWidth();
    var lastScrolled = performance.now();
    var stickyEl = document.createElement('div');
    var viewSize;
    var placeholder;
    var isRTL = bentoServices.isRTL();
    var showOnRefVisibleEl = attrs.showOnElementVisible ? parse(attrs.showOnElementVisible)(scope) : null;
    var timeoutPromise;
    if (typeof showOnRefVisibleEl === 'string') {
      // If showOnRefVisibleEl is a specified CSS selector, we go find the Element
      showOnRefVisibleEl = document.querySelector(showOnRefVisibleEl);
    }
    // Initialize sticky footer DOM
    stickyEl.className = el.className; // copy class names over
    stickyEl.classList.add('bento-sticky-footer');
    stickyEl.addEventListener('keydown', onStickyFooterKeydown);
    document.addEventListener('scroll', onWindowScroll, true);
    window.addEventListener('resize', onWindowResize);
    // Do a check first
    timeoutPromise = timeout(
      function () {
        checkAllocation();
      },
      300 // wait for view to finish rendering
    );
    scope.$on('$destroy', function () {
      // Remove all window listeners to prevent memory leak
      document.removeEventListener('scroll', onWindowScroll, true);
      window.removeEventListener('resize', onWindowResize);
      // Cancel timeout ifsticky footer is destroyed within the first 300 ms
      timeout.cancel(timeoutPromise);

      if (stickyEl.parentElement) {
        // Remove sticky element from any HTMLElement if there is one
        stickyEl.parentElement.removeChild(stickyEl);
      }
      // May not need this
      stickyEl = null;
    });

    function onWindowResize() {
      bentoServices.rAF(function () {
        checkAllocation();
      });
    }

    function onWindowScroll(e) {
      bentoServices.rAF(function () {
        checkAllocation(e);
      });
    }

    function alignFooter() {
      if (stickyEl.parentElement) {
        // Make sure everything is aligned since the sticky footer is in the view
        var parentRect =
          scrollParentEl === document
            ? {
                left: 0,
                right: viewSize.width,
                top: 0,
                bottom: viewSize.height,
              }
            : scrollParentEl.getBoundingClientRect();
        var left, width;

        if (attrs.hasOwnProperty('fullWidth') && parse(attrs.fullWidth)(scope) === false) {
          // This sticky footer should match the orginal footer width
          // and we need to align it with the original localtion
          var placeholderRect = placeholder.getBoundingClientRect();
          left = placeholderRect.left - parentRect.left;
          width = placeholder.offsetWidth;
        } else {
          // Fullwidth of the scrollable parent and align with scrollbable parent
          left = (isRTL ? scrollbarWidth : 0) + scrollParentEl.offsetLeft;
          width = scrollParentEl.offsetWidth - scrollbarWidth;
        }

        stickyEl.style.width = width + 'px';
        stickyEl.style.left = left + 'px';

        if (stickyEl.classList.contains('fixed')) {
          // Not need to align vertically since this footer is fixed
          return;
        }
        var style = getComputedStyle(scrollParentEl);
        if (
          scrollParentEl.offsetWidth < scrollParentEl.scrollWidth &&
          (style.overflow === 'auto' ||
            style.overflow === 'scroll' ||
            style.overflowX === 'auto' ||
            style.overflowX === 'scroll')
        ) {
          // There is a horizontal scroll bar
          stickyEl.style.top =
            scrollParentEl.offsetTop - scrollbarWidth + parentRect.height - stickyEl.offsetHeight + 'px';
        } else {
          // There is only a vertical scroll bar
          stickyEl.style.top = scrollParentEl.offsetTop + parentRect.height - stickyEl.offsetHeight + 'px';
        }

        if (placeholder) {
          placeholder.style.height = stickyEl.offsetHeight + 'px';
        }
      }
    }
    /**
     * A method/callback to check whether sticky footer should be displayed
     * @param {ScrollEvent} e
     */
    function checkAllocation(e) {
      var timeScrolled = performance.now();
      var dTime = timeScrolled - lastScrolled;
      var refEl = placeholder || el;
      var elRect = refEl.getBoundingClientRect();
      var parentRect;
      var showOnRefElementRect = showOnRefVisibleEl ? showOnRefVisibleEl.getBoundingClientRect() : null;
      var refElementInView = true;
      lastScrolled = timeScrolled;

      if (!stickyEl) {
        // This could happen when sticky footer is detroyed prior this this function call
        // so we don't need to check allocations
        return;
      }

      if (dTime > 500 || !e) {
        scrollParentEl = getScrollParent(refEl);
        viewSize = getViewSize();
      }
      if (scrollParentEl === document) {
        if (
          showOnRefElementRect &&
          (showOnRefElementRect.top + elRect.height > viewSize.height || showOnRefElementRect.bottom < 0)
        ) {
          // refElement is not visible in viewport
          refElementInView = false;
        }
        if (Math.floor(elRect.bottom) > viewSize.height && refElementInView) {
          if (!stickyEl.parentElement) {
            offsetParent = document.body;
            stickyEl.classList.add('fixed');
            offsetParent.appendChild(stickyEl);
            // Need directive to be able to receive focus
            placeholder = moveFooterToStikcy(el, stickyEl);
            placeholder.addEventListener('focus', onElFocus);
            // Align footer
            alignFooter();
          }
        } else if (stickyEl.parentElement) {
          stickyEl.parentElement.removeChild(stickyEl);
          restoreFooterFromSticky(el, stickyEl, placeholder);
          placeholder.removeEventListener('focus', onElFocus);
          placeholder = null;
        }
      } else if (!e || e.target === scrollParentEl) {
        parentRect = scrollParentEl.getBoundingClientRect();
        if (
          showOnRefElementRect &&
          (showOnRefElementRect.top + refEl.height > parentRect.bottom || showOnRefElementRect.bottom < parentRect.top)
        ) {
          // refElement is not visible in viewport
          refElementInView = false;
        }

        if (Math.floor(elRect.bottom) > parentRect.bottom && refElementInView) {
          if (!stickyEl.offsetParent) {
            // Append sticky
            var offsetParent = scrollParentEl.offsetParent;
            placeholder = moveFooterToStikcy(el, stickyEl);
            offsetParent.appendChild(stickyEl);
            // Need directive to be able to receive focus
            placeholder.addEventListener('focus', onElFocus);
          }
          // adjust the top
          alignFooter();
        } else {
          if (stickyEl.offsetParent) {
            stickyEl.parentElement.removeChild(stickyEl);
            stickyEl.style.top = '-1000px'; // just in case
            restoreFooterFromSticky(el, stickyEl, placeholder);
            placeholder.removeEventListener('focus', onElFocus);
            placeholder = null;
          }
        }
      }
    }
    /**
     * Tasks to perform when el is focused
     * @param {FocusEvent} e
     */
    function onElFocus(e) {
      var tabbables = bentoServices.findTabbable(stickyEl);
      if (tabbables.length) {
        timeout(function () {
          tabbables[0].focus();
        });
      }
    }
    /**
     * Used to catch Tab keys
     * @param {KeyboardEvent} e
     */
    function onStickyFooterKeydown(e) {
      // Tab: 9
      if (e.keyCode === 9) {
        var tabbables = bentoServices.findTabbable(stickyEl);
        if (e.target === tabbables[0] && e.shiftKey) {
          // focus back
          if (placeholder) {
            placeholder.marker.focus();
          }
        } else if (e.target === tabbables[tabbables.length - 1] && !e.shiftKey) {
          // focus forward
          if (placeholder) {
            placeholder.firstChild.focus();
          }
        }
      }
    }
  }
  /**
   * Move directive to the sticky footer
   * @param {HTMLElement} footer
   * @param {HTMLElement} sticky
   */
  function moveFooterToStikcy(footer, sticky) {
    var placeholder = document.createElement('div');
    var previousMarker = document.createElement('div');
    var attr = footer.attributes;
    var parent = footer.parentElement;
    placeholder.marker = previousMarker;
    previousMarker.className = 'bento-sticky-footer-previous-marker';
    previousMarker.setAttribute('tabindex', '-1');
    placeholder.className = 'bento-sticky-footer-placeholder';
    placeholder.setAttribute('tabindex', '0');
    placeholder.innerHTML = '<div tabindex="-1"></div>';
    // copy inner HTML
    parent.insertBefore(placeholder, footer);
    parent.insertBefore(previousMarker, placeholder);
    placeholder.style.height = footer.offsetHeight + 'px';
    sticky.innerHTML = '';
    sticky.appendChild(footer);
    return placeholder;
  }
  /**
   * Restore contents from sticky to footer
   * @param {HTMLElement} footer
   * @param {HTMLElement} sticky
   * @param {object} placeholder
   */
  function restoreFooterFromSticky(footer, sticky, placeholder) {
    var parent = placeholder.parentElement;
    placeholder.style.visibility = 'hidden';
    parent.insertBefore(footer, placeholder);
    parent.removeChild(placeholder);
    parent.removeChild(placeholder.marker);
  }
  /**
   * Get a parent that scrolls
   * This is we
   * @param {HTMLElement} el
   */
  function getScrollParent(el) {
    var parent = el.parentElement;
    while (parent) {
      if (parent.scrollHeight > parent.offsetHeight) {
        var style = getComputedStyle(parent);
        if (
          style.overflow === 'auto' ||
          style.overflowY === 'auto' ||
          style.overflow === 'scroll' ||
          style.overflowY === 'scroll'
        ) {
          return parent;
        }
      }
      parent = parent.parentElement;
    }
    return document;
  }
  /**
   * Get viewport size (aka window size)
   */
  function getViewSize() {
    return {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight,
    };
  }
})(angular);

(function (window, undefined) {
  'use strict';
  /**
   * 
   * @param {string} value Display value of the tile
   * @param {string} header Header text
   * @param {string} description Description text
   * @param {function} onTileSelect Expression when  this tile is selected with `BentoRibbonTile` as its first parameter
   * @param {string} linkTitle Text to the eyebrow link
   * @param {function} onLinkClick Expression when `linkTitle` is clicked
   * @param {string} indicator Define the type of the indicator from BentoRibbonTile['SUCCESS'|'INFO'|'DANGER'|'WARNING] (default: undefined)
   * @param {boolean} selected Determine if  this tile is preselected
   */
  function BentoRibbonTile(value, header, description, onTileSelect,
    linkTitle, onLinkClick, indicator, selected) {

    var tile = this;

    // Array<(tile: BentoRibbonTile) => void>
    tile._selectionCallbacks = [];
    //  Array<(tile: BentoRibbonTile) => void>
    tile._deselectionCallbacks = [];

    tile.value = value || '';
    tile.header = header || '';
    tile.description = description;
    tile._selectionCallbacks.push(onTileSelect || function () {});
    tile.linkTitle = linkTitle;
    tile.onLinkClick = onLinkClick || function () {};
    tile.indicator = indicator;
    tile._selected = selected;
    Object.defineProperty(tile, 'selected', {
      get: function () {
        return tile._selected;
      }
    });
  }

  /* Static definitions */
  BentoRibbonTile.SUCCESS = 'success';
  BentoRibbonTile.INFO = 'info';
  BentoRibbonTile.DANGER = 'danger';
  BentoRibbonTile.WARNING = 'warning';

  /**
   * Select the current tile
   */
  BentoRibbonTile.prototype.select = function () {
    this._selected = true;
    this._dispatchSelectionCallbacks();
  };

  /**
   * Deselect the current tile
   */
  BentoRibbonTile.prototype.deselect = function () {
    this._selected = false;
    this._dispatchDeselectionCallbacks();
  };

  /**
   * Add a selection callback.  The returned function is used to remove the current callback
   */
  BentoRibbonTile.prototype.addSelectionCallback = function (callback) {
    var tile = this;
    tile._selectionCallbacks.push(callback);
    return function () {
      // Callback to remove the assigned one
      var i = tile._selectionCallbacks.indexOf(callback);
      tile._selectionCallbacks.splice(i, 1);
    };
  };

  /**
   * Add a deselection callback.  The returned function is used to remove the current callback
   */
  BentoRibbonTile.prototype.addDeselectionCallback = function (callback) {
    var tile = this;
    tile._deselectionCallbacks.push(callback);
    return function () {
      // Callback to remove the assigned one
      var i = tile._deselectionCallbacks.indexOf(callback);
      tile._deselectionCallbacks.splice(i, 1);
    };
  };

  /**
   * Dispatch selection callbacks
   */
  BentoRibbonTile.prototype._dispatchSelectionCallbacks = function () {
    for (var i in this._selectionCallbacks) {
      if (typeof this._selectionCallbacks[i] === 'function') {
        this._selectionCallbacks[i](this);
      }
    }
  };

  /**
   * Dispatch deselection callbacks
   */
  BentoRibbonTile.prototype._dispatchDeselectionCallbacks = function () {
    for (var i in this._deselectionCallbacks) {
      if (typeof this._deselectionCallbacks[i] === 'function') {
        this._deselectionCallbacks[i](this);
      }
    }
  };

  // Make class global
  window.BentoRibbonTile = BentoRibbonTile;
})(window);

(function (angular, window, undefined) {
  'use strict';
  /**
   * Each tiles minimum width for calculation
   */
  var TILE_MIN_WIDTH = 260;
  /**
   * Arrow paddings together on both sides in default layout
   */
  var ARROW_PADDING = 40;

  BentoTileRibbonController.$inject = ['$scope', '$element',
    '$bentoTransition', '$bentoServices', 'splitterGroupNotification',
    '$timeout'
  ];

  function BentoTileRibbonController($scope, $element, $bentoTransition,
    $bentoServices, splitterGroupNotification, $timeout) {
    /**
     * Main component HTMLElement variable
     */
    var el = $element[0];
    var ctrl = this;
    var innerEl;
    var panelEl;
    var selectedTile;
    var isRTL = $bentoServices.isRTL();
    /**
     * Variable to keep previous check arrow timeout
     */
    var checkArrowTimeout;

    /**
     * Flag to determine if there is a transition in progress
     */
    var inTransition = false;
    /**
     * Keep track on the current item count
     */
    var itemCount = 0;

    /**
     * Flag to determine if the tile ribbon is hidden or not
     */
    ctrl.ribbonHidden = false;

    /**
     * Current item width
     */
    ctrl.itemWidth = ctrl.tileMinWidth || TILE_MIN_WIDTH;

    /**
     * Flag to determine if the left arrow is disabled
     */
    ctrl.disableLeftArrow = false;

    /**
     * Flag to determine if the right arrow is disabled
     */
    ctrl.disableRightArrow = false;

    ctrl.$onInit = function () {
      if (ctrl.showCollapseToggle == null) {
        ctrl.showCollapseToggle = true;
      }
    };

    ctrl.$postLink = function () {
      innerEl = el.querySelector('.bento-tile-ribbon-inner');
      panelEl = el.querySelector('.bento-tile-ribbon-panel');
      innerEl.style.marginBottom = -$bentoServices.getScrollbarWidth() +
        'px';

      innerEl.addEventListener('scroll', onInnerScroll);
      innerEl.addEventListener('wheel', function (e) {
        if (e.deltaX === 0) {
          // Only apply to vertical scroll events
          innerEl.scrollLeft = innerEl.scrollLeft + (isRTL ? -e.deltaY :
            e.deltaY);
          e.preventDefault();
        }
      });

      window.addEventListener('resize', alignItems);

      innerEl.style.opacity = 0;

      // Align at once
      alignItems(true);

      if (isRTL) {
        // Scroll to the right initially
        $timeout(function () {
          innerEl.scrollLeft = innerEl.scrollWidth - innerEl.offsetWidth;
        },200);
      }

    };

    ctrl.$doCheck = function () {
      if (innerEl && panelEl && ctrl.items && ctrl.items.length > 0 && ctrl
        .items.length !== itemCount) {
        // Item counts are not aligned
        itemCount = ctrl.items.length;
        alignItems();
      }
    };

    ctrl.$onDestroy = function () {
      window.removeEventListener('resize', alignItems);
    };

    /**
     * Toggle ribbon's visiblity.  Property `ribbonHidden` is used to determine ribbon's visiblity
     */
    ctrl.toggleVisibility = function () {
      ctrl.ribbonHidden = !ctrl.ribbonHidden;
      if (ctrl.ribbonHidden) {
        el.classList.add('bento-tile-ribbon-hidden');
      } else {
        el.classList.remove('bento-tile-ribbon-hidden');
      }
    };

    /**
     * Callback when an arrow is clicked
     */
    ctrl.onArrowClick = function (isRight) {
      //var children = panelEl.children;
      var scrollLeft = innerEl.scrollLeft;
      //var scrollRange = innerEl.scrollWidth - innerEl.offsetWidth;
      var itemWidth = ctrl.itemWidth;
      var scrollLeftIndex = isRight ? Math.round(scrollLeft / itemWidth) +
        1 : Math.round(scrollLeft / ctrl.itemWidth) - 1;

      scrollTo(Math.round(scrollLeftIndex * itemWidth));
    };

    /**
     * Callback when a tile is selected
     */
    ctrl.onTileSelect = function (tile) {
      if (selectedTile) {
        selectedTile.deselect();
      }
      selectedTile = tile;
    };

    function onInnerScroll(e) {
      clearTimeout(checkArrowTimeout);
      checkArrowTimeout = $timeout(function () {
          checkArrowStates();
        },
        500);
    }

    function scrollTo(scrollLeft) {
      if (scrollLeft >= 0) {
        // Cancel previous transition
        ctrl.previousTransition && ctrl.previousTransition();

        ctrl.previousTransition = $bentoTransition.go(
          innerEl.scrollLeft,
          scrollLeft,
          100,
          function (val) {
            innerEl.scrollLeft = val;
          },
          function () {
            inTransition = false;
          }
        );
      }
    }

    $scope.$watch(function () {
        return el.offsetWidth;
      },
      function (val) {
        if (val > (ctrl.tileMinWidth || TILE_MIN_WIDTH)) {
          innerEl.style.opacity = 1;
          alignItems();
        }
      });

    /**
     * Align tile items
     */
    function alignItems(noArrowClick) {
      var elWidth = el.offsetWidth;
      var tileMinWidth = ctrl.tileMinWidth || TILE_MIN_WIDTH;
      var hasScroll = tileMinWidth * itemCount > elWidth;
      var innerWidth = hasScroll ? (elWidth - (el.classList.contains('alt') ?
        ARROW_PADDING * 2 : ARROW_PADDING)) : elWidth;
      var numColumnsToFitInner = hasScroll ? Math.floor(innerWidth /
        tileMinWidth) : itemCount;
      var adjustedItemWidth = innerWidth / numColumnsToFitInner;
      var panelWidth = adjustedItemWidth * itemCount;
      panelEl.style.width = panelWidth + 'px';
      if (hasScroll) {
        el.classList.add('scroll');
      } else {
        el.classList.remove('scroll');
      }

      ctrl.itemWidth = adjustedItemWidth;
      checkArrowStates();

      // align the the left and right for RTL item
      if(!noArrowClick){
        ctrl.onArrowClick(isRTL);
      }
    }

    /**
     * Check current state to decide whether to enable or disable arrows
     */
    function checkArrowStates() {
      $timeout(function () {
        /* left arrow */
        ctrl.disableLeftArrow = innerEl.scrollLeft === 0;
        /* right arrow */
        ctrl.disableRightArrow = innerEl.scrollLeft === innerEl.scrollWidth -
          innerEl.offsetWidth;
      });
    }
  }

  angular.module('bento.tileribbon', [])
    /**
     * Bento Tile Ribbon Directive
     */
    .component('bentoTileRibbon', {
      templateUrl: '../templates/tile-ribbon/bento_tile_ribbon.html',
      bindings: {
        items: '<', // tile item array
        title: '<', // Title of ctrl component
        tileTemplate: '@', // used for custom tile templates
        showCollapseToggle: '<', // Show/Hide the collapse toggle 
        tileMinWidth: '<' // tileMinimum width
      },
      controller: BentoTileRibbonController
    });
})(angular, window);

(function (angular, window, undefined) {
  'use strict';
  BentoTileRibbonTileController.$inject = ['$compile', '$element', '$log',
    '$timeout', '$templateCache', '$scope'
  ];

  function BentoTileRibbonTileController($compile, $element, $log, $timeout,
    $templateCache, $scope) {
    var el = $element[0];
    var ctrl = this;
    ctrl.$postLink = function () {
      el.querySelector('.bento-ribbon-tile-inner').setAttribute('tabindex',
        '0');
      ctrl.onItemSelect = ctrl.onItemSelect.bind(ctrl);
      ctrl.removeSelectionCallback = ctrl.item.addSelectionCallback(ctrl.onItemSelect);
      ctrl.onItemDeselect = ctrl.onItemDeselect.bind(ctrl);
      ctrl.removeDeselectionCallback = ctrl.item.addDeselectionCallback(
        ctrl.onItemDeselect);

      if (ctrl.item.selected) {
        // Highlight if the item is pre-selected
        $timeout(function () {
          ctrl.onItemSelect(ctrl.item);
        });
      }

      // check custom template
      if (ctrl.template) {
        // Check template
        var template = $templateCache.get(ctrl.template);
        if (template) {
          // Will compile template with current local scope
          var $templateEl = angular.element(document.createElement('div'));
          $templateEl.html(template);
          $compile($templateEl)($scope);
          $element[0].querySelector('.bento-ribbon-tile-inner').appendChild($templateEl[0]);
        } else {
          $log.error('Bento Tile Ribbon: Template "' + ctrl.template +
            '" is undefined');
        }
      }
    };

    ctrl.$onInit = function () {};

    ctrl.$onChanges = function (changeObj) {
      if (changeObj.width) {
        el.style.width = changeObj.width.currentValue + 'px';
      }
    };

    ctrl.$onDestroy = function () {
      ctrl.removeSelectionCallback();
      ctrl.removeDeselectionCallback();
    };

    ctrl.onLinkClick = function (e) {
      if (ctrl.item.onLinkClick) {
        ctrl.item.onLinkClick(ctrl.item);
      }
      e.stopPropagation();
      e.preventDefault();
    };

    $element.on('click', function (e) {
      ctrl.item.select();
    });

    /**
     * Callback when an element is selected
     */
    ctrl.onItemSelect = function (item) {
      ctrl.selected = true;
      el.classList.add('selected');
      this.onSelect({
        tile: item
      });
    };

    /**
     * Callback when an element is selected
     */
    ctrl.onItemDeselect = function (item) {
      ctrl.selected = false;
      el.classList.remove('selected');
    };
  }
  angular.module('bento.tileribbon')
    /**
     * Bento Tile Ribbon Tile Directive
     */
    .component('bentoTileRibbonTile', {
      templateUrl: '../templates/tile-ribbon/bento_tile_ribbon_tile.html',
      bindings: {
        item: '<', // tile item
        width: '<', // tile width
        template: '<', // used for custom templates
        onSelect: '&', // callbacks when the tile is selected
      },
      controller: BentoTileRibbonTileController
    });
})(angular, window);

(function(window, angular, undefined) {
'use strict';

// Define bentoUI App object
angular.module('bento.smartbadge', ['bento.services'])
    .directive('bentoSmartBadge', BentoSmartBadge)
    .controller('bentoSmartBadgeController', BentoSmartBadgeController);

BentoSmartBadge.$inject = ['$compile', '$timeout'];
function BentoSmartBadge($compile, $timeout) {
  return {
    restrict: 'A',
    priority: 1200,
    scope: {},
    bindToController: {details: '<'},
    controller: 'bentoSmartBadgeController',
    controllerAs: 'vm'
  };
}

BentoSmartBadgeController.$inject =
    ['$scope', '$element', '$compile', '$timeout', '$bentoObservables'];
function BentoSmartBadgeController(
    $scope, $element, $compile, $timeout, $bentoObservables) {
  // to debounce resize event
  var resizeTimer;
  var badgeEl;
  var self = this;
  var hostElement = $element[0];

  this.badgeContent;
  this.badgeDynamicClass = 'hide';

  this.setBadge = function(badgeDetails) {
    if (!badgeDetails) {
      return;
    }

    self.badgeDynamicClass = 'bento-smart-badge';
    self.customStyle = '';

    if (badgeDetails.content && badgeDetails.type === 'icon') {
      self.badgeDynamicClass += ' ' +
          'bento-smart-badge-dot-with-icon';
      // make some icon specific tweaks
      switch (badgeDetails.content.value) {
        case 'bento-smart-icon-success':
          self.badgeDynamicClass += ' bento-smart-badge-success-icon';
          break;

        case 'bento-smart-icon-info':
          self.badgeDynamicClass += ' bento-smart-badge-info-icon';
          break;

        case 'bento-smart-icon-warning':
          self.badgeDynamicClass += ' bento-smart-badge-warning-icon';
          break;

        case 'bento-smart-icon-failure':
          self.badgeDynamicClass += ' bento-smart-badge-failure-icon';
          break;
      }
      self.badgeContent = '';
    } else if (badgeDetails.content && badgeDetails.type === 'digit') {
      self.badgeContent = badgeDetails.content.value + '';
      if (badgeDetails.content.value > 99) {
        self.badgeContent = 99 + '+';
      } else if (
          badgeDetails.content.value <= 0 || !badgeDetails.content.value) {
        self.badgeContent = '';
        self.badgeDynamicClass += ' ' +
            'hide';
      }

      if (badgeDetails.color && badgeDetails.color.length &&
          self.badgeContent.length) {
        self.badgeDynamicClass += ' ' + badgeDetails.color;
      }

      switch (self.badgeContent.length) {
        case 1:
          self.badgeDynamicClass += ' ' +
              'bento-smart-digit sm';
          break;

        case 2:
          self.badgeDynamicClass += ' ' +
              'bento-smart-digit md';
          break;

        case 3:
          self.badgeDynamicClass += ' ' +
              'bento-smart-digit lg';
          break;

        default:
          self.badgeDynamicClass += ' ' +
              'bento-smart-digit sm';
          break;
      }
    } else if (badgeDetails.type === 'dot') {
      self.badgeContent = '';
      self.badgeDynamicClass += ' ' +
          'bento-smart-badge-dot';

      if (badgeDetails.color && badgeDetails.color.length) {
        self.badgeDynamicClass += ' ' + badgeDetails.color;
      }
    }

    // customize as per the need
    if (badgeDetails.customParams) {
      if (badgeDetails.customParams.relativeElementSelector) {
        hostElement = document.querySelector(
            badgeDetails.customParams.relativeElementSelector);
      }
      if (badgeDetails.customParams.style) {
        self.customStyle = badgeDetails.customParams.style;
      }
      if (badgeDetails.customParams.width) {
        self.customStyle += 'width: ' + badgeDetails.customParams.width +
            'px; ' +
            'max-width: ' + badgeDetails.customParams.width + 'px;';
      }
      if (badgeDetails.customParams.height) {
        self.customStyle += 'height: ' + badgeDetails.customParams.height +
            'px; ' +
            'max-height: ' + badgeDetails.customParams.height + 'px;';
      }
    }
  };


  this.$onInit = function() {};

  this.$postLink = function() {
    if (this.badgeContent !== undefined) {
      // notice the use of {{vm.badgeDynamicClass}} - when observer class
      // calls `setBadge`, `this` context gets changed.
      badgeEl = angular.element(
          '<span class="{{vm.badgeDynamicClass}}" style="' + this.customStyle +
          '">{{vm.badgeContent}}</span>');
      $element.append($compile(badgeEl)($scope));
    } else {
      // remove the container for smart-badge
      var parentEl = $element.parent();
      if (parentEl && parentEl[0]) {
        parentEl[0].removeChild($element[0]);
      }
    }
  };

  this.$onChanges =
      function(changes) {
    // check if the function is defined or not, checking by
    // constructor.name doesn't work on minified code
    if (changes.details.currentValue &&
        typeof changes.details.currentValue.subscribe === 'function') {
      changes.details.currentValue.unsubscribe(this.setBadge);
      changes.details.currentValue.subscribe(this.setBadge);

      this.setBadge(changes.details.currentValue.data);
    } else {
      this.setBadge(changes.details.currentValue);
    }

    if ($element[0].hasAttribute('bento-smart-badge')) {
      var bsb = $element[0].querySelector('span.bento-smart-badge');
      if (bsb) {
        var newClassList;

        // removing the list this way keeps unit test case warning away
        // if you use bsb.classList = '';
        // unit test cases throw error saying
        // `TypeError: Attempted to assign to readonly property.`
        for (var i = bsb.classList.length; i > 0; i--) {
          bsb.classList.remove(bsb.classList[0]);
        }

        newClassList = this.badgeDynamicClass.split(' ');
        for (var i = 0; i < newClassList.length; i++) {
          bsb.classList.add(newClassList[i]);
        }
      }
    }
  }

      $scope.$on('$destroy', function() {
        if (self.details && self.details.unsubscribe === 'function') {
          self.details.unsubscribe(self.setBadge);
        }
      });
}
})(window, window.angular);
(function (window, angular, undefined) {

  "use strict";

  angular.module('bento.prevent.overflow.scroll', ['bento.services'])
    .directive('bentoPreventOverflowScroll', ['$bentoServices', '$timeout', function ($bentoServices, $timeout) {
      var mouseEnterFn;
      var mouseLeaveFn;
      var originalOverflow;
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          /**
           * Issue:
           * ------
           * When a tooltip/popover is appended to the body, it causes brower to 
           * flash/shake.
           * Every time the tooltip is shown, its appended to the body; causing body
           * to recalculate its position, which eventually shows up the scrollbars
           * and then hides it.
           * 
           * Fix:
           * ----
           * This directive hides body's scrollX during `mouseenter` and resets the
           * scrollX back to its original during `mouseleave`. This way the scrollbars
           * are hidden during recalculation process.
           */
  
          // do it only in RTL mode
          if ($bentoServices.isRTL()) {
            mouseEnterFn = element.on('mouseenter', function () {
              var body = document.getElementsByTagName('body')[0];
              originalOverflow = body.style.overflowX;
              body.style.overflowX = 'hidden';
            });
  
            mouseLeaveFn = element.on('mouseleave', function () {
              // timeout and give a delay - to avoid scroll flashing if hovered & left quickly
              $timeout(function() {
                var body = document.getElementsByTagName('body')[0];
                body.style.overflowX = originalOverflow;
              });
            });
    
            scope.$on('$destroy', function () {
              // clear all listeners
              if (mouseEnterFn) {
                element.off('mouseenter', mouseEnterFn);
              } else {
                element.off('mouseenter', mouseLeaveFn);
              }
            });
          }
        } //link
      }; //return
    }]); //preventOverflowScroll directive
})(window, window.angular);
(function(angular) {

'use strict';

var FOCUSED_CLASS = 'bui-focused';

BentoSkipLinksController.$inject = ['$bentoSkipLinks', '$element', '$location'];

/**
 * Controller designated to the Skip Link Component
 * It's Link object should be formatted as the following
 *
 * {
 *   anchor: string,        // ID of the element where the link skips to
 *   text: string,          // Text of the link that is used
 *   isHashAnchor: boolean  // (default: `false`) - Flag to decide whether using
 * an location hash `#` or directly focus
 * }
 */
function BentoSkipLinksController($bentoSkipLinks, $el, $location) {
  var ctrl = this;

  /**
   * Init
   */
  this.$onInit = function() {
    $bentoSkipLinks.register(ctrl);
    $el.on('focusin', function(e) {
      $el.addClass(FOCUSED_CLASS);
    });

    $el.on('focusout', function(e) {
      if (!$el[0].contains(document.activeElement)) {
        $el.removeClass(FOCUSED_CLASS);
      }
    });
  };

  /**
   * Destroy
   */
  this.$onDestroy = function() {
    $bentoSkipLinks.deregister(ctrl);
  };

  /**
   * Update links in this component
   */
  this.updateLinks = function(links) {
    ctrl.links = links;
  };

  /**
   * Callback to when a link is clicked
   */
  this.onLinkClick = function(e, link) {
    e.preventDefault();

    if (link.isHashAnchor) {
      // This is going to be a hash anchor using HTML5 anchorings using `id`
      // attribute
      var pathHash = $location.hash();
      var hashString = '#' + link.anchor;
      if (pathHash.substr(
              pathHash.length - hashString.length, hashString.length) !==
          hashString) {
        // Need make sure that if this hash has already been called
        // If so this is not going to fire again
        $location.hash(hashString);
      }
    } else {
      // Brinng focus to a HTMLElemenet defined by its CSS selector
      var anchorEl = document.getElementById(link.anchor);
      if (anchorEl) {
        anchorEl.focus();
      } else {
        /* istanbul ignore next */
        throw new Error(
            'Bento Skip Links: Cannot find element id="' + link.anchor +
            '" in viewport');
      }
    }
  };
}

angular.module('bento.skiplinks', [])
    .component('bentoSkipLinks', {
      templateUrl: '../templates/skip_links/bento-skip-links.html',
      controller: BentoSkipLinksController,
    })
    .factory('$bentoSkipLinks', function() {
      var skipLinksController;
      var skipLinks;

      var updateLinks = function(links) {
        skipLinks = links;
        if (skipLinksController) {
          skipLinksController.updateLinks(links);
        }
      };

      /**
       * Register Skip Links controller so we can use it to render links
       * @param {BentoSkipLinksController} comp
       */
      var register = function(comp) {
        if (!(comp instanceof BentoSkipLinksController)) {
          console.warn(
              'Bento Skip Links Service: Not registering. Only instance of `BentoSkipLinksController` can be registered.');
        } else if (skipLinksController) {
          console.warn(
              'Bento Skip Links Service: Component is already in your view.  Remove it before placing a new one in application\'s template.');
        } else {
          skipLinksController = comp;
          updateLinks(skipLinks || []);
        }
      };

      var deregister = function(comp) {
        if (comp === skipLinksController) {
          skipLinksController = null;
        } else {
          console.warn(
              'Bento Skip Links Service: Cannot deregister.  This controller has not been registered.');
        }
      };

      return {
        register: register,
        deregister: deregister,
        updateLinks: updateLinks,
      };
    });
})(window.angular);
