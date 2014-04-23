.PHONY: clean watch dev

resources/public: boot
	./boot production

watch: boot
	./boot development

boot: target/boot
	cd target/boot && make boot
	mv target/boot/boot boot

target/boot:
	mkdir -p target
	rm -rf target/boot
	git clone git@github.com:tailrecursion/boot.git target/boot/

clean:
	rm -rf resources/public target boot
