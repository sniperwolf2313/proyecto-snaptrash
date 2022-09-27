class User():

    def __init__(self, id, name=None, email=None, password=None) -> None:
        self.id = id
        self.name = name
        self.email = email
        self.password = password

    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password
        }
