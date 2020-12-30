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
    props.onChange(event.target.value);
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
      onChange: props.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomizedButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleButtonChange: props.handleButtonChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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
      onChange: handleCompanyChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21pemVkQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9taXplZE5hdGl2ZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlckpvYi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlckpvYi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSm9iLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSm9iLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Kb2JDYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Rlc3Qvam9icy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJvbmx5IiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJncmVlbiIsInNlY29uZGFyeSIsIkN1c3RvbWl6ZWRCdXR0b24iLCJwcm9wcyIsImNsYXNzZXMiLCJzdGF0ZSIsInNldHN0YXRlIiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsImhhbmRsZUJ1dHRvbkNoYW5nZSIsImZvcm1Db250cm9sIiwid2l0aCIsIndpZHRoIiwic2VsZWN0RW1wdHkiLCJtYXJnaW5Ub3AiLCJDdXN0b21pemVkTmF0aXZlU2VsZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsImlkIiwiY29tcGFueU5hbWVzIiwibWFwIiwiY29tcGFueU5hbWUiLCJGaWx0ZXJKb2IiLCJzdHlsZXMiLCJmaWx0ZXJKb2JDb250YWluZXIiLCJKb2IiLCJqb2JzIiwic2V0Sm9icyIsInRlbkpvYnMiLCJzZXRUZW5Kb2JzIiwic2V0Q29tcGFueU5hbWVzIiwic2V0Q29tcGFueU5hbWUiLCJpc1NldmVuTGFzdERheXMiLCJzZXRJc1NldmVuTGFzdGRheXMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInBvc3QiLCJjb21wYW55U2tpbGxzIiwiZGlzbWlzc2VkTGlzdGluZ0hhc2hlcyIsImZldGNoSm9iRGVzYyIsImpvYlRpdGxlIiwibG9jYXRpb25zIiwibnVtSm9icyIsInByZXZpb3VzTGlzdGluZ0hhc2hlcyIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwic2xpY2UiLCJmaWx0ZXIiLCJpbmRleCIsInNlbGYiLCJpbmRleE9mIiwiaGFuZGxlQ29tcGFueUNoYW5nZSIsImNvbXBhbnkiLCJkIiwiRGF0ZSIsInBhcnNlIiwiT0JKcG9zdGluZ0RhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZsYWciLCJqb2JjYXJkQ29udGFpbmVyIiwiam9iIiwiam9iSWQiLCJyb290IiwibWF4V2lkdGgiLCJiYWNrZ3JvdW5kIiwiZ3JleSIsIm1pbkhlaWdodCIsImNhcmRIZWFkZXIiLCJhbGlnbkl0ZW1zIiwiSm9iQ2FyZCIsImNvbXBhbnlMb2dvIiwidW5kZWZpbmVkIiwiY29tcGFueUluaXRpYWwiLCJ2YXJpYW50Iiwic2hvcnREZXNjIiwiSG9tZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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QUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvdGVzdC9qb2JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy90ZXN0L2pvYnMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIG1ha2VTdHlsZXMsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBncmVlbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoXCJ4c1wiKV06IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IGdyZWVuWzEwMF1cclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogZ3JlZW5bOTAwXVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkQnV0dG9uKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHByb3BzLmhhbmRsZUJ1dHRvbkNoYW5nZSghc3RhdGUpO1xyXG4gICAgc2V0c3RhdGUoIXN0YXRlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9e3N0YXRlID8gXCJzZWNvbmRhcnlcIiA6IFwicHJpbWFyeVwifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExhc3QgNyBkYXlzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KFwieHNcIildOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2l0aDogMjAwXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICB3aXRoOiAzMDBcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seShcIm1kXCIpXToge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiAzNTBcclxuICAgIH1cclxuICB9LFxyXG4gIHNlbGVjdEVtcHR5OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMilcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWROYXRpdmVTZWxlY3QocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIm91dGxpbmVkLWFnZS1uYXRpdmUtc2ltcGxlXCI+Q29tcGFueSBOYW1lPC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG5hdGl2ZVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGxhYmVsPVwiQ29tcGFueSBOYW1lXCJcclxuICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmFtZTogXCJjb21wYW55TmFtZVwiLFxyXG4gICAgICAgICAgICBpZDogXCJvdXRsaW5lZC1hZ2UtbmF0aXZlLXNpbXBsZVwiXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cImZpcnN0MTBqb2JzXCI+XHJcbiAgICAgICAgICAgIEZpcnN0IDEwIGpvYnNcclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAge3Byb3BzLmNvbXBhbnlOYW1lcy5tYXAoKGNvbXBhbnlOYW1lKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NvbXBhbnlOYW1lfSBrZXk9e2NvbXBhbnlOYW1lfT5cclxuICAgICAgICAgICAgICB7Y29tcGFueU5hbWV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbWl6ZWRCdXR0b24gZnJvbSBcIi4vQ3VzdG9taXplZEJ1dHRvblwiO1xyXG5pbXBvcnQgQ3VzdG9taXplZE5hdGl2ZVNlbGVjdCBmcm9tIFwiLi9DdXN0b21pemVkTmF0aXZlU2VsZWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVySm9iLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEZpbHRlckpvYihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckpvYkNvbnRhaW5lcn0+XHJcbiAgICAgIDxDdXN0b21pemVkTmF0aXZlU2VsZWN0IGNvbXBhbnlOYW1lcz17cHJvcHMuY29tcGFueU5hbWVzfSBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgIDxDdXN0b21pemVkQnV0dG9uIGhhbmRsZUJ1dHRvbkNoYW5nZT17cHJvcHMuaGFuZGxlQnV0dG9uQ2hhbmdlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVySm9iO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaWx0ZXJKb2JDb250YWluZXJcIjogXCJGaWx0ZXJKb2JfZmlsdGVySm9iQ29udGFpbmVyX18zWGYxclwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSm9iQ2FyZCBmcm9tIFwiLi9Kb2JDYXJkXCI7XHJcbmltcG9ydCBGaWx0ZXJKb2IgZnJvbSBcIi4vRmlsdGVySm9iXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSm9iLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEpvYigpIHtcclxuICAvLyBTdG9yZSBhbGwgam9icyBnZXQgZnJvbSBhcGlcclxuICBjb25zdCBbam9icywgc2V0Sm9ic10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIFN0b3JlIGZpcnN0IDEwIGpvYnNcclxuICBjb25zdCBbdGVuSm9icywgc2V0VGVuSm9ic10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIFN0b3JlIGNvbXBhbnkgbmFtZSBsaXN0XHJcbiAgY29uc3QgW2NvbXBhbnlOYW1lcywgc2V0Q29tcGFueU5hbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2NvbXBhbnlOYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZShcImZpcnN0MTBqb2JzXCIpO1xyXG4gIGNvbnN0IFtpc1NldmVuTGFzdERheXMsIHNldElzU2V2ZW5MYXN0ZGF5c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIEdldCBqb2JzIGZyb20gYXBpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cHM6Ly93d3cuemlwcGlhLmNvbS9hcGkvam9icy9cIiwge1xyXG4gICAgICAgIGNvbXBhbnlTa2lsbHM6IHRydWUsXHJcbiAgICAgICAgZGlzbWlzc2VkTGlzdGluZ0hhc2hlczogW10sXHJcbiAgICAgICAgZmV0Y2hKb2JEZXNjOiB0cnVlLFxyXG4gICAgICAgIGpvYlRpdGxlOiBcIkJ1c2luZXNzIEFuYWx5c3RcIixcclxuICAgICAgICBsb2NhdGlvbnM6IFtdLFxyXG4gICAgICAgIG51bUpvYnM6IDIwLFxyXG4gICAgICAgIHByZXZpb3VzTGlzdGluZ0hhc2hlczogW11cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHNldEpvYnMocmVzdWx0LmRhdGEuam9icyk7XHJcbiAgICAgICAgc2V0VGVuSm9icyhyZXN1bHQuZGF0YS5qb2JzLnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgICAgc2V0Q29tcGFueU5hbWVzKFxyXG4gICAgICAgICAgcmVzdWx0LmRhdGEuam9ic1xyXG4gICAgICAgICAgICAubWFwKChmaWx0ZXIpID0+IGZpbHRlci5jb21wYW55TmFtZSkgLy8gRmlsdGVyIG9ubHkgY29tcGFueSBuYW1lIGZyb20gZGF0YVxyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgY29tcGFueSBuYW1lIG5vdCBkdXBsaWNhdGVcclxuICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb21wYW55Q2hhbmdlKGNvbXBhbnlOYW1lKSB7XHJcbiAgICBzZXRDb21wYW55TmFtZShjb21wYW55TmFtZSk7XHJcbiAgICBpZiAoIWlzU2V2ZW5MYXN0RGF5cykge1xyXG4gICAgICBpZiAoY29tcGFueU5hbWUgPT09IFwiZmlyc3QxMGpvYnNcIikgc2V0VGVuSm9icyhqb2JzLnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNldFRlbkpvYnMoXHJcbiAgICAgICAgICAvLyBGaWx0ZXIgam9icyBieSBjb21wYW55IG5hbWVcclxuICAgICAgICAgIGpvYnMuZmlsdGVyKGZ1bmN0aW9uIChjb21wYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYW55LmNvbXBhbnlOYW1lID09PSBjb21wYW55TmFtZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNvbXBhbnlOYW1lID09PSBcImZpcnN0MTBqb2JzXCIpIHtcclxuICAgICAgICBzZXRUZW5Kb2JzKFxyXG4gICAgICAgICAgam9ic1xyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjb21wYW55KSB7XHJcbiAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgIC8vIEZpbHRlciAxMCBqb2JzIGluIGxhc3QgNyBkYXlzXHJcbiAgICAgICAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoY29tcGFueS5PQkpwb3N0aW5nRGF0ZSkgPj0gZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gNyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zbGljZSgwLCAxMClcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRlbkpvYnMoXHJcbiAgICAgICAgICAvLyBGaWx0ZXIgam9icyBieSBjb21wYW55IG5hbWVcclxuICAgICAgICAgIGpvYnMuZmlsdGVyKGZ1bmN0aW9uIChjb21wYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICBjb21wYW55LmNvbXBhbnlOYW1lID09PSBjb21wYW55TmFtZSAmJlxyXG4gICAgICAgICAgICAgIERhdGUucGFyc2UoY29tcGFueS5PQkpwb3N0aW5nRGF0ZSkgPj0gZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gNylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2hhbmdlKGZsYWcpIHtcclxuICAgIHNldElzU2V2ZW5MYXN0ZGF5cyhmbGFnKTtcclxuICB9XHJcblxyXG4gIC8vIENhbGwgaGFuZGxlQ29tcGFueUNoYW5nZSB3aGVuZXZlciBpc1NldmVuTGFzdERheXMgY2hhbmdlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZUNvbXBhbnlDaGFuZ2UoY29tcGFueU5hbWUpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgfSwgW2lzU2V2ZW5MYXN0RGF5c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZpbHRlckpvYlxyXG4gICAgICAgIGNvbXBhbnlOYW1lcz17Y29tcGFueU5hbWVzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb21wYW55Q2hhbmdlfVxyXG4gICAgICAgIGhhbmRsZUJ1dHRvbkNoYW5nZT17aGFuZGxlQnV0dG9uQ2hhbmdlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qb2JjYXJkQ29udGFpbmVyfT5cclxuICAgICAgICB7dGVuSm9icy5tYXAoKGpvYikgPT4gKFxyXG4gICAgICAgICAgPEpvYkNhcmQgey4uLmpvYn0ga2V5PXtqb2Iuam9iSWR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9iO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJqb2JjYXJkQ29udGFpbmVyXCI6IFwiSm9iX2pvYmNhcmRDb250YWluZXJfX29yZlZNXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IGdyZXkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMzAwLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGdyZXlbMjAwXVxyXG4gICAgfSxcclxuICAgIG1pbkhlaWdodDogMTAwXHJcbiAgfSxcclxuICBjYXJkSGVhZGVyOiB7XHJcbiAgICBtaW5IZWlnaHQ6IDgwLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCJcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYkNhcmQocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgPEF2YXRhciB2YXJpYW50PVwicm91bmRlZFwiIGFyaWEtbGFiZWw9XCJkZXNjcmlwdGlvblwiIHNyYz17cHJvcHMuY29tcGFueUxvZ299PlxyXG4gICAgICAgICAgICB7cHJvcHMuY29tcGFueUxvZ28gPT09IHVuZGVmaW5lZCA/IHByb3BzLmNvbXBhbnlJbml0aWFsIDogbnVsbH1cclxuICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZT17cHJvcHMuY29tcGFueU5hbWV9XHJcbiAgICAgICAgc3ViaGVhZGVyPXtwcm9wcy5qb2JUaXRsZX1cclxuICAgICAgICB0aXRsZVR5cG9ncmFwaHlQcm9wcz17eyB2YXJpYW50OiBcImJvZHkxXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEhlYWRlcn1cclxuICAgICAgLz5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIiBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICB7cHJvcHMuc2hvcnREZXNjfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEpvYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Kb2JcIjtcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEpvYiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=