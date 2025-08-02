from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import CustomCreationForm
from django.contrib.auth.forms import AuthenticationForm

def register_view(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('posts:lists')
    else:
        form = UserCreationForm()
    return render(request, "users/register.html",{'form': form})
def login_view(request):
    if request.method == "POST":
        return redirect('posts:lists')
    else:
        form = AuthenticationForm()
    return render(request, 'user/login.html',{'form':form})