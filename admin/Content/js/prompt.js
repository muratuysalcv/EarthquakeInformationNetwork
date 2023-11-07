const promptTemplate = document.createElement("template")
        promptTemplate.innerHTML = 
        `
        <style>
        :host{
            position:fixed;
            top:0px;
            left:0px;
            z-index:1500;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,0.2);
            display:flex;
            justify-content:center;
            align-items:flex-start;
        }
        :host > div {
            margin:50px 10px 10px 10px ;
            flex: 1 1 auto;
            max-width:600px;
            width:100%;
            background-color:white;
            border-radius:10px;
            box-shadow:0px 0px 15px -5px rgba(0,0,0,0.1);
            box-sizing:border-box;
            padding:15px;
        }
        :host > div > div:nth-of-type(1){
            text-align:right
        }
        :host > div > div > button {
            border-radius:5px;
            background-color:rgb(255,59,48);
            color:white;
            font-weight:bold;
            border:0px;
            padding:10px;
            outline:none;
            cursor:pointer
        }
        </style>
        <div>
            <div><button>Kapat</button></div>
            <div>
                <slot></slot>
            </div>
        </div>
        `
        class Prompt extends HTMLElement{
            constructor(){
                super()
                this.shadow = this.attachShadow({mode:"closed"})
                this.shadow.appendChild(promptTemplate.content.cloneNode(true))
            }
            get closing(){
                return this.hasAttribute("closing")
            }
            set closing(bool){
                if(bool) this.setAttribute("closing","")
                else this.removeAttribute("closing")
            }
            close = () => {
                this.closing = true
                setTimeout(()=>{this.remove()},310)
            }
            static show (template) {
                let prompt = new Prompt()
                prompt.appendChild(template.content.cloneNode(true))
                document.body.appendChild(prompt)
            }
            connectedCallback(){
                this.shadow.querySelector(":host>div>div>button").addEventListener("click",this.close.bind(this))
            }
        }
        customElements.define("ro-prompt",Prompt)