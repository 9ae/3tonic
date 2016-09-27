class Note {

	constructor(key, duration, strength){
		this.key = key;
		this.duration = duration;
		this.strength = strength;
	}

	half() {
		this.duration = this.duration * 2;
	}

	double() {
		if(this.duration > 1){
			this.duration = this.duration / 2;
		}
	}

	higher() {
		if (this.key < 127){
			this.key += 1;
		}
	}

	lower() {
		if(this.key > 0){
			this.key -= 1;
		}
	}

	octaveUp() {
		let new_key = this.key + 12;
		if(new_key <= 127){
			this.key = new_key;
		}
	}

	octaveDown() {
		let new_key = this.key - 12;
		if(new_key >= 0){
			this.key = new_key;
		}
	}
	/*
	get key(){
		return this.key;
	}

	set key

	get duration() {
		return this.duration;
	}

	get strength() {
		return this.strength;
	}
	*/
}

class Bity {
	
	constructor(syl, note){
		this.syllable = syl;
		this.note = note;
	}

}