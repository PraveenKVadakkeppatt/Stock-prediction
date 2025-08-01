from django .urls import path
from account import views as UserViews
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [

    path('register/', UserViews.RegistraterView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    
]
