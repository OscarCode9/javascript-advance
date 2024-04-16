def outer():
  age = 10
  def inner():
    print(age) # Imprime 20
  age = 20
  inner()

outer()

