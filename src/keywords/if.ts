const thenOptions = () => {
  return {
    elseIf(anotherCondition: boolean) {
      return {
        then(callback: CallableFunction) {
          if (anotherCondition) callback();
          return {
            elseIf(anotherCondition: boolean) {
              return {
                then(callback: CallableFunction) {
                  if (anotherCondition) callback();
                }
              }
            }
          }
        }
      }
    },
    else(callback: CallableFunction) {
      callback();
    },
  }
}

export function If(condition: boolean) {
  return {
    then(callback: CallableFunction) {
      if (condition) callback();
      return thenOptions();
    }
  }
}