export default class ComponentFuctionBinder{

	constructor(table){
		this.table = table;

		this.bindings = {};
	}

	bind(type, funcName, handler){
		if(!this.bindings[type]){
			this.bindings[type] = {};
		}

		if(this.bindings[type][funcName]){
			console.warn("Unable to bind component handler, a matching function name is already bound", type, funcName, hanlder)
		}else{
			this.bindings[type][funcName] = handler;
		}
	}

	handle(type, component, name){
		if(this.bindings[type] && this.bindings[type][name]){
			return this.bindings[type][name].bind(null, component);
		}else{
			if(name !== "then" && typeof name === "string" && !name.startsWith("_")){
					console.error("The " + type + " component does not have a " + name + " function, have you checked that you have the correct Tabulator module installed?")
			}
		}
	}
}