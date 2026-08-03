import{j as t}from"./jsx-runtime-rmvHLVgd.js";import{r as c}from"./iframe-Dy6q0Da_.js";import{a as k,b as N,c as z,M as C}from"./Popover-H6cUZQor.js";import{c as b}from"./index-CvFVU3_3.js";import"./types-CivKHnvw.js";import{u as B}from"./useOnOutsideClick-D_ZIWdvO.js";import{B as x}from"./Button-DdyCxxwE.js";import{T as f}from"./Text-DcVt_zKC.js";import{r as $}from"./Tooltip-DrDbSXzu.js";import{a as A}from"./IconArrowDownloadFilled-BM__4t5h.js";import{S as D}from"./index-BwhoPPJK.js";import{I as R}from"./IconOpen-SxyaEZN3.js";import{S as w}from"./Status-DRfMMLG1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-DAJvoV8j.js";import"./helpers-D7YbQzvp.js";import"./Link-Cg9gy77M.js";import"./index-Do8fCJd2.js";import"./NestedMenu-DuW85-35.js";import"./CollapseGroup-COK1-1i_.js";import"./Divider-DjPAtpQ1.js";import"./AnimatePresenceWrapper-Ddf5IpIQ.js";import"./IconChevronDown-Dm5aRz2b.js";import"./IconChevronUp-_e9WMsUR.js";import"./IconChevronRight-Deb82rRy.js";import"./AvatarGroup-BrvzE8HR.js";import"./DropzoneFileUpload-Cit3cVOZ.js";import"./Label-STgLI3mY.js";import"./useFormProps-C00I6UeB.js";import"./ErrorMessage-YqRcf1Al.js";import"./IconDynamicComponent-0_YIpUIW.js";import"./Snackbar-QeuzeW58.js";import"./Alert-BI4KMmH9.js";import"./IconDismissFilled-B1fMJDXY.js";import"./Progress-7U8OcU4x.js";import"./IconAdd-Cjs314yj.js";import"./Checkbox-BsplFLP7.js";import"./IconInfo-ZZbIsE8D.js";import"./IconCheckmark-DJCaLvF3.js";import"./Empty-PZi6P8RQ.js";import"./Image-B6lY9Jt0.js";import"./Input-D-uq2ja7.js";import"./IconCheckmarkCircleFilled-BxtScsXQ.js";import"./IconChevronLeft-BxOWjinn.js";import"./IconCaretDownFilled-ClcLh0Y9.js";import"./extends-CF3RwP-h.js";import"./Tab-DtnMeffT.js";import"./Badge-DWDvg3VW.js";import"./IconMore-y1jR2gKW.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
