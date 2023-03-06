const { runRegex } = require('./mini-regex-engine');

describe("String literal matching", () => {
  it('Outputs an array with one matching string literal', () => {
    const res = runRegex("cat", "the cat sat on the mat")
    expect(res).toEqual(["cat"])
  });

  it('Outputs an array with one matching string literal even if there is more than one match', () => {
    const res = runRegex("cat", "the cat sat on the mat with a cat")
    expect(res).toEqual(["cat"])
  });
  
  it('Outputs an array with one matching string literal when the match is a substring of another word', () => {
    const res = runRegex("cat", "the catdog sat on the mat with a cat")
    expect(res).toEqual(["cat"])
  });
  
  it('Outputs an empty array if there is no exact match', () => {
    const res = runRegex("cat", "the c a t sat on the mat")
    expect(res).toEqual([])
  });

  it('Outputs an empty array if we do not match case', () => {
    const res = runRegex("cat", "the CAT sat on the mat")
    expect(res).toEqual([])
  });
  
  // FUTURE ENHANCEMENT:
  xit('Outputs an array with one matching string literal when encountering an escaped pipe character in the pattern', () => {
    const res = runRegex("cat\|dog", "the cat|dog sat on the dog")
    expect(res).toEqual(["cat|dog"])
  });

})

describe("Alternation matching", () => {
  it('Outputs an array of matches ', () => {
    const res = runRegex("cat|dog", "the cat sat on the dog")
    expect(res).toEqual(["cat", "dog"])
  });

  it('Outputs an array of matches, with one string literal per matched alternate even if there is more than one match', () => {
    const res = runRegex("cat|dog", "the dog sat with a cat and another cat")
    expect(res).toEqual(["cat", "dog"])
  });
  
  it('Outputs an array of matches, with one string literal per matched alternate when the match is a substring of another word', () => {
    const res = runRegex("cat|dog", "the dogcat sat on a mat")
    expect(res).toEqual(["cat", "dog"])
  });

  it('Outputs an empty array if there are no exact matches', () => {
    const res = runRegex("cat|dog", "the c a t sat on the mat with a DOG")
    expect(res).toEqual([]) 
  });

})

describe("Validation errors", () => {
  it("Throws if the pattern is not a string type", () => {
    expect(() => (runRegex(1234, "some string"))).toThrow("Both pattern and input string must be string type.")
  })
  it("Throws if the inputString is not a string type", () => {
    expect(() => (runRegex("some pattern", 1234))).toThrow("Both pattern and input string must be string type.")
  })
})