import{j as e}from"./jsx-runtime-BKD_WvF8.js";import{r as c}from"./iframe-B9fdRgoH.js";import{a as k,b as N,c as z,M as _}from"./Popover-BqZdz0vU.js";import{c as b}from"./index-BQe8DgU0.js";import"./types-m-LJ5e63.js";import{u as $}from"./useOnOutsideClick-8UOoY8bO.js";import{B as x}from"./Button-CVg82LGG.js";import{T as f}from"./Text-tjUpgYfB.js";import{r as A}from"./Tooltip-CcZQ6LMu.js";import{a as D}from"./IconArrowDownloadFilled-Bf0Wi4MI.js";import{S as B}from"./index-BVQCZMJQ.js";import{I as R}from"./IconOpen-C2DDi7LA.js";import{S as w}from"./Status-tDPQAITG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-DmlqLLtx.js";import"./helpers-ZzQuR0Yr.js";import"./Link-Cxgj6Aq8.js";import"./index-aqxgRizz.js";import"./NestedMenu-Cn4NOqT3.js";import"./CollapseGroup-PGXwELSq.js";import"./Divider-CE9tsuex.js";import"./AnimatePresenceWrapper-CR7t_rnE.js";import"./IconChevronDown-0kD1ukdE.js";import"./IconChevronUp-Bn83oBov.js";import"./IconChevronRight-Dw_jApkK.js";import"./AvatarGroup-bQuU-jzY.js";import"./DropzoneFileUpload-DWtACJRW.js";import"./Label-Bym6qUPb.js";import"./useFormProps-BEhaMOdD.js";import"./ErrorMessage-DSIcI7Pg.js";import"./IconDynamicComponent-CJIH-vd1.js";import"./Snackbar-BiiL5RSD.js";import"./Alert-FcKQD838.js";import"./IconDismissFilled-7sf8HQTu.js";import"./Progress-OGnmV_MT.js";import"./IconAdd-DV1Ehv3D.js";import"./Checkbox-BAEHQ0fQ.js";import"./IconInfo-CAIs_7lv.js";import"./IconCheckmark-BgYrL-qS.js";import"./Empty-Cgol52fQ.js";import"./Image-B_RNuJ3P.js";import"./Input-EOfoKtMz.js";import"./IconCheckmarkCircleFilled-DHL8Zzp1.js";import"./IconChevronLeft-Ku9lXKcd.js";import"./IconCaretDownFilled-Cr33NLa-.js";import"./extends-CF3RwP-h.js";import"./Tab-mE16CWLh.js";import"./Badge-UmzEezp9.js";import"./IconMore-CYxV4cHA.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return $(v,n,O&&t,c.useId()),N(t),z(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Ee={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const He=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,He as __namedExportsOrder,Ee as default};
