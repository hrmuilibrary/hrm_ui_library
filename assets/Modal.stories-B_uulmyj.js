import{j as t}from"./jsx-runtime-DK5slGhw.js";import{r as c}from"./iframe-2UaXNgNk.js";import{a as k,b as N,c as z,M as C}from"./Popover-CbV0BT_c.js";import{c as b}from"./index-C55PVzBv.js";import"./types-vJhoobQp.js";import{u as B}from"./useOnOutsideClick-XWrcSV_h.js";import{B as x}from"./Button-Ddf_HUbH.js";import{T as f}from"./Text-g-UemA-b.js";import{r as $}from"./Tooltip-C_yLzwVI.js";import{a as A}from"./IconArrowDownloadFilled-nWAlFqCu.js";import{S as D}from"./index-aeJ7csdT.js";import{I as R}from"./IconOpen-5qf2mvIj.js";import{S as w}from"./Status-B4z5otxy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-D0L7x1fB.js";import"./helpers-B4heV1fG.js";import"./Link-C2PNwroa.js";import"./index-BhNj0SnX.js";import"./NestedMenu-Bweg7lBa.js";import"./CollapseGroup-0E9pWIU8.js";import"./Divider-BulYIZa5.js";import"./AnimatePresenceWrapper-BVeEEtZm.js";import"./IconChevronDown-CBKoYga3.js";import"./IconChevronUp-BiTX0I33.js";import"./IconChevronRight-BkvhX5N0.js";import"./AvatarGroup-DWKzo63X.js";import"./DropzoneFileUpload-CM0xtFOJ.js";import"./Label-DhA_REqc.js";import"./useFormProps-DwPACFt_.js";import"./ErrorMessage-qAg--REb.js";import"./IconDynamicComponent-DN6dJWK4.js";import"./Snackbar-B92k8iEc.js";import"./Alert-BX587_gb.js";import"./IconDismissFilled-Br_f6YJ6.js";import"./Progress-CE3qHNOh.js";import"./IconAdd-w59Df1rN.js";import"./Checkbox-Bqx3i0nI.js";import"./IconInfo-DPdCec5V.js";import"./IconCheckmark-DzPazXXv.js";import"./Empty-CJgIZGaz.js";import"./Image-CedTPWLP.js";import"./Input-CYRSmzch.js";import"./IconCheckmarkCircleFilled-BsoG1UuT.js";import"./IconChevronLeft-DGXVb6Bv.js";import"./IconCaretDownFilled-BzoPO_9h.js";import"./extends-CF3RwP-h.js";import"./Tab-BeMhXkui.js";import"./Badge-DxV5uRbM.js";import"./IconMore-yLs9BoZ_.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
