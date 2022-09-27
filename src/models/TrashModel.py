from database.db import get_connection
from .entities.Trash import Trash


class TrashModel():

    @classmethod
    def get_trashs(self):
        try:
            connection = get_connection()
            trashs = []

            with connection.cursor() as cursor:
                cursor.execute("SELECT id, category, amount, link FROM trash ORDER BY amount ASC")
                resultset = cursor.fetchall()

                for row in resultset:
                    trash = Trash(row[0], row[1], row[2], row[3])
                    trashs.append(trash.to_JSON())

            connection.close()
            return trashs
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def get_trash(self, id):
        try:
            connection = get_connection()

            with connection.cursor() as cursor:
                cursor.execute("SELECT id, category, amount, link FROM trash WHERE id = %s", (id,))
                row = cursor.fetchone()

                trash = None
                if row != None:
                    trash = Trash(row[0], row[1], row[2], row[3])
                    trash = trash.to_JSON()

            connection.close()
            return trash
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def add_trash(self, trash):
        try:
            connection = get_connection()

            with connection.cursor() as cursor:
                cursor.execute("""INSERT INTO trash (id, category, amount, link) 
                                VALUES (%s, %s, %s, %s)""", (trash.id, trash.category, trash.amount, trash.link))
                affected_rows = cursor.rowcount
                connection.commit()

            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def update_trash(self, trash):
        try:
            connection = get_connection()

            with connection.cursor() as cursor:
                cursor.execute("""UPDATE trash SET category = %s, amount = %s, link = %s 
                                WHERE id = %s""", (trash.category, trash.amount, trash.link, trash.id))
                affected_rows = cursor.rowcount
                connection.commit()

            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def delete_trash(self, trash):
        try:
            connection = get_connection()

            with connection.cursor() as cursor:
                cursor.execute("DELETE FROM trash WHERE id = %s", (trash.id,))
                affected_rows = cursor.rowcount
                connection.commit()

            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
