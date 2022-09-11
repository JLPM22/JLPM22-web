FILE=Gemfile.lock
if [ -f "$FILE" ]; then
    rm $FILE
fi
winpty docker run --rm -v "C:\Users\JLPM\Desktop\Trabajo\JLPMWeb\JLPM22.github.io:/srv/jekyll/" -p "8080:8080" \
                    -it amirpourmand/al-folio bundler  \
                    exec jekyll serve --watch --port=8080 --host=0.0.0.0 
