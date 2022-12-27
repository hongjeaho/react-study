
    function useLocalStorage(keyName) {
      const [state, setState ]= React.useState(
        () => localStorage.getItem(keyName) || '')
  
      React.useEffect(()=> {
        localStorage.setItem(keyName, state)
      }, [state])
      
      return [state, setState]
    }
