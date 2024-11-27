// Helper function to format responses
export const formatResponse = (message: string, data: any = null, error: any = null) => {
    if (error) {
      return { message, error };
    }
    return { message, data };
  };