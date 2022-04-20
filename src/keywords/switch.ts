export function Switch<ExpressionType>(expression: ExpressionType) {
  return {
    case(possibleValue: ExpressionType) {
      return {
        then(callback: CallableFunction) {
          if (expression === possibleValue) callback();
          return {
            case(possibleValue: ExpressionType) {
              return {
                then(callback: CallableFunction) {
                  if (expression === possibleValue) callback();
                  return {
                    case(possibleValue: ExpressionType) {
                      return {
                        then(callback: CallableFunction) {
                          if (expression === possibleValue) callback();
                          return {
                            case(possibleValue: ExpressionType) {
                              return {
                                then(callback: CallableFunction) {
                                  if (expression === possibleValue) callback();
                                  return {
                                    case(possibleValue: ExpressionType) {
                                      return {
                                        then(callback: CallableFunction) {
                                          if (expression === possibleValue) callback();
                                          return {
                                            case(possibleValue: ExpressionType) {
                                              return {
                                                then(callback: CallableFunction) {
                                                  if (expression === possibleValue) callback();
                                                  return {
                                                    case(possibleValue: ExpressionType) {
                                                      return {
                                                        then(callback: CallableFunction) {
                                                          if (expression === possibleValue) callback();
                                                          return {
                                                            case(possibleValue: ExpressionType) {
                                                              return {
                                                                then(callback: CallableFunction) {
                                                                  if (expression === possibleValue) callback();

                                                                  return {
                                                                    case(possibleValue: ExpressionType) {
                                                                      return {
                                                                        then(callback: CallableFunction) {
                                                                          if (expression === possibleValue) callback();
        
                                                                          return {
                                                                            case(possibleValue: ExpressionType) {
                                                                              return {
                                                                                then(callback: CallableFunction) {
                                                                                  if (expression === possibleValue) callback();
                
                                                                                  return {
                                                                                    case(possibleValue: ExpressionType) {
                                                                                      return {
                                                                                        then(callback: CallableFunction) {
                                                                                          if (expression === possibleValue) callback();
                        
                                                                                          return {
                                                                                            case(possibleValue: ExpressionType) {
                                                                                              return {
                                                                                                then(callback: CallableFunction) {
                                                                                                  if (expression === possibleValue) callback();
                                
                                                                                                  return {
                                                                                                    case(possibleValue: ExpressionType) {
                                                                                                      return {
                                                                                                        then(callback: CallableFunction) {
                                                                                                          if (expression === possibleValue) callback();
                                        
                                                                                                          return {
                                                                                                            case(possibleValue: ExpressionType) {
                                                                                                              return {
                                                                                                                then(callback: CallableFunction) {
                                                                                                                  if (expression === possibleValue) callback();
                                                                                                                  else throw Error('Reached max usage of case()');
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}