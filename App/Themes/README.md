### Themes Folder
* This folder contains Application specific themes.
  * `ApplicationStyles.js`: It contains the common styles of the project. Any styles which are used in two or more files must be kept inside this file.
  * `Fonts.js`: It contains the font declaration and some basic font styles. All the third party fonts must declared in this file.
  * `Metrics.js`: It contains common dimensions of the project. Eg. basic vertical and horizontal margins of all the screens.
  * `Colors.js`: It contains all the colors used inside the project. All the colors to be used in the project must be defined in this file.
  * `Images.js`: It exports all the local images of the project. Any local image that is to be used in the project must be imported in this file first and then can be used from it.
  * `index.js`: All the above files are exported using this file. It will reduce the import code for each file. Eg. Fonts can be imported by `import { Fonts } from '../Themes'`.
