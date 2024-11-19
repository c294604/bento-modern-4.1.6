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
    "<div class=\"bento-combobox bento-select form-control\" aria-expanded=\"{{isContainerVisible}}\"\n" +
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
    "           aria-label=\"{{'BENTO_UI_MULTISELECT_OVERLAY_SEARCH_LABEL' | bentoTranslate}} {{filteredItems.length}} Items\"\n" +
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
    "  <h3 class=\"panel-title\">\n" +
    "    <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle><i ng-class=\"isOpen === true ? 'bento-icon-minus-plain' : 'bento-icon-plus-plain'\" ></i><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "  </h3>\n" +
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
