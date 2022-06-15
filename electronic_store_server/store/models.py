from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

class Type(models.Model):
    name = models.CharField(max_length=100)

class Brand(models.Model):
    name = models.CharField(max_length=100)

class Device(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    name = models.CharField(max_length=100)
    brandId = models.ForeignKey(Brand, null=True, blank=True, on_delete=models.CASCADE)
    typeId = models.ForeignKey(Type, null=True, blank=True, on_delete=models.CASCADE)

class Basket(models.Model):
    userId = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)

class BasketItem(models.Model):
    basketId = models.OneToOneField(Basket, null=True, blank=True, on_delete=models.CASCADE)





