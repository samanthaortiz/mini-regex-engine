# Mini Regex Engine

This is an implementation of a mini regular expression engine.


## Setup
Use NPM to install packages
```
npm i
```

## Testing
Test suite runs jest specs
```
npm run test
```

## Use Cases
### Literals: 

- For example, the pattern `"cat"` on the string `"the cat sat on the mat"` results in `["cat"]`

### Alternation via the `"|"` (pipe) symbol: 

- For example, the pattern `"cat|dog"` on the string `"the cat sat on the dog"` results in `["cat", "dog"]`

## Assumptions:

  - We will only accept strings
  - Eager matching
    - Literal: We will only match the FIRST match, not all instances of a match.
    - Alternate: We will only match the FIRST match of EACH alternate, not all instances of matches.
  - If we do not have any matches, we return an empty array
  - We will return a match even if it is a substring of another word.
    - Literal: For example the pattern `"cat"` on the string `"the catdog sat on the mat"` results in `["cat"]`
    - Alternate: For example the pattern `"cat|dog"` on the string `"the dogcat sat on the mat"` results in `["cat", "dog"]`

## Proposed future solution enhancement on  given prompt:
  - Handle literals with escaped pipe characters 
    - For example the pattern `"cat\|dog"` on the string `"the cat|dog sat on the mat"` results in `["cat|dog"]`
