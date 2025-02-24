const API_URL = import.meta.env.VITE_API_URL;

export async function submitLead(data) {
  try {
    const response = await fetch(`${API_URL}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error desconocido");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    throw error; // Propaga el error para manejarlo en el formulario
  }
}
