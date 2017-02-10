describe("Fizzbuzz Testing", ()=>{

	it("fizzbuzz must be defined", ()=>{
		expect(fizzbuzz()).toBeDefined();
	});

	it("should be a string 1 for passing 1.", ()=>{
		expect(fizzbuzz(1)).toBe(1);
	});

	it("should be a string 2 for passing 2.", ()=>{
		expect(fizzbuzz(2)).toBe(2); 
	});

	it("Should be a string 3 for passing 3.", ()=>{
		expect(fizzbuzz(3)).toBe("fizz"); 
	});

	it("Should be a string 4 for passing 4.", ()=>{
		expect(fizzbuzz(4)).toBe(4); 
	});

	it("Should be a string buzz for passing 5.", ()=>{
		expect(fizzbuzz(5)).toBe('buzz'); 
	});

	it("Should be a string buzz for passing 10.", ()=>{
		expect(fizzbuzz(10)).toBe('buzz'); 
	});

	it("Should be a string fizzbuzz for passing 15.", ()=>{
		expect(fizzbuzz(15)).toBe("fizzbuzz"); 
	});

	var random = Math.floor(Math.random() * 10) * 15; 
	it("should be string fizzbuzz for passing " + random, ()=>{
		expect(fizzbuzz(random)).toEqual("fizzbuzz");
	});
});