import{j as e}from"./jsx-runtime-Cj1-3MCq.js";import{r as c}from"./iframe-CfhHRHWj.js";import{a as k,b as N,c as z,d as $,M as _}from"./Popover-DINXwQ3e.js";import{c as b}from"./index-LyawtWbk.js";import"./types-CMdgBmJk.js";import{B as x}from"./Button-DlZuiUDW.js";import{T as f}from"./Text-CilXBu1n.js";import{r as A}from"./Tooltip-DxJrfLLG.js";import{a as D}from"./IconArrowDownloadFilled-DgUwZOpJ.js";import{S as B}from"./index-Yy7R2xSq.js";import{I as R}from"./IconOpen-CHhkBE6N.js";import{S as w}from"./Status-C-U2yjMo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-B5KQeYAX.js";import"./helpers-DYJyNS-c.js";import"./Link-D4OU_jH7.js";import"./index-Df_KU_ce.js";import"./NestedMenu-DGF944vo.js";import"./CollapseGroup-D2whG1jP.js";import"./Divider-wSj8Mlyb.js";import"./AnimatePresenceWrapper-B_j4hTgQ.js";import"./IconChevronDown-CaISB0QO.js";import"./IconChevronUp-Cqg0Rsct.js";import"./IconChevronRight-BVZMRuNB.js";import"./AvatarGroup-HYhwbzAt.js";import"./DropzoneFileUpload-f7eWYNAS.js";import"./Label-CrOL0JDW.js";import"./useFormProps-DNLm0Fq6.js";import"./ErrorMessage-B0Tr5Nrg.js";import"./IconDynamicComponent-Drxx-5YP.js";import"./Snackbar-BGYP43ky.js";import"./Alert-BLhXEpTY.js";import"./IconDismissFilled-BuzRGGAr.js";import"./Progress-B28AuZ3o.js";import"./IconAdd-C_abmG3q.js";import"./Checkbox-Ds5KlpkY.js";import"./IconInfo-Nj-FqoF-.js";import"./IconCheckmark-ClVlIHDz.js";import"./Empty-c7DClYC4.js";import"./Image-ClSrtWrd.js";import"./Input-D2847dbl.js";import"./IconCheckmarkCircleFilled-C6PseGkx.js";import"./IconChevronLeft-DK76rkZq.js";import"./IconCaretDownFilled-Bi_SUW0k.js";import"./extends-CF3RwP-h.js";import"./Tab-DhtuwnK-.js";import"./Badge-DMO-Bb5e.js";import"./IconMore-Dj8V5MCP.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
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
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var g,j,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const Ee=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ee as __namedExportsOrder,we as default};
