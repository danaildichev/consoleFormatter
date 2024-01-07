class ConsoleFormatter
{
    constructor(styles = undefined)
    {
        this.styles = (!styles) ? this.getDefaultStyles() : styles;
    }


    /**
     * Used to set default styles upon construction.
     *
     * @return {Object} Contains groups of strings. CSS rules for formatted console messages
     */
    getDefaultStyles()
    {
        return {
            badges:
            {
                // -----------------
                // contextual badges

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
                todo: 'color: fuchsia; background-color: #3d003d; border-inline: 2px solid fuchsia;',

                // end contextual badges
                // ---------------------

                // --------------
                // colored badges

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

                // end colored badges
                // ------------------
            }
        }
    }


    /**
     * Get the style of a particular badge type
     *
     * @param {String} type Which badge to get
     * @return {string} A CSS rule
     */
    getBadgeStyle(type)
    {
        return this.styles.badges[type] + ' border-radius: 0.5rem 1rem; font-weight: bold; padding: 0 0.5rem';
    }


    /**
     * Calls getStyledOutput() to build a console output string with a badge and message
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     * @param  {String} style The style of the badge
     *
     * @return {*[]} An array containing arguments to be spread out as a console message
     */
    getBadge(label, message, style)
    {
        return this.getStyledOutput(undefined, [label], undefined, undefined, [style], message);
    }

    /**
     * Logs a badge & message to the console. Badge can be the default style or a colored background. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     * @param {String} color Optional. Badge will use this.styles.badges.default or this.styles.badges.color. Default undefined.
     */
    badge(label, message, color = undefined)
    {
        // const style = (color) ? this.styles.badges[color] : this.styles.badges.default;
        const style = (color) ? this.getBadgeStyle(color) : this.getBadgeStyle('default');
        console.log(...this.getBadge(label, message, style));
    }

    /**
     * Contextual badge. Uses console.debug().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeDebug(label, message){ console.debug(...this.getBadge(label, message, this.getBadgeStyle('debug'))); }

    /**
     * Contextual badge for recording exceptions and interruptions. Uses console.error().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeError(label, message){ console.error(...this.getBadge(label, message, this.getBadgeStyle('error'))); }

    /**
     * Contextual badge for labeling the source of a bug. Uses console.error().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeBlame(label, message){ console.error(...this.getBadge(label, message, this.getBadgeStyle('blame'))); }

    /**
     * Contextual badge for when Dev sees a (possible) problem and can't or won't preemptively fix it.
     * Intended for use with interrupting program execution, to obtain more input from the user.
     * Uses console.error().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeAlert(label, message){ console.error(...this.getBadge(label, message, this.getBadgeStyle('alert'))); }

    /**
     * Contextual badge used to notify the user that:
     * - Dev saw a (possible) problem
     * - preemptively "fixed it",
     * - and it is possible/likely that data/calculations/output/etc. may not progress as desired or come out as intended.
     * Uses console.warn().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeWarn(label, message){ console.warn(...this.getBadge(label, message, this.getBadgeStyle('warn'))); }

    /**
     * Contextual badge for 'success' or 'true'. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeSuccess(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('success'))); }

    /**
     * Contextual badge for 'fail' or 'false'. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeFail(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('fail'))); }

    /**
     * Contextual badge for 'nonsense'. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeMistake(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('mistake'))); }

    /**
     * Contextual badge for when Dev can tell that the user is not using something correctly. Uses console.warn().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeUserError(label, message){ console.warn(...this.getBadge(label, message, this.getBadgeStyle('userError'))); }

    /**
     * Contextual badge for a test case was unable to be validated, e.g. hung process, not enough data, etc. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeInconclusive(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('inconclusive'))); }

    /**
     * Contextual badge for an undefined argument or object. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeUndefined(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('undefined'))); }

    /**
     * Contextual badge for a null, "", or 0 value. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeEmpty(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('empty'))); }

    /**
     * Contextual badge for describing a local detail or circumstance. Uses console.info().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeInfo(label, message){ console.info(...this.getBadge(label, message, this.getBadgeStyle('info'))); }

    /**
     * Contextual badge for adding tangential information. E.g. "For more information see someLink". Uses console.log()
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeNote(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('note'))); }

    /**
     * Contextual badge for advice or instructions for the user from the dev. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeSuggestion(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('suggestion'))); }

    /**
     * Contextual badge for a reminder for the Dev to finish something. Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     */
    badgeTodo(label, message){ console.log(...this.getBadge(label, message, this.getBadgeStyle('todo'))); }

    /**
     * Calls getBadge() to build a console output string with badge and message and a fully customized style on the badge.
     * Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     * @param {String} style CSS rules for the badge
     */
    badgeCustom(label, message, style){ console.log(...this.getBadge(label, message, style)); }

    /**
     * Calls badgeCustom() to build a console output string with badge and message and only customizing color and background-color of the badge.
     * Uses console.log().
     *
     * @param {String} label The text that will appear in the badge
     * @param {String} message The text that will appear next to the badge
     * @param {String} color CSS color value for badge font color
     * @param {String} bgColor CSS color value for badge background-color
     * @param {String} extraCSS Optional Additional CSS rules. Default undefined.
     */
    badgeCustomQuick(label, message, color, bgColor, extraCSS = undefined)
    {
        let style = `color: ${color}; background-color: ${bgColor}; ${this.getBadgeStyle('blank')}`;
        if (extraCSS) { style += `; ${extraCSS}` }
        this.badgeCustom(label, message, style);
    }


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

    /**
     * Calls getStyledOutput() to build a console output string. Uses console.warn().
     *
     * @param {Array} values A list that will be used to build the output
     * @param {Array} styles A list of CSS rules that will be used to style the values
     * @param {String} [separatorChars] Optional. String to separate the values. Default ''.
     * @param {String} [endChars] Optional. String to append to the last value as a separator. Default ''.
     */
    warn(values, styles, separatorChars = '', endChars = '')
    {
        console.warn(...this.getStyledOutput(undefined, values, separatorChars, endChars, styles))
    }

    /**
     * Calls getStyledOutput() to build a console output string. Uses console.error().
     *
     * @param {Array} values A list that will be used to build the output
     * @param {Array} styles A list of CSS rules that will be used to style the values
     * @param {String} [separatorChars] Optional. String to separate the values. Default ''.
     * @param {String} [endChars] Optional. String to append to the last value as a separator. Default ''.
     */
    error(values, styles, separatorChars = '', endChars = '')
    {
        console.error(...this.getStyledOutput(undefined, values, separatorChars, endChars, styles))
    }

    /**
     * Calls getStyledOutput() to build a console output string. Uses console.info().
     *
     * @param {Array} values A list that will be used to build the output
     * @param {Array} styles A list of CSS rules that will be used to style the values
     * @param {String} [separatorChars] Optional. String to separate the values. Default ''.
     * @param {String} [endChars] Optional. String to append to the last value as a separator. Default ''.
     */
    info(values, styles, separatorChars = '', endChars = '')
    {
        console.info(...this.getStyledOutput(undefined, values, separatorChars, endChars, styles))
    }

    /**
     * Calls getStyledOutput() to build a console output string. Uses console.debug().
     *
     * @param {Array} values A list that will be used to build the output
     * @param {Array} styles A list of CSS rules that will be used to style the values
     * @param {String} [separatorChars] Optional. String to separate the values. Default ''.
     * @param {String} [endChars] Optional. String to append to the last value as a separator. Default ''.
     */
    debug(values, styles, separatorChars = '', endChars = '')
    {
        console.debug(...this.getStyledOutput(undefined, values, separatorChars, endChars, styles))
    }


    /**
     * Format a list of one or more "Value(s)" as "%cValue(s)" joined as a string with custom separation chars.
     *
     * @param {Array} values What to join. E.g. list of strings.
     * @param {string} [separatorChars] Optional. Chars between values. Default ''.
     * @param {string} [endChars] Optional. Chars after last value. Default ''.
     * @return {string}
     */
    valuesToMarkupString(values, separatorChars = '', endChars = '')
    {
        return '%c' + values.join(`${separatorChars}%c`) + endChars;
    }


    /**
     * Build a string to be used as styled output in a console function
     *
     * @param {String} preText Optional. A string that can be prepended to the output. Default ''.
     * @param {Array} valuesToUse A list that will be used to build the output
     * @param {String} separatorChars Optional. String to separate the values. Default ''.
     * @param {String} endChars Optional. String to append to the last value as a separator. Default ''.
     *
     * @return {string}
     */
    getOutputStringToBeStyled(preText, valuesToUse, separatorChars, endChars)
    {
        let stringToBeStyled = '';
        if (preText) { stringToBeStyled = preText + this.valuesToMarkupString(valuesToUse, separatorChars, endChars) }
        else { stringToBeStyled = this.valuesToMarkupString(valuesToUse, separatorChars, endChars) }
        return stringToBeStyled;
    }


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
    {
        // make copies of values and styles to be used for updating in case of mismatched array lengths
        const valuesToUse = [...values];
        const stylesToUse = [...styles];

        // if not using string substitution
        // and values and styles array lengths do not match
        if (!valuesIncludeSubstitutions && valuesToUse.length !== stylesToUse.length)
        {
            // log a warning message to the console
            // and pad the shorter array with empty strings
            this.healValuesAndStylesArrayLengths(valuesToUse, stylesToUse);
        }

        // build the message to be logged with styling (with or without substitution)
        let stringToBeStyled = this.getOutputStringToBeStyled(preText, valuesToUse, separatorChars, endChars);

        // if using string substitution
        // and number of permissible styling/substitution flags does not match number of criteria
        if (valuesIncludeSubstitutions && !this.permissibleFlagsLengthMatchesCriteriaLength(stringToBeStyled, stylesToUse))
        {
            // pad the shorter one with (string type flags) or (empty strings as criteria)
            // then reset the output string with the updated values
            this.healFlagsAndCriteriaLengths(stringToBeStyled, valuesToUse, stylesToUse);
            stringToBeStyled = this.getOutputStringToBeStyled(preText, valuesToUse, separatorChars, endChars);
        }

        const styledOutput = [stringToBeStyled, ...stylesToUse];
        if (postText) { styledOutput.push(postText) }
        return styledOutput;
    }


    /**
     * Fires if getStyledOutput() is not using string substitution and array lengths of values and styles do not match.
     * Builds a warning message, pads the shorter of the two arrays with empty strings, then logs the warning message
     *
     * @param {Array} values
     * @param {Array} styles
     *
     * @return {undefined}
     */
    healValuesAndStylesArrayLengths(values, styles)
    {
        // build the first part of the warning message
        const arrayLengthWarning =
            [
                'Warning: Array length mismatch.\n',
                `- Used ${values.length} values and ${styles.length} styles to build a console output string.\n`
            ];

        // heal the length of the shorter array
        this.makeArrayLengthsMatch(values, styles);

        // append some more descriptive context to the warning message
        arrayLengthWarning.push('- Array lengths have been adjusted.\n');
        arrayLengthWarning.push('- Output may not be styled as intended.');

        // log the warning message to the console
        console.warn(...arrayLengthWarning);
    }


    /**
     * Determines which of 2 arrays is longer, then pushes empty strings onto the shorter one so that their lengths match
     *
     * @param {Array} values
     * @param {Array} styles
     *
     * @return {undefined}
     */
    makeArrayLengthsMatch(values, styles)
    {
        const lengths = [];
        lengths[values.length] = values;
        lengths[styles.length] = styles;

        const shorterLength = Math.min(values.length, styles.length);
        const longerLength = Math.max(values.length, styles.length);

        const shorterOne = lengths[shorterLength];

        for (let i = shorterLength; i < longerLength; i++)
        {
            shorterOne[i] = '';
        }

    }


    /**
     * Fires if using string substitution and number of styling/substitution flags does not match number of criteria.
     * Determines number of permissible flags in valuesString.
     * Then pads number of flags or criteria, whichever is shorter, with string type flags or empty strings.
     * Builds a warning message and logs it to the console
     *
     * @param {String} valuesString The string that would be used as output in a console function.
     * @param {Array} values The values array that was used to build the valuesString.
     * @param {Array} styles The styles array that was used to build the valuesString.
     *
     * @return {undefined}
     */
    healFlagsAndCriteriaLengths(valuesString, values, styles)
    {
        // convert valuesString to an array of chars
        const allChars = valuesString.split('');

        // get each index of '%' found in allChars
        const possibleFlagPositions = this.getIndexesOfCharInArray('%', allChars);

        // get all substrings of valuesString between '%' positions
        // i.e. possibly flagged
        const possiblyFlaggedSubstrings = [];
        for (let i in possibleFlagPositions)
        {
            i = Number(i);
            const start = possibleFlagPositions[i];
            const end = possibleFlagPositions[i + 1];
            const substring = valuesString.slice(start, end);
            possiblyFlaggedSubstrings.push(substring);
        }

        // determine which substrings contain permissible flags
        const permissibleFlaggedSubstrings = [];
        for (const possiblyFlaggedSubstring of possiblyFlaggedSubstrings)
        {
            const possibleFlag = possiblyFlaggedSubstring.slice(0, 2);
            const isPermissible = this.isPermissibleFlag(possibleFlag);
            if (isPermissible) { permissibleFlaggedSubstrings.push(possiblyFlaggedSubstring) }

        }

        // build the first part of the warning message
        const argumentsLengthWarning =
        [
            'Warning: Arguments length mismatch.\n',
            `- Used ${permissibleFlaggedSubstrings.length} flags with ${styles.length} criteria to build a console output string with styling and/or substitution.\n`
        ];

        // if there are more flags than style/substitution criteria
        if (permissibleFlaggedSubstrings.length > styles.length)
        {
            // determine how many times style/substitution criteria needs to be padded
            const timesToPadStyles = permissibleFlaggedSubstrings.length - styles.length;
            for (let i = 0; i < timesToPadStyles; i++)
            {
                // pad style/substitution criteria with empty strings
                styles.push('');
            }

            // append some more descriptive context to the warning message
            argumentsLengthWarning.push('- Criteria list has been padded with empty strings.\n');
        }

        // else there are more styles/substitution criteria than flags
        else
        {
            // determine how many times flags need to be padded
            const timesToPadValues = styles.length - permissibleFlaggedSubstrings.length;
            for (let i = 0; i < timesToPadValues; i++)
            {
                // pad the first member of the values
                values[0] += '%s';
            }

            // append some more descriptive context to the warning message
            argumentsLengthWarning.push('- Extra string type substitution flags have been padded to output.\n');
        }

        // output the warning message to the console.
        argumentsLengthWarning.push('- Output is unlikely to be styled as intended.');
        console.warn(...argumentsLengthWarning);
    }


    /**
     * Searches an array to find all indexes of a certain character
     *
     * @param {String} char The character that is being searched for.
     * @param {Array} allChars A string that was converted to an array to be searched in.
     *
     * @return {*[]} A list of each position that char was found in allChars.
     */
    getIndexesOfCharInArray(char, allChars)
    {
        const positions = [];
        for (const i in allChars)
        {
            if (allChars[i] === char)
            {
                positions.push(Number(i));
            }
        }
        return positions;
    }


    /**
     * Iterates through (a string that was converted to an) array for characters at a certain position.
     * Collects the character at that position and the next character after it.
     *
     * @param {Array} possibleFlagPositions A list of indexes.
     * @param {Array} allChars A string that was converted to an array.
     *
     * @return {*[]} A list of 2 character strings that could be a styling or a substitution flag.
     */
    getPossibleFlags(possibleFlagPositions, allChars)
    {
        const possibleFlags = [];
        for (const possibleFlagPosition of possibleFlagPositions)
        {
            possibleFlags.push(allChars[possibleFlagPosition] + allChars[possibleFlagPosition + 1]);
        }
        return possibleFlags;
    }


    /**
     * Determines if a string is a permissible styling or substitution flag.
     *
     * @param {String} possibleFlag A 2 character string that could be a flag.
     * @return {boolean} Whether possibleFlag is a permissible flag.
     */
    isPermissibleFlag(possibleFlag)
    {
        const permissibleFlags = ['%c', '%d', '%f', '%i', '%o', '%O', '%s'];
        return permissibleFlags.includes(possibleFlag);
    }


    /**
     * Iterates through a list of possible flags searching for and recording permissible flags.
     *
     * @param {Array} possibleFlags A list of strings that could be flags.
     *
     * @return {*[]} A list of the possible flags that are permissible flags.
     */
    getPermissibleFlagsFoundIn(possibleFlags)
    {
        const flagsFound = [];
        for (const possibleFlag of possibleFlags)
        {
            if (this.isPermissibleFlag(possibleFlag)) { flagsFound.push(possibleFlag) }
        }
        return flagsFound;
    }


    /**
     * Creates a list of permissible flags found in a string.
     *
     * @param {String} valuesString The string to search for permissible flags in.
     *
     * @return {*[]} A list of permissible flags.
     */
    getPermissibleFlagsFoundInValuesString(valuesString)
    {
        // convert valuesString to an array of chars
        const allChars = valuesString.split('');

        // get each index of '%' found in allChars
        const possibleFlagPositions = this.getIndexesOfCharInArray('%', allChars);

        // get each instance of '%' and the letter that comes after it
        const possibleFlags = this.getPossibleFlags(possibleFlagPositions, allChars);

        // return each instance that is a valid flag for styling or substitution
        return this.getPermissibleFlagsFoundIn(possibleFlags);
    }


    /**
     * Determines if the number of permissible flags found in the values string
     * matches the number of styles/substitutions supplied to getStyledOutput().
     *
     * @param {String} valuesString The string to search for permissible flags in.
     * @param {Array} styles The array of styles/substitutions criteria to compare number of permissible flags against.
     *
     * @return {boolean} Whether or not the number of permissible flags matches the number of criteria.
     */
    permissibleFlagsLengthMatchesCriteriaLength(valuesString, styles)
    {
        const flagsFound = this.getPermissibleFlagsFoundInValuesString(valuesString);
        return (flagsFound.length === styles.length);
    }


}
