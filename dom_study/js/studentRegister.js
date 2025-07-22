function studentRegister() {
	return `
        <div>
            ${studentRegisterInput({
				type: "text",
				name: "name",
				onkeyup: "",
			})}
            ${studentRegisterInput({
				type: "text",
				name: "age",
				onkeyup: "",
			})}
            ${studentRegisterInput({
				type: "text",
				name: "address",
				onkeyup: "",
			})}
            <div>
                <button onclick="">등록</button>
            </div>
        </div>
    `;
}
