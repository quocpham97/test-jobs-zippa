module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test/jobs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CustomizedButton.js":
/*!****************************************!*\
  !*** ./components/CustomizedButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\ReactJS\\test-jobs-zippa\\components\\CustomizedButton.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  margin: {
    margin: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(1)
    }
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  palette: {
    primary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__["green"][100]
    },
    secondary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__["green"][900]
    }
  }
});
function CustomizedButton(props) {
  const classes = useStyles();
  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClick = () => {
    props.handleButtonChange(!state);
    setstate(!state);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: theme,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        variant: "contained",
        color: state ? "secondary" : "primary",
        className: classes.margin,
        onClick: handleClick,
        children: "Last 7 days"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CustomizedNativeSelect.js":
/*!**********************************************!*\
  !*** ./components/CustomizedNativeSelect.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedNativeSelect; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\ReactJS\\test-jobs-zippa\\components\\CustomizedNativeSelect.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  formControl: {
    margin: theme.spacing(3),
    // Responsive
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(1),
      with: 200
    },
    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(2),
      with: 300
    },
    [theme.breakpoints.only("md")]: {
      margin: theme.spacing(3),
      width: 350
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
function CustomizedNativeSelect(props) {
  const classes = useStyles();

  const handleChange = event => {
    props.handleCompanyChange(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "outlined",
      className: classes.formControl,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
        htmlFor: "outlined-age-native-simple",
        children: "Company Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
        native: true,
        onChange: handleChange,
        label: "Company Name",
        inputProps: {
          name: "companyName",
          id: "outlined-age-native-simple"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          "aria-label": "None",
          value: "first10jobs",
          children: "First 10 jobs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), props.companyNames.map(companyName => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: companyName,
          children: companyName
        }, companyName, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/FilterJob.js":
/*!*********************************!*\
  !*** ./components/FilterJob.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomizedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomizedButton */ "./components/CustomizedButton.js");
/* harmony import */ var _CustomizedNativeSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomizedNativeSelect */ "./components/CustomizedNativeSelect.js");
/* harmony import */ var _FilterJob_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterJob.module.css */ "./components/FilterJob.module.css");
/* harmony import */ var _FilterJob_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterJob_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\ReactJS\\test-jobs-zippa\\components\\FilterJob.js";





function FilterJob(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _FilterJob_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.filterJobContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomizedNativeSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      companyNames: props.companyNames,
      handleCompanyChange: props.handleCompanyChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomizedButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleButtonChange: props.handleButtonChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FilterJob);

/***/ }),

/***/ "./components/FilterJob.module.css":
/*!*****************************************!*\
  !*** ./components/FilterJob.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filterJobContainer": "FilterJob_filterJobContainer__3Xf1r"
};


/***/ }),

/***/ "./components/Job.js":
/*!***************************!*\
  !*** ./components/Job.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobCard */ "./components/JobCard.js");
/* harmony import */ var _FilterJob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterJob */ "./components/FilterJob.js");
/* harmony import */ var _Job_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Job.module.css */ "./components/Job.module.css");
/* harmony import */ var _Job_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Job_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\ReactJS\\test-jobs-zippa\\components\\Job.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Job() {
  // Store all jobs get from api
  const {
    0: jobs,
    1: setJobs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // Store first 10 jobs

  const {
    0: tenJobs,
    1: setTenJobs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // Store company name list

  const {
    0: companyNames,
    1: setCompanyNames
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: companyName,
    1: setCompanyName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("first10jobs");
  const {
    0: isSevenLastDays,
    1: setIsSevenLastdays
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Get jobs from api

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://www.zippia.com/api/jobs/", {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: []
    }).then(result => {
      setJobs(result.data.jobs);
      setTenJobs(result.data.jobs.slice(0, 10));
      setCompanyNames(result.data.jobs.map(filter => filter.companyName) // Filter only company name from data
      .filter(function (value, index, self) {
        // Make sure company name not duplicate
        return self.indexOf(value) === index;
      }));
    });
  }, []);

  function handleCompanyChange(companyName) {
    setCompanyName(companyName);

    if (!isSevenLastDays) {
      if (companyName === "first10jobs") setTenJobs(jobs.slice(0, 10));else {
        setTenJobs( // Filter jobs by company name
        jobs.filter(function (company) {
          return company.companyName === companyName;
        }));
      }
    } else {
      if (companyName === "first10jobs") {
        setTenJobs(jobs.filter(function (company) {
          var d = new Date(); // Filter 10 jobs in last 7 days

          return Date.parse(company.OBJpostingDate) >= d.setDate(d.getDate() - 7);
        }).slice(0, 10));
      } else {
        setTenJobs( // Filter jobs by company name
        jobs.filter(function (company) {
          var d = new Date();
          return company.companyName === companyName && Date.parse(company.OBJpostingDate) >= d.setDate(d.getDate() - 7);
        }));
      }
    }
  }

  function handleButtonChange(flag) {
    setIsSevenLastdays(flag);
  } // Call handleCompanyChange whenever isSevenLastDays change


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleCompanyChange(companyName); // eslint-disable-next-line
  }, [isSevenLastDays]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_FilterJob__WEBPACK_IMPORTED_MODULE_4__["default"], {
      companyNames: companyNames,
      handleCompanyChange: handleCompanyChange,
      handleButtonChange: handleButtonChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Job_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.jobcardContainer,
      children: tenJobs.map(job => /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, job), {}, {
        key: job.jobId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        },
        __self: this
      })))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ }),

/***/ "./components/Job.module.css":
/*!***********************************!*\
  !*** ./components/Job.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"jobcardContainer": "Job_jobcardContainer__orfVM"
};


/***/ }),

/***/ "./components/JobCard.js":
/*!*******************************!*\
  !*** ./components/JobCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "D:\\ReactJS\\test-jobs-zippa\\components\\JobCard.js";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    maxWidth: 300,
    margin: 10,
    "&:hover": {
      background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["grey"][200]
    },
    minHeight: 100
  },
  cardHeader: {
    minHeight: 80,
    alignItems: "flex-start"
  }
}));
function JobCard(props) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    variant: "outlined",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default.a, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "rounded",
        "aria-label": "description",
        src: props.companyLogo,
        children: props.companyLogo === undefined ? props.companyInitial : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this),
      title: props.companyName,
      subheader: props.jobTitle,
      titleTypographyProps: {
        variant: "body1"
      },
      className: classes.cardHeader
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
        variant: "body2",
        color: "textSecondary",
        component: "p",
        paragraph: true,
        children: props.shortDesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/test/jobs.js":
/*!****************************!*\
  !*** ./pages/test/jobs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Job */ "./components/Job.js");

var _jsxFileName = "D:\\ReactJS\\test-jobs-zippa\\pages\\test\\jobs.js";



class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Job__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21pemVkQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9taXplZE5hdGl2ZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlckpvYi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlckpvYi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSm9iLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSm9iLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Kb2JDYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Rlc3Qvam9icy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJvbmx5IiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJncmVlbiIsInNlY29uZGFyeSIsIkN1c3RvbWl6ZWRCdXR0b24iLCJwcm9wcyIsImNsYXNzZXMiLCJzdGF0ZSIsInNldHN0YXRlIiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsImhhbmRsZUJ1dHRvbkNoYW5nZSIsImZvcm1Db250cm9sIiwid2l0aCIsIndpZHRoIiwic2VsZWN0RW1wdHkiLCJtYXJnaW5Ub3AiLCJDdXN0b21pemVkTmF0aXZlU2VsZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJoYW5kbGVDb21wYW55Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaWQiLCJjb21wYW55TmFtZXMiLCJtYXAiLCJjb21wYW55TmFtZSIsIkZpbHRlckpvYiIsInN0eWxlcyIsImZpbHRlckpvYkNvbnRhaW5lciIsIkpvYiIsImpvYnMiLCJzZXRKb2JzIiwidGVuSm9icyIsInNldFRlbkpvYnMiLCJzZXRDb21wYW55TmFtZXMiLCJzZXRDb21wYW55TmFtZSIsImlzU2V2ZW5MYXN0RGF5cyIsInNldElzU2V2ZW5MYXN0ZGF5cyIsInVzZUVmZmVjdCIsImF4aW9zIiwicG9zdCIsImNvbXBhbnlTa2lsbHMiLCJkaXNtaXNzZWRMaXN0aW5nSGFzaGVzIiwiZmV0Y2hKb2JEZXNjIiwiam9iVGl0bGUiLCJsb2NhdGlvbnMiLCJudW1Kb2JzIiwicHJldmlvdXNMaXN0aW5nSGFzaGVzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJzbGljZSIsImZpbHRlciIsImluZGV4Iiwic2VsZiIsImluZGV4T2YiLCJjb21wYW55IiwiZCIsIkRhdGUiLCJwYXJzZSIsIk9CSnBvc3RpbmdEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJmbGFnIiwiam9iY2FyZENvbnRhaW5lciIsImpvYiIsImpvYklkIiwicm9vdCIsIm1heFdpZHRoIiwiYmFja2dyb3VuZCIsImdyZXkiLCJtaW5IZWlnaHQiLCJjYXJkSGVhZGVyIiwiYWxpZ25JdGVtcyIsIkpvYkNhcmQiLCJjb21wYW55TG9nbyIsInVuZGVmaW5lZCIsImNvbXBhbnlJbml0aWFsIiwidmFyaWFudCIsInNob3J0RGVzYyIsIkhvbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFD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Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Rlc3Qvam9icy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdGVzdC9qb2JzLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgZ3JlZW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBtYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KFwieHNcIildOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBncmVlblsxMDBdXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IGdyZWVuWzkwMF1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZEJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5oYW5kbGVCdXR0b25DaGFuZ2UoIXN0YXRlKTtcclxuICAgIHNldHN0YXRlKCFzdGF0ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPXtzdGF0ZSA/IFwic2Vjb25kYXJ5XCIgOiBcInByaW1hcnlcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMYXN0IDcgZGF5c1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seShcInhzXCIpXToge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpdGg6IDIwMFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgd2l0aDogMzAwXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoXCJtZFwiKV06IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB3aWR0aDogMzUwXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZWxlY3RFbXB0eToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkTmF0aXZlU2VsZWN0KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHByb3BzLmhhbmRsZUNvbXBhbnlDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIm91dGxpbmVkLWFnZS1uYXRpdmUtc2ltcGxlXCI+Q29tcGFueSBOYW1lPC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG5hdGl2ZVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGxhYmVsPVwiQ29tcGFueSBOYW1lXCJcclxuICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmFtZTogXCJjb21wYW55TmFtZVwiLFxyXG4gICAgICAgICAgICBpZDogXCJvdXRsaW5lZC1hZ2UtbmF0aXZlLXNpbXBsZVwiXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cImZpcnN0MTBqb2JzXCI+XHJcbiAgICAgICAgICAgIEZpcnN0IDEwIGpvYnNcclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAge3Byb3BzLmNvbXBhbnlOYW1lcy5tYXAoKGNvbXBhbnlOYW1lKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NvbXBhbnlOYW1lfSBrZXk9e2NvbXBhbnlOYW1lfT5cclxuICAgICAgICAgICAgICB7Y29tcGFueU5hbWV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbWl6ZWRCdXR0b24gZnJvbSBcIi4vQ3VzdG9taXplZEJ1dHRvblwiO1xyXG5pbXBvcnQgQ3VzdG9taXplZE5hdGl2ZVNlbGVjdCBmcm9tIFwiLi9DdXN0b21pemVkTmF0aXZlU2VsZWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVySm9iLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEZpbHRlckpvYihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckpvYkNvbnRhaW5lcn0+XHJcbiAgICAgIDxDdXN0b21pemVkTmF0aXZlU2VsZWN0XHJcbiAgICAgICAgY29tcGFueU5hbWVzPXtwcm9wcy5jb21wYW55TmFtZXN9XHJcbiAgICAgICAgaGFuZGxlQ29tcGFueUNoYW5nZT17cHJvcHMuaGFuZGxlQ29tcGFueUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPEN1c3RvbWl6ZWRCdXR0b24gaGFuZGxlQnV0dG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVCdXR0b25DaGFuZ2V9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJKb2I7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpbHRlckpvYkNvbnRhaW5lclwiOiBcIkZpbHRlckpvYl9maWx0ZXJKb2JDb250YWluZXJfXzNYZjFyXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBKb2JDYXJkIGZyb20gXCIuL0pvYkNhcmRcIjtcclxuaW1wb3J0IEZpbHRlckpvYiBmcm9tIFwiLi9GaWx0ZXJKb2JcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Kb2IubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gSm9iKCkge1xyXG4gIC8vIFN0b3JlIGFsbCBqb2JzIGdldCBmcm9tIGFwaVxyXG4gIGNvbnN0IFtqb2JzLCBzZXRKb2JzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gU3RvcmUgZmlyc3QgMTAgam9ic1xyXG4gIGNvbnN0IFt0ZW5Kb2JzLCBzZXRUZW5Kb2JzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gU3RvcmUgY29tcGFueSBuYW1lIGxpc3RcclxuICBjb25zdCBbY29tcGFueU5hbWVzLCBzZXRDb21wYW55TmFtZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY29tcGFueU5hbWUsIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKFwiZmlyc3QxMGpvYnNcIik7XHJcbiAgY29uc3QgW2lzU2V2ZW5MYXN0RGF5cywgc2V0SXNTZXZlbkxhc3RkYXlzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gR2V0IGpvYnMgZnJvbSBhcGlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXCJodHRwczovL3d3dy56aXBwaWEuY29tL2FwaS9qb2JzL1wiLCB7XHJcbiAgICAgICAgY29tcGFueVNraWxsczogdHJ1ZSxcclxuICAgICAgICBkaXNtaXNzZWRMaXN0aW5nSGFzaGVzOiBbXSxcclxuICAgICAgICBmZXRjaEpvYkRlc2M6IHRydWUsXHJcbiAgICAgICAgam9iVGl0bGU6IFwiQnVzaW5lc3MgQW5hbHlzdFwiLFxyXG4gICAgICAgIGxvY2F0aW9uczogW10sXHJcbiAgICAgICAgbnVtSm9iczogMjAsXHJcbiAgICAgICAgcHJldmlvdXNMaXN0aW5nSGFzaGVzOiBbXVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgc2V0Sm9icyhyZXN1bHQuZGF0YS5qb2JzKTtcclxuICAgICAgICBzZXRUZW5Kb2JzKHJlc3VsdC5kYXRhLmpvYnMuc2xpY2UoMCwgMTApKTtcclxuICAgICAgICBzZXRDb21wYW55TmFtZXMoXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS5qb2JzXHJcbiAgICAgICAgICAgIC5tYXAoKGZpbHRlcikgPT4gZmlsdGVyLmNvbXBhbnlOYW1lKSAvLyBGaWx0ZXIgb25seSBjb21wYW55IG5hbWUgZnJvbSBkYXRhXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBjb21wYW55IG5hbWUgbm90IGR1cGxpY2F0ZVxyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbXBhbnlDaGFuZ2UoY29tcGFueU5hbWUpIHtcclxuICAgIHNldENvbXBhbnlOYW1lKGNvbXBhbnlOYW1lKTtcclxuICAgIGlmICghaXNTZXZlbkxhc3REYXlzKSB7XHJcbiAgICAgIGlmIChjb21wYW55TmFtZSA9PT0gXCJmaXJzdDEwam9ic1wiKSBzZXRUZW5Kb2JzKGpvYnMuc2xpY2UoMCwgMTApKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgc2V0VGVuSm9icyhcclxuICAgICAgICAgIC8vIEZpbHRlciBqb2JzIGJ5IGNvbXBhbnkgbmFtZVxyXG4gICAgICAgICAgam9icy5maWx0ZXIoZnVuY3Rpb24gKGNvbXBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhbnkuY29tcGFueU5hbWUgPT09IGNvbXBhbnlOYW1lO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY29tcGFueU5hbWUgPT09IFwiZmlyc3QxMGpvYnNcIikge1xyXG4gICAgICAgIHNldFRlbkpvYnMoXHJcbiAgICAgICAgICBqb2JzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGNvbXBhbnkpIHtcclxuICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgLy8gRmlsdGVyIDEwIGpvYnMgaW4gbGFzdCA3IGRheXNcclxuICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShjb21wYW55Lk9CSnBvc3RpbmdEYXRlKSA+PSBkLnNldERhdGUoZC5nZXREYXRlKCkgLSA3KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGVuSm9icyhcclxuICAgICAgICAgIC8vIEZpbHRlciBqb2JzIGJ5IGNvbXBhbnkgbmFtZVxyXG4gICAgICAgICAgam9icy5maWx0ZXIoZnVuY3Rpb24gKGNvbXBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIGNvbXBhbnkuY29tcGFueU5hbWUgPT09IGNvbXBhbnlOYW1lICYmXHJcbiAgICAgICAgICAgICAgRGF0ZS5wYXJzZShjb21wYW55Lk9CSnBvc3RpbmdEYXRlKSA+PSBkLnNldERhdGUoZC5nZXREYXRlKCkgLSA3KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DaGFuZ2UoZmxhZykge1xyXG4gICAgc2V0SXNTZXZlbkxhc3RkYXlzKGZsYWcpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCBoYW5kbGVDb21wYW55Q2hhbmdlIHdoZW5ldmVyIGlzU2V2ZW5MYXN0RGF5cyBjaGFuZ2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaGFuZGxlQ29tcGFueUNoYW5nZShjb21wYW55TmFtZSk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICB9LCBbaXNTZXZlbkxhc3REYXlzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8RmlsdGVySm9iXHJcbiAgICAgICAgY29tcGFueU5hbWVzPXtjb21wYW55TmFtZXN9XHJcbiAgICAgICAgaGFuZGxlQ29tcGFueUNoYW5nZT17aGFuZGxlQ29tcGFueUNoYW5nZX1cclxuICAgICAgICBoYW5kbGVCdXR0b25DaGFuZ2U9e2hhbmRsZUJ1dHRvbkNoYW5nZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuam9iY2FyZENvbnRhaW5lcn0+XHJcbiAgICAgICAge3RlbkpvYnMubWFwKChqb2IpID0+IChcclxuICAgICAgICAgIDxKb2JDYXJkIHsuLi5qb2J9IGtleT17am9iLmpvYklkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvYjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiam9iY2FyZENvbnRhaW5lclwiOiBcIkpvYl9qb2JjYXJkQ29udGFpbmVyX19vcmZWTVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBncmV5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IDMwMCxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmV5WzIwMF1cclxuICAgIH0sXHJcbiAgICBtaW5IZWlnaHQ6IDEwMFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlcjoge1xyXG4gICAgbWluSGVpZ2h0OiA4MCxcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2JDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgIDxBdmF0YXIgdmFyaWFudD1cInJvdW5kZWRcIiBhcmlhLWxhYmVsPVwiZGVzY3JpcHRpb25cIiBzcmM9e3Byb3BzLmNvbXBhbnlMb2dvfT5cclxuICAgICAgICAgICAge3Byb3BzLmNvbXBhbnlMb2dvID09PSB1bmRlZmluZWQgPyBwcm9wcy5jb21wYW55SW5pdGlhbCA6IG51bGx9XHJcbiAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLmNvbXBhbnlOYW1lfVxyXG4gICAgICAgIHN1YmhlYWRlcj17cHJvcHMuam9iVGl0bGV9XHJcbiAgICAgICAgdGl0bGVUeXBvZ3JhcGh5UHJvcHM9e3sgdmFyaWFudDogXCJib2R5MVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRIZWFkZXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCIgcGFyYWdyYXBoPlxyXG4gICAgICAgICAge3Byb3BzLnNob3J0RGVzY31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBKb2IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSm9iXCI7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxKb2IgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9