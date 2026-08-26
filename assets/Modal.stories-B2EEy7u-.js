import{j as t}from"./jsx-runtime-eZA7XPs2.js";import{r as c}from"./iframe-Bu6IG7x0.js";import{a as k,b as N,c as z,M as C}from"./Popover-BRffxo4f.js";import{c as b}from"./index-DyZCXPR1.js";import"./types-DkRXjhPg.js";import{u as B}from"./useOnOutsideClick-Brbv3MrL.js";import{B as x}from"./Button-0fHBq_V-.js";import{T as f}from"./Text-BEaaacjR.js";import{r as $}from"./Tooltip-BcuKIR9W.js";import{a as A}from"./IconArrowDownloadFilled-DPJ6bu2k.js";import{S as D}from"./index-D6-MyTwz.js";import{I as R}from"./IconOpen-BU6EiOHi.js";import{S as w}from"./Status-CAwOFuSU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BJxm4N4p.js";import"./helpers-B70rEIFi.js";import"./Link-CHUmyIqN.js";import"./index-CRfeIcbX.js";import"./NestedMenu-CmGMOTWF.js";import"./CollapseGroup-CG9CdmLJ.js";import"./Divider-UN4ppvAa.js";import"./AnimatePresenceWrapper-D9lCI3Ho.js";import"./IconChevronDown-O65Ap1xa.js";import"./IconChevronUp-DNglmkGd.js";import"./IconChevronRight-yjYr_w3O.js";import"./AvatarGroup-DDEf4Hms.js";import"./DropzoneFileUpload-CrUcN01y.js";import"./Label-Tbk4f5TT.js";import"./useFormProps-D8N7lh7u.js";import"./ErrorMessage-Dr5Ip2Xf.js";import"./IconDynamicComponent-D25EWgep.js";import"./Snackbar-KfjVEEv3.js";import"./Alert-CnUTckAi.js";import"./IconDismissFilled-C3EQ65dE.js";import"./Progress-Bxr0d0gF.js";import"./IconAdd-BNCq2j9G.js";import"./Checkbox-DNjOMwZv.js";import"./IconInfo-mOmcxJkQ.js";import"./IconCheckmark-4NLZyMI_.js";import"./Empty-An7AWS6Z.js";import"./Image-CS0mevCr.js";import"./Input-B3gaEhlb.js";import"./IconCheckmarkCircleFilled-F7rA0MYH.js";import"./IconChevronLeft-BBWTc0-8.js";import"./IconCaretDownFilled-w8cKUJd3.js";import"./extends-CF3RwP-h.js";import"./Tab-B-5EZWOZ.js";import"./Badge-CUHJfNrA.js";import"./IconMore-1gbw3TC7.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} additionalButton={{
      buttonText: 'danger',
      type: 'danger'
    }} headerIcon={<IconOpen />} headerStatus={<Status type="danger" text="Rejected" size="small" withBackground />} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(M=(g=i.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var S,T,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Ht=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ht as __namedExportsOrder,Et as default};
