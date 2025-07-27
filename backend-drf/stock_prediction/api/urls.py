from django .urls import path
from account import views as UserViews

urlpatterns = [

    path('register/', UserViews.RegistraterView.as_view())

]
