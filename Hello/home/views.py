from django.shortcuts import render,HttpResponse
from datetime import datetime
from home.models import Contact
# Create your views here.
def index(request):
    # context={
    #     'variable':"this is sent"
    # }
    return render(request,'index.html')
    #return HttpResponse("This is homepage")

def about(request):
    #return HttpResponse("This is aboutpage")
    return render(request,'about.html')

def services(request):
    #return HttpResponse("This is servicespage")
    return render(request,'services.html')

def contact(request):
    if request.method == "POST":
        name=request.POST.get('name')
        phone=request.POST.get('phone')
        email=request.POST.get('email')
        desc=request.POST.get('desc')
        contact=Contact(name='name',email='email',phone='phone',desc='desc',date=datetime.today())
        contact.save()
    #return HttpResponse("This is contactpage")

    return render(request,'contact.html')