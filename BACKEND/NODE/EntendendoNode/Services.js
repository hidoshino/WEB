
const ServiceCep = async () => {
    const response = await fetch("https://viacep.com.br/ws/59030530/json/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response.json();
}

export const Service = {
   Cep : ServiceCep()
}