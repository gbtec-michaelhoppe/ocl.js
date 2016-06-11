# OCL.jsThe Object Constraint Language (OCL) is a language for describing rules that apply to MOF conform modelling languages like UML.The OCL is a text based language that provides constraint and object query expressions that cannot be expressed by a meta modelling language.[![Build Status](https://img.shields.io/travis/SteKoe/ocl.js/master.svg)](https://travis-ci.org/SteKoe/ocl.js)[![devDependency Status](https://david-dm.org/SteKoe/ocl.js/dev-status.svg)](https://david-dm.org/SteKoe/ocl.js#info=devDependencies)[![License: MIT](https://img.shields.io/dub/l/vibe-d.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)## Example PageTo illustrate the usage of this library, an example web page has been set up [here](http://ocl.stekoe.de/).## Installation### npm```jsnpm install --save ocl-js```## Quick-Start### Usage```jsimport {OclEngine} from 'ocl-js'const ocl = new OclEngine();ocl.addOclExpression(`    context Person        inv: self.name->isNotEmpty()`);ocl.evaluate(anObject);```## API### `OclEngine`#### `addOclExpression(oclExpression)`Register a new OCL expression to the given OCL instance.#### Arguments * `oclExpression` (*String*): The OCL expression to register. #### `evaluate(object)`Evaluate the given object wether it does not violate any of the registered OCL expressions.#### Arguments * `object` (*Object*): The object / instance to test against the registered OCL expressions.## LICENSEMIT LicenseCopyright (c) 2016 Stephan KöningerPermission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THEAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHERLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THESOFTWARE.