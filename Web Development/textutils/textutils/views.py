# I have created this file - Harry
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def analyze(request):
    #Get the text
    djtext = request.POST.get('text', 'default')

    # Check checkbox values
    removepunc = request.POST.get('removepunc', 'off')
    fullcaps = request.POST.get('fullcaps', 'off')
    lowcaps = request.POST.get('lowcaps', 'off')
    newlineremover = request.POST.get('newlineremover', 'off')
    extraspaceremover = request.POST.get('extraspaceremover', 'off')
    charactercounter = request.POST.get('charactercounter', 'off')
    wordcounter = request.POST.get('wordcounter', 'off')
    
    #Check which checkbox is on
    if removepunc == "on":
        punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        analyzed = ""
        for char in djtext:
            if char not in punctuations:
                analyzed = analyzed + char

        params = {'purpose':'Removed Punctuations', 'analyzed_text': analyzed}
        djtext = analyzed

    if(fullcaps=="on"):
        analyzed = djtext.upper();
        params = {'purpose': 'Changed to Uppercase', 'analyzed_text': analyzed}
        djtext = analyzed

    if(extraspaceremover=="on"):
        analyzed = ""
        for index, char in enumerate(djtext):
            if not(djtext[index] == " " and djtext[index+1]==" "):
                analyzed = analyzed + char

        params = {'purpose': 'Removed Extra Spaces', 'analyzed_text': analyzed}
        djtext = analyzed

    if (newlineremover == "on"):
        analyzed = ""
        for char in djtext:
            if char != "\n" and char!="\r":
                analyzed = analyzed + char

        params = {'purpose': 'Removed NewLines', 'analyzed_text': analyzed}

    if(lowcaps == 'on'):
        analyzed = djtext.lower();
        params = {'purpose': 'Changed to lowercase', 'analyzed_text': analyzed }
    
    if charactercounter == 'on':
        count = 0
        for char in djtext:
            if char != ' ':
                count+=1
        params = {'purpose': 'Characters Counter are : ', 'analyzed_text': count }
                
    if wordcounter == 'on':
        analyzed = len(djtext.split())
        params = {'purpose' : 'Total Words are : ', 'analyzed_text': analyzed }
                
        
    if(removepunc != "on" and newlineremover!="on" and extraspaceremover!="on" and fullcaps!="on" and lowcaps != 'on' and charactercounter != 'on' and wordcounter != 'on'):
        return HttpResponse("please select any operation and try again")

    return render(request, 'analyze.html', params)