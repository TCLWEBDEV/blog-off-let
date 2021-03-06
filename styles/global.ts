import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/**
 *  SETTINGS
 */
/**
 *  COMPONENTS
 */
/**
 * Reset
 */
html, body, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, hgroup, menu, nav, section, time, mark, audio, video {
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline; }

article,
aside,
figure,
footer,
header,
main,
nav,
section {
  display: block; }

*, *:before, *:after {
  box-sizing: border-box; }

/**
 *  MAIN RULES
 */
*,
*::after,
*::before {
  box-sizing: border-box;
  outline: none; }

body {
  background-color: #fff;
  min-height: 100%;
  overflow-x: hidden;
  position: relative; }

p {
  font-weight: normal;
  margin-bottom: 1.5em; }

img {
  max-width: 100%; }

strong {
  font-weight: 700; }

ul {
  margin-bottom: 1em; }

li {
  list-style: none;
  margin-bottom: 0.5em; }

/**
 *  BACKGROUND
 */

.bg-primary {
  background-color: #03a9f4; }

.bg-dark {
  background-color: #18232f; }

.bg-secondary {
  background-color: #e91e63; }

.bg-white {
  background-color: #fff; }

.bg-success {
  background-color: #4caf50; }

.bg-info {
  background-color: #5bc0de; }

.bg-warning {
  background-color: #f0ad4e; }

.bg-error {
  background-color: #e74c3c; }

.bg-gray {
  background-color: #969da6; }

.bg-gray-light {
  background-color: #eceff1; }

/**
 *  BORDER
 */
.border {
  border: 1px solid #d5d9db; }

.border-bottom {
  border-bottom: 1px solid #d5d9db; }

.border-left {
  border-left: 1px solid #d5d9db; }

.border-right {
  border-right: 1px solid #d5d9db; }

.border-top {
  border-top: 1px solid #d5d9db; }
  .btn-item a:hover {
    background-color: #fff;
    border: none;
    color: #E83C4D;
  }
/**
 *  ALIGNERS
 */
.aligner {
  display: flex; }
  .aligner--spaceBetween {
    justify-content: space-between;
    width: 100%; }
  .aligner--spaceAround {
    justify-content: space-around;
    width: 100%; }
  .aligner--centerVertical {
    align-items: center; }
  .aligner--centerHoritzontal {
    justify-content: center; }
  .aligner--contentStart {
    justify-content: flex-start; }
  .aligner--contentEnd {
    justify-content: flex-end; }

.aligner--itemTop {
  align-self: flex-start; }

.aligner--itemBottom {
  align-self: flex-end; }

.flex-grow,
.aligner--grow {
  flex-grow: 1; }

/**
 *  FLOATS
 */
.fleft {
  float: left; }

.fright {
  float: right; }

.clearfix ::after {
  clear: both;
  content: '';
  display: table; }

/**
 *  MARGINS
 */
.m-xsmall {
  margin: 4px; }

.mb-xsmall {
  margin-bottom: 4px; }

.m-small {
  margin: 8px; }

.mb-small {
  margin-bottom: 8px; }

.m-medium {
  margin: 16px; }

.mb-medium {
  margin-bottom: 16px; }

.m-big {
  margin: 36px; }

.mb-big {
  margin-bottom: 36px;
}

.m-huge {
  margin: 48px; }

.mb-huge {
  margin-bottom: 48px; }

.m-none {
  margin: 0 !important; }

/**
 *  PADDINGS
 */
.p-small {
  padding: 4px; }

.pb-small {
  padding-bottom: 4px; }

.p-medium {
  padding: 8px; }

.pb-medium {
  padding-bottom: 8px; }

.p-big {
  padding: 16px; }

.pb-big {
  padding-bottom: 16px; }

.p-huge {
  padding: 36px; }

.pb-huge {
  padding-bottom: 36px; }

/**
 *  OTHERS
 */
.no-wrap {
  white-space: nowrap; }

.overflow-hidden {
  overflow: hidden; }

.opacity-low {
  opacity: .5; }

.rounded-corners {
  border-radius: 5px; }

.rounded {
  border-radius: 100%; }

/**
 * LAYOUT
 */
 .bold-p {
   font-weight: bold;
 }
.section {
  padding-bottom: 36px;
  padding-top: 36px; }
  @media (min-width: 768px) {
    .section {
      padding-bottom: 72px;
      padding-top: 72px; } }
  .section + .section {
    padding-top: 0; }

.container {
  background-color: transparent;
  margin: 0 auto;
  max-width: 1380px;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%; }
  @media (min-width: 768px) {
    .container {
      padding-left: 24px;
      padding-right: 24px; } }

.container-medium {
  margin: 0 auto;
  max-width: 944px;
  padding-left: 12px;
  padding-right: 12px; }
  @media (min-width: 768px) {
    .container-medium {
      padding-left: 24px;
      padding-right: 24px; } }

.container-small {
  margin: 0 auto;
  max-width: 400px;
  padding-left: 12px;
  padding-right: 12px; }
  @media (min-width: 768px) {
    .container-small {
      padding-left: 24px;
      padding-right: 24px; } }

/**
 *  TYPOGRAPHY
 */
body {
  color: #272727;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  width: 100%;
  height: 100%;
  font-weight: 400;
  line-height: 1.5em; }

a {
  color: #03a9f4;
  text-decoration: none; }
  a:hover {
    color: rgba(3, 169, 244, 0.8); }
  a:focus {
    color: #03a9f4; }

.text-huge, .text-big, .text-medium {
  margin-bottom: 1em; }

.text-huge {
  font-size: 36px;
  line-height: 1.3em; }

.text-big {
  font-size: 24px;
  line-height: 1.3em; }

.text-medium {
  font-size: 16px;
  line-height: 1.5em; }

.text-small {
  font-size: 12px;
  line-height: 1.3em; }

.text-body {
  font-size: 16px;
  line-height: 1.5em; }

.text-primary {
  color: #03a9f4; }

.text-dark {
  color: #18232f; }

.text-secondary {
  color: #e91e63; }

.text-white {
  color: #fff; }

.text-success {
  color: #4caf50; }

.text-info {
  color: #5bc0de; }

.text-warning {
  color: #f0ad4e; }

.text-error {
  color: #e74c3c; }

.text-gray {
  color: #969da6; }

.text-gray-light {
  color: #eceff1; }

.text-light {
  font-weight: 300; }

.text-normal {
  font-weight: 400; }

.text-lineThrough {
  text-decoration: line-through; }

.text-italic {
  font-style: italic; }

.text-underline {
  text-decoration: underline; }

.text-uppercase {
  text-transform: uppercase; }

.text-withSubtitle {
  margin-bottom: 0 !important; }
  .text-withSubtitle + .text-huge,
  .text-withSubtitle + .text-big,
  .text-withSubtitle + .text-medium,
  .text-withSubtitle + .text-small {
    margin-top: .5em; }

h1,
h2,
h3,
h4 {
  font-weight: 300; }

.text-center {
  text-align: center; }

.text-right {
  text-align: right; }

.text-left {
  text-align: left; }

/**
 *  BADGE
 *
 *  Markup:
 *  -------
 *
 *  <ul>
 *    <li class="badge badge--primary">Badge 1</li>
 *    <li class="badge badge--secondary badge--big">Badge 1</li>
 *  </ul>
 *
 */
.badge {
  background-color: #eceff1;
  border-radius: 3px;
  color: #272727;
  display: inline-block;
  line-height: 1.2em;
  padding: 8px 16px; }
  .badge--big {
    font-size: 1.3em; }
  .badge--small {
    font-size: 0.7em; }
  .badge--primary {
    background-color: #03a9f4;
    color: #fff; }
  .badge--secondary {
    background-color: #e91e63;
    color: #fff; }
  .badge--dark {
    background-color: #18232f;
    color: #fff; }
  .badge--light {
    background-color: #969da6;
    color: #fff; }
  .badge--success {
    background-color: #4caf50;
    color: #fff; }
  .badge--error {
    background-color: #e74c3c;
    color: #fff; }
  .badge--warning {
    background-color: #f0ad4e;
    color: #fff; }

/**
 *  BUTTON
 *
 *  Markup:
 *  -------
 *
 *  <button class="button">Default</button>
 *  <button class="button button--big">Button big</button>
 *  <button class="button button--secondary">Button secondary</button>
 *
 */
button {
  background-color: transparent;
  cursor: pointer; }

.button {
  background-color: #E83C4D;
  border: 0;
  border-radius: 200px;
  color: #fff;
  min-width: 88px;
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5em;
  margin: 0 8px 16px 8px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity .2s ease-in-out;
  white-space: nowrap; }
  .button:focus, .button:hover, .button:active {
    color: #fff; }
  .button:hover {
    background-color: #8b242e;
    color: #fff;
    cursor: pointer;
    text-decoration: none; }
  .button:active {
    opacity: 1; }
  .button:first-child {
    margin-left: 0; }
  .button:last-child {
    margin-right: 0; }
  .button--big {
    font-size: 24px;
    padding: 16px 36px; }
  .button--small {
    font-size: 12px;
    padding: 4px 16px; }
  @media (max-width: 991px) {
    .button--mobileFull {
      margin-left: 0;
      margin-right: 0;
      width: 100%; } }
  .button--secondary {
    background-color: #e91e63;
    color: #fff; }
    .button--secondary:hover {
      background-color: rgba(233, 30, 99, 0.8);
      color: #fff; }
  .button--white {
    background-color: #fff;
    color: #03a9f4; }
    .button--white:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: rgba(3, 169, 244, 0.8); }
  .button--green {
    background-color: #4caf50;
    color: #fff; }
    .button--green:hover {
      background-color: rgba(76, 175, 80, 0.8);
      color: #fff; }
  .button--red {
    background-color: #e74c3c;
    color: #fff; }
    .button--red:hover {
      background-color: rgba(231, 76, 60, 0.8);
      color: #fff; }
  .button--transparent {
    background-color: transparent;
    color: #03a9f4; }
    .button--transparent:active, .button--transparent:hover, .button--transparent:focus {
      background-color: transparent;
      color: rgba(3, 169, 244, 0.8);
      opacity: .8; }
  .button--outlined {
    background-color: transparent;
    border: 1px solid #d5d9db;
    color: #03a9f4; }
    .button--outlined:active, .button--outlined:hover, .button--outlined:focus {
      background-color: transparent;
      color: rgba(3, 169, 244, 0.8);
      opacity: .8; }

/**
 *  FORMS
 *
 *  Markup:
 *  ---------
 *  <div class="input input-fullWidth">
 *    <input id="#" placeholder="#" type="text">
 *  </div>
 *
 *  <div class="select select-fullWidth">
 *    <select name="#" id="#">
 *      <option>Option 1</option>
 *      <option>Option 2</option>
 *    </select>
 *  </div>
 *
 *  <div class="textarea">
 *    <textarea id="#"></textarea>
 *  </div>
 *
 *  <div class="radio">
 *    <input id="#" name="#" type="radio" value="">
 *    <label for="#">Radio button</label>
 *  </div>
 *
 *  <div class="checkbox">
 *    <input id="#" name="#" type="checkbox" value="">
 *    <label for="#">Checkbox</label>
 *  </div>
 */
input,
textarea {
  appearance: none; }

label {
  display: block;
  font-weight: normal; }

input:-webkit-autofill {
  box-shadow: 0 0 0 1000px #eceff1 inset; }

.textarea,
.input,
.select {
  border: 1px solid #d5d9db;
  border-radius: 3px;
  box-shadow: none;
  display: inline-block;
  font-weight: normal;
  margin-bottom: 20px;
  overflow: hidden; }
  .textarea :focus,
  .input :focus,
  .select :focus {
    outline: none; }
  .textarea.has-error,
  .input.has-error,
  .select.has-error {
    background: #eceff1;
    border: 1px solid #e74c3c;
    margin-bottom: 0; }

.select {
  background-color: #eceff1;
  display: inline-block;
  margin-right: 16px;
  position: relative; }
  .select:last-child {
    margin-right: 0; }
  .select-fullWidth {
    display: block;
    margin-left: 0;
    margin-right: 0;
    width: 100%; }
  .select select {
    appearance: none;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    color: #272727;
    display: block;
    font-size: 16px;
    line-height: 1.5em;
    margin: 0;
    padding: 8px 16px;
    padding-right: 30px;
    transition: background-color 0.2s ease-in-out;
    width: 100%; }
    .select select:active, .select select:focus {
      background-color: #fbfbfc;
      border: 0;
      outline: none; }
    .select select::-ms-expand {
      display: none; }
  .select::after, .select::before {
    background: #03a9f4;
    content: '';
    display: block;
    height: 2px;
    margin-top: 2px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform-origin: 1px;
    width: 10px; }
  .select::after {
    transform: rotate(-135deg); }
  .select::before {
    transform: rotate(-45deg); }

.textarea {
  background-color: #eceff1;
  padding: 0; }
  .textarea-fullWidth {
    display: block;
    margin-left: 0;
    margin-right: 0;
    width: 100%; }
  .textarea textarea {
    background: transparent;
    border: 0;
    color: #272727;
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    margin: 0;
    min-height: 120px;
    padding: 8px 16px;
    transition: background-color 0.2s ease-in-out;
    width: 100%; }
    .textarea textarea::placeholder {
      color: #969da6; }
    .textarea textarea:focus, .textarea textarea:active {
      background-color: #fbfbfc;
      border: 0;
      outline: none; }

.checkbox {
  margin-bottom: 8px;
  position: relative; }
  .checkbox input[type='checkbox'] {
    display: none; }
    .checkbox input[type='checkbox']:checked + label::after {
      animation: checkboxAndRadioAnimation .25s;
      content: '';
      transform: scale(1) rotate(45deg); }
    .checkbox input[type='checkbox'] + label {
      display: block;
      overflow: hidden;
      padding-left: 30px;
      text-overflow: ellipsis;
      white-space: nowrap; }
      .checkbox input[type='checkbox'] + label::before {
        background-color: #eceff1;
        border: 1px solid #d5d9db;
        border-radius: 3px;
        content: '';
        display: inline-block;
        height: 20px;
        left: 0;
        margin-top: -10px;
        position: absolute;
        top: 50%;
        width: 20px; }
      .checkbox input[type='checkbox'] + label::after {
        border-bottom: 3px solid #03a9f4;
        border-right: 3px solid #03a9f4;
        display: block;
        height: 12px;
        left: 11px;
        margin-left: -4px;
        margin-top: -7px;
        position: absolute;
        top: 50%;
        width: 7px;
        z-index: 1; }

.radio {
  margin-bottom: 8px;
  position: relative; }
  .radio input[type='radio'] {
    display: none; }
    .radio input[type='radio']:checked + label::after {
      animation: checkboxAndRadioAnimation .25s;
      content: '';
      transform: scale(1) rotate(45deg); }
    .radio input[type='radio'] + label {
      display: block;
      overflow: hidden;
      padding-left: 30px;
      text-overflow: ellipsis;
      white-space: nowrap; }
      .radio input[type='radio'] + label::before {
        background-color: #eceff1;
        border: 1px solid #d5d9db;
        border-radius: 20px;
        content: '';
        display: inline-block;
        height: 20px;
        left: 0;
        margin-top: -10px;
        position: absolute;
        top: 50%;
        width: 20px; }
      .radio input[type='radio'] + label::after {
        background-color: #03a9f4;
        border-radius: 20px;
        display: block;
        height: 10px;
        left: 11px;
        margin-left: -6px;
        margin-top: -6px;
        position: absolute;
        top: 13px;
        width: 10px;
        z-index: 1; }

@keyframes checkboxAndRadioAnimation {
  0% {
    transform: scale(0) rotate(45deg); }
  50% {
    transform: scale(1.5) rotate(45deg); }
  100% {
    transform: scale(1) rotate(45deg); } }

.input {
  background-color: #eceff1;
  margin-right: 10px;
  padding: 0;
  position: relative; }
  .input :focus,
  .input :active {
    background-color: #fbfbfc;
    border-radius: 3px; }
  .input input {
    background: transparent;
    border: 0;
    box-shadow: none;
    color: #272727;
    font-size: 16px;
    line-height: 1.5em;
    margin: 0;
    outline: none;
    padding: 8px 16px;
    width: 100%; }
    .input input::placeholder {
      color: #969da6; }
  .input-withIcon input {
    padding-right: 32px; }
  .input-icon {
    fill: #969da6;
    height: 16px;
    margin-top: -8px;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 16px; }
  .input-fullWidth {
    display: block;
    margin-left: 0;
    margin-right: 0;
    width: 100%; }

/**
 *  FORM COLLAPSED (items in row without gap between them)
 *
 *  Markup:
 *  -------
 *
 *  <div class="formCollapsed">
 *    <div class="input formCollapsed-item formCollapsed-itemPrimary">
 *      <input id="name" placeholder="Klingon search" type="text" />
 *    </div>
 *    <div class="select formCollapsed-item">
 *      <select name="country-code" id="country-code">
 *        <option value="AO"> Angola</option>
 *      </select>
 *    </div>
 *    <button class="formCollapsed-item button button-primary">
 *      Search
 *    </button>
 *  </div>
 **/
.formCollapsed {
  display: flex;
  margin-bottom: 20px; }
  .formCollapsed-item {
    border-radius: 0 !important;
    margin: 0 !important; }
    .formCollapsed-item:first-child {
      border-bottom-left-radius: 3px !important;
      border-top-left-radius: 3px !important; }
    .formCollapsed-item:last-child {
      border-bottom-right-radius: 3px !important;
      border-top-right-radius: 3px !important; }
    .formCollapsed-item:not(:last-child) {
      border-right: 0; }
    .formCollapsed-itemPrimary {
      flex: 1; }

/**
 *  LOADING BAR
 *
 *  Markup:
 *  ---------
 *  <div class="loadingBar"></div>
 *
 */
.loadingBar {
  height: 6px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000; }
  .loadingBar::before {
    animation: loading 2s linear infinite;
    background-color: #03a9f4;
    content: '';
    display: block;
    height: 6px;
    left: -300px;
    position: absolute;
    width: 300px; }

@keyframes loading {
  from {
    left: -300px;
    width: 30%; }
  50% {
    width: 30%; }
  70% {
    width: 70%; }
  80% {
    left: 50%; }
  95% {
    left: 120%; }
  to {
    left: 100%; } }

// privacy page styles
.page-heading {
  background-color: #d3d5e0;
  padding: 56px 0; }
  .page-heading__title {
    margin: 0; }

    .page-content {
  padding-top: 48px;
 }

/**
 *  LOADING SPINNER
 *
 *  Markup:
 *  ---------
 *  <div class='loadingSpinner'>
 *    <span class='loadingSpinner-inner'></span>
 *    <span class='loadingSpinner-inner'></span>
 *    <span class='loadingSpinner-inner'></span>
 *    <span class='loadingSpinner-inner'></span>
 *  </div>
 *
 */


.loadingSpinner {
  animation: rotateLoader 4s infinite;
  animation-timing-function: ease-in-out;
  display: block;
  height: 30px;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  position: fixed;
  top: 50%;
  width: 30px;
  z-index: 1000; }
  .loadingSpinner-inner {
    animation-timing-function: ease-in-out;
    background-color: #e91e63;
    border-radius: 100%;
    display: block;
    height: 9px;
    position: absolute;
    width: 9px; }
    .loadingSpinner-inner:nth-child(1) {
      animation: translateBall1 1s infinite;
      left: 0;
      top: 0;
      transform: translate3d(4.5px, 4.5px, 0); }
    .loadingSpinner-inner:nth-child(2) {
      animation: translateBall2 1s infinite;
      right: 0;
      top: 0; }
    .loadingSpinner-inner:nth-child(3) {
      animation: translateBall3 1s infinite;
      bottom: 0;
      right: 0; }
    .loadingSpinner-inner:nth-child(4) {
      animation: translateBall4 1s infinite;
      bottom: 0;
      left: 0; }

@keyframes rotateLoader {
  0% {
    transform: rotate(0); }
  25% {
    transform: rotate(90deg); }
  50% {
    transform: rotate(180deg); }
  75% {
    transform: rotate(270deg); }
  100% {
    transform: rotate(360deg); } }

@keyframes translateBall1 {
  0% {
    transform: translate3d(0, 0, 0); }
  50% {
    transform: translate3d(4.5px, 4.5px, 0); }
  100% {
    transform: translate3d(0, 0, 0); } }

@keyframes translateBall2 {
  0% {
    transform: translate3d(0, 0, 0); }
  50% {
    transform: translate3d(-4.5px, 4.5px, 0); }
  100% {
    transform: translate3d(0, 0, 0); } }

@keyframes translateBall3 {
  0% {
    transform: translate3d(0, 0, 0); }
  50% {
    transform: translate3d(-4.5px, -4.5px, 0); }
  100% {
    transform: translate3d(0, 0, 0); } }

@keyframes translateBall4 {
  0% {
    transform: translate3d(0, 0, 0); }
  50% {
    transform: translate3d(4.5px, -4.5px, 0); }
  100% {
    transform: translate3d(0, 0, 0); } }

/**
 *  NOTIFICATION
 *
 *  Markup:
 *  -------
 *
 *  <div class="notification notification--sucess">Success notification</div>
 *  <div class="notification notification--info">Success info</div>
 *  <div class="notification notification--error">Success error</div>
 *  <div class="notification notification--warning">Success warning</div>
 *
 */
.notification {
  border-radius: 3px;
  color: #fff;
  margin-bottom: 36px;
  padding: 16px; }
  .notification p:last-child {
    margin-bottom: 0; }
  .notification--primary {
    background-color: #03a9f4; }
  .notification--dark {
    background-color: #18232f; }
  .notification--secondary {
    background-color: #e91e63; }
  .notification--white {
    background-color: #fff; }
  .notification--success {
    background-color: #4caf50; }
  .notification--info {
    background-color: #5bc0de; }
  .notification--warning {
    background-color: #f0ad4e; }
  .notification--error {
    background-color: #e74c3c; }
  .notification--gray {
    background-color: #969da6; }
  .notification--gray-light {
    background-color: #eceff1; }

/**
 *  PAGINATOR
 *
 *  Markup:
 *  -------
 *
 *  <ul class="paginator">
 *    <li class="paginator-item">
 *      <a href="#" class="paginator-itemLink">< Prev</a>
 *    </li>
 *    <li class="paginator-item">
 *      <a href="#" class="paginator-itemLink">1</a>
 *    </li>
 *    <li class="paginator-item">
 *      <a href="#" class="paginator-itemLink is-active">2</a>
 *    </li>
 *    <li class="paginator-item">
 *      <a href="#" class="paginator-itemLink">3</a>
 *    </li>
 *    <li class="paginator-item">
 *      <a href="#" class="paginator-itemLink">Next ></a>
 *    </li>
 *  </ul>
 */
.paginator-item {
  display: inline-block;
  margin-right: 4px; }
  .paginator-itemLink {
    background-color: #eceff1;
    border-radius: 3px;
    display: block;
    padding: 8px 16px; }
    .paginator-itemLink.is-active {
      background-color: #03a9f4;
      color: #fff;
      cursor: default; }

/**
 *  TABLE
 *
 *  Markup:
 *  -------
 *
 *  <table class="table">
 *    <tr>
 *      <th>First column</th>
 *      <th>Second column</th>
 *      <th>Third column</th>
 *    </tr>
 *    <tr>
 *      <td="First column">Blue</td>
 *      <td="Second column">One</td>
 *      <td="Third column">My life fades</td>
 *    </tr>
 *  </table>
 *
 */
.table {
  background-color: #eceff1;
  border: 1px solid #d5d9db;
  border-collapse: collapse;
  color: #272727;
  max-width: 100%;
  width: 100%; }
  .table th,
  .table td {
    border-bottom: 1px solid #d5d9db;
    padding: 8px;
    position: relative; }
  .table thead {
    border-bottom: 1px solid #d5d9db; }
  .table th {
    background-color: #fff;
    color: #969da6;
    font-size: 12px;
    font-weight: normal;
    padding: 8px;
    white-space: nowrap; }

/**
 *  TABLE RESPONSIVE
 *
 *  Markup:
 *  -------
 *
 *  <table class="table table--responsive">
 *    <tr>
 *      <th>First column</th>
 *      <th>Second column</th>
 *      <th>Third column</th>
 *    </tr>
 *    <tr>
 *      <td data-th="First column">Blue</td>
 *      <td data-th="Second column">One</td>
 *      <td data-th="Third column">My life fades</td>
 *    </tr>
 *    <tr>
 *      <td data-th="First column">Green</td>
 *      <td data-th="Second column">Two</td>
 *      <td data-th="Third column">
 *        when the world was powered by the black fuel... and the desert
 *        sprouted great cities of pipe and steel.
 *      </td>
 *    </tr>
 *    <tr>
 *      <td data-th="First column">Yellow</td>
 *      <td data-th="Second column">Three</td>
 *      <td data-th="Third column">
 *        A whirlwind of looting, a firestorm of fear.
 *      </td>
 *    </tr>
 *  </table>
 *
 */
.table--responsive th {
  display: none; }

.table--responsive td {
  display: block; }
  @media (max-width: 767px) {
    .table--responsive td {
      border: 0; } }
  .table--responsive td::before {
    color: #969da6;
    content: attr(data-th) ": ";
    display: block;
    font-weight: normal; }
    @media (min-width: 576px) {
      .table--responsive td::before {
        display: none; } }
  .table--responsive td:first-child {
    border-top: 1px solid #d5d9db; }

.table--responsive th,
.table--responsive td {
  text-align: left; }
  @media (min-width: 576px) {
    .table--responsive th,
    .table--responsive td {
      border-top: 1px solid #d5d9db;
      display: table-cell; } }

/**
 *  TABS
 *
 *  Markup:
 *  -------
 *
 *  <div class="tabs">
 *    <a href="#" title="#" class="tabs-item">[...]</a>
 *    <a href="#" title="#" class="tabs-item is-selected">[...]</a>
 *  </div>
 *
 */
.tabs {
  border-bottom: 1px solid #d5d9db;
  text-align: center; }
  .tabs-item {
    border-bottom: 3px solid transparent;
    color: #969da6;
    display: inline-block;
    margin: 0 16px 0 0;
    min-width: 70px;
    padding: 16px;
    position: relative; }
    .tabs-item:hover {
      color: #03a9f4;
      text-decoration: none; }
    .tabs-item.is-selected {
      border-bottom: 3px solid #03a9f4;
      color: #03a9f4; }

/**
 *  TAG
 *
 *  Markup:
 *  -------
 *
 *  <ul>
 *    <li class="tag">Fantasy</li>
 *    <li class="tag">Fiction</li>
 *    <li class="tag">Contemporary</li>
 *  </ul>
 *
 *  <ul>
 *    <li class="tag">
 *      <a href="#">Fantasy</a>
 *    </li>
 *    <li class="tag">
 *      <a href="#">Fiction</a>
 *    </li>
 *    <li class="tag">
 *       <a href="#">Contemporary</a>
 *    </li>
 *  </ul>
 *
 */
.tag {
  background-color: #eceff1;
  border-radius: 3px 0 0 3px;
  color: #272727;
  display: inline-block;
  line-height: 16px;
  margin: 0 16px 16px 0;
  padding: 8px;
  position: relative; }
  .tag::before {
    border-bottom: 16px solid transparent;
    border-left: 8px solid #eceff1;
    border-top: 16px solid transparent;
    content: '';
    height: 0;
    position: absolute;
    right: -8px;
    top: 0;
    width: 0; }
  .tag::after {
    background: #fff;
    border-radius: 100%;
    content: '';
    height: 5px;
    margin-top: -2.5px;
    position: absolute;
    right: -2.5px;
    top: 50%;
    width: 5px; }

.container {
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto; }
  @media (min-width: 576px) {
    .container {
      max-width: 540px; } }
  @media (min-width: 768px) {
    .container {
      max-width: 720px; } }
  @media (min-width: 992px) {
    .container {
      max-width: 960px; } }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px; } }

.container-fluid {
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto; }

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px; }

  .colTemp {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%; }

.no-gutters {
  margin-left: 0;
  margin-right: 0; }
  .no-gutters > .col,
  .no-gutters > [class*='col-'] {
    padding-left: 0;
    padding-right: 0; }

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px; }

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%; }

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none; }

.col-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%; }

.col-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%; }

.col-3 {
  flex: 0 0 25%;
  max-width: 25%; }

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%; }

.col-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%; }

.col-6 {
  flex: 0 0 50%;
  max-width: 50%; }

.col-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%; }

.col-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%; }

.col-9 {
  flex: 0 0 75%;
  max-width: 75%; }

.col-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%; }

.col-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%; }

.col-12 {
  flex: 0 0 100%;
  max-width: 100%; }

.order-first {
  order: -1; }

.order-1 {
  order: 1; }

.order-2 {
  order: 2; }

.order-3 {
  order: 3; }

.order-4 {
  order: 4; }

.order-5 {
  order: 5; }

.order-6 {
  order: 6; }

.order-7 {
  order: 7; }

.order-8 {
  order: 8; }

.order-9 {
  order: 9; }

.order-10 {
  order: 10; }

.order-11 {
  order: 11; }

.order-12 {
  order: 12; }

.offset-1 {
  margin-left: 8.33333%; }

.offset-2 {
  margin-left: 16.66667%; }

.offset-3 {
  margin-left: 25%; }

.offset-4 {
  margin-left: 33.33333%; }

.offset-5 {
  margin-left: 41.66667%; }

.offset-6 {
  margin-left: 50%; }

.offset-7 {
  margin-left: 58.33333%; }

.offset-8 {
  margin-left: 66.66667%; }

.offset-9 {
  margin-left: 75%; }

.offset-10 {
  margin-left: 83.33333%; }

.offset-11 {
  margin-left: 91.66667%; }

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%; }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none; }
  .col-sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%; }
  .col-sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-sm-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%; }
  .col-sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-sm-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%; }
  .col-sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-sm-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%; }
  .order-sm-first {
    order: -1; }
  .order-sm-1 {
    order: 1; }
  .order-sm-2 {
    order: 2; }
  .order-sm-3 {
    order: 3; }
  .order-sm-4 {
    order: 4; }
  .order-sm-5 {
    order: 5; }
  .order-sm-6 {
    order: 6; }
  .order-sm-7 {
    order: 7; }
  .order-sm-8 {
    order: 8; }
  .order-sm-9 {
    order: 9; }
  .order-sm-10 {
    order: 10; }
  .order-sm-11 {
    order: 11; }
  .order-sm-12 {
    order: 12; }
  .offset-sm-0 {
    margin-left: 0; }
  .offset-sm-1 {
    margin-left: 8.33333%; }
  .offset-sm-2 {
    margin-left: 16.66667%; }
  .offset-sm-3 {
    margin-left: 25%; }
  .offset-sm-4 {
    margin-left: 33.33333%; }
  .offset-sm-5 {
    margin-left: 41.66667%; }
  .offset-sm-6 {
    margin-left: 50%; }
  .offset-sm-7 {
    margin-left: 58.33333%; }
  .offset-sm-8 {
    margin-left: 66.66667%; }
  .offset-sm-9 {
    margin-left: 75%; }
  .offset-sm-10 {
    margin-left: 83.33333%; }
  .offset-sm-11 {
    margin-left: 91.66667%; } }

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%; }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none; }
  .col-md-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-md-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%; }
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-md-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%; }
  .col-md-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%; }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-md-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%; }
  .order-md-first {
    order: -1; }
  .order-md-1 {
    order: 1; }
  .order-md-2 {
    order: 2; }
  .order-md-3 {
    order: 3; }
  .order-md-4 {
    order: 4; }
  .order-md-5 {
    order: 5; }
  .order-md-6 {
    order: 6; }
  .order-md-7 {
    order: 7; }
  .order-md-8 {
    order: 8; }
  .order-md-9 {
    order: 9; }
  .order-md-10 {
    order: 10; }
  .order-md-11 {
    order: 11; }
  .order-md-12 {
    order: 12; }
  .offset-md-0 {
    margin-left: 0; }
  .offset-md-1 {
    margin-left: 8.33333%; }
  .offset-md-2 {
    margin-left: 16.66667%; }
  .offset-md-3 {
    margin-left: 25%; }
  .offset-md-4 {
    margin-left: 33.33333%; }
  .offset-md-5 {
    margin-left: 41.66667%; }
  .offset-md-6 {
    margin-left: 50%; }
  .offset-md-7 {
    margin-left: 58.33333%; }
  .offset-md-8 {
    margin-left: 66.66667%; }
  .offset-md-9 {
    margin-left: 75%; }
  .offset-md-10 {
    margin-left: 83.33333%; }
  .offset-md-11 {
    margin-left: 91.66667%; } }

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%; }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none; }
  .col-lg-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%; }
  .col-lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-lg-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%; }
  .col-lg-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%; }
  .col-lg-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-lg-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%; }
  .order-lg-first {
    order: -1; }
  .order-lg-1 {
    order: 1; }
  .order-lg-2 {
    order: 2; }
  .order-lg-3 {
    order: 3; }
  .order-lg-4 {
    order: 4; }
  .order-lg-5 {
    order: 5; }
  .order-lg-6 {
    order: 6; }
  .order-lg-7 {
    order: 7; }
  .order-lg-8 {
    order: 8; }
  .order-lg-9 {
    order: 9; }
  .order-lg-10 {
    order: 10; }
  .order-lg-11 {
    order: 11; }
  .order-lg-12 {
    order: 12; }
  .offset-lg-0 {
    margin-left: 0; }
  .offset-lg-1 {
    margin-left: 8.33333%; }
  .offset-lg-2 {
    margin-left: 16.66667%; }
  .offset-lg-3 {
    margin-left: 25%; }
  .offset-lg-4 {
    margin-left: 33.33333%; }
  .offset-lg-5 {
    margin-left: 41.66667%; }
  .offset-lg-6 {
    margin-left: 50%; }
  .offset-lg-7 {
    margin-left: 58.33333%; }
  .offset-lg-8 {
    margin-left: 66.66667%; }
  .offset-lg-9 {
    margin-left: 75%; }
  .offset-lg-10 {
    margin-left: 83.33333%; }
  .offset-lg-11 {
    margin-left: 91.66667%; } }

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%; }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none; }
  .col-xl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-xl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%; }
  .col-xl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-xl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%; }
  .col-xl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-xl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%; }
  .col-xl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-xl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%; }
  .order-xl-first {
    order: -1; }
  .order-xl-1 {
    order: 1; }
  .order-xl-2 {
    order: 2; }
  .order-xl-3 {
    order: 3; }
  .order-xl-4 {
    order: 4; }
  .order-xl-5 {
    order: 5; }
  .order-xl-6 {
    order: 6; }
  .order-xl-7 {
    order: 7; }
  .order-xl-8 {
    order: 8; }
  .order-xl-9 {
    order: 9; }
  .order-xl-10 {
    order: 10; }
  .order-xl-11 {
    order: 11; }
  .order-xl-12 {
    order: 12; }
  .offset-xl-0 {
    margin-left: 0; }
  .offset-xl-1 {
    margin-left: 8.33333%; }
  .offset-xl-2 {
    margin-left: 16.66667%; }
  .offset-xl-3 {
    margin-left: 25%; }
  .offset-xl-4 {
    margin-left: 33.33333%; }
  .offset-xl-5 {
    margin-left: 41.66667%; }
  .offset-xl-6 {
    margin-left: 50%; }
  .offset-xl-7 {
    margin-left: 58.33333%; }
  .offset-xl-8 {
    margin-left: 66.66667%; }
  .offset-xl-9 {
    margin-left: 75%; }
  .offset-xl-10 {
    margin-left: 83.33333%; }
  .offset-xl-11 {
    margin-left: 91.66667%; } }

.navbar {
  background-color: #212E63;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 16px rgba(33, 46, 99, 0.06); }
  .navbar .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px 16px; }
    @media (min-width: 768px) {
      .navbar .container {
        grid-template-columns: 1fr 2fr 1fr;
        padding: 16px 24px; } }
  .navbar--section {
    flex: 0 1 auto;
    padding: 8px; }
  .navbar--logo {
    order: 1; }
    .navbar--logo a img {
      height: 48px;
      width: auto; }
      @media (min-width: 768px) {
        .navbar--logo a img {
          height: 64px; } }
  .navbar--search {
    width: 100%;
    order: 3;
    grid-column: 1/3;
    padding: 0; }
    @media (min-width: 768px) {
      .navbar--search {
        width: 500px;
        order: 2;
        grid-column: auto; } }
    .navbar--search .input {
      margin-bottom: 0; }
  .navbar--menu {
    text-align: right;
    order: 2; }
    @media (min-width: 768px) {
      .navbar--menu {
        order: 3; } }
    .navbar--menu .burger-menu {
      display: inline-block;
      width: 48px;
      height: 48px;
      position: relative; }
      .navbar--menu .burger-menu span {
        display: block;
        width: 32px;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); }
        .navbar--menu .burger-menu span:first-child {
          top: calc(50% - 10px); }
        .navbar--menu .burger-menu span:last-child {
          top: calc(50% + 10px); }
    .navbar--menu .menu {
      display: none;
      list-style: none;
      padding: 0;
      margin: 0; }
      .navbar--menu .menu-item {
        margin-right: 16px;
        display: inline-block; }
        .navbar--menu .menu-item a {
          font-size: 0.9375rem;
          color: #F7F8FC; }
        .navbar--menu .menu-item:last-child {
          margin-right: 0; }
    @media (min-width: 768px) {
      .navbar--menu .menu {
        display: block; }
      .navbar--menu .burger-menu {
        display: none; } }

html {
  font-size: 15px; }
  @media (min-width: 768px) {
    html {
      font-size: 16px; } }

body {
  background-color: #F7F8FC;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  color: #212E63; }

h1,
h2 {
  font-size: 2.441rem;
  font-weight: 700;
}

h3 {
  font-size: 1.953rem;
  margin-bottom: 19px;
 }
h4 {
  font-weight: 600; }

.select {
  background-color: #fff;
  border-radius: 8px; }
  .select:after, .select:before {
    background: #212E63; }

.input1 {
  border-radius: 8px;
 }
.wrapper {
  padding: 0 0 48px;
  margin-bottom: 22%;
  z-index: 10; }

@media (min-width: 768px) {
  .sidebar {
    padding-left: 40px; } }
/* marcado */
.s-hero {
  position: relative;
  margin-bottom: 64px;
  background: #212E63;
  padding: 0;
  padding-top: 3%;
}
@media (max-width: 385px) {
    .s-hero {
      max-width: 115%;
    }
  }
@media (max-width: 768px) {

    .s-hero {
      width: max-content;
      margin-top: 84px;
      padding: 56px 0 0;
      margin-bottom: 96px; } }
  @media (min-width: 768px) {
  width: max-content;
    .s-hero {
      margin-top: 84px;
      padding: 56px 0 0;
      margin-bottom: 96px; } }
  .s-hero .container {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding-top: 32px; }
    @media (min-width: 768px) {
      .s-hero .container {
        padding-top: 0;
        flex-direction: row; } }
    .s-hero .container .hero-content,
    .s-hero .container .hero-image {
      flex: 1 0 auto; }
    .s-hero .container .hero-title {
      color: #fff;
      font-size: calc(1.475rem + 2.7vw);
      margin-top: 0;
      margin-bottom: 8px;
      text-align: center; }
      @media (min-width: 1200px) {
        .s-hero .container .hero-title {
          font-size: 3.5rem; } }
      @media (min-width: 768px) {
        .s-hero .container .hero-title {
          text-align: left;
          margin-bottom: 0;
          margin-top: -56px; } }
      .s-hero .container .hero-title .accent {
        color: #E83C4D; }
    .s-hero .container .hero-subtitle {
      color: #fff;
      font-weight: 500;
      font-size: calc(1.275rem + 0.3vw);
      margin-bottom: 24px;
      text-align: center; }
      @media (min-width: 1200px) {
        .s-hero .container .hero-subtitle {
          font-size: 1.5rem; } }
      @media (min-width: 768px) {
        .s-hero .container .hero-subtitle {
          text-align: left;
          margin-bottom: 0; } }
    .s-hero .container .hero-image {
      display: flex;
      justify-content: center;
      height: 180px; }
      .s-hero .container .hero-image img {
        margin-bottom: -39px; }
      @media (min-width: 768px) {
        .s-hero .container .hero-image {
          height: 240px; }
          .s-hero .container .hero-image img {
            margin-bottom: -52px; } }

.grid-articles {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px; }
  @media (min-width: 768px) {
    .grid-articles {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* marcado */
  @media (max-width: 768px) {
    .grid-articles {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .grid-articles {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      /* margin-left: 2%; */
      /* max-width: 115%; */
    }
  }

.cardnews {
  transition: all .2s linear; }
  .cardnewshh {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 12px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0px 8px 32px -12px rgba(33, 46, 99, 0.08);
    transition: all .2s linear; }
  .cardnews a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0px 8px 32px -12px rgba(33, 46, 99, 0.08);
    transition: all .2s linear; }
    @media (min-width: 768px) {
      .cardnews a {
        padding: 24px;
        align-items: start; }
        .cardnewsh div {
        padding: 24px;
        align-items: start; } }
    /* marcado */
    .cardnews a .cardnews__image {
      flex: 1 0 auto;
      background: #fff;
      justify-content: center;
      align-items: center;
      border: 1px solid #edeef3;
      border-radius: 8px;
      margin-right: 24px;
      max-width: 12rem;
      height: 96px; }
      .cardnewsh div .cardnews__image {
      flex: 1 0 auto;
      background: #fff;
      justify-content: center;
      align-items: center;
      border: 1px solid #edeef3;
      border-radius: 8px;
      margin-right: 24px;
      max-width: 12rem;
      height: 96px; }
      @media (max-width: 768px) {
        .cardnews a .cardnews__image {
          width: 96px;
          height: 96px; }
          .cardnewsh div .cardnews__image {
          width: 96px;
          height: 96px; }}
      @media (min-width: 768px) {
    .cardnews a .cardnews__image {
      width: 12.0rem;
      height: 180px; }
      .cardnewsh div .cardnews__image {
      width: 12.0rem;
      height: 180px; }
      .cardnewsh div .cardnews__image {
      width: 12.0rem;
      height: 180px; } }
      .cardnews a .cardnews__image img {
        width: 100%;
        height: 100%; }
        .cardnewsh div .cardnews__image img {
        width: 100%;
        height: 100%; }
    .cardnews a .cardnews__body {
      flex: 0 1 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between; }
      .cardnewsh div .cardnews__body {
      flex: 0 1 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between; }
      .cardnews a .cardnews__body .cardnews__content {
        display: flex;
        flex-direction: column; }
      .cardnewsh div .cardnews__body .cardnews__content {
        display: flex;
        flex-direction: column; }
        .cardnews a .cardnews__body .cardnews__content .cardnews__title {
          color: #212e63;
          font-size: 1.125rem;
          font-weight: medium;
          line-height: 25px;
          margin-top: 0;
          margin-bottom: 8px; }
          .cardnewsh div .cardnews__body .cardnews__content .cardnews__title {
          color: #212e63;
          font-size: 1.125rem;
          font-weight: medium;
          line-height: 25px;
          margin-top: 0;
          margin-bottom: 8px; }
      /* marcado */
      @media (max-width: 768px) {
        .cardnews a .cardnews__body .cardnews__content .cardnews__title {
          color: #212e63;
          font-size: 0.905rem;
          font-weight: medium;
          line-height: 18px;
          margin-top: 0;
          margin-bottom: 8px;
        }
        .cardnewsh div .cardnews__body .cardnews__content .cardnews__title {
          color: #212e63;
          font-size: 0.905rem;
          font-weight: medium;
          line-height: 18px;
          margin-top: 0;
          margin-bottom: 8px;
        }
      }
        .cardnews a .cardnews__body .cardnews__content .cardnews__prices {
          position: relative;
          display: flex;
          flex-direction: column;
          margin-bottom: 16px; }
        .cardnewsh div .cardnews__body .cardnews__content .cardnews__prices {
          position: relative;
          display: flex;
          flex-direction: column;
          margin-bottom: 16px; }
          .cardnews a .cardnews__body .cardnews__content .cardnews__prices .promotionalprice {
            color: #7981a1;
            font-size: 0.8125rem;
            font-weight: normal;
            line-height: 18px;
            margin-bottom: 4px;
            text-decoration: line-through; }
          .cardnews a .cardnews__body .cardnews__content .cardnews__prices .price {
            color: #212e63;
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 25px; }
            .cardnewsh div .cardnews__body .cardnews__content .cardnews__prices .promotionalprice {
            color: #7981a1;
            font-size: 0.8125rem;
            font-weight: normal;
            line-height: 18px;
            margin-bottom: 4px;
            text-decoration: line-through; }
          .cardnewsh div .cardnews__body .cardnews__content .cardnews__prices .price {
            color: #212e63;
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 25px; }
            @media (max-width: 768px) {
              .cardnews a .cardnews__body .cardnews__content .cardnews__prices .price {
                color: #212e63;
                font-size: 0.905rem;
                font-weight: 500;
                line-height: 10px;
              }
              .cardnewsh div .cardnews__body .cardnews__content .cardnews__prices .price {
                color: #212e63;
                font-size: 0.905rem;
                font-weight: 500;
                line-height: 10px;
              }
            }
          .cardnews a .cardnews__body .cardnews__content .cardnews__prices .badge-price {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 4px 8px;
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1;
            color: #fff;
            background-color: #E83C4D;
            border-radius: 4px; }
          .cardnewsh div .cardnews__body .cardnews__content .cardnews__prices .badge-price {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 4px 8px;
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1;
            color: #fff;
            background-color: #E83C4D;
            border-radius: 4px; }
            @media (max-width: 768px) {
              .cardnews a .cardnews__body .cardnews__content .cardnews__prices .badge-price {
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 3px 7px;
                font-size: 0.65rem;
                font-weight: 600;
                line-height: 1;
                color: #fff;
                background-color: #E83C4D;
                border-radius: 4px;
              }
              .cardnewsh div .cardnews__body .cardnews__content .cardnews__prices .badge-price {
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 3px 7px;
                font-size: 0.65rem;
                font-weight: 600;
                line-height: 1;
                color: #fff;
                background-color: #E83C4D;
                border-radius: 4px;
              }
            }
        .cardnews a .cardnews__body .cardnews__content .cardnews__expert {
          color: #212e63;
          font-size: 0.875rem;
          font-weight: normal;
          line-height: 19px;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden; }
        .cardnewsh div .cardnews__body .cardnews__content .cardnews__expert {
          color: #212e63;
          font-size: 0.875rem;
          font-weight: normal;
          line-height: 19px;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden; }
    .cardnews a .site-offer {
      display: flex;
      font-size: 1.2rem;
      color: #7a82a2;
      align-items: center; }
      .cardnewsh div .site-offer {
      display: flex;
      font-size: 1.2rem;
      color: #7a82a2;
      align-items: center; }
      @media (max-width: 768px) {
        .cardnews a .site-offer {
        display: flex;
        font-size: 0.7rem;
        color: #7a82a2;
        align-items: center; }
        .cardnewsh div .site-offer {
        display: flex;
        font-size: 0.7rem;
        color: #7a82a2;
        align-items: center; }
      }
      .cardnews a .site-offer svg {
        margin-right: 6px;
      }
      .cardnewsh div .site-offer svg {
        margin-right: 6px;
      }
      @media (max-width: 768px) {
        .cardnews a .site-offer svg {
          margin-right: 4px; }
        .cardnewsh div .site-offer svg {
          margin-right: 4px; }
      }
  .cardnews:hover {
    transform: translateY(-3px); }
    .cardnews:hover a {
      box-shadow: 0px 8px 24px -8px rgba(33, 46, 99, 0.24); }


.widget {
  margin-bottom: 40px; }
  .widget-category .category-menu {
    list-style: none;
    margin: 0;
    padding: 0; }
    .widget-category .category-menu .cat-item a {
      display: block;
      background-color: #fff;
      border-radius: 16px;
      padding: 16px 24px;
      border: 1px solid #e8ebf7;
      font-weight: 600;
      color: #212E63; }
      .widget-category .category-menu .cat-item a:hover {
        color: #E83C4D; }
  .widget-follow .social-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #e8ebf7; }
    .widget-follow .social-menu .social-item {
      margin-bottom: 24px; }
      .widget-follow .social-menu .social-item a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #212E63;
        margin-bottom: 0; }
        .widget-follow .social-menu .social-item a .icone {
          flex: 0 1 auto;
          width: 44px;
          margin-right: 16px; }
          .widget-follow .social-menu .social-item a .icone path {
            fill: #212E63; }
        .widget-follow .social-menu .social-item a:hover {
          color: #E83C4D; }
          .widget-follow .social-menu .social-item a:hover .icone path {
            fill: #E83C4D; }
      .widget-follow .social-menu .social-item:last-child {
        margin-bottom: 0; }
.btn-item a:hover {
  background-color: #fff;
  border: none;
  color: #E83C4D;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
}
.loading-gif {
  width: 7%;
}
.paginacao {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px; }
  .paginacao .page-item {
    flex: 0 1 auto;
    margin-right: 8px; }
    .paginacao .page-item button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      text-align: center;
      color: #212E63;
      border-radius: 32px;
      border: none;
    }
      .paginacao .page-item button:hover {
        background-color: #fff;
        color: #E83C4D; }
        .paginacao .page-item button:hover svg path {
          fill: #E83C4D; }
    .paginacao .page-item:last-child {
      margin-right: 0; }
    .paginacao .page-item.active button {
      background-color: #E83C4D;
      color: #fff;
      border: none;
    }

.filters-bar {
  display: flex;
  justify-content: space-between;
 }
 /* marcado */
 @media (max-width: 768px) {
      .filters-bar {
        min-width: 280px;
      }
   }
  @media (max-width: 385px) {
    .filters-bar {
      min-width: 280px;
      /* margin-left: 4%;
      width: 120%; */
    }
  }
  .filters-bar .categories-filter {
    min-width: 55%; }
    @media (min-width: 768px) {
      .filters-bar .categories-filter {
        min-width: 280px; } }

#footer {
  background-color: #fff;
  width: 100%;
  min-height: 100px;
  padding: 40px 0; }
  #footer .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center; }
    @media (min-width: 768px) {
      #footer .container {
        flex-direction: row; } }
  #footer .brand-footer img {
    height: 56px;
    margin-bottom: 24px; }
  @media (min-width: 768px) {
    #footer .brand-footer img {
      margin-bottom: 0; } }
  #footer .widget {
    margin-bottom: 0; }
    #footer .widget .social-menu {
      border-radius: 0 !important;
      border: 0;
      padding: 0;
      display: flex; }
      #footer .widget .social-menu li {
        margin-right: 32px;
        margin-bottom: 0; }
        #footer .widget .social-menu li a svg {
          margin-right: 8px; }
        #footer .widget .social-menu li:last-child {
          margin-right: 0; }


`
