/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */

const twoSum = (arr: number[],num: number) => {
  const uniqueNumbers = new Set(arr)

  for (let i = 0; i < arr.length; i++) {
    
  }
}

/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */

const reverseSentence = (words: string) => {
  return words.split(' ').reverse().join(' ')
}

/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */

const mostCommonLetter = (word: string) => {
  const freqObj = {}
  let highestCount = 0
  let highestCountLetter = ''

  for (const letter of word) {
    freqObj[letter] = (freqObj[letter] + 1 || 1)
  }

  for (const [letter, count] of Object.entries(freqObj)) {
    if (count > highestCount) {
      highestCount = count
      highestCountLetter = letter
    }
  }
  return highestCountLetter
}

/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */

const duplicates = (string: string) => {
  const freqObj = {}
  const dupeCharacters = []

  for (const char of string) {
    freqObj[char] = (freqObj[char] + 1 || 1)
  }

  for (const [char, count] of Object.entries(freqObj)) {
    if (count > 1) dupeCharacters.push(char)
  }
  return dupeCharacters
}

/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */

const firstUnique = (pattern: string) => {
  const freqCount = {}
  const dupedCharacters = new Set()

  pattern.split('').forEach((char) => {
    if (freqCount[char] >= 1) dupedCharacters.add(char)
    freqCount[char] = (freqCount[char] + 1 || 1)
  })

  for (const elm of pattern) {
    if (!dupedCharacters.has(elm)) return elm
  }
}

/*
 * Problem: Find All Duplicates in an Array
 *
 * Given an array, return all duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */
