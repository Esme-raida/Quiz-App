export const allQuestions = {
  JAVASCRIPT: {
    easy: [
      {
        id: "js-easy-1",
        question: "What will this code output?\n\nlet x = 5;\nlet y = x;\ny = 10;\nconsole.log(x);",
        options: ["a) 5", "b) 10", "c) undefined", "d) Error"],
        answer: "a) 5"
      },
      {
        id: "js-easy-2", 
        question: "Which method adds an element to the end of an array?",
        options: ["a) pop()", "b) push()", "c) shift()", "d) unshift()"],
        answer: "b) push()"
      },
      {
        id: "js-easy-3",
        question: "What is the correct way to write a JavaScript comment?",
        options: ["a) <!-- This is a comment -->", "b) # This is a comment", "c) // This is a comment", "d) * This is a comment *"],
        answer: "c) // This is a comment"
      },
      {
        id: "js-easy-4",
        question: "What will this code return?\n\nfunction greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('World'));",
        options: ["a) Hello", "b) World", "c) Hello World", "d) Error"],
        answer: "c) Hello World"
      },
      {
        id: "js-easy-5",
        question: "Which of these is NOT a JavaScript data type?",
        options: ["a) string", "b) number", "c) boolean", "d) float"],
        answer: "d) float"
      },
      {
        id: "js-easy-6",
        question: "What does '===' check in JavaScript?",
        options: ["a) Only value", "b) Only type", "c) Both value and type", "d) Neither value nor type"],
        answer: "c) Both value and type"
      },
      {
        id: "js-easy-7",
        question: "How do you create a variable in JavaScript?",
        options: ["a) var myVar;", "b) variable myVar;", "c) v myVar;", "d) declare myVar;"],
        answer: "a) var myVar;"
      },
      {
        id: "js-easy-8",
        question: "What will this code output?\n\nlet fruits = ['apple', 'banana'];\nconsole.log(fruits.length);",
        options: ["a) 1", "b) 2", "c) 3", "d) undefined"],
        answer: "b) 2"
      },
      {
        id: "js-easy-9",
        question: "Which method converts a string to lowercase?",
        options: ["a) toLower()", "b) lowercase()", "c) toLowerCase()", "d) lower()"],
        answer: "c) toLowerCase()"
      },
      {
        id: "js-easy-10",
        question: "What is the correct way to write an if statement in JavaScript?",
        options: ["a) if i = 5 then", "b) if (i == 5)", "c) if i == 5", "d) if i = 5"],
        answer: "b) if (i == 5)"
      }
    ],
    medium: [
      {
        id: "js-medium-1",
        question: "What will this code output?\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
        options: ["a) 0 1 2", "b) 3 3 3", "c) 1 2 3", "d) 0 0 0"],
        answer: "a) 0 1 2"
      },
      {
        id: "js-medium-2",
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          "a) It refers to the current function",
          "b) It refers to the object that called the function",
          "c) It refers to the global window object",
          "d) It creates a new variable"
        ],
        answer: "b) It refers to the object that called the function"
      },
      {
        id: "js-medium-3",
        question: "What will this code return?\n\nconst arr = [1, 2, 3];\nconst doubled = arr.map(x => x * 2);\nconsole.log(doubled);",
        options: ["a) [1, 2, 3]", "b) [2, 4, 6]", "c) [1, 4, 9]", "d) Error"],
        answer: "b) [2, 4, 6]"
      },
      {
        id: "js-medium-4",
        question: "What is a closure in JavaScript?",
        options: [
          "a) A way to close a program",
          "b) A function that has access to variables from its outer scope",
          "c) A method to end a loop",
          "d) A type of error handling"
        ],
        answer: "b) A function that has access to variables from its outer scope"
      },
      {
        id: "js-medium-5",
        question: "What will this code output?\n\nconsole.log(typeof null);",
        options: ["a) 'null'", "b) 'undefined'", "c) 'object'", "d) 'boolean'"],
        answer: "c) 'object'"
      },
      {
        id: "js-medium-6",
        question: "What does the 'async' keyword do in JavaScript?",
        options: [
          "a) Makes a function run faster",
          "b) Makes a function return a Promise",
          "c) Makes a function synchronous",
          "d) Creates an error"
        ],
        answer: "b) Makes a function return a Promise"
      },
      {
        id: "js-medium-7",
        question: "What will this destructuring assignment create?\n\nconst person = {name: 'John', age: 30};\nconst {name, age} = person;",
        options: [
          "a) Two new variables: name and age",
          "b) One variable called person",
          "c) An error",
          "d) Nothing"
        ],
        answer: "a) Two new variables: name and age"
      },
      {
        id: "js-medium-8",
        question: "What is the spread operator (...) used for?",
        options: [
          "a) To create comments",
          "b) To expand arrays or objects",
          "c) To create loops",
          "d) To handle errors"
        ],
        answer: "b) To expand arrays or objects"
      },
      {
        id: "js-medium-9",
        question: "What will this code output?\n\nconst obj = {a: 1};\nconst newObj = {...obj, b: 2};\nconsole.log(newObj);",
        options: ["a) {a: 1}", "b) {b: 2}", "c) {a: 1, b: 2}", "d) Error"],
        answer: "c) {a: 1, b: 2}"
      },
      {
        id: "js-medium-10",
        question: "What is the difference between 'let' and 'var'?",
        options: [
          "a) No difference",
          "b) 'let' has block scope, 'var' has function scope",
          "c) 'var' is newer than 'let'",
          "d) 'let' is faster than 'var'"
        ],
        answer: "b) 'let' has block scope, 'var' has function scope"
      }
    ],
    hard: [
      {
        id: "js-hard-1",
        question: "What design pattern does this code demonstrate?\n\nconst Singleton = (function() {\n  let instance;\n  return {\n    getInstance: function() {\n      if (!instance) {\n        instance = new Object();\n      }\n      return instance;\n    }\n  };\n})();",
        options: ["a) Factory Pattern", "b) Observer Pattern", "c) Singleton Pattern", "d) Module Pattern"],
        answer: "c) Singleton Pattern"
      },
      {
        id: "js-hard-2",
        question: "What will happen when this code runs?\n\nconst promise1 = Promise.resolve('Success');\nconst promise2 = Promise.reject('Error');\nPromise.all([promise1, promise2])\n  .then(console.log)\n  .catch(console.log);",
        options: ["a) Logs 'Success'", "b) Logs 'Error'", "c) Logs both", "d) Logs nothing"],
        answer: "b) Logs 'Error'"
      },
      {
        id: "js-hard-3",
        question: "What is the purpose of the Proxy object in JavaScript?",
        options: [
          "a) To create copies of objects",
          "b) To intercept and customize operations on objects",
          "c) To connect to external APIs",
          "d) To handle network requests"
        ],
        answer: "b) To intercept and customize operations on objects"
      },
      {
        id: "js-hard-4",
        question: "What will this generator function produce?\n\nfunction* counter() {\n  let i = 0;\n  while (true) {\n    yield i++;\n  }\n}\nconst gen = counter();\nconsole.log(gen.next().value);",
        options: ["a) 0", "b) 1", "c) undefined", "d) Infinite loop"],
        answer: "a) 0"
      },
      {
        id: "js-hard-5",
        question: "What is a WeakMap used for in JavaScript?",
        options: [
          "a) Storing key-value pairs with weak references to keys",
          "b) Creating maps with better performance",
          "c) Storing arrays efficiently",
          "d) Handling network connections"
        ],
        answer: "a) Storing key-value pairs with weak references to keys"
      },
      {
        id: "js-hard-6",
        question: "What does this code demonstrate?\n\nclass Animal {\n  speak() {\n    console.log('Animal speaks');\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    super.speak();\n    console.log('Dog barks');\n  }\n}",
        options: ["a) Inheritance", "b) Polymorphism", "c) Method overriding", "d) All of the above"],
        answer: "d) All of the above"
      },
      {
        id: "js-hard-7",
        question: "What is the event loop responsible for in JavaScript?",
        options: [
          "a) Handling user input events",
          "b) Managing asynchronous operations and callbacks",
          "c) Creating loops in code",
          "d) Debugging applications"
        ],
        answer: "b) Managing asynchronous operations and callbacks"
      },
      {
        id: "js-hard-8",
        question: "What will this code output?\n\nconst obj = {\n  name: 'John',\n  getName: function() { return this.name; },\n  getNameArrow: () => this.name\n};\nconsole.log(obj.getName(), obj.getNameArrow());",
        options: ["a) 'John' 'John'", "b) 'John' undefined", "c) undefined undefined", "d) Error"],
        answer: "b) 'John' undefined"
      },
      {
        id: "js-hard-9",
        question: "What is the purpose of the Symbol data type?",
        options: [
          "a) To create mathematical symbols",
          "b) To create unique identifiers for object properties",
          "c) To handle string operations",
          "d) To create visual symbols"
        ],
        answer: "b) To create unique identifiers for object properties"
      },
      {
        id: "js-hard-10",
        question: "What optimization technique does this code use?\n\nconst memoize = (fn) => {\n  const cache = {};\n  return (...args) => {\n    const key = JSON.stringify(args);\n    return cache[key] || (cache[key] = fn(...args));\n  };\n};",
        options: ["a) Lazy loading", "b) Memoization", "c) Debouncing", "d) Throttling"],
        answer: "b) Memoization"
      }
    ]
  },
  PYTHON: {
    easy: [
      {
        id: "py-easy-1",
        question: "What will this code output?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
        options: ["a) [1, 2, 3]", "b) [1, 2, 3, 4]", "c) [4]", "d) Error"],
        answer: "b) [1, 2, 3, 4]"
      },
      {
        id: "py-easy-2",
        question: "Which method is used to add an element to a list in Python?",
        options: ["a) add()", "b) append()", "c) insert()", "d) push()"],
        answer: "b) append()"
      },
      {
        id: "py-easy-3",
        question: "What is the correct way to create a comment in Python?",
        options: ["a) // This is a comment", "b) /* This is a comment */", "c) # This is a comment", "d) -- This is a comment"],
        answer: "c) # This is a comment"
      },
      {
        id: "py-easy-4",
        question: "What will this code output?\n\nname = 'Alice'\nage = 25\nprint(f'Hello {name}, you are {age} years old')",
        options: [
          "a) Hello Alice, you are 25 years old",
          "b) Hello {name}, you are {age} years old",
          "c) Error",
          "d) Hello Alice"
        ],
        answer: "a) Hello Alice, you are 25 years old"
      },
      {
        id: "py-easy-5",
        question: "Which of these is NOT a valid Python data type?",
        options: ["a) int", "b) float", "c) string", "d) char"],
        answer: "d) char"
      },
      {
        id: "py-easy-6",
        question: "What does the len() function do?",
        options: [
          "a) Converts to lowercase",
          "b) Returns the length of an object",
          "c) Creates a new list",
          "d) Sorts a list"
        ],
        answer: "b) Returns the length of an object"
      },
      {
        id: "py-easy-7",
        question: "How do you create a dictionary in Python?",
        options: [
          "a) dict = [key: value]",
          "b) dict = {key: value}",
          "c) dict = (key: value)",
          "d) dict = <key: value>"
        ],
        answer: "b) dict = {key: value}"
      },
      {
        id: "py-easy-8",
        question: "What will this code output?\n\nfor i in range(3):\n    print(i)",
        options: ["a) 1 2 3", "b) 0 1 2", "c) 0 1 2 3", "d) 1 2"],
        answer: "b) 0 1 2"
      },
      {
        id: "py-easy-9",
        question: "Which operator is used for exponentiation in Python?",
        options: ["a) ^", "b) **", "c) exp", "d) pow"],
        answer: "b) **"
      },
      {
        id: "py-easy-10",
        question: "What is the correct way to check if a key exists in a dictionary?",
        options: [
          "a) key in dict",
          "b) dict.has_key(key)",
          "c) dict.contains(key)",
          "d) key.in(dict)"
        ],
        answer: "a) key in dict"
      }
    ],
    medium: [
      {
        id: "py-medium-1",
        question: "What will this list comprehension create?\n\nsquares = [x**2 for x in range(5) if x % 2 == 0]\nprint(squares)",
        options: ["a) [0, 1, 4, 9, 16]", "b) [0, 4, 16]", "c) [1, 9]", "d) [0, 2, 4]"],
        answer: "b) [0, 4, 16]"
      },
      {
        id: "py-medium-2",
        question: "What is the difference between a list and a tuple in Python?",
        options: [
          "a) Lists are mutable, tuples are immutable",
          "b) Tuples are mutable, lists are immutable",
          "c) No difference",
          "d) Lists are faster than tuples"
        ],
        answer: "a) Lists are mutable, tuples are immutable"
      },
      {
        id: "py-medium-3",
        question: "What will this code output?\n\ndef greet(name='World'):\n    return f'Hello {name}'\n\nprint(greet())\nprint(greet('Python'))",
        options: [
          "a) Hello\\nHello Python",
          "b) Hello World\\nHello Python",
          "c) Error",
          "d) Hello World\\nHello World"
        ],
        answer: "b) Hello World\\nHello Python"
      },
      {
        id: "py-medium-4",
        question: "What is a lambda function in Python?",
        options: [
          "a) A function that handles errors",
          "b) A small anonymous function",
          "c) A function that imports modules",
          "d) A function that creates classes"
        ],
        answer: "b) A small anonymous function"
      },
      {
        id: "py-medium-5",
        question: "What will this code output?\n\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    result = 'Cannot divide by zero'\nprint(result)",
        options: ["a) Error", "b) 10", "c) 0", "d) Cannot divide by zero"],
        answer: "d) Cannot divide by zero"
      },
      {
        id: "py-medium-6",
        question: "What does the *args parameter allow in a Python function?",
        options: [
          "a) To pass keyword arguments",
          "b) To pass a variable number of arguments",
          "c) To pass default arguments",
          "d) To pass arguments by reference"
        ],
        answer: "b) To pass a variable number of arguments"
      },
      {
        id: "py-medium-7",
        question: "What is the result of this set operation?\n\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\nresult = set1 & set2\nprint(result)",
        options: ["a) {1, 2, 3, 4, 5}", "b) {3}", "c) {1, 2, 4, 5}", "d) set()"],
        answer: "b) {3}"
      },
      {
        id: "py-medium-8",
        question: "What is the purpose of the __init__ method in Python classes?",
        options: [
          "a) To delete an object",
          "b) To initialize object attributes",
          "c) To print object information",
          "d) To copy an object"
        ],
        answer: "b) To initialize object attributes"
      },
      {
        id: "py-medium-9",
        question: "What will this code create?\n\ndata = {'a': 1, 'b': 2, 'c': 3}\nkeys = list(data.keys())\nprint(keys)",
        options: ["a) [1, 2, 3]", "b) ['a', 'b', 'c']", "c) [('a', 1), ('b', 2), ('c', 3)]", "d) {'a', 'b', 'c'}"],
        answer: "b) ['a', 'b', 'c']"
      },
      {
        id: "py-medium-10",
        question: "What is the purpose of the 'with' statement in Python?",
        options: [
          "a) To create loops",
          "b) To handle file operations safely",
          "c) To define functions",
          "d) To import modules"
        ],
        answer: "b) To handle file operations safely"
      }
    ],
    hard: [
      {
        id: "py-hard-1",
        question: "What is a decorator in Python used for?",
        options: [
          "a) To modify or extend the behavior of functions or classes",
          "b) To create visual decorations",
          "c) To handle database connections",
          "d) To manage memory allocation"
        ],
        answer: "a) To modify or extend the behavior of functions or classes"
      },
      {
        id: "py-hard-2",
        question: "What will this generator function produce?\n\ndef fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nprint([next(fib) for _ in range(5)])",
        options: ["a) [0, 1, 1, 2, 3]", "b) [1, 1, 2, 3, 5]", "c) [0, 1, 2, 3, 4]", "d) Error"],
        answer: "a) [0, 1, 1, 2, 3]"
      },
      {
        id: "py-hard-3",
        question: "What is the difference between __str__ and __repr__ methods?",
        options: [
          "a) No difference",
          "b) __str__ is for end users, __repr__ is for developers",
          "c) __repr__ is for end users, __str__ is for developers",
          "d) Both are the same as print()"
        ],
        answer: "b) __str__ is for end users, __repr__ is for developers"
      },
      {
        id: "py-hard-4",
        question: "What does this code demonstrate?\n\nclass Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof!'\n\nclass Cat(Animal):\n    def speak(self):\n        return 'Meow!'",
        options: ["a) Inheritance", "b) Polymorphism", "c) Encapsulation", "d) Both a and b"],
        answer: "d) Both a and b"
      },
      {
        id: "py-hard-5",
        question: "What is the Global Interpreter Lock (GIL) in Python?",
        options: [
          "a) A security feature",
          "b) A mechanism that prevents multiple threads from executing Python code simultaneously",
          "c) A memory management tool",
          "d) A debugging feature"
        ],
        answer: "b) A mechanism that prevents multiple threads from executing Python code simultaneously"
      },
      {
        id: "py-hard-6",
        question: "What will this metaclass do?\n\nclass SingletonMeta(type):\n    _instances = {}\n    def __call__(cls, *args, **kwargs):\n        if cls not in cls._instances:\n            cls._instances[cls] = super().__call__(*args, **kwargs)\n        return cls._instances[cls]",
        options: [
          "a) Create multiple instances",
          "b) Ensure only one instance of a class exists",
          "c) Delete class instances",
          "d) Copy class instances"
        ],
        answer: "b) Ensure only one instance of a class exists"
      },
      {
        id: "py-hard-7",
        question: "What is the purpose of the asyncio library in Python?",
        options: [
          "a) To handle file I/O operations",
          "b) To write asynchronous and concurrent code",
          "c) To create graphical interfaces",
          "d) To manage databases"
        ],
        answer: "b) To write asynchronous and concurrent code"
      },
      {
        id: "py-hard-8",
        question: "What does this context manager do?\n\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    def __exit__(self, *args):\n        print(f'Elapsed: {time.time() - self.start:.2f}s')",
        options: [
          "a) Creates a timer object",
          "b) Measures execution time of code block",
          "c) Handles timer errors",
          "d) Schedules tasks"
        ],
        answer: "b) Measures execution time of code block"
      },
      {
        id: "py-hard-9",
        question: "What is the difference between deepcopy and shallow copy?",
        options: [
          "a) No difference",
          "b) Deepcopy copies nested objects, shallow copy doesn't",
          "c) Shallow copy is faster than deepcopy",
          "d) Deepcopy uses more memory"
        ],
        answer: "b) Deepcopy copies nested objects, shallow copy doesn't"
      },
      {
        id: "py-hard-10",
        question: "What optimization technique does this code use?\n\nfrom functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef expensive_function(n):\n    # Some expensive computation\n    return result",
        options: ["a) Lazy evaluation", "b) Memoization", "c) Code optimization", "d) Memory pooling"],
        answer: "b) Memoization"
      }
    ]
  },
MECHATRONICS :{
  easy: [
    {
      id: "mech-easy-1",
      question: "What is mechatronics?",
      options: [
        "a) Study of mechanics only",
        "b) Study of electronics only", 
        "c) Integration of mechanical, electrical, and computer engineering",
        "d) Study of robots only"
      ],
      answer: "c) Integration of mechanical, electrical, and computer engineering"
    },
    {
      id: "mech-easy-2",
      question: "What does a sensor do in a mechatronic system?",
      options: [
        "a) Provides power to the system",
        "b) Converts physical quantities into electrical signals",
        "c) Controls the system output",
        "d) Stores data"
      ],
      answer: "b) Converts physical quantities into electrical signals"
    },
    {
      id: "mech-easy-3",
      question: "What is an actuator?",
      options: [
        "a) A device that measures temperature",
        "b) A device that converts electrical signals into physical motion",
        "c) A device that stores energy",
        "d) A device that amplifies signals"
      ],
      answer: "b) A device that converts electrical signals into physical motion"
    },
    {
      id: "mech-easy-4",
      question: "What is the basic principle of a DC motor?",
      options: [
        "a) Electromagnetic induction",
        "b) Thermal expansion",
        "c) Interaction between magnetic field and current-carrying conductor",
        "d) Piezoelectric effect"
      ],
      answer: "c) Interaction between magnetic field and current-carrying conductor"
    },
    {
      id: "mech-easy-5",
      question: "What does PWM stand for?",
      options: [
        "a) Power Width Modulation",
        "b) Pulse Width Modulation", 
        "c) Pulse Wave Multiplication",
        "d) Power Wave Modulation"
      ],
      answer: "b) Pulse Width Modulation"
    },
    {
      id: "mech-easy-6",
      question: "What is feedback in a control system?",
      options: [
        "a) Input signal to the system",
        "b) Output signal from the system",
        "c) Information about system output sent back to compare with desired input",
        "d) Power supply to the system"
      ],
      answer: "c) Information about system output sent back to compare with desired input"
    },
    {
      id: "mech-easy-7",
      question: "What is the main advantage of a stepper motor?",
      options: [
        "a) High speed operation",
        "b) Low cost",
        "c) Precise positioning without feedback",
        "d) High power output"
      ],
      answer: "c) Precise positioning without feedback"
    },
    {
      id: "mech-easy-8",
      question: "What does a microcontroller do in a mechatronic system?",
      options: [
        "a) Provides mechanical structure",
        "b) Processes information and controls system behavior",
        "c) Generates electrical power",
        "d) Measures physical quantities"
      ],
      answer: "b) Processes information and controls system behavior"
    },
    {
      id: "mech-easy-9",
      question: "What is an encoder used for?",
      options: [
        "a) Measuring temperature",
        "b) Measuring position or speed",
        "c) Controlling voltage",
        "d) Amplifying signals"
      ],
      answer: "b) Measuring position or speed"
    },
    {
      id: "mech-easy-10",
      question: "What is the difference between open-loop and closed-loop control?",
      options: [
        "a) Open-loop uses feedback, closed-loop doesn't",
        "b) Closed-loop uses feedback, open-loop doesn't",
        "c) No difference",
        "d) Open-loop is more accurate"
      ],
      answer: "b) Closed-loop uses feedback, open-loop doesn't"
    }
  ],
  medium: [
    {
      id: "mech-medium-1",
      question: "In a PID controller, what does each term do?\nP (Proportional), I (Integral), D (Derivative)",
      options: [
        "a) P: current error, I: past errors, D: future errors",
        "b) P: speed control, I: position control, D: acceleration control",
        "c) P: voltage control, I: current control, D: power control",
        "d) All terms do the same thing"
      ],
      answer: "a) P: current error, I: past errors, D: future errors"
    },
    {
      id: "mech-medium-2",
      question: "Which of the following is not a type of actuator?",
      options: [
        "a) Stepper motor",
        "b) Solenoid",
        "c) Servo motor",
        "d) Thermistor"
      ],
      answer: "d) Thermistor"
    },
    {
      id: "mech-medium-3",
      question: "Which sensor is commonly used to measure temperature in mechatronic systems?",
      options: [
        "a) Gyroscope",
        "b) Thermocouple",
        "c) Encoder",
        "d) Accelerometer"
      ],
      answer: "b) Thermocouple"
    },
    {
      id: "mech-medium-4",
      question: "Which microcontroller family is most commonly used in Arduino boards?",
      options: [
        "a) PIC",
        "b) ARM Cortex-M",
        "c) AVR",
        "d) 8051"
      ],
      answer: "c) AVR"
    },
    {
      id: "mech-medium-5",
      question: "What does the derivative term in a PID controller do?",
      options: [
        "a) Reacts to the present error",
        "b) Reacts to the accumulated past error",
        "c) Predicts future error based on the rate of change",
        "d) Adds noise to the signal"
      ],
      answer: "c) Predicts future error based on the rate of change"
    },
    {
      id: "mech-medium-6",
      question: "Which of these is a common communication protocol in mechatronics?",
      options: [
        "a) HTTP",
        "b) I2C",
        "c) SQL",
        "d) HDMI"
      ],
      answer: "b) I2C"
    },
    {
      id: "mech-medium-7",
      question: "Which component stores electrical energy in an electric circuit?",
      options: [
        "a) Resistor",
        "b) Transistor",
        "c) Capacitor",
        "d) Inductor"
      ],
      answer: "c) Capacitor"
    },
    {
      id: "mech-medium-8",
      question: "Which of the following is a non-contact position sensor?",
      options: [
        "a) Potentiometer",
        "b) LVDT",
        "c) Proximity sensor",
        "d) Thermistor"
      ],
      answer: "c) Proximity sensor"
    },
    {
      id: "mech-medium-9",
      question: "Which material is commonly used for rapid prototyping in mechatronics?",
      options: [
        "a) Aluminum",
        "b) ABS Plastic",
        "c) Copper",
        "d) Iron"
      ],
      answer: "b) ABS Plastic"
    },
    {
      id: "mech-medium-10",
      question: "Which one is a digital sensor?",
      options: [
        "a) Thermocouple",
        "b) LDR",
        "c) Ultrasonic sensor",
        "d) RTD"
      ],
      answer: "c) Ultrasonic sensor"
    }
  ],
  hard: [
    {
      id: "mech-hard-1",
      question: "What is the function of a Kalman filter in mechatronic systems?",
      options: [
        "a) To increase signal strength",
        "b) To estimate system states from noisy measurements",
        "c) To control voltage fluctuations",
        "d) To modulate PWM signals"
      ],
      answer: "b) To estimate system states from noisy measurements"
    },
    {
      id: "mech-hard-2",
      question: "Which equation describes the motion of a second-order system?",
      options: [
        "a) F = ma",
        "b) y'' + 2ζω_ny' + ω_n²y = Kx",
        "c) V = IR",
        "d) P = VI"
      ],
      answer: "b) y'' + 2ζω_ny' + ω_n²y = Kx"
    },
    {
      id: "mech-hard-3",
      question: "Which of these is a typical challenge in integrating mechanical and electrical components?",
      options: [
        "a) File format compatibility",
        "b) Synchronizing mechanical delays with electronic signal timing",
        "c) Color coding wires",
        "d) Material corrosion"
      ],
      answer: "b) Synchronizing mechanical delays with electronic signal timing"
    },
    {
      id: "mech-hard-4",
      question: "What is hysteresis in sensor behavior?",
      options: [
        "a) Sensor response to light intensity",
        "b) Difference in output when input increases vs. decreases",
        "c) Maximum output value of a sensor",
        "d) Minimum detectable signal"
      ],
      answer: "b) Difference in output when input increases vs. decreases"
    },
    {
      id: "mech-hard-5",
      question: "In mechatronics, the Nyquist criterion is used to:",
      options: [
        "a) Check signal voltage",
        "b) Determine circuit resistance",
        "c) Assess system stability in frequency domain",
        "d) Control motor torque"
      ],
      answer: "c) Assess system stability in frequency domain"
    },
    {
      id: "mech-hard-6",
      question: "What does the Z-transform do in discrete-time control systems?",
      options: [
        "a) Converts analog signals to digital",
        "b) Transforms time-domain signals into frequency domain",
        "c) Transforms discrete signals into complex frequency domain",
        "d) Filters noise"
      ],
      answer: "c) Transforms discrete signals into complex frequency domain"
    },
    {
      id: "mech-hard-7",
      question: "Which type of controller adapts its parameters in real-time?",
      options: [
        "a) Fuzzy controller",
        "b) Adaptive controller",
        "c) PID controller",
        "d) On-off controller"
      ],
      answer: "b) Adaptive controller"
    },
    {
      id: "mech-hard-8",
      question: "Which actuator is best for precise linear motion in heavy-load mechatronics applications?",
      options: [
        "a) Servo motor",
        "b) Hydraulic cylinder",
        "c) Solenoid",
        "d) Stepper motor"
      ],
      answer: "b) Hydraulic cylinder"
    },
    {
      id: "mech-hard-9",
      question: "Which method is used to model non-linear mechatronic systems?",
      options: [
        "a) Laplace Transform",
        "b) Fourier Series",
        "c) State-Space Representation",
        "d) Ohm's Law"
      ],
      answer: "c) State-Space Representation"
    },
    {
      id: "mech-hard-10",
      question: "Which of these represents a challenge in wireless mechatronic system communication?",
      options: [
        "a) Voltage drop",
        "b) Signal latency and interference",
        "c) Motor friction",
        "d) Heat dissipation"
      ],
      answer: "b) Signal latency and interference"
    }
  ]
 }
};
