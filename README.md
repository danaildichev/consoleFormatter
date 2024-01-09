# consoleFormatter

![Static Badge](https://img.shields.io/badge/version-1-blue)

Opinionated extensions for console messages.

Use the `ConsoleFormatter` JS class to easily log messages with custom or preformatted styles. See `index.html` or the live demo for examples.

## Live Demo

[https://danaildichev.net/portfolio/code-samples/console-formatter](https://danaildichev.net/portfolio/code-samples/console-formatter)

## Install

Get a copy of `ConsoleFormatter.js` and create a new instance of the class

```javascript
<script src="path/to/ConsoleFormatter.js"></script>
<script>
    const CF = new ConsoleFormatter();
</script>
```

## Usage

### Badges

<details>

<summary>1. Messages with a preformatted badge</summary>

```javascript
// this will log a message with a green badge
// the badge's label will be: Hooray
// the message will be: You logged a message with a green badge
CF.badge('Hooray', 'You logged a message with a green badge', 'green');
```

There are 19 colored badges and 17 contextual badges

<details>

<summary>Colored badges</summary>

```javascript
blank: '',
black: 'color: white; background-color: black;',
gray: 'color: white; background-color: #444;',
white: 'color: black; background-color: white;',
red: 'color: white; background-color: red;',
orange: 'color: black; background-color: orange;',
yellow: 'color: black; background-color: yellow;',
lime: 'color: black; background-color: lime;',
green: 'color: white; background-color: green;',
cyan: 'color: black; background-color: cyan;',
sky: 'color: white; background-color: deepskyblue;',
blue: 'color: white; background-color: blue;',
navy: 'color: white; background-color: navy;',
dusk: 'color: white; background-color: mediumslateblue;',
indigo: 'color: white; background-color: indigo;',
violet: 'color: white; background-color: violet;',
purple: 'color: white; background-color: purple;',
fuchsia: 'color: white; background-color: fuchsia;',
pink: 'color: white; background-color: deeppink;'
```

</details>

<details>

<summary>Contextual badges</summary>

```javascript
// errors
error: 'color: red; background-color: #3d0000; border-inline: 2px solid red;',
blame: 'color: orange; background-color: #3d2600; border-inline: 2px solid orange;',
alert: 'color: yellow; background-color: #262316; border-inline: 2px solid yellow;',

// warnings
userError: 'color: orange; background-color: #3d2600; border-inline: 2px solid orange;',
warn: 'color: yellow; background-color: #262316; border-inline: 2px solid yellow;',

// troubleshooting
undefined: 'color: white; background-color: black; border-inline: 2px solid black;',
debug: 'color: white; background-color: black; border-inline: 2px solid white;',
empty: 'color: #bbb; background-color: #444; border-inline: 2px solid #bbb; border-radius:',
default: 'color: black; background-color: white; border-inline: 2px solid white;',
fail: 'color: red; background-color: #3d0000; border-inline: 2px solid red;',
mistake: 'color: orange; background-color: #3d2600; border-inline: 2px solid orange;',
inconclusive: 'color: yellow; background-color: #262316; border-inline: 2px solid yellow;',
success: 'color: lime; background-color: #003d00; border-inline: 2px solid lime;',
info: 'color: darkturquoise; background-color: #003d3d; border-inline: 2px solid darkturquoise;',
note: 'color: deepskyblue; background-color: #00003d; border-inline: 2px solid deepskyblue;',
suggestion: 'color: violet; background-color: indigo; border-inline: 2px solid violet;',
todo: 'color: fuchsia; background-color: #3d003d; border-inline: 2px solid fuchsia;'

// all contextual badges additionally include 'border-radius: 0.5rem 1rem; font-weight: bold; padding: 0 0.5rem'
```

</details>

Contextual badges have a corresponding function, for example:

```javascript
// this will log a message with a success badge
// the badge's label will be: SUCCESS
// the message will be: A test case passed
CF.badgeSuccess('SUCCESS', 'A test case passed');
```

</details>

<details>

<summary>2. Messages with a custom badge</summary>

There are 3 variations for a custom badge.

<details>

<summary>Variation 1 - a fully custom badge</summary>

```javascript
// a fully custom badge
/**
* @param {String} labelText
* @param {String} messageText
* @param {String} badgeStyle CSS rules
*/
CF.badgeCustom(labelText, messageText, badgeStyle);

// e.g.
CF.badgeCustom('CUSTOM 1', 'A fully customized badge with a message', 'color: white; background-color: tomato; font-weight: bold; padding: 0 0.5rem; border-radius: 0.25rem; border: 1px solid white');
```

</details>

<details>

<summary>Variation 2 -  a badge with custom font and background color</summary>

```javascript
// a badge with custom font and background color
/**
* @param {String} labelText
* @param {String} messageText
* @param {String} fontColor CSS color name or value
* @param {String} backgroundColor CSS color name or value
*/
CF.badgeCustom(labelText, messageText, fontColor, backgroundColor);

// e.g.
CF.badgeCustomQuick('CUSTOM 2', 'A default badge with custom color and background-color', 'darkviolet', 'lavender');
```

</details>

<details>

<summary>Variation 3 -  a badge with custom font, background color, and extra CSS</summary>

```javascript
// a badge with custom font, background color, and extra CSS
/**
* @param {String} labelText
* @param {String} messageText
* @param {String} fontColor CSS color name or value
* @param {String} backgroundColor CSS color name or value
* @param {String} extraCSS CSS rules. NOTE: Consoles do not support every possible CSS property
*/
CF.badgeCustom(labelText, messageText, fontColor, backgroundColor, extraCSS);

// e.g.
CF.badgeCustomQuick('CUSTOM 3', 'A default badge with custom color and background-color and extra CSS', 'darkviolet', 'lavender', 'border-inline: 4px solid darkviolet');
```

</details>

</details>

### Formatted Text

How to use the built-in extensions for console's `log()`, `warn()`, `error()`, `info()`, and `debug()` functions

<details>

<summary>1. Default</summary>

```javascript
/**
* @param {Array} values A list of strings to be joined into a formatted console message
* @param {Array} styles A list of CSS rules to be applied to a each formatted span of the console message
*/
CF.log(values, styles);
CF.warn(values, styles);
CF.error(values, styles);
CF.info(values, styles);
CF.debug(values, styles);

// e.g.
CF.log(['Multi styled ', 'log ', 'output.'], ['color: red', 'color: white', 'color: lime']);
```

</details>

<details>

<summary>2. Default with preformatted badges</summary>

```javascript
// it's the same as this:

/**
* @param {Array} values A list of strings to be joined into a formatted console message
* @param {Array} styles A list of CSS rules to be applied to a each formatted span of the console message
*/
CF.log(values, styles);

// but in practice it would look like:
CF.log(['Example', 'badge and message ', 'with multi styled text.'], [CF.getBadgeStyle('pink'), 'color: deeppink; margin-left: 0.5rem', 'color: lime']);
// where in you'd have a pink badge whose label is: Example
// followed by the text, 'badge and message ', with deeppink font color and 0.5rem left margin
// followed by the text, 'with multi styled text.', with lime font color
```

</details>

<details>

<summary>3. Default with custom badges</summary>

There is more than one way to do this, but essentially you've just circled back to using `CF.log(values, styles)`.

</details>

### Which CSS rules can I use?

You'll want to check the documentation for the browser(s) that you want to support. MDN lists (for Firefox):

<details>

<summary>From MDN</summary>

- `background` (and its longhand equivalents)
- `border` (and its longhand equivalents)
- `border-radius`
- `box-decoration-break`
- `box-shadow`
- `clear` and `float`
- `color`
- `cursor`
- `display`
- `font` (and its longhand equivalents)
- `line-height`
- `margin`
- `outline` (and its longhand equivalents)
- `padding`
- `text-*` (properties such as text-transform)
- `white-space`
- `word-spacing` and `word-break`
- `writing-mode`

</details>

### What about substitution

I actually did take the time to make the ConsoleFormatter support styled substitution. In my opinion you are better off handling that before passing in the `values` array of strings. Substitution can be handled using one of the ConsoleFormatter's lower level functions, `getStyledOutput()`. Let me show you a couple of details about the ConsoleFormatter class before we talk about using substitution.

### Using separation characters

Let's take a look at the ConsoleFormatter's `log()` function:

```javascript
/**
 * Calls getStyledOutput() to build a console output string. Uses console.log().
 *
 * @param {Array} values A list that will be used to build the output
 * @param {Array} styles A list of CSS rules that will be used to style the values
 * @param {String} [separatorChars] Optional. String to separate the values. Default ''.
 * @param {String} [endChars] Optional. String to append to the last value as a separator. Default ''.
 */
log(values, styles, separatorChars = '', endChars = '')
{
    console.log(...this.getStyledOutput(undefined, values, separatorChars, endChars, styles))
}
```

You can pass in separator and ending chars for each item in the `values` array like so:

```javascript
CF.log(['one', 'two', 'three'], ['color: red', 'color: yellow', 'color: lime'], '.', '?');
```

This will log `one.two.three?` where in 'one.', 'two.', and 'three?' are formatted with red, yellow, and lime font color respectively. **It's up to you to decide how you want to handle white-space characters.**

The `getStyledOutput()` function is the heart of the ConsoleFormatter class. Let's take a look at its signature:

```javascript
/**
 * Creates an array from [values], [styles], and the optional parameters which can be spread into a console message
 * Handles array length mismatch error for values and styles with or without substitution flags.
 *
 * @param {String} [preText] Optional. A string that can be prepended to the output. Default undefined.
 * @param {Array} values A list that will be used to build the output
 * @param {String} [separatorChars] Optional. String to separate the values. Default ''.
 * @param {String} [endChars] Optional. String to append to the last value as a separator. Default ''.
 * @param {Array} styles A list of CSS rules that will be used to style the values
 * @param {String} [postText] Optional. A string that can be appended to the output. Default undefined.
 * @param {Boolean} [valuesIncludeSubstitutions] Optional. Does 1 or more members of the values array use string substitution. Default false.
 *
 * @return {*[]} Array of arguments for a console function. E.g. console.log(...output)
 */
getStyledOutput(
    preText = undefined,
    values,
    separatorChars = '',
    endChars = '',
    styles,
    postText = undefined,
    valuesIncludeSubstitutions = false
)
```

You can use it like so:

```javascript
const messageValues = CF.getStyledOutput('pre text', ['one', 'two', 'three'], '.', '?', ['color: red', 'color: yellow', 'color: lime'], 'post text', false)

// messageValues would be
['pre text%cone.%ctwo.%cthree?', 'color: red', 'color: yellow', 'color: lime', 'post text']

// and then you can log it with
console.log(...messageValues)

// that's the equivalent of
console.log('pre text%cone.%ctwo.%cthree?', 'color: red', 'color: yellow', 'color: lime', 'post text')
```

### How to use getStyledOutput() to perform substitution

You can use any valid substitution flags. Let's say you wanted to use digits. Include the digits in the 'styles' array.

```javascript
console.log(...CF.getStyledOutput(undefined, ['a: %d', ' b: %d', ' c: %d'], '', '', ['color: red', 1, 'color: yellow', 2, 'color: lime', 3], undefined, true))
```

That would log `a: 1 b: 2 c: 3` to the console where in 'a: 1', ' b: 2', and ' c: 3' are formatted with red, yellow, and lime font color respectively.

That would be the equivalent of

```javascript
console.log('%ca: %d%c b: %d%c c: %d', 'color: red', 1, 'color: yellow', 2, 'color: lime', 3)
```

## API

### log(), warn(), error(), info(), and debug()

```javascript
CF.log(values, styles);
CF.warn(values, styles);
CF.error(values, styles);
CF.info(values, styles);
CF.debug(values, styles);
```

### Custom Badges

```javasccript
CF.badgeCustom(labelText, messageText, badgeStyle);
CF.badgeCustomQuick(labelText, messageText, fontColor, backgroundColor);
CF.badgeCustomQuick(labelText, messageText, fontColor, backgroundColor, extraCSS);
```

### Contextual Badges

<details>

<summary>Context</summary>

- ERROR: For catching exceptions
- BLAME: Dev or 3rd party wrote faulty code
- ALERT: Dev sees a (possible) problem and can\'t or won\'t preemptively fix it. For use with interrupting program execution, to obtain more input from the user.
- USER ERROR: The user is doing something incorrectly
- WARNING: Used to notify the user that Dev saw a (possible) problem, preemptively "fixed it", and it is possible/likely that data/calculations/output/etc. may not progress as desired or come out as intended.
- UNDEFINED: A query was made on an undefined object
- DEBUG: For use with console.debug()
- EMPTY: A query returned null, "", or 0
- FAIL: A test case did not pass
- MISTAKE: A test case is a non-sequitur
- INCONCLUSIVE: A test case was unable to be validated, e.g. hung process, not enough data, etc
- SUCCESS: A test case passed
- INFO: For describing a local detail or circumstance
- NOTE: For adding contextual tangential information. E.g. "For more information see someLink"
- SUGGESTION: Advice or instructions for the user from the dev
- TO DO: Reminder for the Dev to finish something

</details>

```javascript
CF.badgeError(labelText, messageText);
CF.badgeBlame(labelText, messageText);
CF.badgeAlert(labelText, messageText);
CF.badgeUserError(labelText, messageText);
CF.badgeWarn(labelText, messageText);
CF.badgeUndefined(labelText, messageText);
CF.badgeDebug(labelText, messageText);
CF.badgeEmpty(labelText, messageText);
CF.badgeFail(labelText, messageText);
CF.badgeMistake(labelText, messageText);
CF.badgeInconclusive(labelText, messageText);
CF.badgeSuccess(labelText, messageText);
CF.badgeInfo(labelText, messageText);
CF.badgeNote(labelText, messageText);
CF.badgeSuggestion(labelText, messageText);
CF.badgeTodo(labelText, messageText);
```



### Colored Badges

<details>

<summary>Colors</summary>

- black
- gray
- white
- violet
- fuchsia
- pink
- red
- orange
- yellow
- lime
- green
- cyan
- sky
- blue
- navy
- dusk
- indigo
- purple

</details>

```javasccript
CF.badge(labelText, messageText, color);
```

## Issues

Open an issue or hit me up.

## Contributing

PRs accepted.

## License

GPL-3.0
