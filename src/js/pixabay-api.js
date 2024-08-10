import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function searchingRequest(param) {
  try {
    const response = await fetch(`https://pixabay.com/api/?${param}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Failed to fetch data: ${error.message}`,
    });
    throw error;
  }
}
