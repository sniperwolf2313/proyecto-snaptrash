class Trash():

    def __init__(self, id, category=None, amount=None, link=None) -> None:
        self.id = id
        self.category = category
        self.amount = amount
        self.link = link

    def to_JSON(self):
        return {
            'id': self.id,
            'category': self.category,
            'amount': self.amount,
            'link': self.link
        }
